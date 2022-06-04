<?php
/**
 * Helper : AMP
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\helper;

defined( 'ABSPATH' ) || die();

/**
 * Class Amp
 *
 * @package ystandard_blocks\helper
 */
class Helper_Amp {
	/**
	 * AMP判定
	 *
	 * @return bool
	 */
	public static function is_amp() {
		if ( function_exists( 'ys_is_amp' ) ) {
			return ys_is_amp();
		}

		return function_exists( 'is_amp_endpoint' ) && is_amp_endpoint();
	}

	/**
	 * AMPプラグインを使っているか判定
	 *
	 * @return bool
	 */
	public static function use_amp_plugin() {
		return function_exists( 'is_amp_endpoint' );
	}
}
