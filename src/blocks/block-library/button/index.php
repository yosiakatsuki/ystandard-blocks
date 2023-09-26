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
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_responsive_style' ] );
	}

	/**
	 * レスポンシブ用CSS出力.
	 *
	 * @return void
	 */
	public function enqueue_responsive_style() {
		$types      = [ 'desktop', 'tablet', 'mobile' ];
		$responsive = [
			'desktop' => '',
			'tablet'  => '',
			'mobile'  => '',
		];
		$selector   = '.ystdb-custom-button__link';
		$css        = '';
		// 初期化.
		foreach ( $types as $type ) {
			// フォントサイズ.
			$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
				[
					'selector'  => $selector,
					'prop_name' => 'button--font-size',
					'property'  => 'font-size',
					'type'      => $type,
				]
			);
			// 幅.
			$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
				[
					'selector'  => $selector,
					'prop_name' => 'button--width',
					'property'  => 'width',
					'type'      => $type,
				]
			);
			// 余白.
			foreach ( [ 'top', 'right', 'bottom', 'left' ] as $pos ) {
				$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
					[
						'selector'  => $selector,
						'prop_name' => "button--padding-{$pos}",
						'property'  => "padding-{$pos}",
						'type'      => $type,
					]
				);
			}
		}

		// 結合.
		$css .= Styles::add_media_query_desktop( $responsive['desktop'] );
		$css .= Styles::add_media_query_tablet( $responsive['tablet'] );
		$css .= Styles::add_media_query_mobile( $responsive['mobile'] );

		$handle = 'ystdb-custom-button-block-responsive';
		wp_register_style( $handle, false );
		wp_add_inline_style( $handle, $css );
		wp_enqueue_style( $handle );
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
		$styles = Block_Utility::get_block_style( $block );
		if ( empty( $styles ) ) {
			return $block_content;
		}

		// クラスの作成.
		$container_class = Block_Utility::get_unique_class( self::BLOCK_NAME );
		$css_class       = Block_Utility::get_css_container_class( $container_class );
		// CSS作成.
		$css = '';
		// Width.
		$css .= $this->get_width_css(
			$styles,
			"{$css_class} .ystdb-custom-button__link"
		);
		// Font Size.
		$css .= $this->get_font_size_css(
			$styles,
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
	 * @param array  $styles   Attributes.
	 * @param string $selector Selector.
	 *
	 * @return string
	 */
	public function get_width_css( $styles, $selector ) {

		if ( ! isset( $styles['width'] ) ) {
			return '';
		}

		return Block_Utility::compile_block_inline_css(
			$selector,
			Styles::parse_responsive_values( 'width', $styles['width'] )
		);
	}

	/**
	 * Font Size.
	 *
	 * @param array  $styles   Attributes.
	 * @param string $selector Selector.
	 *
	 * @return string
	 */
	public function get_font_size_css( $styles, $selector ) {

		$property = 'fontSize';
		if ( ! isset( $styles[ $property ] ) ) {
			return '';
		}

		return Block_Utility::compile_block_inline_css(
			$selector,
			Styles::parse_responsive_values( $property, $styles[ $property ] )
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
