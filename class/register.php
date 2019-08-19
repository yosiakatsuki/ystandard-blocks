<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

/**
 * Class Ystandard_Blocks_Register
 */
class Ystandard_Blocks_Register {

	/**
	 * Ystandard_Blocks_Register constructor.
	 */
	function __construct() {
		add_action( 'init', [ $this, 'register_script' ] );
		add_action( 'init', [ $this, 'register_block_type' ] );
		add_action( 'init', [ $this, 'register_dynamic_block_type' ] );
	}

	/**
	 * register_script
	 */
	public function register_script() {
		wp_register_script(
			'ystandard-blocks',
			YSTDB_URL . 'js/ystandard-blocks.js',
			[
				'wp-blocks',
				'wp-element',
				'wp-editor',
				'wp-i18n',
			],
			filemtime( YSTDB_PATH . '/js/ystandard-blocks.js' )
		);
	}

	/**
	 * register_block_type
	 */
	public function register_block_type() {

	}

	/**
	 * register_block_type
	 */
	public function register_dynamic_block_type() {
		$files = [
			YSTDB_PATH . '/block/afi-button/block.php',
		];
		foreach ( $files as $file ) {
			require_once( $file );
		}
	}
}