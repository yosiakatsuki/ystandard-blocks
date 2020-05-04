<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

/**
 * Class Main
 */
class Main {

	/**
	 * 読み込むファイル群
	 */
	const YSTDB_INC_PATH = YSTDB_PATH . '/inc';

	/**
	 * Main constructor.
	 */
	public function __construct() {
		/**
		 * 機能チェック
		 */
		if ( ! $this->check_plugin_activatable() ) {
			return;
		}
		$this->require();
		add_filter( 'block_categories', [ $this, 'block_categories' ] );

		if ( is_admin() ) {
			if ( ! self::is_ystandard() ) {
				add_action( 'admin_notices', [ $this, 'ystandard_notice' ] );
			}
			add_action( 'after_setup_theme', [ $this, 'update_check' ] );
		}
	}

	/**
	 * プラグインの有効化チェック
	 */
	private function check_plugin_activatable() {
		/**
		 * PHPバージョンチェック
		 */
		if ( version_compare( phpversion(), '7.0.0', '<' ) ) {
			add_action( 'admin_notices', [ $this, 'phpversion_notice' ] );

			return false;
		}
		/**
		 * Gutenbergチェック
		 */
		if ( ! function_exists( 'register_block_type' ) ) {
			add_action( 'admin_notices', [ $this, 'gutenberg_notice' ] );

			return false;
		}

		return true;
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
	 * AMP判定
	 *
	 * @return bool
	 */
	public static function is_amp() {
		if ( function_exists( 'ys_is_amp' ) ) {
			return ys_is_amp();
		}

		return function_exists( 'is_amp_endpoint' ) && is_amp_endpoint();
	}

	/**
	 * ファイル読み込み
	 */
	private function require() {
		$files = [
			self::YSTDB_INC_PATH . '/utility/class-utility.php',
			self::YSTDB_INC_PATH . '/class-dynamic-block.php',
			self::YSTDB_INC_PATH . '/class-register.php',
			self::YSTDB_INC_PATH . '/class-enqueue.php',
			self::YSTDB_INC_PATH . '/class-options.php',
			self::YSTDB_INC_PATH . '/customizer/class-customizer.php',
			self::YSTDB_INC_PATH . '/class-helper.php',
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
		$categories[] = [
			'slug'  => 'ystdb_pro',
			'title' => __( '[ys]yStandard Blocks Pro', 'ystandard-blocks' ),
		];
		$categories[] = [
			'slug'  => 'ystdb_beta',
			'title' => __( '[ys]yStandard Blocks Beta', 'ystandard-blocks' ),
		];

		return $categories;
	}

	/**
	 * アップデートチェック
	 */
	public function update_check() {
		require_once YSTDB_PATH . '/library/plugin-update-checker/plugin-update-checker.php';
		\Puc_v4_Factory::buildUpdateChecker(
			'https://wp-ystandard.com/download/ystandard/plugin/ystandard-blocks/ystandard-blocks.json',
			YSTDB_PATH . '/ystandard-blocks.php',
			'yStandard Blocks'
		);
	}

	/**
	 * PHPバージョン不足案内
	 */
	public function phpversion_notice() {
		?>
		<div class="notice notice-error is-dismissible">
			<p>PHPバージョンが古いためyStandard Blocksが機能しません。</p>
			<p>yStandard BlocksはPHP 7.3以上での利用を推奨しています。</p>
			<p>お使いのサーバーのPHPバージョンをご確認ください。（このサイトで有効になっているPHPバージョン：<?php echo phpversion(); ?>）</p>
		</div>
		<?php
	}

	/**
	 * Gutenberg使えない案内
	 */
	public function gutenberg_notice() {
		?>
		<div class="notice notice-error is-dismissible">
			<p>このサイトではブロックエディターが使えないためyStandard Blocksが機能しません。</p>
			<p>クラシックエディター(Classic Editor)を停止するなど、ブロックエディターが使える状態にしてください。</p>
		</div>
		<?php
	}

	/**
	 * テーマ確認案内
	 */
	public function ystandard_notice() {
		if ( Options::get_option_by_bool( 'hide_no_ystandard_notice', false ) ) {
			return;
		}
		?>
		<div class="notice notice-warning is-dismissible">
			<p>このサイトではyStandardが有効化されていません。</p>
			<p>yStandard Blocksのブロックのデザインが崩れたり、機能によっては正常に動作しない恐れがあります。</p>
			<p>※この警告の非表示設定などは 「<a href="<?php echo admin_url( 'options-general.php?page=ystandard-blocks-option' ); ?>">yStandard Blocks設定</a>」 ページから設定できます。</p>
		</div>
		<?php
	}

	/**
	 * アンインストール時の処理
	 */
	public static function uninstall_ystandard_blocks() {
		/**
		 * 設定削除
		 */
		$options = [];
		/**
		 * インライン系
		 */
		$options[] = 'inline_style_larger';
		$options[] = 'inline_style_smaller';
		$options[] = 'inline_style_larger_sp';
		$options[] = 'inline_style_smaller_sp';
		for ( $i = 1; $i <= 3; $i ++ ) {
			$options[] = 'inline_style_fz_' . $i;
			$options[] = 'inline_style_color_' . $i;
			$options[] = 'inline_style_mark_color_' . $i;
			$options[] = 'inline_style_mark_opacity_' . $i;
			$options[] = 'inline_style_mark_weight_' . $i;
			$options[] = 'inline_style_type_' . $i;
		}
		/**
		 * 吹き出し系
		 */
		for ( $i = 1; $i <= 30; $i ++ ) {
			$options[] = 'balloon_image_' . $i;
			$options[] = 'balloon_name_' . $i;
		}
		/**
		 * その他
		 */
		$options[] = 'hide_no_ystandard_notice';
		$options[] = 'load_font_awesome';
		$options[] = 'add_color_palette_css_text';
		$options[] = 'add_color_palette_css_bg';
		$options[] = 'add_color_palette_css_border';
		$options[] = 'add_color_palette_css_fill';
		$options[] = 'add_font_size_css';
		$options[] = 'use_all_icons';
		// 削除.
		foreach ( $options as $key ) {
			delete_option( 'ystdb_' . $key );
		}
	}
}
