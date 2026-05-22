<?php
/**
 * Format Type Toolbar Buttons
 *
 * @package yStandard_blocks
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Format Type Toolbar Buttons.
 */
class Format_Type_Toolbar_Buttons {

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

new Format_Type_Toolbar_Buttons();
