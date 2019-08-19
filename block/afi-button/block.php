<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

/**
 * Class Ystandard_Blocks_Afi_button
 */
class Ystandard_Blocks_Afi_button extends Ystandard_Dynamic_block {
	function __construct() {
		register_block_type(
			'ystdb/afi-button',
			[
				'editor_script'   => 'ystandard-blocks',
				'render_callback' => function ( $attributes ) {
					return $this->render( 'afi-button', $attributes );
				},
			]
		);
	}
}

new Ystandard_Blocks_Afi_button();