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
	 * メニュー追加用フック名
	 */
	const MENU_ADD_ACTION = 'ystdb_options_tab_menu';

	/**
	 * パネル部分追加用フック名
	 */
	const PANEL_ADD_ACTION = 'ystdb_options_tab_panel';

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
	 * Hook Suffix.
	 */
	const HOOK_SUFFIX = 'ystandard_page_ystd-blocks-menu';

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
		add_submenu_page(
			'ystandard-start-page',
			'Blocks 設定',
			'Blocks 設定',
			'manage_options',
			'ystd-blocks-menu',
			[ $this, 'blocks_menu' ],
			5
		);
		$this->load_tab();
	}

	/**
	 * タブ内の設定読み込み
	 */
	private function load_tab() {
		require_once __DIR__ . '/tab/class-inline.php';
		require_once __DIR__ . '/tab/class-balloon.php';
	}

	/**
	 * 管理画面-JavaScriptの読み込み
	 *
	 * @param string $hook_suffix suffix.
	 *
	 * @return void
	 */
	public function admin_enqueue_scripts( $hook_suffix ) {
		if ( self::HOOK_SUFFIX !== $hook_suffix ) {
			return;
		}
		wp_enqueue_style(
			'Lato',
			'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
			[],
			YSTDB_VERSION
		);
		wp_enqueue_style(
			'uikit',
			YSTDB_URL . '/css/ystandard-blocks-option-page.css',
			[],
			YSTDB_VERSION
		);
		$deps = apply_filters( self::SCRIPT_ENQUEUE_DEPS, [] );
		wp_enqueue_script(
			'ystdb-option-page',
			YSTDB_URL . '/js/menu-page.js',
			$deps,
			YSTDB_VERSION,
			true
		);
		$param = apply_filters( self::LOCALIZE_SCRIPT_PARAM, [] );
		wp_localize_script(
			'ystdb-option-page',
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
	 */
	public function blocks_menu() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		$active = '0';
		if ( isset( $_GET['tab'] ) ) {
			$active = $_GET['tab'];
		}
		?>
		<div class="wrap ystdb-option-page">
			<h1 class="uk-text-large uk-heading-divider"><span class="orbitron">yStandard Blocks</span>設定</h1>
			<div id="ystdb-option">
				<form method="post" action="">
					<?php wp_nonce_field( Config::NONCE_ACTION, Config::NONCE_NAME ); ?>
					<div uk-grid>
						<div class="uk-width-small@m">
							<ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade; active:<?php echo $active; ?>">
								<?php do_action( self::MENU_ADD_ACTION ); ?>
							</ul>
						</div>
						<div class="uk-width-expand@m">
							<ul id="component-tab-left" class="uk-switcher">
								<?php do_action( self::PANEL_ADD_ACTION ); ?>
							</ul>
						</div>
					</div>
					<div class="uk-margin-medium-top">
						<button type="button" class="uk-button uk-button-default uk-button-primary" onclick="submit();">更新</button>
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
