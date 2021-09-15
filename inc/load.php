<?php
/**
 * Load
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

defined( 'ABSPATH' ) || die();

require_once __DIR__ . '/config/class-config.php';
require_once __DIR__ . '/utility/class-utility.php';
require_once __DIR__ . '/helper/class-helper-version.php';
require_once __DIR__ . '/helper/class-helper-debug.php';
require_once __DIR__ . '/helper/class-helper-filesystem.php';
require_once __DIR__ . '/helper/class-helper-css.php';
require_once __DIR__ . '/helper/class-helper-conversion.php';
require_once __DIR__ . '/admin/class-notice.php';
require_once __DIR__ . '/migration/class-migration.php';
require_once __DIR__ . '/option/class-option.php';

if ( ! \ystandard_blocks\helper\Helper_Version::check_version() ) {
	return;
}

require_once __DIR__ . '/init/class-init.php';
require_once __DIR__ . '/icon/class-icon.php';
require_once __DIR__ . '/api/class-api.php';
require_once __DIR__ . '/admin/class-admin.php';
require_once __DIR__ . '/admin-menu/class-admin-menu.php';
require_once __DIR__ . '/inline-style/class-inline-style.php';
require_once __DIR__ . '/balloon/class-balloon.php';
require_once __DIR__ . '/blocks/class-dynamic-block.php';
require_once __DIR__ . '/blocks/class-register.php';
require_once __DIR__ . '/blocks/class-color-palette.php';
require_once __DIR__ . '/blocks/class-font-size.php';
require_once __DIR__ . '/enqueue/class-enqueue.php';
require_once __DIR__ . '/enqueue/class-enqueue-embed.php';
require_once __DIR__ . '/enqueue/class-polyfill.php';
require_once __DIR__ . '/kses/class-kses.php';
