<?php
/**
 * Balloon
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_Conversion;

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
		 * Block Editor.
		 */
		add_filter( 'ystdb_block_config', [ $this, 'add_block_config' ] );
		/**
		 * Admin.
		 */
		add_action( 'admin_menu', [ $this, 'add_menu' ], 100 + self::MENU_POSITION );

		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );

		add_action( 'rest_api_init', [ $this, 'add_endpoint' ] );
	}

	/**
	 * ブロックエディター設定追加
	 *
	 * @param array $config Config.
	 *
	 * @return array
	 */
	public function add_block_config( $config ) {
		$content_background      = get_option( 'ys_color_content_bg', '#ffffff' );
		$config['balloonImages'] = self::get_balloon_images();
		$config['balloonOption'] = [
			'contentBackground' => $content_background,
		];

		return $config;
	}

	/**
	 * 吹き出し用設定取得
	 */
	public static function get_balloon_images() {
		$result         = [];
		$balloon_option = Option::get_option( 'balloon', '', [] );

		foreach ( $balloon_option as $item ) {
			$image  = isset( $item['image'] ) ? $item['image'] : '';
			$name   = isset( $item['name'] ) ? $item['name'] : '';
			$enable = isset( $item['enable'] ) ? Helper_Conversion::to_bool( $item['enable'] ) : true;
			$id     = 0;
			if ( ! empty( $image ) ) {
				$id = attachment_url_to_postid( $image );
			}
			if ( $enable ) {
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
			Admin_Menu::get_option_page_element( self::ADMIN_MENU_SCRIPT_NAME )
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
}

new Balloon();
