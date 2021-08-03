<?php
/**
 * リンク型ボタン
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class SVG_Button_Link
 *
 * @package ystandard_blocks
 */
class SVG_Button_Link extends Dynamic_Block {

	/**
	 * Block Name.
	 *
	 * @var string
	 */
	protected $block_name = 'svg-button-link';
	/**
	 * Script Handle.
	 *
	 * @var string
	 */
	protected $script_name = 'ystandard-blocks-svg-button-link';
	/**
	 * Block Attributes.
	 *
	 * @var array
	 */
	protected $block_attributes = [
		'className'             => [
			'type' => 'string',
		],
		'content'               => [
			'type' => 'string',
		],
		'borderRadius'          => [
			'type' => 'number',
		],
		'iconLeft'              => [
			'type' => 'string',
		],
		'iconLeftSVG'           => [
			'type' => 'string',
		],
		'iconSizeLeft'          => [
			'type' => 'string',
		],
		'iconRight'             => [
			'type' => 'string',
		],
		'iconRightSVG'          => [
			'type' => 'string',
		],
		'iconSizeRight'         => [
			'type' => 'string',
		],
		'align'                 => [
			'type' => 'string',
		],
		'backgroundColor'       => [
			'type' => 'string',
		],
		'customBackgroundColor' => [
			'type' => 'string',
		],
		'textColor'             => [
			'type' => 'string',
		],
		'customTextColor'       => [
			'type' => 'string',
		],
		'fontSize'              => [
			'type' => 'string',
		],
		'customFontSize'        => [
			'type' => 'string',
		],
		'paddingType'           => [
			'type' => 'string',
		],
		'buttonType'            => [
			'type' => 'string',
		],
		'maxWidth'              => [
			'type' => 'number',
		],
		'maxUnit'               => [
			'type' => 'string',
		],
		'animationType'         => [
			'type' => 'string',
		],
		'animationInterval'     => [
			'type' => 'number',
		],
	];

	/**
	 * Render
	 *
	 * @param array  $attributes block attributes.
	 * @param string $content    innerBlocks content.
	 *
	 * @return string
	 */
	public function render( $attributes, $content = null ) {
		return $this->render_by_view( 'svg-button-link', $attributes );
	}
}

$svg_button_link = new SVG_Button_Link();
$svg_button_link->register_block();
