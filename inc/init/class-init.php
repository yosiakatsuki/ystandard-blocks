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
		add_filter(
			'ys_system_info',
			function ( $info ) {
				$info[] = 'yStandard Blocks バージョン: ' . YSTDB_VERSION;

				return $info;
			},
			11
		);
		add_filter(
			'ystdb_get_version',
			function ( $ver ) {
				return YSTDB_VERSION;
			}
		);

		if ( Utility::wordpress_version_compare( '5.8-alpha-1' ) ) {
			add_filter( 'block_categories_all', [ __CLASS__, 'add_block_categories' ] );
		} else {
			add_filter( 'block_categories', [ __CLASS__, 'add_block_categories' ] );
		}
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
	 * Add block category
	 *
	 * @param array $categories ブロックカテゴリー.
	 *
	 * @return array
	 */
	public static function add_block_categories( $categories ) {
		$categories[] = [
			'slug'  => 'ystdb',
			'title' => __( '[ys]yStandard Blocks', 'ystandard-blocks' ),
		];
		$categories[] = [
			'slug'  => 'ystdb_beta',
			'title' => __( '[ys]yStandard Blocks Beta', 'ystandard-blocks' ),
		];
		$categories[] = [
			'slug'  => 'ystdb_deprecated',
			'title' => __( '[ys]yStandard Blocks(非推奨)', 'ystandard-blocks' ),
		];

		return $categories;
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
