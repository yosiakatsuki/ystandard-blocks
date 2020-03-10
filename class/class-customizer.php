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
 * Class Customizer
 */
class Customizer {

	/**
	 * Customizer constructor.
	 */
	public function __construct() {

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
				$style .= self::get_marker_style(
					$option['mark_color'],
					$option['mark_weight'],
					$option['mark_opacity']
				);
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
				$style .= self::get_marker_style(
					$option['mark_color'],
					$option['mark_weight'],
					$option['mark_opacity']
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
	 * 吹き出し用設定取得
	 */
	public static function get_balloon_images() {
		$result = [];
		for ( $i = 1; $i <= 6; $i ++ ) {
			$image = Options::get_option( 'balloon_image_' . $i );
			$name  = Options::get_option( 'balloon_name_' . $i );
			if ( ! empty( $image ) ) {
				$id       = attachment_url_to_postid( $image );
				$result[] = [
					'url'  => $image,
					'id'   => $id,
					'name' => $name,
				];
			}
		}

		return $result;
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
		$fz = Options::get_option( 'inline_style_fz_' . $index );
		$fz = ( $fz / 100 );
		/**
		 * 文字色
		 */
		$color   = Options::get_option( 'inline_style_color_' . $index );
		$default = Options::get_default_option( 'inline_style_color_' . $index );
		if ( $default === $color ) {
			$color = '';
		}
		/**
		 * マーカー
		 */
		$mark_weight  = Options::get_option( 'inline_style_mark_weight_' . $index );
		$mark_color   = Options::hex_2_rgb(
			Options::get_option( 'inline_style_mark_color_' . $index )
		);
		$mark_opacity = Options::get_option_by_number( 'inline_style_mark_opacity_' . $index ) / 100;
		/**
		 * タイプ
		 */
		$type = Options::get_option( 'inline_style_type_' . $index );

		return [
			'fz'           => $fz,
			'color'        => $color,
			'mark_weight'  => $mark_weight,
			'mark_color'   => $mark_color,
			'mark_opacity' => $mark_opacity,
			'type'         => $type,
		];
	}

	/**
	 * カスタマイザー追加
	 *
	 * @param WP_Customize_Manager $wp_customize wp_customize.
	 *
	 * @return WP_Customize_Manager
	 */
	public static function ystdb_customize_register( $wp_customize ) {
		$ys_customizer = new \YS_Customizer( $wp_customize );

		/**
		 * インライン装飾設定追加
		 */
		self::add_inline_style_settings( $ys_customizer );

		/**
		 * 吹き出し画像登録
		 */
		self::add_balloon_images( $ys_customizer );

		return $wp_customize;
	}

	/**
	 * インライン装飾設定追加
	 *
	 * @param \YS_Customizer $ys_customizer カスタマイザー.
	 */
	public static function add_inline_style_settings( $ys_customizer ) {
		/**
		 * セクション追加
		 */
		$ys_customizer->add_section(
			[
				'section'     => 'ystdb_inline_style',
				'title'       => '[ys blocks]インラインスタイル設定',
				'panel'       => 'ys_customizer_panel_extension',
				'description' => 'yStandard Blocks: インライン装飾の設定<br><br><strong>※設定後再読み込みするとプレビュー画面に反映されます。</strong><br><br>',
			]
		);
		$ystdb_opt = new Options();
		for ( $i = 1; $i <= 3; $i ++ ) {
			/**
			 * ラベル
			 */
			$ys_customizer->add_label(
				[
					'id'      => $ystdb_opt->get_option_name( 'inline_style_label_' . $i ),
					'label'   => '[ys]インラインスタイル ' . $i,
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
			 * マーカー不透明度
			 */
			$ys_customizer->add_number(
				[
					'id'          => $ystdb_opt->get_option_name( 'inline_style_mark_opacity_' . $i ),
					'default'     => $ystdb_opt->get_default_option( 'inline_style_mark_opacity_' . $i ),
					'label'       => 'マーカー色の不透明度',
					'section'     => 'ystdb_inline_style',
					'transport'   => 'postMessage',
					'input_attrs' => [
						'min'  => 0,
						'max'  => 100,
						'step' => 10,
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
	}

	/**
	 * 吹き出しで使用する画像の設定追加
	 *
	 * @param \YS_Customizer $ys_customizer カスタマイザー.
	 */
	public static function add_balloon_images( $ys_customizer ) {
		/**
		 * セクション追加
		 */
		$ys_customizer->add_section(
			[
				'section'     => 'ystdb_balloon_images',
				'title'       => '[ys blocks]吹き出しブロック画像設定',
				'panel'       => 'ys_customizer_panel_extension',
				'description' => 'yStandard Blocks: 吹き出しブロックでよく使う画像を登録して簡単に使えるようにします。',
			]
		);
		$ystdb_opt = new Options();
		for ( $i = 1; $i <= 6; $i ++ ) {
			/**
			 * ラベル
			 */
			$ys_customizer->add_label(
				[
					'id'      => $ystdb_opt->get_option_name( 'balloon_image_label' . $i ),
					'label'   => '吹き出しブロック画像 ' . $i,
					'section' => 'ystdb_balloon_images',
				]
			);
			/**
			 * 画像
			 */
			$ys_customizer->add_image(
				[
					'id'        => $ystdb_opt->get_option_name( 'balloon_image_' . $i ),
					'label'     => '画像',
					'section'   => 'ystdb_balloon_images',
					'default'   => Options::get_default_option( 'balloon_image_' . $i ),
					'transport' => 'postMessage',
				]
			);
			/**
			 * 名前
			 */
			$ys_customizer->add_text(
				[
					'id'        => $ystdb_opt->get_option_name( 'balloon_name_' . $i ),
					'label'     => '名前',
					'section'   => 'ystdb_balloon_images',
					'default'   => Options::get_default_option( 'balloon_name_' . $i ),
					'transport' => 'postMessage',
				]
			);
		}
	}
}
