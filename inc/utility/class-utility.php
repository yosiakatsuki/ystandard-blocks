<?php
/**
 * Utility
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Utility
 *
 * @package ystandard_blocks
 */
class Utility {
	/**
	 * HTML・改行・ショートコードなしのテキストを取得
	 *
	 * @param string $text content.
	 *
	 * @return string
	 */
	public static function get_plain_text( $text ) {
		$text = html_entity_decode( $text );
		// ショートコード削除.
		$text = strip_shortcodes( $text );
		// HTMLタグ削除.
		$text = wp_strip_all_tags( $text, true );

		return $text;
	}

	/**
	 * テーマバージョン取得
	 *
	 * @param boolean $parent 親テーマ情報かどうか.
	 *
	 * @return string
	 */
	public static function get_theme_version( $parent = false ) {
		/**
		 * 子テーマ情報
		 */
		$theme = wp_get_theme();
		if ( $parent && get_template() !== get_stylesheet() ) {
			/**
			 * 親テーマ情報
			 */
			$theme = wp_get_theme( get_template() );
		}

		return $theme->get( 'Version' );
	}

	/**
	 * テーマ有効化チェック
	 *
	 * @return bool
	 */
	public static function is_ystandard() {
		return 'ystandard' === get_template();
	}

	/**
	 * AMP判定
	 *
	 * @return bool
	 */
	public static function is_amp() {
		if ( function_exists( 'ys_is_amp' ) ) {
			return ys_is_amp();
		}

		return function_exists( 'is_amp_endpoint' ) && is_amp_endpoint();
	}

	/**
	 * Polyfillが必要か
	 *
	 * @return bool
	 */
	public static function need_polyfill() {
		return ( self::is_ie() || self::is_edge() );
	}

	/**
	 * IEチェック
	 *
	 * @return bool
	 */
	public static function is_ie() {
		$ua = [
			'Trident',
			'MSIE',
		];

		return self::check_user_agent( $ua );
	}

	/**
	 * Edgeチェック
	 *
	 * @return bool
	 */
	public static function is_edge() {
		$ua = [
			'Edge',
		];

		return self::check_user_agent( $ua );
	}

	/**
	 * Parse Block.
	 *
	 * @param string $content content.
	 *
	 * @return array|string
	 */
	public function parse_blocks( $content ) {

		if ( function_exists( 'parse_blocks' ) ) {
			return parse_blocks( $content );
		}
		if ( function_exists( 'gutenberg_parse_blocks' ) ) {
			return gutenberg_parse_blocks( $content );
		}

		return $content;
	}

	/**
	 * Boolに変換
	 *
	 * @param mixed $var var.
	 *
	 * @return bool
	 */
	public static function to_bool( $var ) {
		if ( true === $var || 'true' === $var || 1 === $var || '1' === $var ) {
			return true;
		}

		return false;
	}

	/**
	 * Styleタグ作成
	 *
	 * @param array $styles styles.
	 *
	 * @return string
	 */
	public static function get_style_attr( $styles = [] ) {
		if ( empty( $styles ) ) {
			return '';
		}
		if ( is_array( $styles ) ) {
			$styles = array_filter( $styles );
			if ( empty( $styles ) ) {
				return '';
			}
			$styles = implode( ';', $styles );
		}

		return ' style="' . esc_attr( $styles ) . ';"';
	}

	/**
	 * クラス一覧作成
	 *
	 * @param array  $classes classes.
	 * @param string $default default class.
	 *
	 * @return string
	 */
	public static function get_class_names( $classes = [], $default = '' ) {
		if ( empty( $classes ) ) {
			return '';
		}
		if ( is_array( $classes ) ) {
			$classes = array_filter( $classes );
			if ( empty( $classes ) ) {
				return '';
			}
			$classes = implode( ' ', $classes );
		}

		return esc_attr( $classes );
	}


	/**
	 * 色クラス名を取得
	 *
	 * @param string $name 名前.
	 * @param string $type タイプ.
	 *
	 * @return string
	 */
	public static function get_color_class_name( $name, $type ) {
		return "has-${name}-${type}";
	}

	/**
	 * Alignクラス取得
	 *
	 * @param string $align align.
	 *
	 * @return string
	 */
	public static function get_align_class( $align ) {
		if ( ! $align ) {
			return '';
		}

		return "has-text-align-${align}";
	}

	/**
	 * フォントサイズ取得
	 *
	 * @param int $custom_font_size font size.
	 *
	 * @return string
	 */
	public static function get_font_size_style( $custom_font_size ) {
		if ( ! $custom_font_size ) {
			return '';
		}

		return "font-size:${custom_font_size}px";
	}

	/**
	 * フォントサイズ指定クラス取得
	 *
	 * @param string $font_size font size slug.
	 *
	 * @return string
	 */
	public static function get_font_size_class( $font_size ) {
		if ( ! $font_size ) {
			return '';
		}

		return "has-${font_size}-font-size";
	}

