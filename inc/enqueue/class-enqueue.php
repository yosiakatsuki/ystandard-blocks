<?php
/**
 * Enqueue
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Enqueue
 *
 * @package ystandard_blocks
 */
class Enqueue {

	/**
	 * Enqueue constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ], 11 );
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 11 );
		add_filter( 'script_loader_tag', [ $this, 'script_loader_tag' ], PHP_INT_MAX, 3 );
		add_action( 'wp_head', [ $this, 'noscript_styles' ], PHP_INT_MAX );
		add_filter(
			'ys_get_font_awesome_svg_light_url',
			function () {
				return YSTDB_URL . '/js/icons.js';
			},
			9
		);
		if ( ! Utility::is_ystandard() ) {
			add_action( 'wp_enqueue_scripts', [ $this, 'no_ystd_enqueue' ], 12 );
		}
	}

	/**
	 * Enqueue Styles.
	 */
	public function enqueue_styles() {
		wp_enqueue_style(
			Config::CSS_HANDLE,
			YSTDB_URL . '/css/ystandard-blocks.css',
			[],
			YSTDB_VERSION
		);
		$inline_css = '';
		/**
		 * インラインCSS
		 */
		$inline_css .= Format::get_format_styles();
		$inline_css .= self::get_color_css( '' );
		$inline_css .= self::get_font_size_css( '' );
		wp_add_inline_style(
			Config::CSS_HANDLE,
			$inline_css
		);

		/**
		 * AMP対応
		 */
		if ( Utility::is_amp() ) {
			wp_add_inline_style(
				Config::CSS_HANDLE,
				$this->get_fallback_animation_css()
			);
		}
	}

	/**
	 * Enqueue Scripts.
	 */
	public function enqueue_scripts() {
		if ( Utility::is_amp() ) {
			return;
		}
		wp_enqueue_script(
			Config::JS_APP_HANDLE,
			YSTDB_URL . '/js/app.js',
			[],
			YSTDB_VERSION,
			true
		);
		wp_script_add_data( Config::JS_APP_HANDLE, 'defer', true );
	}

	/**
	 * テーマが yStandard 以外の場合
	 */
	public function no_ystd_enqueue() {
		$wp_styles = wp_styles();
		if ( isset( $wp_styles->registered[ Config::CSS_HANDLE ] ) ) {
			$wp_styles->registered[ Config::CSS_HANDLE ]->src = YSTDB_URL . '/css/ystandard-blocks-no-ystandard.css';
		}
	}

	/**
	 * Noscriptで出力するCSS
	 */
	public function noscript_styles() {
		if ( Utility::is_amp() ) {
			return;
		}
		printf(
			'<noscript><style>%s</style></noscript>' . PHP_EOL,
			Utility::minify( $this->get_fallback_animation_css() )
		);
	}

	/**
	 * アニメーションできないときのCSS取得
	 *
	 * @return string
	 */
	private function get_fallback_animation_css() {
		return '.ystdb-section.has-animation:not(:root) {opacity:1;}';
	}

	/**
	 * カラーパレットのCSS取得
	 *
	 * @param string $prefix プレフィックス.
	 *
	 * @return string
	 */
	public static function get_color_css( $prefix = '' ) {
		$palette = get_theme_support( 'editor-color-palette' );
		if ( empty( $palette ) ) {
			return '';
		}
		$css = '';

		foreach ( $palette[0] as $value ) {
			if ( self::is_enqueue_inline_style( 'background-color' ) ) {
				/**
				 * Background-color
				 */
				$class_name = Utility::get_background_color_class( $value['slug'] );
				/**
				 * 結合
				 */
				$css .= "${prefix} .${class_name},
				${prefix} .has-background.${class_name}{
					background-color:${value['color']};
				}";
			}
			if ( self::is_enqueue_inline_style( 'color' ) ) {
				/**
				 * Text Color
				 */
				$class_name = Utility::get_text_color_class( $value['slug'] );
				/**
				 * 結合
				 */
				$css .= "${prefix} .${class_name},
				${prefix} .has-text-color.${class_name},
				${prefix} .${class_name}:hover,
				${prefix} .has-text-color.${class_name}:hover {
					color:${value['color']};
				}";
			}
			if ( self::is_enqueue_inline_style( 'border-color' ) ) {
				/**
				 * Border-color
				 */
				$class_name = Utility::get_border_color_class( $value['slug'] );
				/**
				 * 結合
				 */
				$css .= "${prefix} .${class_name},
				${prefix} .has-border.${class_name}{
					border-color:${value['color']};
				}";
			}
			if ( self::is_enqueue_inline_style( 'fill' ) ) {
				/**
				 * Fill-color
				 */
				$class_name = Utility::get_fill_color_class( $value['slug'] );
				/**
				 * 結合
				 */
				$css .= "${prefix} ${class_name},
				${prefix} .has-fill-color.${class_name}{
					fill:${value['color']};
				}";
			}
		}

		return Utility::minify( $css );
	}

	/**
	 * インラインCSSを出力するか
	 *
	 * @param string $type Type.
	 */
	public static function is_enqueue_inline_style( $type ) {
		$list = [
			'background-color' => false,
			'color'            => false,
			'border-color'     => true,
			'fill'             => true,
			'font-size'        => false,
		];
		if ( ! Utility::is_ystandard() ) {
			$list['background-color'] = get_option( Config::OPTION_PREFIX . 'add_color_palette_css_bg', true );
			$list['color']            = get_option( Config::OPTION_PREFIX . 'add_color_palette_css_text', true );
			$list['border-color']     = get_option( Config::OPTION_PREFIX . 'add_color_palette_css_border', true );
			$list['fill']             = get_option( Config::OPTION_PREFIX . 'add_color_palette_css_fill', true );
			$list['font-size']        = get_option( Config::OPTION_PREFIX . 'add_font_size_css', true );
		}
		if ( ! isset( $list[ $type ] ) ) {
			return true;
		}

		return $list[ $type ];
	}


	/**
	 * フォントサイズ
	 *
	 * @param string $prefix プレフィックス.
	 *
	 * @return string
	 */
	public static function get_font_size_css( $prefix = '' ) {
		$palette = get_theme_support( 'editor-font-sizes' );
		if ( empty( $palette ) ) {
			return '';
		}
		$css = '';
		if ( self::is_enqueue_inline_style( 'font-size' ) ) {
			foreach ( $palette[0] as $value ) {
				$slug = $value['slug'];
				/**
				 * CSS作成
				 */
				$css .= $prefix . '.has-' . $slug . '-font-size{font-size:' . $value['size'] . 'px;}';
			}
		}

		return Utility::minify( $css );
	}

	/**
	 * JavaScript
	 *
	 * @param string $tag    The `<script>` tag for the enqueued script.
	 * @param string $handle The script's registered handle.
	 * @param string $src    The script's source URL.
	 *
	 * @return string
	 */
	public function script_loader_tag( $tag, $handle, $src ) {
		if ( is_admin() ) {
			return $tag;
		}
		if ( apply_filters( 'ystdb_disable_script_loader_tag', false ) ) {
			return $tag;
		}
		foreach ( [ 'async', 'defer' ] as $attr ) {
			if ( ! wp_scripts()->get_data( $handle, $attr ) ) {
				continue;
			}
			if ( ! preg_match( ":\s$attr(=|>|\s):", $tag ) ) {
				$tag = preg_replace( ':(?=></script>):', " $attr", $tag, 1 );
			}
			break;
		}

		return $tag;
	}
}

new Enqueue();
