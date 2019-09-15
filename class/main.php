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
		/**
		 * Gutenbergチェック
		 */
		if ( ! function_exists( 'register_block_type' ) ) {
			add_action( 'admin_notices', [ $this, 'gutenberg_notice' ] );

			return;
		}
		$this->require();
		add_filter( 'block_categories', [ $this, 'block_categories' ] );

		if ( is_admin() ) {
			if ( ! $this->is_ystandard() ) {
				add_action( 'admin_notices', [ $this, 'ystandard_notice' ] );
			}
			add_action( 'after_setup_theme', [ $this, 'update_check' ] );
		}
		/**
		 * カスタマイザー追加
		 */
		if ( Ystandard_Blocks::is_ystandard() ) {
			add_filter(
				'ys_customizer_add_extension',
				[ 'Ystandard_Blocks_Customizer', 'ystdb_customize_register' ],
				11
			);
		}
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
			self::YSTDB_CLASS_PATH . 'option.php',
			self::YSTDB_CLASS_PATH . 'customizer.php',
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
	public function update_check() {
		require_once YSTDB_PATH . 'library/plugin-update-checker/plugin-update-checker.php';
		Puc_v4_Factory::buildUpdateChecker(
			'https://wp-ystandard.com/download/ystandard/plugin/ystandard-blocks/ystandard-blocks.json',
			YSTDB_PATH . 'ystandard-blocks.php',
			'yStandard Blocks'
		);
	}

	/**
	 * Gutenberg使えない案内
	 */
	public function gutenberg_notice() {
		?>
		<div class="notice notice-error is-dismissible">
			<p>このサイトではGutenbergが使えないためyStandard Blocksが機能しません。</p>
			<p>クラシックエディター(Classic Editor)を停止するなど、Gutenbergが使える状態にしてください。</p>
		</div>
		<?php
	}

	/**
	 * テーマ確認案内
	 */
	public function ystandard_notice() {
		?>
		<div class="notice notice-warning is-dismissible">
			<p>このサイトではyStandardが有効化されていません。</p>
			<p>yStandard Blocksのブロックのデザインが崩れたり、機能によっては正常に動作しない恐れがあります。</p>
		</div>
		<?php
	}
}