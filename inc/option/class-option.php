<?php
/**
 * Option
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Option
 *
 * @package ystandard_blocks
 */
class Option {

	/**
	 * 設定名を作成
	 *
	 * @param string $section セクション.
	 * @param string $name    設定名.
	 *
	 * @return string
	 */
	public static function get_option_name( $section, $name ) {
		return Config::OPTION_NAME . "[${section}][${name}]";
	}

	/**
	 * 設定名を作成
	 *
	 * @param string $name 設定名.
	 *
	 * @return string
	 */
	public static function get_old_option_name( $name ) {
		return Config::OPTION_PREFIX . $name;
	}

	/**
	 * 設定取得
	 *
	 * @param string $section セクション.
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_option( $section, $name, $default ) {
		global $ystd_options;
		if ( ! is_array( $ystd_options ) ) {
			// グローバルに作成していなければ設定取得.
			$ystd_options = self::get_option_all( null );
		}

		if ( ! isset( $ystd_options[ $section ] ) ) {
			return self::get_default_option( '', $name, $default );
		}

		if ( empty( $name ) ) {
			return $ystd_options[ $section ];
		}

		if ( ! isset( $ystd_options[ $section ][ $name ] ) ) {
			return self::get_default_option( $section, $name, $default );
		}

		return $ystd_options[ $section ][ $name ];
	}

	/**
	 * 全ての設定取得.
	 *
	 * @param mixed $default Default.
	 *
	 * @return mixed
	 */
	public static function get_option_all( $default = [] ) {

		return get_option( Config::OPTION_NAME, $default );
	}

	/**
	 * デフォルト値取得
	 *
	 * @param string $section セクション.
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_default_option( $section, $name, $default ) {

		$section = empty( $section ) ? '' : $section . '_';

		return apply_filters( "ystdb_get_default_${section}${name}", $default, $name, $section );
	}

	/**
	 * 設定取得(Bool)
	 *
	 * @param string $section セクション.
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return bool
	 */
	public static function get_option_by_bool( $section, $name, $default ) {
		$option = self::get_option( $section, $name, $default );

		return Utility::to_bool( $option );
	}

	/**
	 * 設定を数値として取得
	 *
	 * @param string $section セクション.
	 * @param string $name    設定名.
	 * @param int    $default デフォルト.
	 *
	 * @return int
	 */
	public static function get_option_by_number( $section, $name, $default = 0 ) {
		$option = self::get_option( $section, $name, $default );
		if ( is_numeric( $option ) ) {
			return $option;
		}

		return $default;
	}

	/**
	 * 設定更新.
	 *
	 * @param string $section セクション名.
	 * @param array  $data    設定値.
	 *
	 * @return bool
	 */
	public static function update_section( $section, $data ) {
		$option = self::get_option_all( [] );
		if ( ! is_array( $option ) ) {
			$option = [];
		}
		$old = isset( $option[ $section ] ) ? $option[ $section ] : [];
		if ( $old === $data ) {
			return true;
		}
		$option[ $section ] = $data;

		return update_option( Config::OPTION_NAME, $option );
	}

	/**
	 * セクション削除
	 *
	 * @param string $section セクション名.
	 *
	 * @return bool
	 */
	public static function delete_section( $section ) {
		$option = self::get_option_all( [] );
		if ( ! isset( $option[ $section ] ) ) {
			return true;
		}
		unset( $option[ $section ] );

		return update_option( Config::OPTION_NAME, $option );
	}
}
