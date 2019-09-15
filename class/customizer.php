<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

/**
 * Class Ystandard_Blocks_Customizer
 */
class Ystandard_Blocks_Customizer {

	/**
	 * 設定追加するパネル名
	 */
	const PANEL_NAME = 'ys_customizer_panel_extension';

	/**
	 * Ystandard_Blocks_Customizer constructor.
	 */
	public function __construct() {

	}

	/**
	 * カスタマイザー追加
	 */
	public function add_customizer() {
		if ( Ystandard_Blocks::is_ystandard() ) {
			add_filter( 'ys_customizer_add_extension', [ $this, 'customize_register' ], 11 );
		}
	}

	/**
	 * 設定反映CSS作成
	 *
	 * @param string $wrap ラッパーセレクター.
	 *
	 * @return string
	 */
	public static function get_inline_style_css( $wrap = '' ) {
		$css = '';
		for ( $i = 1; $i <= 3; $i ++ ) {
			$style  = '';
			$option = self::get_inline_style_option( $i );
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
			 * マーカー
			 */
			if ( 0 < $option['mark_weight'] ) {
				$weight = ( 100 - $option['mark_weight'] ) . '%';
				$style  .= sprintf(
					'background: linear-gradient(transparent %s, rgba(%s, 0.5) %s);background-position-y: -0.2em;',
					$weight,
					implode( ',', $option['mark_color'] ),
					$weight
				);
			}
			/**
			 * 装飾
			 */
			if ( 'bold' === $option['type'] ) {
				$style .= 'font-weight: bold;';
			}
			if ( 'italic' === $option['type'] ) {
				$style .= 'font-style: italic;';
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

		return $css;
	}

	/**
	 * 編集画面用CSS
	 *
	 * @return string
	 */
	public static function get_editor_button_css() {
		$css = '';
		for ( $i = 1; $i <= 3; $i ++ ) {
			$style  = '';
			$option = self::get_inline_style_option( $i );
			/**
			 * 文字サイズ
			 */
			if ( 1.5 < $option['fz'] ) {
				$option['fz'] = 1.5;
			}
			$style .= sprintf(
				'transform: scale(%s);',
				$option['fz']
			);
			/**
			 * 文字色
			 */
			if ( $option['color'] ) {
				$style .= sprintf( 'fill:%s;', $option['color'] );
			}
			/**
			 * マーカー
			 */
			if ( 0 < $option['mark_weight'] ) {
				$weight = ( 100 - $option['mark_weight'] ) . '%';
				$style  .= sprintf(
					'background: linear-gradient(transparent %s, rgba(%s, 0.5) %s);background-position-y: -0.2em;',
					$weight,
					implode( ',', $option['mark_color'] ),
					$weight
				);
			} else {
				$style .= 'background: none';
			}
			$selector = '.editor-styles-wrapper .ystdb-inline-style-toolbar.inline-style-' . $i . ' svg';

			/**
			 * CSS作成
			 */
			$css .= sprintf(
				'%s{%s}',
				$selector,
				$style
			);
		}

		return $css;
	}

	/**
	 * インラインスタイル設定取得
	 *
	 * @param int $index 番号(1~3).
	 *
	 * @return array
	 */
	public static function get_inline_style_option( $index ) {
		/**
		 * 文字拡大率
		 */
		$fz = Ystandard_Blocks_Options::get_option( 'inline_style_fz_' . $index );
		$fz = ( $fz / 100 );
		/**
		 * 文字色
		 */
		$color   = Ystandard_Blocks_Options::get_option( 'inline_style_color_' . $index );
		$default = Ystandard_Blocks_Options::get_default_option( 'inline_style_color_' . $index );
		if ( $default === $color ) {
			$color = '';
		}
		/**
		 * マーカー
		 */
		$mark_weight = Ystandard_Blocks_Options::get_option( 'inline_style_mark_weight_' . $index );
		$mark_color  = Ystandard_Blocks_Options::hex_2_rgb(
			Ystandard_Blocks_Options::get_option( 'inline_style_mark_color_' . $index )
		);
		/**
		 * タイプ
		 */
		$type = Ystandard_Blocks_Options::get_option( 'inline_style_type_' . $index );

		return [
			'fz'          => $fz,
			'color'       => $color,
			'mark_weight' => $mark_weight,
			'mark_color'  => $mark_color,
			'type'        => $type,
		];
	}

	/**
	 * カスタマイザー追加
	 *
	 * @param WP_Customize_Manager $wp_customize wp_customize.
	 *
	 * @return WP_Customize_Manager
	 */
	public function customize_register( $wp_customize ) {
		$ys_customizer = new YS_Customizer( $wp_customize );
		/**
		 * セクション追加
		 */
		$ys_customizer->add_section(
			[
				'section'     => 'ystdb_inline_style',
				'title'       => '[ys blocks]インラインスタイル設定',
				'panel'       => self::PANEL_NAME,
				'description' => 'yStandard Blocks: インライン装飾の設定<br><br><strong>※設定後再読み込みするとプレビュー画面に反映されます。</strong><br><br>',
			]
		);
		$ystdb_opt = new Ystandard_Blocks_Options();
		for ( $i = 1; $i <= 3; $i ++ ) {
			/**
			 * ラベル
			 */
			$ys_customizer->add_label(
				[
					'id'      => $ystdb_opt->get_option_name( 'inline_style_label_' . $i ),
					'label'   => '■「[ys]インラインスタイル ' . $i . '」の設定',
					'section' => 'ystdb_inline_style',
				]
			);
			/**
			 * 文字サイズ（相対）
			 */
			$ys_customizer->add_number(
				[
					'id'          => $ystdb_opt->get_option_name( 'inline_style_fz_' . $i ),
					'default'     => $ystdb_opt->get_default_option( 'inline_style_fz_' . $i ),
					'label'       => '文字サイズ(%)',
					'description' => '文字サイズ設定。拡大・縮小率を60~200の間で設定してください。',
					'section'     => 'ystdb_inline_style',
					'transport'   => 'postMessage',
					'input_attrs' => [
						'min'  => 60,
						'max'  => 200,
						'step' => 10,
					],
				]
			);
			/**
			 * 文字色
			 */
			$ys_customizer->add_color(
				[
					'id'        => $ystdb_opt->get_option_name( 'inline_style_color_' . $i ),
					'default'   => $ystdb_opt->get_default_option( 'inline_style_color_' . $i ),
					'label'     => '文字色',
					'section'   => 'ystdb_inline_style',
					'transport' => 'postMessage',
				]
			);
			/**
			 * マーカー色
			 */
			$ys_customizer->add_color(
				[
					'id'        => $ystdb_opt->get_option_name( 'inline_style_mark_color_' . $i ),
					'default'   => $ystdb_opt->get_default_option( 'inline_style_mark_color_' . $i ),
					'label'     => 'マーカー色',
					'section'   => 'ystdb_inline_style',
					'transport' => 'postMessage',
				]
			);
			/**
			 * マーカー太さ
			 */
			$ys_customizer->add_number(
				[
					'id'          => $ystdb_opt->get_option_name( 'inline_style_mark_weight_' . $i ),
					'default'     => $ystdb_opt->get_default_option( 'inline_style_mark_weight_' . $i ),
					'label'       => 'マーカー太さ(%)',
					'description' => 'マーカー（蛍光ペン風）の太さ設定。0~100の間で設定してください。<br>0にするとマーカー表示がOFFになります。',
					'section'     => 'ystdb_inline_style',
					'transport'   => 'postMessage',
					'input_attrs' => [
						'min' => 0,
						'max' => 100,
					],
				]
			);
			/**
			 * スタイル
			 */
			$ys_customizer->add_radio(
				[
					'id'        => $ystdb_opt->get_option_name( 'inline_style_type_' . $i ),
					'default'   => $ystdb_opt->get_default_option( 'inline_style_type_' . $i ),
					'label'     => '装飾タイプ',
					'section'   => 'ystdb_inline_style',
					'transport' => 'postMessage',
					'choices'   => [
						'normal' => '装飾なし',
						'bold'   => '太字',
						'italic' => '斜体',
					],
				]
			);
		}

		return $wp_customize;
	}
}