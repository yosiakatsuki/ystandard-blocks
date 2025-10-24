<?php
/**
 * Helper : version
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\helper;

use ystandard_blocks\utils\Version;

defined( 'ABSPATH' ) || die();

/**
 * Class Version
 *
 * @package ystandard_blocks\version
 */
class Helper_Version {

	/**
	 * プラグインの有効化チェック
	 *
	 * @deprecated use utils\Version::check_version()
	 */
	public static function check_version() {
		return Version::check_version();
	}

	/**
	 * PHPバージョン不足案内
	 *
	 * @deprecated use Version::phpversion_notice();
	 */
	public static function phpversion_notice() {
		Version::phpversion_notice();
	}

	/**
	 * ブロックエディター使えない案内
	 *
	 * @deprecated use Version::block_editor_notice();)
	 */
	public static function block_editor_notice() {
		Version::block_editor_notice();
	}

	/**
	 * WordPressのバージョンチェック
	 *
	 * @param string $version バージョン.
	 *
	 * @return bool|int
	 * @deprecated use Version::wordpress_version_compare;
	 */
	public static function wordpress_version_compare( $version ) {

		return Version::wordpress_version_compare( $version );
	}
}
