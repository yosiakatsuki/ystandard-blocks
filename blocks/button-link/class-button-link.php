<?php
/**
 * リンク型ボタン
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;
/**
 * Class Afi_Button
 */
class Button_Link extends Dynamic_Block {

	protected $block_name = 'btn-link';
	protected $script_name = 'ystandard-blocks-button-link';
	protected $block_attributes = [
		'content'               => [
			'type' => 'string',
		],
		'borderRadius'          => [
			'type' => 'number',
		],
		'iconLeft'              => [
			'type' => 'string',
		],
		'iconSizeLeft'          => [
			'type' => 'string',
		],
		'iconRight'             => [
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
			'type' => 'integer',
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
	 * @param array $attributes block attributes.
	 *
	 * @return string
	 */
	public function render( $attributes ) {
		return $this->render_by_view( 'button-link', $attributes );
	}
}

$button_link = new Button_Link();
$button_link->register_block();
