<?php
/**
 * Helper : version
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\helper;

defined( 'ABSPATH' ) || die();

/**
 * Class Version
 *
 * @package ystandard_blocks\version
 */
class Version {

	/**
	 * プラグインの有効化チェック
	 */
	public static function check_version() {
		/**
		 * PHPバージョンチェック
		 */
		if ( version_compare( phpversion(), '7.0.0', '<' ) ) {
			add_action( 'admin_notices', [ __CLASS__, 'phpversion_notice' ] );

			return false;
		}
		/**
		 * Gutenbergチェック
		 */
		if ( ! function_exists( 'register_block_type' ) ) {
			add_action( 'admin_notices', [ __CLASS__, 'block_editor_notice' ] );

			return false;
		}

		return true;
	}

	/**
	 * PHPバージョン不足案内
	 */
	public static function phpversion_notice() {
		?>
		<div class="notice notice-error is-dismissible">
			<p>PHPバージョンが古いためyStandard Blocksが機能しません。</p>
			<p>yStandard BlocksはPHP 7.3以上での利用を推奨しています。</p>
			<p>お使いのサーバーのPHPバージョンをご確認ください。（このサイトで有効になっているPHPバージョン：<?php echo phpversion(); ?>）</p>
		</div>
		<?php
	}

	/**
	 * ブロックエディター使えない案内
	 */
	public static function block_editor_notice() {
		?>
		<div class="notice notice-error is-dismissible">
			<p>このサイトではブロックエディターが使えないためyStandard Blocksが機能しません。</p>
			<p>クラシックエディター(Classic Editor)を停止するなど、ブロックエディターが使える状態にしてください。</p>
		</div>
		<?php
	}
}
