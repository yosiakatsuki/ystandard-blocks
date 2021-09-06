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
		if ( ! Utility::is_ystandard() ) {
			return;
		}
		add_action( 'admin_menu', [ $this, 'add_menu_page' ], 100 );
		add_action( 'admin_init', [ $this, 'save_option' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ], 50 );
		add_filter( 'admin_body_class', [ $this, 'admin_body_class' ] );
	}

	/**
	 * 今いるの設定画面がチェック
	 *
	 * @param $slug
	 * @param $hook_suffix
	 *
	 * @return bool
	 */
	public static function is_current_admin_page( $slug, $hook_suffix ) {
		return "ystandard-blocks_page_${slug}" === $hook_suffix;
	}

	/**
	 * 管理画面用スクリプトの読み込み
	 *
	 * @param string $name   Script Name.
	 * @param array  $route  Api route.
	 * @param array  $config Config.
	 */
	public static function enqueue_admin_scripts( $name, $route, $config = [] ) {
		$css_url  = YSTDB_URL . "/js/admin-menu/${name}.css";
		$css_path = YSTDB_PATH . "/js/admin-menu/${name}.css";

		wp_enqueue_style( 'wp-components' );

		if ( file_exists( $css_path ) ) {
			wp_enqueue_style(
				"ystandard-blocks-admin-menu-${name}-style",
				$css_url,
				[ 'wp-components' ]
			);
		}

		$asset_file    = include( YSTDB_PATH . "/js/admin-menu/${name}.asset.php" );
		$script_handle = "ystandard-blocks-admin-menu-${name}-script";
		wp_enqueue_script(
			$script_handle,
			YSTDB_URL . "/js/admin-menu/${name}.js",
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
		wp_enqueue_style(
			'ystdb-menu-page',
			YSTDB_URL . '/css/ystandard-blocks-admin-menu.css',
			[],
			filemtime( YSTDB_PATH . '/css/ystandard-blocks-admin-menu.css' )
		);
	}

	/**
	 * デフォルトメニューページ
	 */
	public function menu_page_index() {
		ob_start();
		?>
		<p>メニューコンテンツ</p>
		<?php
		self::admin_menu_content(
			ob_get_clean(),
			self::MENU_SLUG
		);
	}

	/**
	 * 設定画面のフォーマット
	 *
	 * @param string $content    設定画面のメイン部分.
	 * @param string $page_slug  設定スラッグ.
	 * @param bool   $navigation ナビゲーションを表示するか.
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
		 * @var \WP_Screen
		 */
		$screen = get_current_screen();
		if ( false !== strpos( $screen->base, 'ystandard-blocks_page' ) ) {
			$classes .= ' ' . Config::ADMIN_MENU_BODY_CLASS;
			$classes .= ' block-editor-page';
		}

		return $classes;
	}
}


new Admin_Menu();
