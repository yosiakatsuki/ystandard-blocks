<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

/**
 * Class Ystandard_Blocks_Enqueue
 */
class Enqueue {
	/**
	 * Ystandard_Blocks_Enqueue constructor.
	 */
	function __construct() {
		/**
		 * 基本
		 */
		add_action(
			'wp_enqueue_scripts',
			[ $this, 'enqueue_scripts' ],
			11
		);
		/**
		 * テーマによって分ける
		 */
		if ( Main::is_ystandard() ) {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts_ystandard' ], 11 );
			/**
			 * カスタマイザー用のCSS
			 */
			add_action( 'customize_controls_print_styles', [ $this, 'customize_controls_print_styles' ] );
		} else {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts_no_ystandard' ], 11 );
		}

		/**
		 * ブロックエディター用
		 */
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_styles' ] );
		/**
		 * Scriptタグ編集
		 */
		add_filter( 'script_loader_tag', [ $this, 'script_loader_tag' ], PHP_INT_MAX, 3 );
		/**
		 * Noscript関連
		 */
		add_action( 'wp_head', [ $this, 'noscript_styles' ], PHP_INT_MAX );
		/**
		 * 軽量版FontAwesomeのURL書き換え
		 */
		add_filter(
			'ys_get_font_awesome_svg_light_url',
			function () {
				return YSTDB_URL . '/js/icons.js';
			},
			9
		);
	}

	/**
	 * Enqueue scripts
	 */
	public function enqueue_scripts() {
		if ( Main::is_amp() ) {
			return;
		}
		wp_enqueue_script(
			'ystandard-blocks-app',
			YSTDB_URL . '/js/app.js',
			[],
			YSTDB_VERSION,
			true
		);
		wp_script_add_data( 'ystandard-blocks-app', 'defer', true );

		/**
		 * IEポリフィル
		 */
		if ( $this->is_ie() ) {
			wp_enqueue_script(
				'ystandard-blocks-intersection-observer-polyfill',
				YSTDB_URL . '/library/IntersectionObserver/polyfill/intersection-observer.js',
				[],
				null
			);
		}
	}

	/**
	 * Enqueue scripts(yStandardのみ)
	 */
	public function enqueue_scripts_ystandard() {
		wp_enqueue_style(
			'ystandard-blocks',
			YSTDB_URL . '/css/ystandard-blocks.css',
			[],
			YSTDB_VERSION
		);
		$inline_css = '';
		/**
		 * インラインCSS
		 */
		$inline_css .= Customizer::get_inline_style_css();
		$inline_css .= $this->get_color_css( '' );
		$inline_css .= $this->get_font_size_css( '' );
		wp_add_inline_style(
			'ystandard-blocks',
			$inline_css
		);
		/**
		 * AMP対応
		 */
		if ( Main::is_amp() ) {
			wp_add_inline_style(
				'ystandard-blocks',
				$this->get_fallback_animation_css()
			);
		}
	}

	/**
	 * Enqueue scripts(非yStandard)
	 */
	public function enqueue_scripts_no_ystandard() {
		wp_enqueue_style(
			'ystandard-blocks-no-ystandard',
			YSTDB_URL . '/css/ystandard-blocks-no-ystandard.css',
			[],
			YSTDB_VERSION
		);
		$inline_css = '';
		/**
		 * 色設定用CSS
		 */
		$inline_css .= $this->get_color_css( '' );
		$inline_css .= $this->get_font_size_css( '' );
		wp_add_inline_style(
			'ystandard-blocks-no-ystandard',
			$inline_css
		);
		/**
		 * AMP対応
		 */
		if ( Main::is_amp() ) {
			wp_add_inline_style(
				'ystandard-blocks-no-ystandard',
				$this->get_fallback_animation_css()
			);

			/**
			 * AMPの場合ここまで
			 */
			return;
		}
		if ( Options::get_option_by_bool( 'load_font_awesome' ) ) {
			if ( Options::is_use_all_icons() ) {
				wp_enqueue_script(
					'font-awesome',
					YSTDB_URL . '/library/fontawesome/js/all.js',
					[],
					YSTDB_VERSION,
					true
				);
			} else {
				wp_enqueue_script(
					'font-awesome',
					YSTDB_URL . '/js/icons.js',
					[],
					YSTDB_VERSION,
					true
				);
			}

			wp_add_inline_script(
				'font-awesome',
				'FontAwesomeConfig = { searchPseudoElements: true };',
				'before'
			);
			wp_script_add_data( 'font-awesome', 'defer', true );
		}
	}

