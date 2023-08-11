<?php
/**
 * CSS 関連
 *
 * @package ystandard-toolbox
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\utils;

defined( 'ABSPATH' ) || die();

/**
 * Class Styles.
 */
class Styles {

	/**
	 * ブレークポイント
	 *
	 * @var array
	 */
	const BREAKPOINTS = [
		'sm'      => 600,
		'md'      => 769,
		'lg'      => 1025,
		'mobile'  => '37.5em',
		'tablet'  => '48em', // 使わないかも.
		'desktop' => '64em',
	];

	/**
	 * ブレークポイント計算のベーズpxサイズ.
	 *
	 * @var int
	 */
	const BREAKPOINT_BASE = 16;

	/**
	 * ブレークポイントの取得
	 *
	 * @return array
	 */
	public static function get_breakpoints() {
		// フィルター名変更.
		$breakpoints = apply_filters_deprecated( 'ys_get_break_points', [ self::BREAKPOINTS ], '3.11.0' );

		return apply_filters( 'ys_get_breakpoints', $breakpoints );
	}

	/**
	 * ブレークポイントのem計算のベースサイズ.
	 *
	 * @return int|float
	 */
	public static function get_breakpoints_base_size() {
		$base = apply_filters( 'ys_breakpoints_base_size', self::BREAKPOINT_BASE );

		return empty( $base ) ? self::BREAKPOINT_BASE : $base;
	}

	/**
	 * ブレークポイントmin-widthに指定する値の取得.
	 *
	 * @param string|int $value 値.
	 *
	 * @return string
	 */
	public static function get_breakpoints_min_width_size( $value ) {
		$float_value = (float) $value;
		$unit        = str_replace( (string) $float_value, '', $value );
		if ( ! empty( $unit ) && ( 'em' === $unit || 'rem' === $unit ) ) {
			$base  = self::get_breakpoints_base_size();
			$value = ( $float_value + ( 1 / $base ) );
		} else {
			$value = (int) $float_value + 1;
		}

		return "{$value}{$unit}";
	}


	/**
	 * モバイル用ブレークポイントの追加.
	 *
	 * @param string $css CSS.
	 *
	 * @return string
	 */
	public static function add_media_query_mobile( $css ) {
		$breakpoints = self::get_breakpoints();
		if ( ! is_array( $breakpoints ) || ! array_key_exists( 'mobile', $breakpoints ) ) {
			return $css;
		}
		$breakpoint = $breakpoints['mobile'];

		return sprintf(
			'@media (max-width:%s) {%s}',
			$breakpoint,
			$css
		);
	}

	/**
	 * タブレット用ブレークポイントの追加.
	 *
	 * @param string $css CSS.
	 *
	 * @return string
	 */
	public static function add_media_query_tablet( $css ) {
		$breakpoints = self::get_breakpoints();
		// モバイルのチェック.
		if ( ! is_array( $breakpoints ) || ! array_key_exists( 'mobile', $breakpoints ) ) {
			return $css;
		}
		// タブレットのチェック.
		if ( ! is_array( $breakpoints ) || ! array_key_exists( 'desktop', $breakpoints ) ) {
			return $css;
		}
		$min = self::get_breakpoints_min_width_size( $breakpoints['mobile'] );
		$max = $breakpoints['desktop'];

		return sprintf(
			'@media (min-width:%s) AND (max-width:%s) {%s}',
			$min,
			$max,
			$css
		);
	}


	/**
	 * メディアクエリを追加
	 *
	 * @param string $css Styles.
	 * @param string $min Breakpoint.
	 * @param string $max Breakpoint.
	 *
	 * @return string
	 * @deprecated 3.11.0 add_media_query_mobile, add_media_query_tablet, add_media_query_desktopを使用すること.
	 */
	public static function add_media_query( $css, $min = '', $max = '' ) {
		$breakpoints = self::get_breakpoints();
		if ( ! array_key_exists( $min, $breakpoints ) && ! array_key_exists( $max, $breakpoints ) ) {
			return $css;
		}
		if ( array_key_exists( $min, $breakpoints ) ) {
			$breakpoint = $breakpoints[ $min ];
			$min        = "(min-width: ${breakpoint}px)";
		}
		if ( array_key_exists( $max, $breakpoints ) ) {
			$breakpoint = $breakpoints[ $max ] - 1;
			$max        = "(max-width: ${breakpoint}px)";
		}
		$breakpoint = $min . $max;
		if ( '' !== $min && '' !== $max ) {
			$breakpoint = $min . ' AND ' . $max;
		}

		if ( empty( $breakpoint ) ) {
			return $css;
		}

		return sprintf(
			'@media %s {%s}',
			$breakpoint,
			$css
		);
	}

