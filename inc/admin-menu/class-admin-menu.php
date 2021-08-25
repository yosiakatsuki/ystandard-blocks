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
class Admin_Menu {
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
	 * メニューリスト追加用フック
	 */
	const ADMIN_MENU_NAV_LIST = 'ystdb_add_admin_menu_nav_list';

	/**
	 * Menu constructor.
	 */
	public function __construct() {
		if ( ! Utility::is_ystandard() ) {
			return;
		}
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
		$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21.9"><g id="ystdb-menu-icon" data-name="ystdb-menu-icon"><g id="blocks"><g><path d="M10,21.75a1.9,1.9,0,0,1-.92-.22L1,17A1.91,1.91,0,0,1,0,15.4v-9A1.93,1.93,0,0,1,1,4.78L9.08.23a2,2,0,0,1,1.85,0l8.12,4.55A1.93,1.93,0,0,1,20,6.4v9A1.91,1.91,0,0,1,19.05,17l-8.13,4.52A1.9,1.9,0,0,1,10,21.75ZM2,15.31l8.05,4.47,8-4.47V6.48L10,2,2,6.48ZM9.56,1.1h0Z" fill="#e1e1e1"/><path d="M10,11.9a1.09,1.09,0,0,1-.49-.13l-9-5A1,1,0,0,1,1.49,5L10,9.75,18.23,5a1,1,0,0,1,1.36.36,1,1,0,0,1-.36,1.37L10.5,11.76A1,1,0,0,1,10,11.9Z" fill="#e1e1e1"/><path d="M10,21.9a1,1,0,0,1-1-1v-10a1,1,0,1,1,2,0v10A1,1,0,0,1,10,21.9Z" fill="#e1e1e1"/></g></g></g></svg>';

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
	 * 設定画面のフォーマット
	 *
	 * @param string $content   設定画面のメイン部分.
	 * @param string $page_slug 設定スラッグ.
	 */
	public static function admin_menu_content( $content, $page_slug ) {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		?>
		<div class="wrap ystdb-menu-page">
			<h1 class="ystdb-menu__title"><span class="orbitron">yStandard Blocks</span>設定</h1>
			<div id="ystdb-menu">
				<div class="ystdb-menu__container">
					<div class="ystdb-menu__nav">
						<ul class="ystdb-menu__nav-list">
							<?php self::get_menu_list( $page_slug ); ?>
						</ul>
					</div>
					<div class="ystdb-menu__content">
						<?php echo $content; ?>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * ページナビゲーションの作成
	 *
	 * @param string $page_slug Slug.
	 */
	public static function get_menu_list( $page_slug ) {
		/**
		 * メニューリスト : slug => label,link.
		 */
		$list = apply_filters( self::ADMIN_MENU_NAV_LIST, [] );
		$nav  = [];
		foreach ( $list as $slug => $value ) {
			$classes = [ 'ystdb-menu__nav-link' ];
			if ( $page_slug === $slug ) {
				$classes[] = 'is-active';
			}
			$nav[] = sprintf(
				'<li><a class="%s" href="%s">%s</a></li>',
				trim( implode( ' ', $classes ) ),
				$value['link'],
				$value['label']
			);
		}

		echo implode( PHP_EOL, $nav );
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


new Admin_Menu();
