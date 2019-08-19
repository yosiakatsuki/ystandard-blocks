<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

/**
 * Class Ystandard_Blocks
 */
class Ystandard_Blocks {

	public function __construct() {
		add_action( 'init', array( $this, 'init' ) );
		add_filter( 'block_categories', array( $this, 'block_categories' ) );
	}

	/**
	 * Init
	 */
	public function init() {
		wp_register_script(
			'ystandard-blocks',
			YSTDB_URL . 'js/ystandard-blocks.js',
			array(
				'wp-blocks',
				'wp-element',
				'wp-editor',
				'wp-components',
			)
		);
		register_block_type(
			'ystdb/ys-button',
			array(
				'editor_script' => 'ystandard-blocks',
			)
		);
	}

	/**
	 * Add block category
	 *
	 * @param array $categories ブロックカテゴリー.
	 *
	 * @return array
	 */
	public function block_categories( $categories ) {
		$categories[] = array(
			'slug'  => 'ystdb',
			'title' => __( '[ys]yStandard Blocks', 'ystandard-blocks' ),
		);

		return $categories;
	}
}