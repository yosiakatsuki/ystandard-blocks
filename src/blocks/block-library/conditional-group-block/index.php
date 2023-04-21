<?php
/**
 * Conditional Group Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_Amp;

defined( 'ABSPATH' ) || die();

/**
 * Class Conditional Group Block.
 */
class Conditional_Group_Block_Block {

	/**
	 * ブロックパラメーター
	 *
	 * @var array
	 */
	private $block_attributes = [];

	/**
	 * クラス名
	 *
	 * @var array
	 */
	private $class_names = [];

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_block' ] );
		if ( ! shortcode_exists( 'ystdb_cgb' ) ) {
			add_shortcode( 'ystdb_cgb', [ $this, 'do_shortcode' ] );
		}
		$this->block_attributes = Block_Utility::get_block_attributes( __DIR__ );
	}

	/**
	 * ブロック登録
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type(
			__DIR__,
			[ 'render_callback' => [ $this, 'render' ] ]
		);
	}

	/**
	 * レンダリング
	 *
	 * @param array $attributes Attributes.
	 * @param mixed $content    Content.
	 *
	 * @return mixed|null
	 */
	public function render( $attributes, $content = null ) {
		$attributes = Block_Utility::parse_default( $attributes, $this->block_attributes );

		$this->class_names = [
			'ystdb-conditional-group',
			$attributes['className'],
		];
		/**
		 * デバイス別
		 */
		$this->device( $attributes );
		/**
		 * タクソノミー
		 */
		if ( ! $this->taxonomy( $attributes ) ) {
			return '';
		}

		/**
		 * AMP判定
		 */
		if ( ! $this->amp( $attributes ) ) {
			return '';
		}

		return sprintf(
			'<div class="%s"><div class="ystdb-conditional-group__inner">%s</div></div>',
			trim( implode( ' ', $this->class_names ) ),
			$content
		);
	}

	/**
	 * デバイス別
	 *
	 * @param array $attributes Attributes.
	 *
	 * @return void
	 */
	private function device( $attributes ) {
		$this->class_names[] = $attributes['hideSp'] ? 'ystdb-hide--sp' : '';
		$this->class_names[] = $attributes['hideMd'] ? 'ystdb-hide--md' : '';
		$this->class_names[] = $attributes['hideLg'] ? 'ystdb-hide--lg' : '';
	}

	/**
	 * タクソノミー
	 *
	 * @param array $attributes Attributes.
	 *
	 * @return bool
	 */
	private function taxonomy( $attributes ) {
		$filter_type     = $attributes['taxFilterType'];
		$filter_taxonomy = $attributes['taxonomy'];
		$filter_terms    = $attributes['terms'];
		// 設定がなければ絞り込みなし.
		if ( ! $filter_taxonomy || ! $filter_terms ) {
			return true;
		}
		// タームがついていないときの動作.
		$result = 'only' === $filter_type ? false : true;

		if ( ! is_singular() && ! is_tax() && ! is_category() && ! is_tag() ) {
			return $result;
		}
		global $post;
		$terms_ids = [];
		if ( is_tax() || is_category() || is_tag() ) {
			$term = get_queried_object();
			if ( $term ) {
				$terms_ids = [ $term->term_id ];
			}
		}
		if ( is_singular() ) {
			$terms = get_the_terms( $post, $filter_taxonomy );
			if ( $terms ) {
				$terms_ids = array_column( $terms, 'term_id' );
			}
		}

		foreach ( $filter_terms as $value ) {
			if ( in_array( $value, $terms_ids, true ) ) {
				return ! $result;
			}
		}

		return $result;
	}

	/**
	 * AMP
	 *
	 * @param array $attributes Attributes.
	 *
	 * @return bool
	 */
	private function amp( $attributes ) {
		if ( Helper_Amp::is_amp() && $attributes['hideAMP'] ) {
			return false;
		}
		if ( ! Helper_Amp::is_amp() && $attributes['onlyAMP'] ) {
			return false;
		}

		return true;
	}


	/**
	 * ショートコード実行
	 *
	 * @param array  $args    パラメーター.
	 * @param string $content コンテンツ.
	 *
	 * @return string
	 */
	public function do_shortcode( $args = [], $content = null ) {
		$args = shortcode_atts(
			$this->block_attributes,
			$args
		);

		return $this->render( $args, $content );
	}
}
new Conditional_Group_Block_Block();
