<?php
/**
 * Balloon
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Balloon
 *
 * @package ystandard_blocks
 */
class Balloon {

	/**
	 * Menu Slug.
	 */
	const MENU_SLUG = 'ystdb-balloon';

	/**
	 * Menu Position.
	 */
	const MENU_POSITION = 12;

	/**
	 * Script Name.
	 */
	const ADMIN_MENU_SCRIPT_NAME = 'balloon';

	/**
	 * Balloon constructor.
	 */
	public function __construct() {
		/**
		 * Admin.
		 */
		add_action( 'admin_menu', [ $this, 'add_menu' ], 100 + self::MENU_POSITION );
		add_filter( Config::ADMIN_MENU_NAV_LIST, [ $this, 'add_nav_item' ], self::MENU_POSITION );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );

		add_action( 'rest_api_init', [ $this, 'add_endpoint' ] );
	}

	/**
	 * 吹き出し用設定取得
	 */
	public static function get_balloon_images() {
		$result         = [];
		$balloon_option = Option::get_option( 'balloon', '', [] );

		foreach ( $balloon_option as $item ) {
			$image = $item['image'];
			$name  = $item['name'];
			if ( ! empty( $image ) ) {
				$id       = attachment_url_to_postid( $image );
				$result[] = [
					'url'  => $image,
					'id'   => $id,
					'name' => $name,
				];
			}
		}

		return $result;
	}

	/**
	 * メニュー追加
	 */
	public function add_menu() {
		add_submenu_page(
			Admin_Menu::MENU_SLUG,
			'吹き出し登録',
			'吹き出し登録',
			'manage_options',
			self::MENU_SLUG,
			[ $this, 'add_page' ],
			10
		);
	}

	/**
	 * メニューコンテンツ
	 */
	public function add_page() {
		Admin_Menu::admin_menu_content(
			Admin_Menu::get_option_page_element( self::ADMIN_MENU_SCRIPT_NAME ),
			self::MENU_SLUG
		);
	}

	/**
	 * 管理画面用スクリプト読み込み
	 *
	 * @param string $hook_suffix Suffix.
	 */
	public function admin_enqueue_scripts( $hook_suffix ) {
		if ( ! Admin_Menu::is_current_admin_page( self::MENU_SLUG, $hook_suffix ) ) {
			return;
		}

		Admin_Menu::enqueue_admin_scripts(
			self::ADMIN_MENU_SCRIPT_NAME,
			[
				'update' => 'update-balloon',
			]
		);
	}

	/**
	 * REST API エンドポイント追加
	 */
	public function add_endpoint() {
		register_rest_route(
			Admin_Menu::get_endpoint_namespace(),
			'/update-balloon',
			[
				'methods'             => 'POST',
				'callback'            => [ $this, 'update_option' ],
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			]
		);
	}

	/**
	 * 設定更新
	 *
	 * @param \WP_REST_Request $request Request.
	 *
	 * @return \WP_Error|\WP_HTTP_Response|\WP_REST_Response
	 */
	public function update_option( $request ) {
		$data = $request->get_json_params();

		$result[] = Option::update_section( 'balloon', $data );

		return Api::create_response(
			$result,
			json_encode( $data )
		);
	}

	/**
	 * メニューナビゲーション追加
	 *
	 * @param array $items List.
	 *
	 * @return array
	 */
	public function add_nav_item( $items ) {

		$items[ self::MENU_SLUG ] = [
			'label' => '吹き出し登録',
			'link'  => admin_url( 'admin.php?page=' . self::MENU_SLUG ),
		];

		return $items;
	}
}

new Balloon();
