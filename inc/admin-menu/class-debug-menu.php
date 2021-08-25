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
	}

	/**
	 * メニュー追加
	 */
	public function add_menu_page() {
		add_submenu_page(
			Admin_Menu::MENU_SLUG,
			'デバッグ',
			'デバッグ',
			'manage_options',
			self::MENU_SLUG,
			[ $this, 'add_menu' ]
		);
	}

	/**
	 * メニューコンテンツ
	 */
	public function add_menu() {
		ob_start();
		$options = Option::get_option_all();
		echo '<pre>';
		print_r( $options );
		echo '</pre>';
		Admin_Menu::admin_menu_content(
			ob_get_clean(),
			self::MENU_SLUG
		);
	}
}

new Debug_Menu();
