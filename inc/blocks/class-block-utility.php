<?php
/**
 * Block Utility.
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_Filesystem;

defined( 'ABSPATH' ) || die();

/**
 * Class Block_Utility.
 */
class Block_Utility {

	/**
	 * 初期値の解析
	 *
	 * @param array $attributes       Attributes.
	 * @param array $block_attributes Block Attributes.
	 *
	 * @return array
	 */
	public static function parse_default( $attributes, $block_attributes ) {
		foreach ( $block_attributes as $key => $item ) {
			if ( ! isset( $attributes[ $key ] ) ) {
				$attributes[ $key ] = isset( $item['default'] ) ? $item['default'] : null;
			}
			if ( isset( $item['type'] ) && 'bool' === $item['type'] ) {
				$attributes[ $key ] = Utility::to_bool( $attributes[ $key ] );
			}
		}

		return $attributes;
	}

	/**
	 * Get Block Attributes.
	 *
	 * @param string $dir  Directory.
	 * @param string $file File.
	 *
	 * @return array
	 */
	public static function get_block_attributes( $dir, $file = 'block.json' ) {
		$result   = [];
		$metadata = self::get_block_metadata( $dir, $file );
		if ( isset( $metadata['attributes'] ) ) {
			$result = $metadata['attributes'];
		}
		if ( isset( $metadata['supports']['className'] ) && ! isset( $result['className'] ) ) {
			$result['className'] = '';
		}

		return $result;
	}

	/**
	 * Get Block Metadata.
	 *
	 * @param string $dir  Directory.
	 * @param string $file File.
	 *
	 * @return array
	 */
	public static function get_block_metadata( $dir, $file = 'block.json' ) {
		$file_path = $dir . '/' . $file;
		if ( ! is_file( $file_path ) ) {
			return [];
		}
		$metadata = Helper_Filesystem::get_json_file_contents( $file_path );
		if ( ! is_array( $metadata ) ) {
			return [];
		}

		return $metadata;
	}
}
