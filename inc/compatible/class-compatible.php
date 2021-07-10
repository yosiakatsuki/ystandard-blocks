<?php
/**
 * Compatible
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Compatible
 *
 * @package ystandard_blocks
 */
class Compatible {

	/**
	 * Compatible constructor.
	 */
	public function __construct() {
		$this->compatible_5_8();
	}

	/**
	 * WordPress 5.8 下位互換
	 */
	private function compatible_5_8() {
		if ( version_compare( get_bloginfo( 'version' ), '5.8-alpha-1', '>=' ) ) {
			return;
		}
		add_filter( 'block_categories', [ '\ystandard_blocks\Init', 'add_block_categories' ] );
	}
}

new Compatible();
