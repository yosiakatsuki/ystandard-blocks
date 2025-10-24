<?php
/**
 * バージョン.
 *
 * @package ystandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\utils;

defined( 'ABSPATH' ) || die();

/**
 * Class Version
 *
 * @package ystandard_blocks
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

	/**
	 * WordPressのバージョンチェック
	 *
	 * @param string $version バージョン.
	 *
	 * @return bool|int
	 */
	public static function wordpress_version_compare( $version ) {

		$wp_version = get_bloginfo( 'version' );

		return version_compare( $wp_version, $version, '>=' );
	}

	/**
	 * テーマのバージョンチェック
	 *
	 * @param string $version バージョン.
	 *
	 * @return bool|int
	 */
	public static function ystandard_version_compare( $version = '' ) {
		if ( 'ystandard' !== get_template() ) {
			return false;
		}
		// バージョンの確認不要であればテーマの確認のみ.
		if ( '' === $version ) {
			return true;
		}
		$pre_version = apply_filters( 'ys_ystandard_version', null );
		if ( is_null( $pre_version ) ) {
			$theme = wp_get_theme( get_template() );
			if ( is_null( $theme ) ) {
				return false;
			}
			$theme_version = $theme->version;
		} else {
			$theme_version = $pre_version;
		}

		return version_compare( $theme_version, $version, '>=' );
	}
}
