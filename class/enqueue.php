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
			add_action(
				'wp_enqueue_scripts',
				[ $this, 'enqueue_scripts' ],
				11
			);
		} else {
			add_action(
				'wp_enqueue_scripts',
				[ $this, 'enqueue_scripts_no_ystandard' ],
				11
			);
		}
		add_action(
			'enqueue_block_editor_assets',
			[ $this, 'enqueue_editor_styles' ]
		);
	}

	/**
	 * Enqueue scripts
	 */
	public function enqueue_scripts() {
		wp_enqueue_style(
			'ystandard-blocks',
			YSTDB_URL . 'css/ystandard-blocks.css',
			[],
			YSTDB_VERSION
		);
		if ( Ystandard_Blocks::is_ystandard() ) {
			wp_add_inline_style(
				'ystandard-blocks',
				Ystandard_Blocks_Customizer::get_inline_style_css()
			);
		}
	}

	/**
	 * Enqueue scripts(非yStandard)
	 */
	public function enqueue_scripts_no_ystandard() {
		wp_enqueue_style(
			'ystandard-blocks-no-ystandard',
			YSTDB_URL . 'css/ystandard-blocks-no-ystandard.css',
			[],
			YSTDB_VERSION
		);
		wp_enqueue_script(
			'font-awesome',
			YSTDB_URL . 'library/fontawesome/js/all.js',
			[],
			YSTDB_VERSION,
			true
		);
		wp_add_inline_script(
			'font-awesome',
			'FontAwesomeConfig = { searchPseudoElements: true };',
			'before'
		);
		wp_script_add_data( 'font-awesome', 'defer', true );
	}

	/**
	 * Enqueue Styles
	 */
	public function enqueue_editor_styles() {
		wp_enqueue_style(
			'font-awesome',
			YSTDB_URL . 'library/fontawesome/css/all.css',
			[],
			YSTDB_VERSION
		);
		wp_enqueue_style(
			'fonticonpicker-base-theme',
			'https://unpkg.com/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css',
			[],
			YSTDB_VERSION
		);
		wp_enqueue_style(
			'fonticonpicker-material-theme',
			'https://unpkg.com/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css',
			[],
			YSTDB_VERSION
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
