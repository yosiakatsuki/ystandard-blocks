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
		if ( Main::is_ystandard() ) {
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
		add_filter( 'script_loader_tag', [ $this, 'script_loader_tag' ], PHP_INT_MAX, 3 );
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
		wp_add_inline_style(
			'ystandard-blocks',
			Customizer::get_inline_style_css()
		);
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
		if ( Options::get_option_by_bool( 'load_font_awesome' ) ) {
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
			if ( Options::get_option_by_bool( 'add_editor_color_and_size' ) ) {
				$inline_css .= $this->get_color_css( '#editor' );
				$inline_css .= $this->get_font_size_css( '#editor' );
			}

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
		$palette = get_theme_support( 'editor-color-palette' );
		$css     = '';
		foreach ( $palette[0] as $value ) {
			/**
			 * Background-color
			 */
			$css .= $prefix . $this->get_color_class_name( $value['slug'], 'background-color' ) . ' {
				background-color:' . $value['color'] . ';
			}';
			/**
			 * Border-color
			 */
			$css .= $prefix . $this->get_color_class_name( $value['slug'], 'border-color' ) . ' {
				border-color:' . $value['color'] . ';
			}';
			/**
			 * fill-color
			 */
			$css .= $prefix . $this->get_color_class_name( $value['slug'], 'fill' ) . ' {
				fill:' . $value['color'] . ';
			}';
			/**
			 * Text Color
			 */
			$css .= $prefix . $this->get_color_class_name( $value['slug'], 'color' ) . ' {
				color:' . $value['color'] . ';
			}';
			$css .= $prefix . $this->get_color_class_name( $value['slug'], 'color' ) . ':hover{
				color:' . $value['color'] . ';
			}';
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

}

new Enqueue();
