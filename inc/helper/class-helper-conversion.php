<?php
/**
 * Helper : Type Conversion
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\helper;

defined( 'ABSPATH' ) || die();

/**
 * Class Conversion
 *
 * @package ystandard_blocks\helper
 */
class Helper_Conversion {
	/**
	 * Boolに変換
	 *
	 * @param mixed $var var.
	 *
	 * @return bool
	 */
	public static function to_bool( $var ) {
		if ( true === $var || 'true' === $var || 1 === $var || '1' === $var ) {
			return true;
		}

		return false;
	}
}
