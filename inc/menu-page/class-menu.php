<?php
/**
 * オプションページ
 *
 * @package ystandard
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Menu
 *
 * @package ystandard_blocks
 */
class Menu {
	/**
	 * 設定保存用フック名
	 */
	const SAVE_FILTER = 'ystdb_block_option_save';

	/**
	 * 管理画面用スクリプトエンキューフック名
	 */
	const SCRIPT_ENQUEUE = 'ystdb_admin_script';
	/**
	 * エンキューするスクリプトの依存関係.
	 */
	const SCRIPT_ENQUEUE_DEPS = 'ystdb_admin_script_deps';
	/**
	 * JSにわたすパラメーターのフック名.
	 */
	const LOCALIZE_SCRIPT_PARAM = 'ystdb_option_localize_script_param';
	/**
	 * メニュースラッグ.
	 */
	const MENU_SLUG = 'ystdb-menu';

	/**
	 * Menu constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu_page' ], 100 );
		add_action( 'admin_init', [ $this, 'save_option' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ], 50 );
		add_filter( 'admin_body_class', [ $this, 'admin_body_class' ] );
	}

	/**
	 * Add Menu.
	 */
	public function add_menu_page() {
		add_menu_page(
			'yStandard Blocks',
			'yStandard Blocks',
			'manage_options',
			self::MENU_SLUG,
			'',
			$this->menu_icon(),
			59
		);
		$this->load_tab();
	}

	/**
	 * タブ内の設定読み込み
	 */
	private function load_tab() {
		require_once __DIR__ . '/tab/class-inline.php';
		require_once __DIR__ . '/tab/class-balloon.php';
		require_once __DIR__ . '/tab/class-reset.php';
	}

	/**
	 * メニューアイコン
	 *
	 * @return string
	 */
	private function menu_icon() {
		$icon = '<svg id="blocks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22"><polygon points="10 1 19 6 19 16 10 21 1 16 1 6 10 1" fill="none" stroke="#e1e1e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline points="1 6 10 11 19 6" fill="none" stroke="#e1e1e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line x1="10" y1="11" x2="10" y2="21" fill="none" stroke="#e1e1e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';

		return 'data:image/svg+xml;base64,' . base64_encode( $icon );
	}

	/**
	 * 管理画面-JavaScriptの読み込み
	 *
	 * @param string $hook_suffix suffix.
	 *
	 * @return void
	 */
	public function admin_enqueue_scripts( $hook_suffix ) {
		if ( false === strpos( $hook_suffix, 'ystdb-' ) ) {
			return;
		}
		wp_enqueue_style(
			'Lato',
			'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
			[],
			YSTDB_VERSION
		);
		wp_enqueue_style(
			'ystdb-menu-page',
			YSTDB_URL . '/css/ystandard-blocks-menu-page.css',
			[],
			YSTDB_VERSION
		);
		$deps = apply_filters( self::SCRIPT_ENQUEUE_DEPS, [] );
		wp_enqueue_script(
			'ystdb-menu-page',
			YSTDB_URL . '/js/menu-page.js',
			$deps,
			YSTDB_VERSION,
			true
		);
		$param = apply_filters( self::LOCALIZE_SCRIPT_PARAM, [] );
		wp_localize_script(
			'ystdb-menu-page',
			'ystdbOption',
			$param
		);

		do_action( self::SCRIPT_ENQUEUE );
	}

	/**
	 * Body Class.
	 *
	 * @param string $classes Classes.
	 *
	 * @return string
	 */
	public function admin_body_class( $classes ) {
		$classes .= ' ' . Config::ADMIN_MENU_BODY_CLASS;

		return $classes;
	}

	/**
	 * メニューページ追加
	 *
	 * @param string $content 設定部分.
	 * @param string $active  Active.
	 */
	public static function blocks_menu_content( $content, $active ) {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		?>
		<div class="wrap ystdb-menu-page">
			<h1 class="ystdb-menu__title"><span class="orbitron">yStandard Blocks</span>設定</h1>
			<div id="ystdb-menu">
				<form method="post" action="">
					<?php wp_nonce_field( Config::NONCE_ACTION, Config::NONCE_NAME ); ?>
					<div class="ystdb-menu__container">
						<div class="ystdb-menu__nav">
							<div class="ystdb-menu__nav-list">
								<a class="ystdb-menu__nav-link<?php echo 'inline' === $active ? ' is-active' : ''; ?>" href="<?php echo admin_url( 'admin.php?page=ystdb-menu' ); ?>">インライン</a>
								<a class="ystdb-menu__nav-link<?php echo 'balloon' === $active ? ' is-active' : ''; ?>" href="<?php echo admin_url( 'admin.php?page=ystdb-balloon' ); ?>">吹き出し</a>
								<a class="ystdb-menu__nav-link<?php echo 'reset' === $active ? ' is-active' : ''; ?>" href="<?php echo admin_url( 'admin.php?page=ystdb-reset' ); ?>">初期化</a>
							</div>
						</div>
						<div class="ystdb-menu__content">
							<?php echo $content; ?>
						</div>
					</div>
				</form>
			</div>
		</div>
		<?php
	}

	/**
	 * Save.
	 */
	public function save_option() {
		if ( ! Utility::verify_nonce( Config::NONCE_NAME, Config::NONCE_ACTION ) ) {
			return false;
		}
		if ( ! isset( $_POST['ystdb-menu'] ) ) {
			return false;
		}
		$options = get_option( Config::OPTION_NAME, [] );
		// 各設定のサニタイズ等、それぞれのファイル側で定義.
		$save_options = apply_filters( self::SAVE_FILTER, $options );
		if ( is_null( $save_options ) || ! is_array( $save_options ) ) {
			return false;
		}

		$update = update_option( Config::OPTION_NAME, $save_options );
		if ( $update ) {
			Notice::set_notice(
				function () {
					Notice::success( '設定を更新しました。' );
				}
			);
		}

		return $update;
	}
}


new Menu();
