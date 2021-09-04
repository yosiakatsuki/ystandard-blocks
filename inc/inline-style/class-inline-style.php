<?php
/**
 * Inline Style
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_CSS;
use ystandard_blocks\helper\Helper_Debug;

defined( 'ABSPATH' ) || die();

/**
 * Class Inline_Style
 *
 * @package ystandard_blocks
 */
class Inline_Style {
	/**
	 * Menu Slug.
	 */
	const MENU_SLUG = 'ystdb-inline-style';

	/**
	 * Menu Position.
	 */
	const MENU_POSITION = 11;

	/**
	 * Script Name.
	 */
	const SCRIPT_NAME = 'inline-style';

	/**
	 * Cache Key.
	 */
	const CACHE_KEY = 'ystsb-inline-style';

	/**
	 * デフォルト設定.
	 *
	 * @var array
	 */
	private $default_option = [];

	/**
	 * フィルターで取得したオプション
	 *
	 * @var null
	 */
	private $filter_option = null;

	/**
	 * Inline_Style constructor.
	 */
	public function __construct() {
		/**
		 * Front.
		 */
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 21 );
		/**
		 * Admin.
		 */
		add_action( 'admin_menu', [ $this, 'add_menu' ], 100 + self::MENU_POSITION );
		add_filter( Config::ADMIN_MENU_NAV_LIST, [ $this, 'add_nav_item' ], self::MENU_POSITION );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
		add_action( 'rest_api_init', [ $this, 'add_endpoint' ] );
	}

	/**
	 * Enqueue Style.
	 */
	public function enqueue_styles() {
		$css = '';
		// デフォルト取得.
		$this->default_option = json_decode(
			helper\Helper_Filesystem::file_get_contents(
				YSTDB_PATH . '/assets/admin-menu/inline-style/schema.json'
			),
			true
		);
		// キャッシュ取得.
		if ( ! Helper_Debug::is_debug_mode() ) {
			// キャッシュの更新は設定更新時.
			$css = get_transient( self::CACHE_KEY );
		}
		if ( empty( $css ) ) {
			$css = '';
			// ボタン.
			$css .= $this->get_button_css();
		}
		wp_add_inline_style(
			Config::CSS_HANDLE,
			$css
		);
		set_transient( self::CACHE_KEY, $css, 60 * 60 * 24 );
	}

	/**
	 * 3ボタン用CSS作成
	 *
	 * @param string $prefix Prefix.
	 *
	 * @return string
	 */
	private function get_button_css( $prefix = '' ) {
		$option = Option::get_option(
			'inlineStyle',
			'buttons',
			$this->default_option['inlineStyle']['buttons']
		);
		// 旧設定からの移行.
		$old_option = Migration::get_old_toolbar_button_option();
		if ( ! empty( $old_option ) ) {
			$option = $old_option;
		}
		// フック優先.
		if ( $this->get_filtered_option() ) {
			$option = $this->filter_option['buttons'];
		}

		// CSS作成.
		$result = '';
		for ( $i = 0; $i < 3; $i ++ ) {
			$prefix       = empty( $prefix ) ? '' : trim( $prefix ) . ' ';
			$selector     = $prefix . '.ystdb-inline--' . ( $i + 1 );
			$style        = [];
			$style_tablet = [];
			$style_mobile = [];
			if ( isset( $option[ $i ] ) ) {
				if ( isset( $option[ $i ]['enable'] ) && false === $option[ $i ]['enable'] ) {
					continue;
				}

				$style        = isset( $option[ $i ]['style'] ) ? $option[ $i ]['style'] : [];
				$style_tablet = isset( $option[ $i ]['tabletStyle'] ) ? $option[ $i ]['tabletStyle'] : [];
				$style_mobile = isset( $option[ $i ]['mobileStyle'] ) ? $option[ $i ]['mobileStyle'] : [];
			}

			$result .= $this->get_css(
				$selector,
				$style,
				$style_tablet,
				$style_mobile
			);
		}

		return $result;
	}

	/**
	 * CSS作成.
	 *
	 * @param string $selector セレクタ.
	 * @param array  $style    スタイル.
	 * @param array  $tablet   タブレット用スタイル.
	 * @param array  $mobile   モバイル用スタイル.
	 *
	 * @return string
	 */
	private function get_css( $selector, $style, $tablet, $mobile ) {
		$result     = '';
		$css        = [];
		$tablet_css = [];
		$mobile_css = [];
		foreach ( $style as $prop => $value ) {
			if ( '' !== $value && '@' !== substr( $prop, 0, 1 ) ) {
				$css[] = "${prop}:${value}";
			}
		}
		foreach ( $tablet as $prop => $value ) {
			if ( '' !== $value && '@' !== substr( $prop, 0, 1 ) ) {
				$tablet_css[] = "${prop}:${value}";
			}
		}
		foreach ( $mobile as $prop => $value ) {
			if ( '' !== $value && '@' !== substr( $prop, 0, 1 ) ) {
				$mobile_css[] = "${prop}:${value}";
			}
		}
		if ( ! empty( $css ) ) {
			$result .= sprintf(
				'%s{%s;}',
				$selector,
				implode( ';', $css )
			);
		}
		if ( ! empty( $tablet_css ) ) {
			$result .= Helper_CSS::add_media_query(
				implode( ';', $tablet_css ) . ';',
				'',
				'md'
			);
		}
		if ( ! empty( $mobile_css ) ) {
			$result .= Helper_CSS::add_media_query(
				implode( ';', $mobile_css ) . ';',
				'',
				'sm'
			);
		}

		return $result;
	}

	/**
	 * フィルターされた設定を取得
	 *
	 * @return array|null
	 */
	private function get_filtered_option() {
		if ( ! is_null( $this->filter_option ) ) {
			return $this->filter_option;
		}
		$this->filter_option = apply_filters( 'ystdb_inline_style_options', null );

		return $this->filter_option;
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
			self::SCRIPT_NAME,
			[
				'update' => 'update-inline-style',
			],
			[
				'useFilter'     => ! is_null( $this->get_filtered_option() ),
				'needMigration' => ! is_null( Option::get_option( 'inline', '', null ) ),
				'migrationPage' => admin_url( '/admin.php?page=ystdb-migration' ),
			]
		);
	}

	/**
	 * REST API エンドポイント追加
	 */
	public function add_endpoint() {
		register_rest_route(
			Admin_Menu::get_endpoint_namespace(),
			'/update-inline-style',
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
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_HTTP_Response|\WP_REST_Response
	 */
	public function update_option( $request ) {
		$data = $request->get_json_params();

		$result[] = Option::update_section( 'inlineStyle', $data );
		delete_transient( self::CACHE_KEY );

		return Api::create_response(
			$result,
			json_encode( $data )
		);
	}

	/**
	 * メニュー追加
	 */
	public function add_menu() {
		add_submenu_page(
			Admin_Menu::MENU_SLUG,
			'インラインスタイル',
			'インラインスタイル',
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
			Admin_Menu::get_option_page_element( self::SCRIPT_NAME ),
			self::MENU_SLUG
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
			'label' => 'インラインスタイル',
			'link'  => admin_url( 'admin.php?page=' . self::MENU_SLUG ),
		];

		return $items;
	}
}

new Inline_Style();
