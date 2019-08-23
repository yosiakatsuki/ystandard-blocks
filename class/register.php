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
			add_action( 'init', [ $this, 'register_script' ] );
			add_action( 'init', [ $this, 'register_block_type' ] );
			add_action( 'init', [ $this, 'register_dynamic_block' ] );
		} else {
			add_action( 'init', [ $this, 'register_script_no_ystandard' ] );
			add_action( 'init', [ $this, 'register_block_type_no_ystandard' ] );
		}

	}

	/**
	 * ブロック用JS register
	 */
	public function register_script() {
		wp_register_script(
			'ystandard-blocks',
			YSTDB_URL . 'js/ystandard-blocks.js',
			[
				'wp-blocks',
				'wp-element',
				'wp-editor',
				'wp-rich-text',
				'wp-i18n',
			],
			filemtime( YSTDB_PATH . '/js/ystandard-blocks.js' )
		);
	}
	/**
	 * ブロック用JS register(非yStnadard環境)
	 */
	public function register_script_no_ystandard() {
		wp_register_script(
			'ystandard-blocks-no-ystandard',
			YSTDB_URL . 'js/ystandard-blocks-no-ystandard.js',
			[
				'wp-blocks',
				'wp-element',
				'wp-editor',
				'wp-rich-text',
				'wp-i18n',
			],
			filemtime( YSTDB_PATH . '/js/ystandard-blocks-no-ystandard.js' )
		);
	}

	/**
	 * ブロック登録
	 */
	public function register_block_type() {

	}
	/**
	 * ブロック登録(非yStnadard環境)
	 */
	public function register_block_type_no_ystandard() {

	}

	/**
	 * ダイナミックブロック登録
	 */
	public function register_dynamic_block() {
		$files = [
			YSTDB_PATH . '/block/btn-link/block.php',
		];
		foreach ( $files as $file ) {
			require_once( $file );
		}
	}
}

new Ystandard_Blocks_Register();