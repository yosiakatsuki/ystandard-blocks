<?php
/**
 * Utility
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

/**
 * Class Utility
 *
 * @package ystandard_blocks
 */
class Utility {
	/**
	 * テーマバージョン取得
	 *
	 * @param boolean $parent 親テーマ情報かどうか.
	 *
	 * @return string
	 */
	public static function get_theme_version( $parent = false ) {
		/**
		 * 子テーマ情報
		 */
		$theme = wp_get_theme();
		if ( $parent && get_template() !== get_stylesheet() ) {
			/**
			 * 親テーマ情報
			 */
			$theme = wp_get_theme( get_template() );
		}

		return $theme->get( 'Version' );
	}
}
