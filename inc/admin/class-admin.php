<?php
/**
 * Admin
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

defined( 'ABSPATH' ) || die();

/**
 * Class Admin
 *
 * @package ystandard_blocks
 */
class Admin {

	/**
	 * Admin constructor.
	 */
	public function __construct() {
		add_action( 'after_setup_theme', [ $this, 'update_check' ] );
	}

	/**
	 * アップデートチェック
	 */
	public function update_check() {
		if ( ! is_admin() ) {
			return;
		}
		require_once YSTDB_PATH . '/library/plugin-update-checker/plugin-update-checker.php';
		$dir = apply_filters( 'ys_update_check_dir', '' );
		$url = "https://wp-ystandard.com/download/ystandard/plugin/ystandard-blocks{$dir}/ystandard-blocks.json";
		PucFactory::buildUpdateChecker(
			$url,
			YSTDB_PATH . '/ystandard-blocks.php',
			'yStandard Blocks'
		);
	}
}

new Admin();
