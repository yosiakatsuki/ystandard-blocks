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
	 * 今いるの設定画面がチェック.
	 *
	 * @param string $slug スラッグ.
	 * @param string $hook_suffix Hook Suffix.
	 *
	 * @return bool
	 */
	public static function is_current_admin_page( $slug, $hook_suffix ) {
		return "ystandard-blocks_page_{$slug}" === $hook_suffix;
	}

	/**
	 * 管理画面用スクリプトの読み込み
	 *
	 * @param string $name Script Name.
	 * @param array $route Api route.
	 * @param array $config Config.
	 */
	public static function enqueue_admin_scripts( $name, $route, $config = [] ) {
		$css_url  = YSTDB_URL . "/js/admin-menu/{$name}.css";
		$css_path = YSTDB_PATH . "/js/admin-menu/{$name}.css";

		wp_enqueue_style( 'wp-components' );
		wp_enqueue_media();

		if ( file_exists( $css_path ) ) {
			wp_enqueue_style(
				"ystandard-blocks-admin-menu-{$name}-style",
				$css_url,
				[ 'wp-components' ]
			);
		}

		$asset_file    = include YSTDB_PATH . "/js/admin-menu/{$name}.asset.php";
		$script_handle = "ystandard-blocks-admin-menu-{$name}-script";
		// 追加スクリプト.
		$asset_file['dependencies'] = array_merge(
			$asset_file['dependencies'],
			[ 'jquery' ]
		);
		wp_enqueue_script(
			$script_handle,
			YSTDB_URL . "/js/admin-menu/{$name}.js",
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
		$config = array_merge(
			[
				'pageId'            => self::get_option_page_id( $name ),
				'endpointNamespace' => self::get_endpoint_namespace(),
				'editorColors'      => self::get_editor_colors(),
				'route'             => $route,
			],
			$config
		);
		wp_localize_script(
			$script_handle,
			'ystdbAdminMenuConfig',
			[ 'config' => $config ]
		);
		wp_localize_script(
			$script_handle,
			'ystdbAdminMenuOptions',
			[ 'options' => Option::get_option_all() ]
		);
	}

	/**
	 * ページID取得
	 *
	 * @param string $name Menu slug.
	 *
	 * @return string
	 */
	public static function get_option_page_id( $name ) {
		return 'ystdb-admin-menu-' . $name;
	}

	/**
	 * 設定画面用要素作成
	 *
	 * @param string $name Menu slug.
	 *
	 * @return string
	 */
	public static function get_option_page_element( $name ) {
		$page_id = self::get_option_page_id( $name );

		return '<div id="' . $page_id . '"></div>';
	}

	/**
	 * エンドポイント
	 *
	 * @return string
	 */
	public static function get_endpoint_namespace() {
		return Config::ADMIN_MENU_NAMESPACE . '/v3';
	}

	/**
	 * カラーパレットの取得
	 *
	 * @return array
	 */
	private static function get_editor_colors() {
		$palette = get_theme_support( 'editor-color-palette' );
		if ( ! is_array( $palette ) || empty( $palette ) ) {
			return [];
		}

		return $palette[0];
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
		do_action( 'ystdb_admin_enqueue_scripts' );
		wp_enqueue_style(
			'ystdb-menu-page',
			YSTDB_URL . '/css/ystandard-blocks-admin-menu.css',
			[],
			filemtime( YSTDB_PATH . '/css/ystandard-blocks-admin-menu.css' )
		);
		wp_enqueue_style(
			'ystdb-admin-google-font',
			'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap',
			[],
			null
		);
	}

	/**
	 * デフォルトメニューページ
	 */
	public function menu_page_index() {
		ob_start();
		?>
		<h1><span class="orbitron">yStandard Blocks</span>設定</h1>
		<div class="ystdb-menu-top">
			<div class="ystdb-menu-top__columns">
				<div class="ystdb-menu-top__column">
					<div class="ystdb-menu-top__contents">
						<h2 class="ystdb-menu-top__title">インラインスタイル</h2>
						<figure class="ystdb-menu-top__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
								<path d="M12 20h9"></path>
								<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
							</svg>
						</figure>
						<div class="ystdb-menu-top__dscr">
							<p>段落ブロックなどで使えるインライン装飾の編集機能です。</p>
							<p>マーカー3種類と任意で追加・削除できる装飾を好みにカスタマイズできます。</p>
						</div>
						<div class="ystdb-menu-top__links">
							<div class="ystdb-menu-top__columns">
								<div class="ystdb-menu-top__column no-shadow no-padding">
									<a class="ystdb-menu-top__link-option button is-primary is-small" href="<?php echo esc_url_raw( admin_url( 'admin.php?page=' . Inline_Style::MENU_SLUG ) ); ?>">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
											<circle cx="12" cy="12" r="3"></circle>
											<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
										</svg>
										設定画面
									</a>
								</div>
								<div class="ystdb-menu-top__column no-shadow no-padding">
									<a class="ystdb-menu-top__link-manual button is-primary is-small" href="https://wp-ystandard.com/manual/ystdb-inline-style/" target="_blank" rel="noopener">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book">
											<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
											<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
										</svg>
										マニュアル
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ystdb-menu-top__column">
					<div class="ystdb-menu-top__contents">
						<h2 class="ystdb-menu-top__title">吹き出し登録</h2>
						<figure class="ystdb-menu-top__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
							</svg>
						</figure>
						<div class="ystdb-menu-top__dscr">
							<p>吹き出しブロックで使うアバター画像と名前を登録できる機能です。</p>
							<p>よく使うアバターを登録しておくと便利です。</p>
						</div>
						<div class="ystdb-menu-top__links">
							<div class="ystdb-menu-top__columns">
								<div class="ystdb-menu-top__column no-shadow no-padding">
									<a class="ystdb-menu-top__link-option button is-primary is-small" href="<?php echo esc_url_raw( admin_url( 'admin.php?page=' . Balloon::MENU_SLUG ) ); ?>">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
											<circle cx="12" cy="12" r="3"></circle>
											<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
										</svg>
										設定画面
									</a>
								</div>
								<div class="ystdb-menu-top__column no-shadow no-padding">
									<a class="ystdb-menu-top__link-manual button is-primary is-small" href="https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/" target="_blank" rel="noopener">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book">
											<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
											<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
										</svg>
										マニュアル
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
		self::admin_menu_content(
			ob_get_clean(),
			self::MENU_SLUG
		);
	}

	/**
	 * 設定画面のフォーマット
	 *
	 * @param string $content 設定画面のメイン部分.
	 * @param string $page_slug 設定スラッグ.
	 * @param bool $navigation ナビゲーションを表示するか.
	 */
	public static function admin_menu_content( $content, $page_slug, $navigation = true ) {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		?>
		<div class="wrap ystdb-menu-page">
			<h1 class="ystdb-menu__title"><span class="orbitron">yStandard Blocks</span>設定</h1>
			<div id="ystdb-menu" class="ystdb-menu">
				<div class="ystdb-menu__container">
					<?php if ( $navigation ) : ?>
						<div class="ystdb-menu__nav">
							<ul class="ystdb-menu__nav-list">
								<?php self::get_menu_list( $page_slug ); ?>
							</ul>
						</div>
					<?php endif; ?>
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
		$list = apply_filters( Config::ADMIN_MENU_NAV_LIST, [] );
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
		add_submenu_page(
			self::MENU_SLUG,
			'yStandard Blocks',
			'yStandard Blocks',
			'manage_options',
			self::MENU_SLUG,
			[ $this, 'menu_page_index' ],
			1
		);
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
		$save_options = apply_filters( Config::ADMIN_MENU_SAVE_FILTER_HOOK, $options );
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
	 * Body Class.
	 *
	 * @param string $classes Classes.
	 *
	 * @return string
	 */
	public function admin_body_class( $classes ) {
		/**
		 * WP_Screen
		 *
		 * @var \WP_Screen
		 */
		$screen = get_current_screen();
		if ( false !== strpos( $screen->base, 'ystandard-blocks_page' ) || false !== strpos( $screen->base, 'ystdb-menu' ) ) {
			$classes .= ' ' . Config::ADMIN_MENU_BODY_CLASS;
			$classes .= ' block-editor-page';
		}

		return $classes;
	}
}


new Admin_Menu();
