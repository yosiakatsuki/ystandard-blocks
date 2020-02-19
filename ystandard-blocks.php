<?php
/**
 * Plugin Name: yStandard Blocks
 * Plugin URI: https://wp-ystandard.com/
 * Description: 無料WordPressテーマ「yStandard」用ブロック追加プラグイン.
 * Version: 1.0.2
 * Author: yosiakatsuki
 * Author URI: https://yosiakatsuki.net
 * License: GPL-2.0 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ystandard-blocks
 * Domain Path: languages
 *
 * @package yStandard_blocks
 */

/*
	Copyright (c) 2019 Yoshiaki Ogata (https://yosiakatsuki.net/)
	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License, version 2, as
	published by the Free Software Foundation.
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

defined( 'ABSPATH' ) || die();

define( 'YSTDB_VERSION', '1.0.2' );
define( 'YSTDB_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'YSTDB_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
/**
 * アンインストール時の処理
 */
register_uninstall_hook(
	__FILE__,
	[ 'ystandard_blocks\Main', 'uninstall_ystandard_blocks' ]
);

if ( ! function_exists( 'register_block_type' ) ) {
	return;
}

require_once YSTDB_PATH . '/class/class-main.php';

new ystandard_blocks\Main();