	/**
	 * テキストカラースタイル取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_text_color_style( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "color:${color}";
	}

	/**
	 * テキストカラークラス取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_text_color_class( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "has-${color}-color";
	}

	/**
	 * 背景色スタイル取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_background_color_style( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "background-color:${color}";
	}

	/**
	 * 背景色クラス取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_background_color_class( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "has-${color}-background-color";
	}

	/**
	 * 枠線色スタイル取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_border_color_style( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "border-color:${color}";
	}

	/**
	 * 枠線色クラス取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_border_color_class( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "has-${color}-border-color";
	}

	/**
	 * SVG 色スタイル取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_fill_color_style( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "fill:${color}";
	}

	/**
	 * SVG 色クラス取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_fill_color_class( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "has-${color}-fill";
	}

	/**
	 * [has-]クラス名作成
	 *
	 * @param string $name   class name.
	 * @param string $class  class.
	 * @param string $custom custom value.
	 *
	 * @return string
	 */
	public static function get_has_class( $name, $class, $custom ) {
		if ( empty( $class ) && empty( $custom ) ) {
			return '';
		}

		return "has-${name}";
	}


	/**
	 * カラーコードをrgbに変換
	 *
	 * @param string $color カラーコード.
	 *
	 * @return array
	 */
	public static function hex_2_rgb( $color ) {
		return [
			hexdec( substr( $color, 1, 2 ) ),
			hexdec( substr( $color, 3, 2 ) ),
			hexdec( substr( $color, 5, 2 ) ),
		];
	}

	/**
	 * CSS minify
	 *
	 * @param string $style スタイル.
	 *
	 * @return string
	 */
	public static function minify( $style ) {
		$style = preg_replace( '#/\*[^*]*\*+([^/][^*]*\*+)*/#', '', $style );
		$style = str_replace( ': ', ':', $style );
		$style = str_replace( [ "\r\n", "\r", "\n", "\t", '  ', '    ' ], ' ', $style );
		$style = str_replace( [ '  ', '    ' ], ' ', $style );

		return $style;
	}

	/**
	 * Nonceチェック
	 *
	 * @param string $name   Name.
	 * @param string $action Action.
	 *
	 * @return bool|int
	 */
	public static function verify_nonce( $name, $action ) {
		// nonceがセットされているかどうか確認.
		if ( ! isset( $_POST[ $name ] ) ) {
			return false;
		}

		return wp_verify_nonce( $_POST[ $name ], $action );
	}

	/**
	 * サイズ関連のサニタイズ
	 *
	 * @param string $number  数値.
	 * @param int    $default 初期値.
	 * @param int    $max     最大.
	 * @param int    $min     最小.
	 */
	public static function sanitize_size( $number, $default, $max = 200, $min = 60 ) {

		if ( ! is_numeric( $number ) ) {
			return $default;
		}
		if ( $number < $min || $number > $max ) {
			return $default;
		}

		return $number;
	}

	/**
	 * 色コードのサニタイズ.
	 *
	 * @param string $color   Color.
	 * @param string $default Default.
	 *
	 * @return string
	 */
	public static function sanitize_hex( $color, $default ) {
		if ( ! preg_match( '/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/', $color ) ) {
			return $default;
		}

		return $color;
	}

	/**
	 * 投稿タイプ取得
	 *
	 * @param array $args    args.
	 * @param bool  $exclude 除外.
	 *
	 * @return array
	 */
	public static function get_post_types( $args = [], $exclude = true ) {
		$args = array_merge(
			[ 'public' => true ],
			$args
		);

		$types = get_post_types( $args );

		if ( $exclude ) {
			unset( $types['attachment'] );
		}

		foreach ( $types as $key => $value ) {
			$post_type = get_post_type_object( $key );
			if ( $post_type ) {
				$types[ $key ] = $post_type->labels->singular_name;
			}
		}

		return $types;
	}

	/**
	 * ユーザーエージェントのチェック
	 *
	 * @param array $ua 対象ユーザーエージェントのリスト.
	 *
	 * @return boolean
	 */
	public static function check_user_agent( $ua ) {
		if ( ! isset( $_SERVER['HTTP_USER_AGENT'] ) ) {
			return false;
		}
		$pattern = '/' . implode( '|', $ua ) . '/i';

		return preg_match( $pattern, $_SERVER['HTTP_USER_AGENT'] );
	}

	/**
	 * WordPressのバージョンチェック
	 *
	 * @param string $version バージョン.
	 *
	 * @return bool|int
	 */
	public static function wordpress_version_compare( $version ) {

		$wp_version = get_bloginfo( 'version' );

		return version_compare( $wp_version, $version, '>=' );
	}

}