	/**
	 * CSSの圧縮
	 *
	 * @param string $style inline css styles.
	 *
	 * @return string
	 */
	public static function minify( $style ) {
		// コメント削除.
		$style = preg_replace( '#/\*[^!][^*]*\*+([^/][^*]*\*+)*/#', '', $style );
		// コロンの後の空白を削除する.
		$style = str_replace( ': ', ':', $style );
		// タブ、スペース、改行などを削除する.
		$style = str_replace( [ "\r\n", "\r", "\n", "\t", '  ', '    ' ], '', $style );

		return $style;
	}

	/**
	 * カラーコードをrgbに変換
	 *
	 * @param string $color カラーコード.
	 *
	 * @return array
	 */
	public static function hex_2_rgb( $color ) {
		if ( empty( $color ) ) {
			return [];
		}

		return [
			hexdec( substr( $color, 1, 2 ) ),
			hexdec( substr( $color, 3, 2 ) ),
			hexdec( substr( $color, 5, 2 ) ),
		];
	}

	/**
	 * CSSの作成.
	 *
	 * @param array $styles スタイル.
	 * @param bool  $minify 圧縮するかどうか.
	 *
	 * @return string
	 */
	public static function compile_inline_css( $styles, $minify = true ) {
		if ( empty( $styles ) ) {
			return '';
		}
		$result = '';
		foreach ( $styles as $key => $value ) {
			$result .= sprintf(
				'%s:%s;',
				_wp_to_kebab_case( $key ),
				$value
			);
		}
		if ( $minify ) {
			$result = self::minify( $result );
		}

		return $result;
	}

	/**
	 * レスポンシブ用スタイルを持っているか.
	 *
	 * @param string $size        サイズ.
	 * @param array  $styles      スタイル.
	 * @param bool   $check_array 配列かどうか.
	 *
	 * @return bool
	 */
	public static function has_responsive_style( $size, $styles, $check_array = true ) {
		if ( ! isset( $styles[ $size ] ) ) {
			return false;
		}
		if ( empty( $styles[ $size ] ) ) {
			return false;
		}
		if ( $check_array && ! is_array( $styles[ $size ] ) ) {
			return false;
		}

		return true;
	}

	/**
	 * レスポンシブ指定の整理.
	 *
	 * @param string $property プロパティ.
	 * @param array  $styles   スタイル.
	 *
	 * @return array
	 */
	public static function parse_responsive_values( $property, $styles ) {
		$_styles     = [];
		$has_desktop = self::has_responsive_style( 'desktop', $styles, false );
		$has_tablet  = self::has_responsive_style( 'tablet', $styles, false );
		$has_mobile  = self::has_responsive_style( 'mobile', $styles, false );
		if ( $has_desktop ) {
			$_styles['desktop'] = $styles['desktop'];
		}
		if ( $has_tablet ) {
			$_styles['tablet'] = $styles['tablet'];
		}
		if ( $has_mobile ) {
			$_styles['mobile'] = $styles['mobile'];
		}
		// 何もなければdesktopに入れる.
		if ( ! $has_desktop && ! $has_tablet && ! $has_mobile ) {
			$_styles['desktop'] = [ $property => $styles ];
		}

		return $_styles;
	}

	/**
	 * レスポンシブ指定のpadding,marginの整理.
	 *
	 * @param string $property プロパティ.
	 * @param array  $styles   スタイル.
	 *
	 * @return array
	 */
	public static function parse_responsive_spacing( $property, $styles ) {
		$result = [];
		if ( ! is_array( $styles ) ) {
			return $styles;
		}

		foreach ( [ 'desktop', 'tablet', 'mobile' ] as $size ) {
			if ( array_key_exists( $size, $styles ) && is_array( $styles[ $size ] ) ) {
				$style = [];
				foreach ( $styles[ $size ] as $key => $value ) {
					$style_key           = "{$property}-{$key}";
					$style[ $style_key ] = $value;
				}
				$result[ $size ] = $style;
			}
		}

		return $result;
	}

}
