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
		add_action( 'admin_menu', [ $this, 'add_menu_page' ], 999 );
		add_filter( Admin_Menu::ADMIN_MENU_NAV_LIST, [ $this, 'add_menu_nav' ], 999 );
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
	 * メニューナビゲーション追加
	 *
	 * @param array $list List.
	 *
	 * @return array
	 */
	public function add_menu_nav( $list ) {
		$list[ self::MENU_SLUG ] = [
			'label' => 'デバッグ情報',
			'link'  => admin_url( 'admin.php?page=' . self::MENU_SLUG ),
		];

		return $list;
	}

	/**
	 * メニューコンテンツ
	 */
	public function add_menu() {
		ob_start();
		Notice::info( 'このページは<code>WP_DEBUG</code>が<code>true</code>に設定されている場合に表示されます。' );
		?>
		<table class="ystdb-menu__table">
			<tbody>
			<?php foreach ( $this->options as $option_name ) : ?>
				<tr>
					<th><?php echo esc_html( $option_name ); ?></th>
					<td>
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
					</td>
				</tr>
			<?php endforeach; ?>
			</tbody>
		</table>

		<?php

		Admin_Menu::admin_menu_content(
			ob_get_clean(),
			self::MENU_SLUG
		);
	}
}

new Debug_Menu();
