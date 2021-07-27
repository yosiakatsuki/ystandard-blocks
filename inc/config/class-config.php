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
	 * Block Editor Script Handle.
	 */
	const BLOCK_EDITOR_SCRIPT_HANDLE = 'ystandard-blocks-editor';

	/**
	 * Body Class.
	 */
	const BODY_CLASS = 'ystdb';

	/**
	 * メニューページ用 body class.
	 */
	const ADMIN_MENU_BODY_CLASS = 'ystd-blocks-menu';

	/**
	 * 旧設定プレフィックス
	 */
	const OPTION_PREFIX = 'ystdb_';
}
