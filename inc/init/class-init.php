<?php
/**
 * Init
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Init
 *
 * @package ystandard_blocks
 */
class Init {

	/**
	 * Init constructor.
	 */
	public function __construct() {
		add_filter( 'ystdb_get_version', function ( $ver ) {
			return YSTDB_VERSION;
		} );
		/**
		 * 必要バージョンのチェック
		 */
		if ( ! $this->check_version() ) {
			return;
		}
		$this->load_files();
		add_filter( 'block_categories', [ $this, 'block_categories' ] );
		add_action( 'admin_notices', [ $this, 'ystandard_notice' ] );
	}

	/**
	 * ファイル読み込み
	 */
	private function load_files() {
		$inc = YSTDB_PATH . '/inc';
		require_once $inc . '/config/class-config.php';
		require_once $inc . '/utility/class-utility.php';
		require_once $inc . '/admin/class-notice.php';
		require_once $inc . '/migration/class-migration.php';
		require_once $inc . '/option/class-option.php';
		require_once $inc . '/icon/class-font-awesome.php';
		require_once $inc . '/format/class-format.php';
		require_once $inc . '/balloon/class-balloon.php';
		require_once $inc . '/blocks/class-dynamic-block.php';
		require_once $inc . '/blocks/class-register.php';
		require_once $inc . '/enqueue/class-enqueue.php';
		require_once $inc . '/enqueue/class-polyfill.php';
		require_once $inc . '/enqueue/class-block-editor.php';
		require_once $inc . '/admin/class-admin.php';
		require_once $inc . '/menu-page/class-menu.php';
		require_once $inc . '/menu-page/class-option-no-ystd.php';
		require_once $inc . '/customizer/class-customizer.php';
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
			'slug'  => 'ystdb_beta',
			'title' => __( '[ys]yStandard Blocks Beta', 'ystandard-blocks' ),
		];
		$categories[] = [
			'slug'  => 'ystdb_deprecated',
			'title' => __( '[ys]yStandard Blocks(非推奨)', 'ystandard-blocks' ),
		];

		return $categories;
	}

	/**
	 * テーマ確認案内
	 */
	public function ystandard_notice() {
		if ( Utility::is_ystandard() ) {
			return;
		}
		if ( get_option( Config::OPTION_PREFIX . 'hide_no_ystandard_notice', false ) ) {
			return;
		}
		global $hook_suffix;
		if ( false !== strpos( $hook_suffix, 'ystandard-blocks' ) ) {
			return;
		}
		?>
		<div class="notice notice-warning is-dismissible">
			<p>このサイトではyStandardが有効化されていません。</p>
			<p>yStandard Blocksのブロックのデザインが崩れたり、機能によっては正常に動作しない恐れがあります。</p>
			<p>※この警告の非表示設定などは 「<a href="<?php echo admin_url( 'options-general.php?page=ystandard-blocks' ); ?>">yStandard Blocks設定</a>」 ページから設定できます。</p>
		</div>
		<?php
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
	 * プラグインの有効化チェック
	 */
	private function check_version() {
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
}

new Init();
