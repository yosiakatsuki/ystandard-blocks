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
		if ( Ystandard_Blocks::is_ystandard() ) {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ] );
		} else {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles_no_ystandard' ] );
		}
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
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
		if ( function_exists( 'ys_enqueue_css' ) ) {
			ys_enqueue_css(
				'ystandard-blocks',
				YSTDB_URL . 'css/ystandard-blocks.css',
				true,
				[],
				YSTDB_VERSION
			);
			ys_enqueue_inline_css(
				Ystandard_Blocks_Customizer::get_inline_style_css()
			);
		} else {
			wp_enqueue_style(
				'ystandard-blocks',
				YSTDB_URL . 'css/ystandard-blocks.css',
				[],
				YSTDB_VERSION
			);
		}

	}

	/**
	 * Enqueue Styles(非yStandard)
	 */
	public function enqueue_styles_no_ystandard() {
		wp_enqueue_style(
			'ystandard-blocks-no-ystandard',
			YSTDB_URL . 'css/ystandard-blocks-no-ystandard.css',
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
		/**
		 * エディタ用CSS
		 */
		$customizer = new Ystandard_Blocks_Customizer();
		$css_file   = 'css/ystandard-blocks-edit-no-ystandard.css';
		$inline_css = $customizer->get_inline_style_css(
			'.editor-styles-wrapper'
		);
		if ( Ystandard_Blocks::is_ystandard() ) {
			$css_file   = 'css/ystandard-blocks-edit.css';
			$inline_css .= $customizer->get_editor_button_css();
		}
		wp_enqueue_style(
			'ystandard-blocks-edit',
			YSTDB_URL . $css_file,
			[],
			filemtime( YSTDB_PATH . '/' . $css_file )
		);
		wp_add_inline_style(
			'ystandard-blocks-edit',
			$inline_css
		);

	}

}

new Ystandard_Blocks_Enqueue();