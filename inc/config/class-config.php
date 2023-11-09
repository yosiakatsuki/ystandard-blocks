<?php
/**
 * Config
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Config
 *
 * @package ystandard_blocks
 */
class Config {

	/**
	 * Text Domain.
	 */
	const TEXT_DOMAIN = 'ystandard-blocks';

	/**
	 * 設定名
	 */
	const OPTION_NAME = 'ystdb_options';

	/**
	 * Nonce Name.
	 */
	const NONCE_NAME = 'ystandard-blocks-nonce';
	/**
	 * Nonce Name.
	 */
	const NONCE_ACTION = 'ystandard-blocks-nonce-action';

	/**
	 * CSS Handle.
	 */
	const CSS_HANDLE = 'ystdb-css';

	/**
	 * JS App Handle.
	 */
	const JS_APP_HANDLE = 'ystdb-js-app';

	/**
	 * Block Category.
	 */
	const BLOCK_CATEGORY = 'ystdb';

	/**
	 * Block Category beta.
	 */
	const BLOCK_CATEGORY_BETA = 'ystdb_beta';

	/**
	 * Block Category deprecated.
	 */
	const BLOCK_CATEGORY_DEPRECATED = 'ystdb_deprecated';

	/**
	 * Block Editor Script Handle.
	 */
	const BLOCK_EDITOR_SCRIPT_HANDLE = 'ystandard-blocks-editor';

	/**
	 * Block Editor CSS Handle.
	 */
	const BLOCK_EDITOR_CSS_HANDLE = 'ystandard-blocks-editor-style';

	/**
	 * Body Class.
	 */
	const BODY_CLASS = 'ystdb';

	/**
	 * メニューページ用 body class.
	 */
	const ADMIN_MENU_BODY_CLASS = 'ystd-blocks-menu';

	/**
	 * メニューリスト追加用フック
	 */
	const ADMIN_MENU_NAV_LIST = 'ystdb_add_admin_menu_nav_list';

	/**
	 * 設定保存用フック名
	 */
	const ADMIN_MENU_SAVE_FILTER_HOOK = 'ystdb_block_option_save';

	/**
	 * Admin Menu Name Space.
	 */
	const ADMIN_MENU_NAMESPACE = 'ystdb-admin-menu';

	/**
	 * 旧設定プレフィックス
	 */
	const OPTION_PREFIX = 'ystdb_';
}
