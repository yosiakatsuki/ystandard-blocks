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
		/**
		 * ブロックの登録・有効化
		 */
		if ( Ystandard_Blocks::is_ystandard() ) {
			add_action(
				'enqueue_block_editor_assets',
				[ $this, 'register_script' ]
			);
			add_action(
				'init',
				[ $this, 'register_dynamic_block' ]
			);
		} else {
			add_action(
				'enqueue_block_editor_assets',
				[ $this, 'register_script_no_ystandard' ]
			);
		}

	}

	/**
	 * ブロック用JS register
	 */
	public function register_script() {
		$asset_file = include( YSTDB_PATH . 'js/ystandard-blocks.asset.php' );

		wp_enqueue_script(
			'ystandard-blocks',
			YSTDB_URL . 'js/ystandard-blocks.js',
			$asset_file['dependencies'],
			$asset_file['version']
		);
	}

	/**
	 * ブロック用JS register(非yStnadard環境)
	 */
	public function register_script_no_ystandard() {
		$asset_file = include( YSTDB_PATH . 'js/ystandard-blocks-no-ystandard.asset.php' );

		wp_enqueue_script(
			'ystandard-blocks-no-ystandard',
			YSTDB_URL . 'js/ystandard-blocks-no-ystandard.js',
			$asset_file['dependencies'],
			$asset_file['version']
		);
	}

	/**
	 * ダイナミックブロック登録
	 */
	public function register_dynamic_block() {
		$files = [
			YSTDB_PATH . 'block/button-link/block.php',
		];
		foreach ( $files as $file ) {
			require_once( $file );
		}
	}
}

new Ystandard_Blocks_Register();
