<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

/**
 * Class Ystandard_Dynamic_block
 */
class Ystandard_Dynamic_block {
	/**
	 * Render
	 *
	 * @param $slug
	 * @param $attributes
	 *
	 * @return false|string
	 */
	public function render( $slug, $attributes ) {
		ob_start();
		include( YSTDB_PATH . 'block/' . $slug . '/view.php' );
		return ob_get_clean();
	}
}