<?php
/**
 * Plugin Name: yStandard Blocks
 * Plugin URI: https://wp-ystandard.com/
 * Description: yStandard用ブロック追加プラグイン.
 * Version: 0.0.1
 * Author: yosiakatsuki
 * Author URI: https://yosiakatsuki.net
 * License: GPL-2.0 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ystandard-blocks
 * Domain Path: languages
 */

defined( 'ABSPATH' ) || die();

define( 'YSTDB_PATH', plugin_dir_path( __FILE__ ) );
define( 'YSTDB_URL', plugin_dir_url( __FILE__ ) );

if ( ! function_exists( 'register_block_type' ) ) {
	return;
}

require_once YSTDB_PATH . 'class/main.php';

new Ystandard_Blocks();