<?php
/**
 * Card Block.
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

require_once __DIR__ . '/class-card-block.php';

/**
 * Card ブロック登録ローダー.
 */
class Card_Block_Loader {

	const BLOCK_NAME               = 'ystdb/card';
	const LEGACY_YSTANDARD_VERSION = '4.99.99';

	/**
	 * Card_Block インスタンス.
	 *
	 * @var Card_Block|null
	 */
	private $card = null;

	/**
	 * Constructor.
	 */
	public function __construct() {
		// shortcode 登録などの副作用は Card_Block::__construct で行われるため
		// クラス読み込み時点で 1 度だけインスタンス化する.
		$this->card = new Card_Block();
		add_action( 'init', [ $this, 'register_block' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_card_style_for_legacy_ystandard' ] );
		add_filter( 'block_bindings_supported_attributes_' . self::BLOCK_NAME, [ $this, 'add_block_bindings_supported_attributes' ] );
	}

	/**
	 * ブロック登録.
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type(
			__DIR__,
			[ 'render_callback' => [ $this->card, '_render' ] ]
		);
	}

	/**
	 * 旧yStandard向けにカードブロック用CSSを全ページで読み込む.
	 *
	 * @return void
	 */
	public function enqueue_card_style_for_legacy_ystandard() {
		if ( ! $this->should_enqueue_card_style_for_legacy_ystandard() ) {
			return;
		}

		$block_type = \WP_Block_Type_Registry::get_instance()->get_registered( self::BLOCK_NAME );
		if ( $block_type && ! empty( $block_type->style_handles ) ) {
			foreach ( $block_type->style_handles as $style_handle ) {
				wp_enqueue_style( $style_handle );
			}

			return;
		}

		$style_path = __DIR__ . '/style-index.css';
		if ( ! is_file( $style_path ) ) {
			return;
		}

		wp_enqueue_style(
			'ystdb-card-style',
			str_replace( YSTDB_PATH, YSTDB_URL, $style_path ),
			[],
			filemtime( $style_path )
		);
	}

	/**
	 * 旧yStandard向けカードCSSを読み込むか判定.
	 *
	 * @return bool
	 */
	private function should_enqueue_card_style_for_legacy_ystandard() {
		if ( ! Utility::is_ystandard() ) {
			return false;
		}

		$theme_version = apply_filters( 'ys_ystandard_version', null );
		if ( is_null( $theme_version ) ) {
			$theme_version = Utility::get_theme_version( true );
		}

		if ( empty( $theme_version ) ) {
			return false;
		}

		return version_compare( $theme_version, self::LEGACY_YSTANDARD_VERSION, '<=' );
	}

	/**
	 * Block Bindings 対応属性を追加.
	 *
	 * @param array $supported_attributes 対応済み属性.
	 *
	 * @return array
	 */
	public function add_block_bindings_supported_attributes( $supported_attributes ) {
		$attributes = [ 'title', 'url', 'imageURL', 'imageAlt', 'dscr', 'caption' ];

		return array_values( array_unique( array_merge( $supported_attributes, $attributes ) ) );
	}
}

new Card_Block_Loader();
