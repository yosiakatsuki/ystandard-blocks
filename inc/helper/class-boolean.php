<?php
/**
 * Helper Boolean.
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks\helper;

defined( 'ABSPATH' ) || die();

/**
 * Class Boolean
 */
class Boolean {

	/**
	 * Bool型に変換.
	 *
	 * @param mixed $value 値.
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
