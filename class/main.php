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

	/**
	 * 読み込むファイル群
	 */
	const YSTDB_CLASS_PATH = YSTDB_PATH . 'class/';

	public function __construct() {
		$this->require();
		add_filter( 'block_categories', [ $this, 'block_categories' ] );
	}

	/**
	 * ファイル読み込み
	 */
	private function require() {
		$files = [
			self::YSTDB_CLASS_PATH . 'dynamic_block.php',
			self::YSTDB_CLASS_PATH . 'register.php',
			self::YSTDB_CLASS_PATH . 'enqueue.php',
		];
		foreach ( $files as $file ) {
			require_once( $file );
		}
	}

	/**
	 * Add block category
	 *
	 * @param array $categories ブロックカテゴリー.
	 *
	 * @return array
	 */
	public function block_categories( $categories ) {
		$categories[] = [
			'slug'  => 'ystdb',
			'title' => __( '[ys]yStandard Blocks', 'ystandard-blocks' ),
		];

		return $categories;
	}
}