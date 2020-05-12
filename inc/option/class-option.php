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
	 * @param string $name 設定名.
	 *
	 * @return string
	 */
	public static function get_option_name( $name ) {
		return Config::OPTION_NAME . "[${name}]";
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
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_option( $name, $default ) {
		global $ystd_options;
		if ( ! is_array( $ystd_options ) ) {
			// グローバルに作成していなければ設定取得.
			$ystd_options = self::get_option_all( null );
			// 設定がなければ旧オプションから作成.
			if ( is_null( $ystd_options ) ) {
				$ystd_options = Migration::convert_new_options();
			}
		}

		if ( isset( $ystd_options[ $name ] ) ) {
			return $ystd_options[ $name ];
		}

		return self::get_default_option( $name, $default );
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
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_default_option( $name, $default ) {

		return apply_filters( "ystdb_get_default_${name}", $default, $name );
	}

	/**
	 * 設定取得(Bool)
	 *
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return bool
	 */
	public static function get_option_by_bool( $name, $default ) {
		$option = self::get_option( $name, $default );

		return Utility::to_bool( $option );
	}

	/**
	 * 設定を数値として取得
	 *
	 * @param string $name    設定名.
	 * @param int    $default デフォルト.
	 *
	 * @return int
	 */
	public static function get_option_by_number( $name, $default = 0 ) {
		$option = self::get_option( $name, $default );
		if ( is_numeric( $option ) ) {
			return $option;
		}

		return $default;
	}
}