	/**
	 * Enqueue Styles
	 */
	public function enqueue_editor_styles() {
		wp_enqueue_style(
			'font-awesome',
			YSTDB_URL . '/library/fontawesome/css/all.css',
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
		$customizer = new Customizer();
		$css_file   = 'css/ystandard-blocks-edit-no-ystandard.css';
		$inline_css = $customizer->get_inline_style_css(
			'.editor-styles-wrapper'
		);
		if ( Main::is_ystandard() ) {
			$css_file = 'css/ystandard-blocks-edit.css';
			/**
			 * ボタン用CSS追加
			 */
			$inline_css .= $customizer->get_editor_button_css();
		} else {
			$inline_css .= $this->get_color_css( '.editor-styles-wrapper ' );
			$inline_css .= $this->get_font_size_css( '.editor-styles-wrapper ' );
		}
		wp_enqueue_style(
			'ystandard-blocks-edit',
			YSTDB_URL . '/' . $css_file,
			[],
			filemtime( YSTDB_PATH . '/' . $css_file )
		);

		wp_add_inline_style(
			'ystandard-blocks-edit',
			$inline_css
		);

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

	/**
	 * Noscriptで出力するCSS
	 */
	public function noscript_styles() {

		$css = $this->get_fallback_animation_css();

		printf(
			'<noscript><style>%s</style></noscript>' . PHP_EOL,
			$this->minify( $css )
		);
	}

	/**
	 * カスタマイザー用のCSS読み込み
	 */
	public function customize_controls_print_styles() {
		wp_enqueue_style(
			'ystdb-customize-controls',
			YSTDB_URL . '/css/ystandard-blocks-customizer.css',
			[],
			YSTDB_VERSION
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
	 * 色クラス名を取得
	 *
	 * @param string $name 名前.
	 * @param string $type タイプ.
	 *
	 * @return string
	 */
	private function get_color_class_name( $name, $type ) {
		return ".has-${name}-${type}";
	}

	/**
	 * CSS minify
	 *
	 * @param string $style スタイル.
	 *
	 * @return string
	 */
	private function minify( $style ) {
		$style = preg_replace( '#/\*[^*]*\*+([^/][^*]*\*+)*/#', '', $style );
		$style = str_replace( ': ', ':', $style );
		$style = str_replace( [ "\r\n", "\r", "\n", "\t", '  ', '    ' ], '', $style );

		return $style;
	}

	/**
	 * カラーパレットのCSS取得
	 *
	 * @param string $prefix プレフィックス.
	 *
	 * @return string
	 */
	private function get_color_css( $prefix = '' ) {
		$palette      = get_theme_support( 'editor-color-palette' );
		$css          = '';
		$bg_color     = false;
		$text_color   = false;
		$border_color = true;
		$fill_color   = true;

		if ( ! Main::is_ystandard() ) {
			$bg_color     = Options::get_option_by_bool( 'add_color_palette_css_bg' );
			$text_color   = Options::get_option_by_bool( 'add_color_palette_css_text' );
			$border_color = Options::get_option_by_bool( 'add_color_palette_css_border' );
			$fill_color   = Options::get_option_by_bool( 'add_color_palette_css_fill' );
		}
		foreach ( $palette[0] as $value ) {
			if ( $bg_color ) {
				/**
				 * Background-color
				 */
				$class_name = $this->get_color_class_name( $value['slug'], 'background-color' );
				/**
				 * 結合
				 */
				$css .= "${prefix} ${class_name},
				${prefix} .has-background${class_name}{
					background-color:${value['color']};
				}";
			}
			if ( $text_color ) {
				/**
				 * Text Color
				 */
				$class_name = $this->get_color_class_name( $value['slug'], 'color' );
				/**
				 * 結合
				 */
				$css .= "${prefix} ${class_name},
				${prefix} .has-text-color${class_name},
				${prefix} ${class_name}:hover,
				${prefix} .has-text-color${class_name}:hover {
					color:${value['color']};
				}";
			}
			if ( $border_color ) {
				/**
				 * Border-color
				 */
				$class_name = $this->get_color_class_name( $value['slug'], 'border-color' );
				/**
				 * 結合
				 */
				$css .= "${prefix} ${class_name},
				${prefix} .has-border${class_name}{
					border-color:${value['color']};
				}";
			}
			if ( $fill_color ) {
				/**
				 * Fill-color
				 */
				$class_name = $this->get_color_class_name( $value['slug'], 'fill' );
				/**
				 * 結合
				 */
				$css .= "${prefix} ${class_name},
				${prefix} .has-fill-color${class_name}{
					fill:${value['color']};
				}";
			}
		}

		return $this->minify( $css );
	}

	/**
	 * フォントサイズ
	 *
	 * @param string $prefix プレフィックス.
	 *
	 * @return string
	 */
	private function get_font_size_css( $prefix = '' ) {
		$palette = get_theme_support( 'editor-font-sizes' );
		$css     = '';
		foreach ( $palette[0] as $value ) {
			$slug = $value['slug'];
			/**
			 * CSS作成
			 */
			$css .= $prefix . '.has-' . $slug . '-font-size{font-size:' . $value['size'] . 'px;}';
		}

		return $this->minify( $css );
	}

	/**
	 * IEチェック
	 *
	 * @return bool
	 */
	private function is_ie() {
		$ua = [
			'Trident',
			'MSIE',
		];

		return $this->check_user_agent( $ua );
	}

	/**
	 * ユーザーエージェントチェック
	 *
	 * @param array $ua ユーザーエージェント文字列リスト.
	 *
	 * @return bool
	 */
	private function check_user_agent( $ua ) {
		if ( ! isset( $_SERVER['HTTP_USER_AGENT'] ) ) {
			return false;
		}
		$pattern = '/' . implode( '|', $ua ) . '/i';

		return preg_match( $pattern, $_SERVER['HTTP_USER_AGENT'] );
	}

}

new Enqueue();
