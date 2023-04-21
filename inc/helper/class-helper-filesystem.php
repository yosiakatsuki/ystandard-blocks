<?php
/**
 * File System
 *
 * @package ystandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\helper;

defined( 'ABSPATH' ) || die();

/**
 * Class Filesystem
 *
 * @package ystandard_blocks
 */
class Helper_Filesystem {

	/**
	 * 変数 wp_filesystem の退避用
	 *
	 * @var \WP_Filesystem_Base
	 */
	private static $filesystem;

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
	 * @return false|string
	 */
	private static function get_contents( $path ) {
		if ( ! file_exists( $path ) ) {
			return '';
		}

		return file_get_contents( $path );
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

	/**
	 * WP_Filesystem_Directを使用
	 *
	 * @return string
	 */
	public static function filesystem_direct() {
		return 'direct';
	}

	/**
	 * ファイルシステムの初期化
	 *
	 * @return \WP_Filesystem_Direct
	 */
	public static function init_filesystem() {
		global $wp_filesystem;
		self::$filesystem = $wp_filesystem;

		if ( empty( $wp_filesystem ) ) {
			require_once ABSPATH . '/wp-admin/includes/file.php';
		}

		add_filter( 'filesystem_method', [ '\ystandard_toolbox\Filesystem', 'filesystem_direct' ] );

		WP_Filesystem();

		remove_filter( 'filesystem_method', [ '\ystandard_toolbox\Filesystem', 'filesystem_direct' ] );

		return $wp_filesystem;
	}

}
