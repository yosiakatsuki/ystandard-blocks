<?php
/**
 * Custom Heading Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Styles;

defined( 'ABSPATH' ) || die();

/**
 * Custom Heading Block Class
 */
class Custom_Heading_Block {

	const BLOCK_NAME = 'ystdb/custom-heading';

	/**
	 * Instance.
	 *
	 * @var Custom_Heading_Block
	 */
	private static $instance;

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'init', [ $this, 'register_block' ], 100 );
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_responsive_style' ] );
		add_filter( 'block_bindings_supported_attributes_' . self::BLOCK_NAME, [ $this, 'add_block_bindings_supported_attributes' ] );
	}

	/**
	 * Instance.
	 *
	 * @return Custom_Heading_Block
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
		$selector   = '.ystdb-custom-heading';
		$css        = '';
		foreach ( $types as $type ) {
			// フォントサイズ.
			$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
				[
					'selector'  => $selector,
					'prop_name' => 'heading--font-size',
					'property'  => 'font-size',
					'type'      => $type,
				]
			);
		}

		// 結合.
		$css .= Styles::add_media_query_desktop( $responsive['desktop'] );
		$css .= Styles::add_media_query_tablet( $responsive['tablet'] );
		$css .= Styles::add_media_query_mobile( $responsive['mobile'] );

		$handle = 'ystdb-custom-heading-block-responsive';
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

	/**
	 * Block Bindings 対応属性を追加.
	 *
	 * @param array $supported_attributes 対応済み属性.
	 *
	 * @return array
	 */
	public function add_block_bindings_supported_attributes( $supported_attributes ) {
		$attributes = [ 'content' ];

		return array_values( array_unique( array_merge( $supported_attributes, $attributes ) ) );
	}
}


Custom_Heading_Block::get_instance();
