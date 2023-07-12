<?php
/**
 * Color Pallet
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Styles;

defined( 'ABSPATH' ) || die();

/**
 * Class Font_Size
 *
 * @package ystandard_blocks
 */
class Font_Size {

	/**
	 * Font_Size constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_font_size_css' ], 12 );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_font_size_css' ], 12 );
	}


	/**
	 * フロント用フォントサイズCSS
	 */
	public function enqueue_font_size_css() {
		if ( apply_filters( 'ys_is_enqueue_font_size', false ) ) {
			return;
		}
		wp_add_inline_style(
			Config::CSS_HANDLE,
			self::get_font_size_css( '.' . Config::BODY_CLASS )
		);
		add_filter( 'ys_is_enqueue_font_size', '__return_true' );
	}

	/**
	 * 編集画面用フォントサイズCSS
	 */
	public function enqueue_block_editor_font_size_css() {
		if ( apply_filters( 'ys_is_enqueue_block_editor_font_size', false ) ) {
			return;
		}
		wp_add_inline_style(
			Config::BLOCK_EDITOR_CSS_HANDLE,
			self::get_font_size_css( '.editor-styles-wrapper' )
		);
		add_filter( 'ys_is_enqueue_block_editor_font_size', '__return_true' );
	}

	/**
	 * フォントサイズ用のCSS作成
	 *
	 * @param string $prefix Prefix.
	 *
	 * @return string
	 */
	public static function get_font_size_css( $prefix = '' ) {
		$font_size = get_theme_support( 'editor-font-sizes' );
		if ( empty( $font_size ) || ! is_array( $font_size ) ) {
			return '';
		}
		$prefix = empty( $prefix ) ? '' : $prefix . ' ';
		$result = '';
		foreach ( $font_size[0] as $value ) {
			$unit = isset( $value['unit'] ) ? $value['unit'] : 'px';
			$size = is_numeric( $value['size'] ) ? "{$value['size']}${unit}" : $value['size'];
			// CSS.
			$result .= "${prefix}.has-{$value['slug']}-font-size{font-size:${size};}";
		}

		return Styles::minify( $result );
	}
}

new Font_Size();
