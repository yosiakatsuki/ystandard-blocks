<?php
/**
 * オプションデバッグページ
 *
 * @package ystandard
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Debug_Menu
 *
 * @package ystandard_blocks
 */
class Debug_Menu {

	/**
	 * Menu Slug.
	 */
	const MENU_SLUG = 'ystdb-option-debug';

	/**
	 * 表示するオプション名
	 *
	 * @var array
	 */
	private $options = [];

	/**
	 * Debug_Menu constructor.
	 */
	public function __construct() {
		if ( ! defined( 'WP_DEBUG' ) || ! WP_DEBUG ) {
			return;
		}

		$this->options = [
			Config::OPTION_NAME,
		];
//		add_action( 'admin_menu', [ $this, 'add_menu_page' ], 999 );
//		add_action( 'admin_init', [ $this, 'download_option' ] );
	}

	/**
	 * メニュー追加
	 */
	public function add_menu_page() {
		add_submenu_page(
			Admin_Menu::MENU_SLUG,
			'デバッグ情報',
			'デバッグ情報',
			'manage_options',
			self::MENU_SLUG,
			[ $this, 'add_menu' ]
		);
	}

	/**
	 * メニューコンテンツ
	 */
	public function add_menu() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		ob_start();
		Notice::info( 'このページは<code>WP_DEBUG</code>が<code>true</code>に設定されている場合に表示されます。' );
		?>
		<style>
			p.submit {
				margin: 0;
				padding: 0
			}
		</style>
		<div style="margin-bottom: 3em;padding:1em;border: 1px solid #07689f;">
			<h2 style="margin-top: 0;font-size: 1.1em;">設定ダウンロード・アップロード</h2>
			<form method="POST" action="">
				<?php wp_nonce_field( Config::NONCE_ACTION, Config::NONCE_NAME ); ?>
				<div style="display: flex">
					<?php submit_button( 'ダウンロード', 'primary', 'download' ); ?>
				</div>
			</form>
		</div>
		<?php foreach ( $this->options as $option_name ) : ?>
			<h3 class="ystdb-menu__debug-label"><?php echo esc_html( $option_name ); ?></h3>
			<?php
			$option = get_option( $option_name );
			echo '<pre class="ystdb-menu__debug">';
			if ( is_array( $option ) ) {
				print_r( $option );
			} else {
				echo $option;
			}
			echo '</pre>';
			?>
		<?php endforeach; ?>

		<?php
		Admin_Menu::admin_menu_content(
			ob_get_clean(),
			self::MENU_SLUG,
			false
		);
	}

	/**
	 * 設定ファイルのダウンロード.
	 */
	public function download_option() {
		if ( ! Utility::verify_nonce( Config::NONCE_NAME, Config::NONCE_ACTION ) ) {
			return;
		}
		if ( ! isset( $_POST['download'] ) ) {
			return;
		}
		$output = [];
		foreach ( $this->options as $option_name ) {
			$options                = get_option( $option_name, [] );
			$output[ $option_name ] = $options;
		}
		$json     = json_encode( $output, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT );
		$filename = 'ystandard-blocks-options.json';
		header( 'Content-Description: File Transfer' );
		header( 'Content-Disposition: attachment; filename=' . $filename );
		header( 'Content-Type: application/json; charset=' . get_option( 'blog_charset' ), true );
		echo $json;
		die();
	}
}

new Debug_Menu();
