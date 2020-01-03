<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

/**
 * Class Dynamic_block
 */
class Dynamic_Block {
	/**
	 * Render
	 *
	 * @param string $slug       Slug.
	 * @param array  $attributes attr.
	 *
	 * @return false|string
	 */
	public function render( $slug, $attributes ) {
		ob_start();
		include( YSTDB_PATH . 'blocks/' . $slug . '/view.php' );

		return ob_get_clean();
	}
}
