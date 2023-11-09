<?php
/**
 * Kses
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Kses
 *
 * @package ystandard_blocks
 */
class Kses {

	/**
	 * Kses constructor.
	 */
	public function __construct() {
		add_filter( 'safe_style_css', [ $this, 'safe_style_css' ] );
	}

	/**
	 * List of allowed CSS attributes.
	 *
	 * @param string[] $attr Attr.
	 *
	 * @return string[]
	 */
	public function safe_style_css( $attr ) {
		$attr[] = 'opacity';

		return $attr;
	}
}

new Kses();
