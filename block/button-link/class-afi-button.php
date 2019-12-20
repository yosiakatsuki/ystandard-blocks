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
					'backgroundColor'       => [
						'type' => 'string',
					],
					'textColor'             => [
						'type' => 'string',
					],
					'customBackgroundColor' => [
						'type' => 'string',
					],
					'customTextColor'       => [
						'type' => 'string',
					],
					'icon'                  => [
						'type' => 'string',
					],
					'align'                 => [
						'type' => 'string',
					],
					'buttonType'            => [
						'type' => 'string',
					],
					'customIcon'            => [
						'type' => 'string',
					],
					'iconPosition'          => [
						'type'    => 'string',
						'default' => 'right',
					],
					'buttonSize'            => [
						'type'    => 'string',
						'default' => '',
					],
					'fontSize'              => [
						'type'    => 'string',
						'default' => '',
					],
					'customFontSize'        => [
						'type' => 'integer',
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
