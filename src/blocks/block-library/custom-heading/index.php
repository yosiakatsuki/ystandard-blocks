<?php
/**
 * Custom Heading Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Styles;

defined( 'ABSPATH' ) || die();

/**
 * Custom Heading Block Class
 */
class Custom_Heading_Block {

	const BLOCK_NAME = 'ystdb/custom-heading';

	/**
	 * Instance.
	 *
	 * @var Custom_Heading_Block
	 */
	private static $instance;

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'init', [ $this, 'register_block' ], 100 );
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_responsive_style' ] );
		add_filter( 'block_bindings_supported_attributes_' . self::BLOCK_NAME, [ $this, 'add_block_bindings_supported_attributes' ] );
	}

	/**
	 * Instance.
	 *
	 * @return Custom_Heading_Block
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
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
		// プリセットの !important 指定よりレスポンシブ値を優先するため、詳細度を 0.1.1 にする.
		$main_selector     = ':is(h1,h2,h3,h4,h5,h6).ystdb-custom-heading';
		$sub_selector      = ':is(p).ystdb-custom-heading-sub';
		$group_selector    = ':is(hgroup).ystdb-custom-heading-group';
		$text_elements     = [
			[
				'selector'  => $main_selector,
				'font_prop' => 'heading--font-size',
			],
			[
				'selector'  => $sub_selector,
				'font_prop' => 'custom-heading-sub--font-size',
			],
		];
		$spacing_elements  = [
			[
				'selector' => $main_selector,
				'prefix'   => 'custom-heading',
			],
			[
				'selector' => $sub_selector,
				'prefix'   => 'custom-heading-sub',
			],
			[
				'selector' => $group_selector,
				'prefix'   => 'custom-heading-group',
			],
		];
		$layout_properties = [
			'flex-direction'  => 'flex-direction',
			'align-items'     => 'align-items',
			'justify-content' => 'justify-content',
		];
		$css               = '';
		foreach ( $types as $type ) {
			// フォントサイズ.
			foreach ( $text_elements as $text_element ) {
				$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
					[
						'selector'  => $text_element['selector'],
						'prop_name' => $text_element['font_prop'],
						'property'  => 'font-size',
						'type'      => $type,
					]
				);
			}
			// 余白.
			foreach ( $spacing_elements as $spacing_element ) {
				foreach ( [ 'top', 'right', 'bottom', 'left' ] as $pos ) {
					foreach ( [ 'margin', 'padding' ] as $property ) {
						$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
							[
								'selector'  => $spacing_element['selector'],
								'prop_name' => "{$spacing_element['prefix']}--{$property}-{$pos}",
								'property'  => "{$property}-{$pos}",
								'type'      => $type,
							]
						);
					}
				}
			}
			// 見出しグループの間隔.
			$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
				[
					'selector'  => $group_selector,
					'prop_name' => 'custom-heading-group--block-gap',
					'property'  => 'gap',
					'type'      => $type,
				]
			);
			// 見出しグループの配置.
			foreach ( $layout_properties as $prop_name => $property ) {
				$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
					[
						'selector'  => $group_selector,
						'prop_name' => "custom-heading-group--{$prop_name}",
						'property'  => $property,
						'type'      => $type,
					]
				);
			}
		}

		// 結合.
		$css .= Styles::add_media_query_desktop( $responsive['desktop'] );
		$css .= Styles::add_media_query_tablet( $responsive['tablet'] );
		$css .= Styles::add_media_query_mobile( $responsive['mobile'] );

		$handle = 'ystdb-custom-heading-block-responsive';
		wp_register_style( $handle, false );
		wp_add_inline_style( $handle, $css );
		wp_enqueue_style( $handle );
	}

	/**
	 * ブロック登録
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type( __DIR__ );
	}

	/**
	 * Block Bindings 対応属性を追加.
	 *
	 * @param array $supported_attributes 対応済み属性.
	 *
	 * @return array
	 */
	public function add_block_bindings_supported_attributes( $supported_attributes ) {
		$attributes = [ 'content' ];

		return array_values( array_unique( array_merge( $supported_attributes, $attributes ) ) );
	}
}


Custom_Heading_Block::get_instance();
