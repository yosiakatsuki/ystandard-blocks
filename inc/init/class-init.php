<?php
/**
 * Init
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Init
 *
 * @package ystandard_blocks
 */
class Init {

	/**
	 * Init constructor.
	 */
	public function __construct() {
		add_action( 'admin_notices', [ $this, 'ystandard_notice' ] );
		add_filter( 'body_class', [ $this, 'body_class' ] );
		add_filter( 'ys_system_info', [ $this, 'add_system_info' ], 11 );
		add_filter( 'ystdb_get_version', [ $this, 'get_blocks_version' ] );
	}

	/**
	 * システム情報追加
	 *
	 * @param array $info システム情報.
	 *
	 * @return array
	 */
	public function add_system_info( $info ) {
		$info[] = 'yStandard Blocks バージョン: ' . YSTDB_VERSION;

		return $info;
	}

	/**
	 * バージョン情報の取得.
	 *
	 * @param string $ver Version.
	 *
	 * @return string
	 */
	public function get_blocks_version( $ver ) {
		return YSTDB_VERSION;
	}

	/**
	 * Body Class.
	 *
	 * @param array $classes classes.
	 *
	 * @return array
	 */
	public function body_class( $classes ) {
		$classes[] = Config::BODY_CLASS;

		return $classes;
	}

	/**
	 * テーマ確認案内
	 */
	public function ystandard_notice() {
		if ( Utility::is_ystandard() ) {
			return;
		}
		if ( get_option( Config::OPTION_PREFIX . 'hide_no_ystandard_notice', false ) ) {
			return;
		}
		global $hook_suffix;
		if ( false !== strpos( $hook_suffix, 'ystandard-blocks' ) ) {
			return;
		}
		?>
		<div class="notice notice-warning is-dismissible">
			<p>このサイトではyStandardが有効化されていません。</p>
			<p>yStandard Blocksのブロックのデザインが崩れたり、機能によっては正常に動作しない恐れがあります。</p>
			<p>※この警告の非表示設定などは 「<a href="<?php echo admin_url( 'options-general.php?page=ystandard-blocks' ); ?>">yStandard Blocks設定</a>」 ページから設定できます。</p>
		</div>
		<?php
	}

}

new Init();
