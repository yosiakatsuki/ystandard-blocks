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
	 * @param mixed $value var.
	 *
	 * @return bool
	 */
	public static function to_bool( $value ) {
		if ( true === $value || 'true' === $value || 1 === $value || '1' === $value ) {
			return true;
		}

		return false;
	}
}
