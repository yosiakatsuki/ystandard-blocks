<?php
/**
 * Helper
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

/**
 * Class Helper
 */
class Helper {
	/**
	 * Parse Block.
	 *
	 * @param string $content content.
	 *
	 * @return array
	 */
	public function parse( $content ) {
		global $wp_version;

		return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
	}
}
