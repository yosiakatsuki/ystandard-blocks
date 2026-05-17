<?php
/**
 * Custom Heading Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Custom Heading Block.
 */
class Heading_Block {

	const BLOCK_NAME = 'ystdb/heading';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_block' ] );
		add_filter( 'block_bindings_supported_attributes_' . self::BLOCK_NAME, [ $this, 'add_block_bindings_supported_attributes' ] );
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
		$attributes = [ 'content', 'subText' ];

		return array_values( array_unique( array_merge( $supported_attributes, $attributes ) ) );
	}
}

new Heading_Block();
