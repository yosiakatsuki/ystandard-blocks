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

	/**
	 * Ystandard_Blocks constructor.
	 */
	public function __construct() {
		if ( is_admin() ) {
			add_action( 'after_setup_theme', [ $this, 'update_check' ] );
		}

		/**
		 * Gutenbergチェック
		 */
		if ( function_exists( 'register_block_type' ) ) {
			/**
			 * 後で案内表示入れたい
			 */
			return;
		}
		$this->require();
		add_filter( 'block_categories', [ $this, 'block_categories' ] );
	}

	/**
	 * テーマ有効化チェック
	 *
	 * @return bool
	 */
	public static function is_ystandard() {
		return 'ystandard' === get_template();
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

	/**
	 * アップデートチェック
	 */
	function update_check() {
		require_once YSTDB_PATH . 'library/plugin-update-checker/plugin-update-checker.php';
		Puc_v4_Factory::buildUpdateChecker(
			'https://wp-ystandard.com/download/ystandard/plugin/ystandard-blocks/ystandard-blocks.json',
			YSTDB_PATH . 'ystandard-blocks.php',
			'yStandard Blocks'
		);
	}
}