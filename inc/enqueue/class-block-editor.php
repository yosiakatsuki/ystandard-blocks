<?php
/**
 * Block Editor
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Block_Editor
 *
 * @package ystandard_blocks
 */
class Block_Editor {

	/**
	 * Block_Editor constructor.
	 */
	public function __construct() {
		/**
		 * ブロックエディター用
		 */
		add_action( 'enqueue_block_editor_assets', [ $this, 'block_editor_assets' ] );
	}

	/**
	 * Enqueue Block Editor Assets.
	 */
	public function block_editor_assets() {
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
		$inline_css = '';
		$css_file   = '/ystandard-blocks-edit.css';
		// インラインCSS.
		$inline_css .= Format::get_format_styles( '.editor-styles-wrapper' );
		$inline_css .= Format::get_format_button_css();
		// [yStandard]以外.
		if ( ! Utility::is_ystandard() ) {
			$css_file = '/ystandard-blocks-edit-no-ystandard.css';
			// インライン.
			$inline_css .= Enqueue::get_color_css( '.editor-styles-wrapper ' );
			$inline_css .= Enqueue::get_font_size_css( '.editor-styles-wrapper ' );
		}
		wp_enqueue_style(
			'ystandard-blocks-edit',
			YSTDB_URL . '/css' . $css_file,
			[],
			filemtime( YSTDB_PATH . '/css' . $css_file )
		);

		wp_add_inline_style(
			'ystandard-blocks-edit',
			$inline_css
		);
	}

}

new Block_Editor();
