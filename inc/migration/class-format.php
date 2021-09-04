<?php
/**
 * Format
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_CSS;

defined( 'ABSPATH' ) || die();

/**
 * Class Format
 *
 * @package ystandard_blocks
 */
class Format {

	/**
	 * 蛍光マーカーデフォルトカラー
	 */
	const MARKER_DEFAULT_COLOR = [
		1 => '#DA6272',
		2 => '#45A1CF',
		3 => '#FFEE55',
	];

	/**
	 * 設定セクション名.
	 */
	const OPTION_SECTION = 'inline';


	/**
	 * 設定反映CSS作成
	 *
	 * @param string $wrap ラッパーセレクター.
	 *
	 * @return string
	 */
	public static function get_format_styles( $wrap = '' ) {
		if ( ! Utility::is_ystandard() ) {
			return '';
		}
		$css = '';
		for ( $i = 1; $i <= 3; $i ++ ) {
			$style  = '';
			$option = self::get_format_styles_option( $i );
			/**
			 * 文字サイズ
			 */
			if ( 1.0 !== $option['fz'] && 1 !== $option['fz'] ) {
				$style .= sprintf( 'font-size:%sem;', $option['fz'] );
			}
			/**
			 * 文字色
			 */
			if ( $option['color'] ) {
				$style .= sprintf( 'color:%s;', $option['color'] );
			}
			/**
			 * 装飾
			 */
			if ( 'bold' === $option['type'] ) {
				$style .= 'font-weight: 700;';
			}
			if ( 'italic' === $option['type'] ) {
				$style .= 'font-style: italic;';
			}
			/**
			 * マーカー
			 */
			if ( 0 < $option['mark_weight'] ) {
				$style .= self::get_marker_style(
					$option['mark_color'],
					$option['mark_weight'],
					$option['mark_opacity']
				);
			}
			/**
			 * セレクタ
			 */
			$selector = '.ystdb-inline--' . $i;
			if ( $wrap ) {
				$selector = $wrap . ' ' . $selector;
			}
			/**
			 * CSS作成
			 */
			$css .= sprintf(
				'%s{%s}',
				$selector,
				$style
			);
		}

		/**
		 * 少し大きく・少し小さく
		 */
		$css .= sprintf(
			'%s .ystdb-inline--larger {font-size:%sem;}',
			$wrap,
			( Option::get_option_by_number( self::OPTION_SECTION, 'larger', 120 ) / 100 )
		);
		$css .= sprintf(
			'%s .ystdb-inline--smaller {font-size:%sem;}',
			$wrap,
			( Option::get_option_by_number( self::OPTION_SECTION, 'smaller', 80 ) / 100 )
		);
		/**
		 * スマートフォンで少し大きく・少し小さく
		 */
		$css .= sprintf(
			'@media (max-width:599px) { %s .ystdb-inline--larger-sp {font-size:%sem;}}',
			$wrap,
			( Option::get_option_by_number( self::OPTION_SECTION, 'larger_sp', 120 ) / 100 )
		);
		$css .= sprintf(
			'@media (max-width:599px) { %s .ystdb-inline--smaller-sp {font-size:%sem;}}',
			$wrap,
			( Option::get_option_by_number( self::OPTION_SECTION, 'smaller_sp', 80 ) / 100 )
		);

		return $css;
	}

	/**
	 * インラインスタイル設定取得
	 *
	 * @param int $index 番号(1~3).
	 *
	 * @return array
	 */
	public static function get_format_styles_option( $index ) {
		/**
		 * 文字サイズ
		 */
		$fz = Option::get_option_by_number( self::OPTION_SECTION, 'font_size_' . $index, 100 );
		$fz = ( $fz / 100 );
		/**
		 * 文字色
		 */
		$color   = Option::get_option( self::OPTION_SECTION, 'color_' . $index, '#222222' );
		$default = Option::get_default_option( self::OPTION_SECTION, 'color_' . $index, '#222222' );
		if ( $default === $color ) {
			$color = '';
		}
		/**
		 * タイプ
		 */
		$type = Option::get_option( self::OPTION_SECTION, 'type_' . $index, 'normal' );
		/**
		 * マーカー
		 */
		$mark_weight  = Option::get_option_by_number( self::OPTION_SECTION, 'mark_weight_' . $index, 25 );
		$mark_color   = Helper_CSS::hex_2_rgb(
			Option::get_option( self::OPTION_SECTION, 'mark_color_' . $index, self::MARKER_DEFAULT_COLOR[ $index ] )
		);
		$mark_opacity = Option::get_option_by_number( self::OPTION_SECTION, 'mark_opacity_' . $index, 30 ) / 100;

		return [
			'fz'           => $fz,
			'color'        => $color,
			'type'         => $type,
			'mark_weight'  => $mark_weight,
			'mark_color'   => $mark_color,
			'mark_opacity' => $mark_opacity,
		];
	}

