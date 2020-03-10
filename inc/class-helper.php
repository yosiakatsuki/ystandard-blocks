<?php
/**
 * Helper
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

/**
 * Class Helper
 */
class Helper {
	/**
	 * Parse Block.
	 *
	 * @param string $content content.
	 *
	 * @return array
	 */
	public function parse( $content ) {
		global $wp_version;

		return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
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

}
