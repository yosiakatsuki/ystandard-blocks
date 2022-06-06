<?php
/**
 * 条件付き
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_Amp;

defined( 'ABSPATH' ) || die();

/**
 * Class Conditional_Group_Block
 *
 * @package ystandard_blocks
 */
class Conditional_Group_Block_Block extends Dynamic_Block {
	/**
	 * Block Name.
	 *
	 * @var string
	 */
	protected $block_name = 'conditional-group-block';
	/**
	 * Script Handle.
	 *
	 * @var string
	 */
	protected $script_name = 'ystandard-blocks-conditional-group-block';
	/**
	 * Block Attributes.
	 *
	 * @var array
	 */
	protected $block_attributes = [
		'className'     => [
			'type'    => 'string',
			'default' => '',
		],
		'hideSp'        => [
			'type'    => 'boolean',
			'default' => false,
		],
		'hideMd'        => [
			'type'    => 'boolean',
			'default' => false,
		],
		'hideLg'        => [
			'type'    => 'boolean',
			'default' => false,
		],
		'hideAMP'       => [
			'type'    => 'boolean',
			'default' => false,
		],
		'taxFilterType' => [
			'type'    => 'string',
			'default' => 'only',
		],
		'taxonomy'      => [
			'type' => 'string',
		],
		'terms'         => [
			'type' => 'array',
		],
		'onlyAMP'       => [
			'type'    => 'boolean',
			'default' => false,
		],
	];

	/**
	 * Attributes.
	 *
	 * @var array
	 */
	private $attributes;


	/**
	 * Card constructor.
	 */
	function __construct() {
		if ( ! shortcode_exists( 'ystdb_cgb' ) ) {
			add_shortcode( 'ystdb_cgb', [ $this, 'do_shortcode' ] );
		}
	}

	/**
	 * Render
	 *
	 * @param array  $attributes block attributes.
	 * @param string $content    innerBlocks.
	 *
	 * @return false|string
	 */
	public function render( $attributes, $content = null ) {
		$this->attributes = $attributes;
		/**
		 * クラス作成
		 */
		$this->class_names = [
			'ystdb-conditional-group',
			$attributes['className'],
		];
		/**
		 * デバイス別
		 */
		$this->device();
		/**
		 * タクソノミー
		 */
		if ( ! $this->taxonomy() ) {
			return '';
		}
		/**
		 * AMP判定
		 */
		if ( ! $this->amp() ) {
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
	 * @return void
	 */
	private function device() {
		$this->class_names[] = $this->attributes['hideSp'] ? 'ystdb-hide--sp' : '';
		$this->class_names[] = $this->attributes['hideMd'] ? 'ystdb-hide--md' : '';
		$this->class_names[] = $this->attributes['hideLg'] ? 'ystdb-hide--lg' : '';
	}

	/**
	 * タクソノミー
	 *
	 * @return bool
	 */
	private function taxonomy() {
		$filter_type     = $this->attributes['taxFilterType'];
		$filter_taxonomy = $this->attributes['taxonomy'];
		$filter_terms    = $this->attributes['terms'];
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
	 * @return bool
	 */
	private function amp() {
		if ( Helper_Amp::is_amp() && $this->attributes['hideAMP'] ) {
			return false;
		}
		if ( ! Helper_Amp::is_amp() && $this->attributes['onlyAMP'] ) {
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

$cgb = new Conditional_Group_Block_Block();
$cgb->register_block();
