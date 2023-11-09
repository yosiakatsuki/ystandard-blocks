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
 * Class Color_Palette
 *
 * @package ystandard
 */
class Color_Palette {

	/**
	 * Color_Palette constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_color_palette_css' ], 12 );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_color_palette_css' ], 12 );
	}

	/**
	 * フロント用カラーパレットCSS
	 */
	public function enqueue_color_palette_css() {
		if ( apply_filters( 'ys_is_enqueue_color_pallet', false ) ) {
			return;
		}
		wp_add_inline_style(
			Config::CSS_HANDLE,
			self::get_color_palette_css( '.' . Config::BODY_CLASS )
		);
		add_filter( 'ys_is_enqueue_color_pallet', '__return_true' );
	}

	/**
	 * 編集画面用カラーパレットCSS
	 */
	public function enqueue_block_editor_color_palette_css() {
		if ( apply_filters( 'ys_is_enqueue_block_editor_color_pallet', false ) ) {
			return;
		}
		wp_add_inline_style(
			Config::BLOCK_EDITOR_CSS_HANDLE,
			self::get_color_palette_css( '.editor-styles-wrapper' )
		);
		add_filter( 'ys_is_enqueue_block_editor_color_pallet', '__return_true' );
	}

	/**
	 * カラーパレット用CSS取得
	 *
	 * @param string $prefix Prefix.
	 *
	 * @return string
	 */
	public static function get_color_palette_css( $prefix ) {
		$palette = get_theme_support( 'editor-color-palette' );
		if ( empty( $palette ) ) {
			return '';
		}
		$types = self::get_color_palette_css_types();
		$css   = [];
		foreach ( $palette[0] as $color ) {
			foreach ( $types as $value ) {
				$css[] = self::create_color_palette_css(
					$color['slug'],
					$color['color'],
					[
						'palette'     => $value['palette'],
						'conditional' => $value['conditional'],
						'property'    => $value['property'],
						'state'       => '',
					],
					$prefix
				);

				if ( $value['state'] ) {
					foreach ( $value['state'] as $state ) {
						$css[] = self::create_color_palette_css(
							$color['slug'],
							$color['color'],
							[
								'palette'     => $value['palette'],
								'conditional' => $value['conditional'],
								'property'    => $value['property'],
								'state'       => $state,
							],
							$prefix
						);
					}
				}
			}
		}

		return Styles::minify( implode( ' ', $css ) );
	}

	/**
	 * カラーパレット用CSS作成
	 *
	 * @param string $slug   Slug.
	 * @param string $color  Color.
	 * @param array  $args   Args.
	 * @param string $prefix CSS Prefix.
	 *
	 * @return string
	 */
	public static function create_color_palette_css( $slug, $color, $args, $prefix = '' ) {
		$color_name        = $slug;
		$color_class       = "has-{$color_name}-" . $args['palette'];
		$property          = $args['property'];
		$has_state         = isset( $args['state'] ) && ! empty( $args['state'] );
		$state             = $has_state ? ':' . $args['state'] : '';
		$custom_prop       = [];
		$custom_prop_state = $has_state ? '--' . $args['state'] : '';

		// 色指定.
		$color_class_section = "{$prefix} .{$color_class}{$state}";
		// 条件付き.
		if ( is_array( $args['conditional'] ) ) {
			foreach ( $args['conditional'] as $conditional ) {
				$conditional_class           = 'has-' . $conditional;
				$conditional_class_section[] = "{$prefix} .{$conditional_class}.{$color_class}{$state}";
				$custom_prop[]               = "--ystdb--{$conditional}{$custom_prop_state}:{$color}";
			}
			$conditional_class_section = implode( ',', $conditional_class_section );
		} else {
			$conditional_class         = 'has-' . $args['conditional'];
			$conditional_class_section = "{$prefix} .{$conditional_class}.{$color_class}{$state}";
			$custom_prop[]             = "--ystdb--{$property}{$custom_prop_state}:{$color}";
		}
		$custom_prop = implode( ';', $custom_prop );

		return "
			{$color_class_section},
			{$conditional_class_section}{
				{$property}:{$color};
				{$custom_prop};
			}
		";
	}

	/**
	 * カラーパレット用CSSを出力するタイプ
	 *
	 * @return array[]
	 */
	public static function get_color_palette_css_types() {
		return apply_filters(
			'ys_get_color_palette_css_types',
			[
				'color'            => [
					'property'    => 'color',
					'conditional' => 'text-color',
					'palette'     => 'color',
					'state'       => [ 'hover' ],
				],
				'inline-color'     => [
					'property'    => 'color',
					'conditional' => 'inline-color',
					'palette'     => 'color',
					'state'       => [ 'hover' ],
				],
				'background-color' => [
					'property'    => 'background-color',
					'conditional' => 'background',
					'palette'     => 'background-color',
					'state'       => false,
				],
				'border-color'     => [
					'property'    => 'border-color',
					'conditional' => 'border',
					'palette'     => 'border-color',
					'state'       => false,
				],
				'fill'             => [
					'property'    => 'fill',
					'conditional' => 'fill-color',
					'palette'     => 'fill',
					'state'       => false,
				],
			]
		);
	}
}

new Color_Palette();
