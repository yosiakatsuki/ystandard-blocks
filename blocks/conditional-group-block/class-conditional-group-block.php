<?php
/**
 * 条件付き
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

class Conditional_Group_Block extends Dynamic_Block {
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
		'className' => [
			'type'    => 'string',
			'default' => '',
		],
		'hideSp'    => [
			'type'    => 'boolean',
			'default' => false,
		],
		'hideMd'    => [
			'type'    => 'boolean',
			'default' => false,
		],
		'hideLg'    => [
			'type'    => 'boolean',
			'default' => false,
		],
		'hideAMP'   => [
			'type'    => 'boolean',
			'default' => false,
		],
		'onlyAMP'   => [
			'type'    => 'boolean',
			'default' => false,
		],
	];

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
	 * @param array $attributes block attributes.
	 *
	 * @return false|string
	 */
	public function render( $attributes, $content = null ) {
		/**
		 * クラス作成
		 */
		$class   = [
			'ystdb-conditional-group',
			$attributes['className']
		];
		$class[] = $attributes['hideSp'] ? 'ystdb-hide--sp' : '';
		$class[] = $attributes['hideMd'] ? 'ystdb-hide--md' : '';
		$class[] = $attributes['hideLg'] ? 'ystdb-hide--lg' : '';
		/**
		 * AMP判定
		 */
		if ( Main::is_amp() && $attributes['hideAMP'] ) {
			return '';
		}
		if ( ! Main::is_amp() && $attributes['onlyAMP'] ) {
			return '';
		}

		return sprintf(
			'<div class="%s"><div class="wp-block-group__inner-container ystdb-conditional-group__inner">%s</div></div>',
			trim( implode( ' ', $class ) ),
			$content
		);

	}

	/**
	 * ショートコード実行
	 *
	 * @param array $args パラメーター.
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

$cgb = new Conditional_Group_Block();
$cgb->register_block();
