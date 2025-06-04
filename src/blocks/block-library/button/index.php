<?php
/**
 * Custom Button Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Styles;

defined( 'ABSPATH' ) || die();

/**
 * Class Button Block.
 */
class Button_Block {

	const BLOCK_NAME = 'ystdb/custom-button';

	/**
	 * Instance.
	 *
	 * @var Button_Block
	 */
	private static $instance;

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
	 * @return Button_Block
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * レスポンシブ用CSS出力.
	 *
	 * @return void
	 */
	public function enqueue_responsive_style() {
		$types      = [ 'desktop', 'tablet', 'mobile' ];
		$responsive = [
			'desktop' => '',
			'tablet'  => '',
			'mobile'  => '',
		];
		$selector   = '.ystdb-custom-button__link';
		$css        = '';
		// 初期化.
		foreach ( $types as $type ) {
			// フォントサイズ.
			$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
				[
					'selector'  => $selector,
					'prop_name' => 'button--font-size',
					'property'  => 'font-size',
					'type'      => $type,
				]
			);
			// 幅.
			$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
				[
					'selector'  => $selector,
					'prop_name' => 'button--width',
					'property'  => 'width',
					'type'      => $type,
				]
			);
			// 余白.
			foreach ( [ 'top', 'right', 'bottom', 'left' ] as $pos ) {
				$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
					[
						'selector'  => $selector,
						'prop_name' => "button--padding-{$pos}",
						'property'  => "padding-{$pos}",
						'type'      => $type,
					]
				);
			}
		}

		// 結合.
		$css .= Styles::add_media_query_desktop( $responsive['desktop'] );
		$css .= Styles::add_media_query_tablet( $responsive['tablet'] );
		$css .= Styles::add_media_query_mobile( $responsive['mobile'] );

		$handle = 'ystdb-custom-button-block-responsive';
		wp_register_style( $handle, false );
		wp_add_inline_style( $handle, $css );
		wp_enqueue_style( $handle );
	}

	/**
	 * ブロック登録
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type( __DIR__ );
	}
}

Button_Block::get_instance();
