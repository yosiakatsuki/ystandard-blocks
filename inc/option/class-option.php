<?php
/**
 * Option
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Types;

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
		return Config::OPTION_NAME . "[{$section}][{$name}]";
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
	 * @param string $section       セクション.
	 * @param string $name          設定名.
	 * @param mixed  $default_value デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_option( $section, $name, $default_value ) {
		global $ystd_options;
		if ( ! is_array( $ystd_options ) ) {
			// グローバルに作成していなければ設定取得.
			$ystd_options = self::get_option_all( null );
		}

		if ( ! isset( $ystd_options[ $section ] ) ) {
			return self::get_default_option( '', $name, $default_value );
		}

		if ( empty( $name ) ) {
			return $ystd_options[ $section ];
		}

		if ( ! isset( $ystd_options[ $section ][ $name ] ) ) {
			return self::get_default_option( $section, $name, $default_value );
		}

		return $ystd_options[ $section ][ $name ];
	}

	/**
	 * 全ての設定取得.
	 *
	 * @param mixed $default_value Default.
	 *
	 * @return mixed
	 */
	public static function get_option_all( $default_value = [] ) {

		return get_option( Config::OPTION_NAME, $default_value );
	}

	/**
	 * デフォルト値取得
	 *
	 * @param string $section       セクション.
	 * @param string $name          設定名.
	 * @param mixed  $default_value デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_default_option( $section, $name, $default_value ) {

		$section = empty( $section ) ? '' : $section . '_';

		return apply_filters( "ystdb_get_default_{$section}{$name}", $default_value, $name, $section );
	}

	/**
	 * 設定取得(Bool)
	 *
	 * @param string $section       セクション.
	 * @param string $name          設定名.
	 * @param mixed  $default_value デフォルト.
	 *
	 * @return bool
	 */
	public static function get_option_by_bool( $section, $name, $default_value ) {
		$option = self::get_option( $section, $name, $default_value );

		return Types::to_bool( $option );
	}

	/**
	 * 設定を数値として取得
	 *
	 * @param string $section       セクション.
	 * @param string $name          設定名.
	 * @param int    $default_value デフォルト.
	 *
	 * @return int
	 */
	public static function get_option_by_number( $section, $name, $default_value = 0 ) {
		$option = self::get_option( $section, $name, $default_value );
		if ( is_numeric( $option ) ) {
			return $option;
		}

		return $default_value;
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
		if ( ! is_array( $option ) ) {
			$option = [];
		}
		if ( ! isset( $option[ $section ] ) ) {
			return true;
		}
		unset( $option[ $section ] );

		return update_option( Config::OPTION_NAME, $option );
	}
}
