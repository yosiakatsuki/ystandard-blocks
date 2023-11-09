<?php
/**
 * 型 関連
 *
 * @package ystandard-toolbox
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\utils;

defined( 'ABSPATH' ) || die();

/**
 * Class Types.
 */
class Types {

	/**
	 * Trueかどうか
	 *
	 * @param mixed $value チェックする値.
	 *
	 * @return bool
	 */
	public static function is_true( $value ) {
		return true === $value || 'true' === $value || 1 === $value || '1' === $value;
	}

	/**
	 * Boolに変換
	 *
	 * @param mixed $value 変換する値.
	 *
	 * @return bool
	 */
	public static function to_bool( $value ) {
		if ( self::is_true( $value ) ) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 配列の値を取得.
	 *
	 * @param array  $args          Array.
	 * @param string $key           Key.
	 * @param mixed  $default_value Default Value.
	 *
	 * @return array|mixed
	 */
	public static function get_array_value( $args, $key, $default_value = false ) {
		if ( ! is_array( $args ) || empty( $args ) ) {
			return $default_value;
		}
		if ( array_key_exists( $key, $args ) ) {
			return $args[ $key ];
		}

		return $default_value;
	}
}
