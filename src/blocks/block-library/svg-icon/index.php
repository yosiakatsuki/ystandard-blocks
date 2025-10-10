<?php
/**
 * SVG Icon Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Styles;

defined( 'ABSPATH' ) || die();

/**
 * Class Svg_Icon_Block.
 */
class Svg_Icon_Block {
	/**
	 * Instance.
	 *
	 * @var Svg_Icon_Block
	 */
	private static Svg_Icon_Block $instance;

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'init', [ $this, 'register_block' ], 100 );
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_responsive_style' ] );
	}

	/**
	 * Instance.
	 *
	 * @return Svg_Icon_Block
	 */
	public static function get_instance(): Svg_Icon_Block {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * ブロック登録
	 *
	 * @return void
	 */
	public function register_block(): void {
		register_block_type( __DIR__ );
	}

	/**
	 * レスポンシブ用CSS出力.
	 *
	 * @return void
	 */
	public function enqueue_responsive_style(): void {
		$types      = [ 'desktop', 'tablet', 'mobile' ];
		$responsive = [
			'desktop' => '',
			'tablet'  => '',
			'mobile'  => '',
		];
		$selector   = '.ystdb-icon__wrap';
		$css        = '';
		// 初期化.
		foreach ( $types as $type ) {
			// フォントサイズ.
			$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
				[
					'selector'  => $selector,
					'prop_name' => 'icon--font-size',
					'property'  => 'font-size',
					'type'      => $type,
				]
			);
		}

		// 結合.
		$css .= Styles::add_media_query_desktop( $responsive['desktop'] );
		$css .= Styles::add_media_query_tablet( $responsive['tablet'] );
		$css .= Styles::add_media_query_mobile( $responsive['mobile'] );

		$handle = 'ystdb-svg-icon-block-responsive';
		wp_register_style( $handle, false );
		wp_add_inline_style( $handle, $css );
		wp_enqueue_style( $handle );
	}
}

Svg_Icon_Block::get_instance();
