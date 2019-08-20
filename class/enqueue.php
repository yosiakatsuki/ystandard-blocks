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
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_styles' ] );
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

	/**
	 * Enqueue Styles
	 */
	public function enqueue_editor_styles() {
		$fa_ver = 'v5.10.1';
		wp_enqueue_style(
			'font-awesome',
			'https://use.fontawesome.com/releases/' . $fa_ver . '/css/all.css',
			[],
			$fa_ver
		);
	}

}

new Ystandard_Blocks_Enqueue();