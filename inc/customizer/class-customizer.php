<?php
/**
 * Customizer
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Customizer
 */
class Customizer {

	/**
	 * Customizer constructor.
	 */
	public function __construct() {
		/**
		 * カスタマイザー追加
		 */
		if ( Utility::is_ystandard() ) {
			add_action( 'customize_register', [ $this, 'customize_register' ], 11 );
		}
	}


	/**
	 * カスタマイザー追加
	 *
	 * @param \WP_Customize_Manager $wp_customize wp_customize.
	 *
	 * @return \WP_Customize_Manager
	 */
	public function customize_register( $wp_customize ) {
		require_once __DIR__ . '/class-section-label-control.php';
		require_once __DIR__ . '/class-customize-control.php';
		$customizer = new Customize_Control( $wp_customize );
		/**
		 * インライン装飾設定追加
		 */
		$this->add_inline_style_settings( $customizer );

		/**
		 * 吹き出し画像登録
		 */
		$this->add_balloon_images( $customizer );

		/**
		 * パネルの位置調整
		 */
		$wp_customize->get_panel( $this->get_panel_name() )->priority = 9999;

		return $wp_customize;
	}

	/**
	 * セクションを追加するパネル名を取得
	 *
	 * @return string
	 */
	private function get_panel_name() {
		$theme_version = Utility::get_theme_version( true );
		if ( version_compare( '4.0.0-alpha-1', $theme_version, '>' ) ) {
			return 'ys_customizer_panel_extension';
		}

		return 'ys_extension';
	}

	/**
	 * インライン装飾設定追加
	 *
	 * @param Customize_Control $customizer カスタマイザー.
	 */
	public function add_inline_style_settings( $customizer ) {
		/**
		 * セクション追加
		 */
		$customizer->add_section(
			[
				'section'     => 'ystdb_inline_style',
				'title'       => '[ys blocks]インラインスタイル設定',
				'panel'       => $this->get_panel_name(),
				'description' => 'yStandard Blocks: インライン装飾の設定<br><br><strong>※設定後再読み込みするとプレビュー画面に反映されます。</strong><br><br>',
			]
		);
		$ystdb_opt = new Option();
		for ( $i = 1; $i <= 3; $i ++ ) {
			$customizer->add_section_label( '[ys]インラインスタイル ' . $i );
			/**
			 * 文字サイズ（相対）
			 */
			$customizer->add_number(
				[
					'id'          => $ystdb_opt->get_option_name( 'inline_style_fz_' . $i ),
					'default'     => $ystdb_opt->get_default_option( 'inline_style_fz_' . $i, 100 ),
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
			$customizer->add_color(
				[
					'id'        => $ystdb_opt->get_option_name( 'inline_style_color_' . $i ),
					'default'   => $ystdb_opt->get_default_option( 'inline_style_color_' . $i, '#222222' ),
					'label'     => '文字色',
					'section'   => 'ystdb_inline_style',
					'transport' => 'postMessage',
				]
			);
			/**
			 * マーカー色
			 */
			$customizer->add_color(
				[
					'id'        => $ystdb_opt->get_option_name( 'inline_style_mark_color_' . $i ),
					'default'   => $ystdb_opt->get_default_option( 'inline_style_mark_color_' . $i, Format::MARKER_DEFAULT_COLOR[ $i ] ),
					'label'     => 'マーカー色',
					'section'   => 'ystdb_inline_style',
					'transport' => 'postMessage',
				]
			);
			/**
			 * マーカー太さ
			 */
			$customizer->add_number(
				[
					'id'          => $ystdb_opt->get_option_name( 'inline_style_mark_weight_' . $i ),
					'default'     => $ystdb_opt->get_default_option( 'inline_style_mark_weight_' . $i, 25 ),
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
			$customizer->add_number(
				[
					'id'          => $ystdb_opt->get_option_name( 'inline_style_mark_opacity_' . $i ),
					'default'     => $ystdb_opt->get_default_option( 'inline_style_mark_opacity_' . $i, 30 ),
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
			$customizer->add_radio(
				[
					'id'        => $ystdb_opt->get_option_name( 'inline_style_type_' . $i ),
					'default'   => $ystdb_opt->get_default_option( 'inline_style_type_' . $i, 'normal' ),
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
		/**
		 * 少し大きく・少し小さく
		 */
		$customizer->add_section_label( '[ys]少し大きく' );
		$customizer->add_number(
			[
				'id'          => $ystdb_opt->get_option_name( 'inline_style_larger' ),
				'default'     => $ystdb_opt->get_default_option( 'inline_style_larger', 120 ),
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
		$customizer->add_section_label( '[ys]少し小さく' );
		$customizer->add_number(
			[
				'id'          => $ystdb_opt->get_option_name( 'inline_style_smaller' ),
				'default'     => $ystdb_opt->get_default_option( 'inline_style_smaller', 80 ),
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
		 * スマートフォンで少し大きく・少し小さく
		 */
		$customizer->add_section_label( '[ys]少し大きく(SP)' );
		$customizer->add_number(
			[
				'id'          => $ystdb_opt->get_option_name( 'inline_style_larger_sp' ),
				'default'     => $ystdb_opt->get_default_option( 'inline_style_larger_sp', 120 ),
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
		$customizer->add_section_label( '[ys]少し小さく(SP)' );
		$customizer->add_number(
			[
				'id'          => $ystdb_opt->get_option_name( 'inline_style_smaller_sp' ),
				'default'     => $ystdb_opt->get_default_option( 'inline_style_smaller_sp', 80 ),
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
	}

	/**
	 * 吹き出しで使用する画像の設定追加
	 *
	 * @param Customize_Control $customizer カスタマイザー.
	 */
	public function add_balloon_images( $customizer ) {
		/**
		 * セクション追加
		 */
		$customizer->add_section(
			[
				'section'     => 'ystdb_balloon_images',
				'title'       => '[ys blocks]吹き出しブロック画像設定',
				'panel'       => $this->get_panel_name(),
				'description' => 'yStandard Blocks: 吹き出しブロックでよく使う画像を登録して簡単に使えるようにします。',
			]
		);
		$ystdb_opt = new Option();
		for ( $i = 1; $i <= 30; $i ++ ) {
			/**
			 * ラベル
			 */
			$customizer->add_section_label( '吹き出しブロック画像 ' . $i );
			/**
			 * 画像
			 */
			$customizer->add_image(
				[
					'id'        => $ystdb_opt->get_option_name( 'balloon_image_' . $i ),
					'label'     => '画像',
					'section'   => 'ystdb_balloon_images',
					'default'   => $ystdb_opt->get_default_option( 'balloon_image_' . $i, '' ),
					'transport' => 'postMessage',
				]
			);
			/**
			 * 名前
			 */
			$customizer->add_text(
				[
					'id'        => $ystdb_opt->get_option_name( 'balloon_name_' . $i ),
					'label'     => '名前',
					'section'   => 'ystdb_balloon_images',
					'default'   => $ystdb_opt->get_default_option( 'balloon_name_' . $i, '' ),
					'transport' => 'postMessage',
				]
			);
		}
	}
}

new Customizer();
