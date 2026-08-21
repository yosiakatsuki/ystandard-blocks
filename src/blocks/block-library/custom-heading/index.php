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
		add_filter( 'render_block', [ $this, 'move_fit_text_attributes_to_heading' ], 20, 2 );
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
		// プリセットの !important 指定よりレスポンシブ値を優先するため、詳細度を 0.1.1 にする.
		$selector = ':is(h1,h2,h3,h4,h5,h6).ystdb-custom-heading';
		$css      = '';
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
			// 余白.
			foreach ( [ 'top', 'right', 'bottom', 'left' ] as $pos ) {
				$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
					[
						'selector'  => $selector,
						'prop_name' => "custom-heading--margin-{$pos}",
						'property'  => "margin-{$pos}",
						'type'      => $type,
					]
				);
				$responsive[ $type ] .= Styles::get_responsive_custom_prop_css(
					[
						'selector'  => $selector,
						'prop_name' => "custom-heading--padding-{$pos}",
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
	 * テキスト合わせ用の属性をhgroupから見出しへ移動.
	 *
	 * @param string $block_content ブロックHTML.
	 * @param array  $block         ブロック情報.
	 *
	 * @return string
	 */
	public function move_fit_text_attributes_to_heading( $block_content, $block ) {
		// コアのfit text処理より後に動かすため、共通フック上で対象ブロックだけを処理する.
		if ( self::BLOCK_NAME !== ( $block['blockName'] ?? '' ) ) {
			return $block_content;
		}

		// サブテキストなしでは見出し自体がルート要素なので、コアの出力をそのまま使う.
		if ( empty( $block['attrs']['fitText'] ) || empty( $block['attrs']['hasSubText'] ) ) {
			return $block_content;
		}

		$processor = new \WP_HTML_Tag_Processor( $block_content );

		// 保存HTMLが想定構造でない場合は、内容を壊さないように変更を中断する.
		if ( ! $processor->next_tag( 'HGROUP' ) ) {
			return $block_content;
		}

		$attribute_names  = [
			'data-wp-interactive',
			'data-wp-context---core-fit-text',
			'data-wp-init---core-fit-text',
			'data-wp-style--font-size',
		];
		$attribute_values = [];

		foreach ( $attribute_names as $attribute_name ) {
			$attribute_values[ $attribute_name ] = $processor->get_attribute( $attribute_name );
			$processor->remove_attribute( $attribute_name );
		}

		// hgroup直下の最初の要素が見出しでない場合は、別要素への誤適用を避ける.
		if ( ! $processor->next_tag() || ! in_array( $processor->get_tag(), [ 'H1', 'H2', 'H3', 'H4', 'H5', 'H6' ], true ) ) {
			return $block_content;
		}

		foreach ( $attribute_values as $attribute_name => $attribute_value ) {
			// コアが出力した属性だけを移し、未対応バージョンでは新しい属性を追加しない.
			if ( null !== $attribute_value ) {
				$processor->set_attribute( $attribute_name, $attribute_value );
			}
		}

		return $processor->get_updated_html();
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
