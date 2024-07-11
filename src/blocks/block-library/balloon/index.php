<?php
/**
 * Balloon Block
 *
 * @package ystandard-blocks
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class balloon Block.
 */
class Balloon_Block {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_block' ] );
	}

	/**
	 * ブロック登録
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type( __DIR__ );
	}
}

new Balloon_Block();
