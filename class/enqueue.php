<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

/**
 * Class Ystandard_Blocks_Enqueue
 */
class Ystandard_Blocks_Enqueue {
	/**
	 * Ystandard_Blocks_Enqueue constructor.
	 */
	function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ] );
	}

	/**
	 * Enqueue Scripts
	 */
	public function enqueue_scripts() {

	}

	/**
	 * Enqueue Styles
	 */
	public function enqueue_styles() {
		wp_enqueue_style(
			'ystandard-blocks',
			YSTDB_URL . 'css/ystandard-blocks.css',
			[],
			YSTDB_VERSION
		);
	}

}

new Ystandard_Blocks_Enqueue();