	/**
	 * マーカー用スタイル作成
	 *
	 * @param array $color   色.
	 * @param int   $weight  太さ.
	 * @param int   $opacity 不透明度.
	 *
	 * @return string
	 */
	public static function get_marker_style( $color, $weight, $opacity ) {
		$weight = ( 100 - $weight ) . '%';

		return sprintf(
			'background: linear-gradient(transparent %s, rgba(%s, %s) %s);background-position-y: -0.2em;',
			$weight,
			implode( ',', $color ),
			$opacity,
			$weight
		);
	}


	/**
	 * 編集画面 マーカーボタン CSS
	 *
	 * @return string
	 */
	public static function get_format_button_css() {
		$css = '';
		for ( $i = 1; $i <= 3; $i ++ ) {
			$style_icon = '';
			$style_mark = '';
			$option     = self::get_format_styles_option( $i );
			/**
			 * 文字サイズ
			 */
			if ( 1.5 < $option['fz'] ) {
				$option['fz'] = 1.5;
			}
			$style_icon .= sprintf(
				'transform: scale(%s);',
				$option['fz']
			);
			/**
			 * 文字色
			 */
			if ( $option['color'] ) {
				$style_icon .= sprintf( 'fill:%s;', $option['color'] );
			}
			/**
			 * マーカー
			 */
			if ( 0 < $option['mark_weight'] ) {
				$style_mark .= self::get_marker_style(
					$option['mark_color'],
					$option['mark_weight'],
					$option['mark_opacity']
				);
			} else {
				$style_mark .= 'background: none';
			}
			$selector_mark = ".ystdb-inline-style-toolbar.inline-style-${i} .components-button";
			$selector_icon = ".ystdb-inline-style-toolbar.inline-style-${i} .dashicon";

			/**
			 * CSS作成
			 */
			$css .= sprintf(
				'%s{%s}',
				$selector_mark,
				$style_mark
			);
			$css .= sprintf(
				'%s{%s}',
				$selector_icon,
				$style_icon
			);
		}

		return $css;
	}

	/**
	 * 設定値取得.
	 */
	public static function get_options_all() {
		$options = [];
		for ( $i = 1; $i <= 3; $i ++ ) {

			$options[ 'fontSize' . $i ] = Option::get_option_by_number(
				'inline',
				'font_size_' . $i,
				100
			);
			$options[ 'color' . $i ]    = Option::get_option(
				'inline',
				'color_' . $i,
				'#222222'
			);
			$options[ 'type' . $i ]     = Option::get_option(
				'inline',
				'type_' . $i,
				'normal'
			);
			// マーカー.
			$options[ 'markWeight' . $i ]  = Option::get_option_by_number(
				'inline',
				'mark_weight_' . $i,
				25
			);
			$options[ 'markColor' . $i ]   = Option::get_option(
				'inline',
				'mark_color_' . $i,
				self::MARKER_DEFAULT_COLOR[ $i ]
			);
			$options[ 'markOpacity' . $i ] = Option::get_option_by_number(
				'inline',
				'mark_opacity_' . $i,
				30
			);
		}
		// 大きく・小さく.
		$options['larger']    = Option::get_option_by_number(
			'inline',
			'larger',
			120
		);
		$options['largerSP']  = Option::get_option_by_number(
			'inline',
			'larger_sp',
			120
		);
		$options['smaller']   = Option::get_option_by_number(
			'inline',
			'smaller',
			80
		);
		$options['smallerSP'] = Option::get_option_by_number(
			'inline',
			'smaller_sp',
			80
		);

		return $options;
	}
}
