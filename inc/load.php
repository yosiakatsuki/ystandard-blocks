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
require_once __DIR__ . '/helper/class-version.php';
require_once __DIR__ . '/admin/class-notice.php';
require_once __DIR__ . '/migration/class-migration.php';
require_once __DIR__ . '/option/class-option.php';

if ( ! \ystandard_blocks\helper\Version::check_version() ) {
	return;
}

require_once __DIR__ . '/init/class-init.php';
require_once __DIR__ . '/icon/class-icon.php';
require_once __DIR__ . '/format/class-format.php';
require_once __DIR__ . '/balloon/class-balloon.php';
require_once __DIR__ . '/blocks/class-dynamic-block.php';
require_once __DIR__ . '/blocks/class-register.php';
require_once __DIR__ . '/enqueue/class-enqueue.php';
require_once __DIR__ . '/enqueue/class-enqueue-embed.php';
require_once __DIR__ . '/enqueue/class-polyfill.php';
require_once __DIR__ . '/enqueue/class-block-editor.php';
require_once __DIR__ . '/kses/class-kses.php';
require_once __DIR__ . '/admin/class-admin.php';
require_once __DIR__ . '/admin-menu/class-admin-menu.php';
require_once __DIR__ . '/admin-menu/class-option-no-ystd.php';
require_once __DIR__ . '/admin-menu/class-debug-menu.php';
require_once __DIR__ . '/customizer/class-customizer.php';
