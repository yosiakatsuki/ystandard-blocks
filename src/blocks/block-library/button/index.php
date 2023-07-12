<?php
/**
 * Custom Button Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Styles;

defined( 'ABSPATH' ) || die();

/**
 * Class Button Block.
 */
class Button_Block {

	const BLOCK_NAME = 'ystdb/custom-button';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_block' ], 100 );
		add_filter( 'render_block', [ $this, 'block_style' ], 10, 2 );
	}

	/**
	 * ブロックスタイル追加.
	 *
	 * @param string $block_content Rendered block content.
	 * @param array  $block         Block object.
	 *
	 * @return string
	 */
	public function block_style( $block_content, $block ) {

		if ( self::BLOCK_NAME !== $block['blockName'] ) {
			return $block_content;
		}
		$attributes = Block_Utility::get_block_style( $block );
		if ( empty( $attributes ) ) {
			return $block_content;
		}

		// クラスの作成.
		$container_class = Block_Utility::get_unique_class( self::BLOCK_NAME );
		$css_class       = Block_Utility::get_css_container_class( $container_class );
		// CSS作成.
		$css = '';
		// Width.
		$css .= $this->get_width_css(
			$attributes,
			"{$css_class} .ystdb-custom-button__link"
		);

		if ( $css ) {
			$block_content = Block_Utility::add_wrapper_class( $container_class, $block_content );
			Block_Utility::enqueue_block_inline_css( $css );
		}

		return $block_content;
	}

	/**
	 * Width.
	 *
	 * @param array  $attributes Attributes.
	 * @param string $selector   Selector.
	 *
	 * @return string
	 */
	public function get_width_css( $attributes, $selector ) {

		if ( ! isset( $attributes['width'] ) ) {
			return '';
		}

		return Block_Utility::compile_block_inline_css(
			$selector,
			Styles::parse_responsive_values( 'width', $attributes['width'] )
		);
	}

	/**
	 * ブロック登録
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type( __DIR__ );
	}
}

new Button_Block();
