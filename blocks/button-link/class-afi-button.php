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
class Afi_Button extends Dynamic_Block {
	/**
	 * Afi_Button constructor.
	 */
	function __construct() {
		register_block_type(
			'ystdb/btn-link',
			[
				'editor_script'   => 'ystandard-blocks-button-link',
				'attributes'      => [
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
				],
				'render_callback' => function ( $attributes ) {
					return $this->render( 'button-link', $attributes );
				},
			]
		);
	}
}

new Afi_Button();
