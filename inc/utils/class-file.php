<?php
/**
 * ファイル入出力.
 *
 * @package ystandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\utils;

defined( 'ABSPATH' ) || die();

/**
 * Class File.
 */
class File {
	/**
	 * ファイル内容の取得
	 *
	 * @param string $file ファイルパス.
	 *
	 * @return string
	 */
	public static function file_get_contents( $file ) {

		return self::get_contents( $file );
	}

	/**
	 * ファイル取得.
	 *
	 * @param string $path file path.
	 *
	 * @return false|string|\WP_Error
	 */
	private static function get_contents( $path ) {
		if ( ! file_exists( $path ) ) {
			return '';
		}

		$file_contents = '';

		try {
			$file_contents = file_get_contents( $path );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'file_get_contents', $e->getMessage() );
		}

		return $file_contents;
	}

	/**
	 * Jsonファイルの中身を取得
	 *
	 * @param string $path json file path.
	 *
	 * @return array|mixed
	 */
	public static function get_json_file_contents( $path ) {
		$contents = self::file_get_contents( $path );
		if ( ! $contents ) {
			return [];
		}
		$json = json_decode( $contents, true );
		if ( JSON_ERROR_NONE !== json_last_error() ) {
			return [];
		}
		if ( is_null( $json ) ) {
			return [];
		}

		return $json;
	}
}
