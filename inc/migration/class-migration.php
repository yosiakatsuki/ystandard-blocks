<?php
/**
 * Migration
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\Styles;

defined( 'ABSPATH' ) || die();

/**
 * Class Migration
 *
 * @package ystandard_blocks
 */
class Migration {

	/**
	 * Menu Slug.
	 */
	const MENU_SLUG = 'ystdb-migration';

	/**
	 * Menu Position.
	 */
	const MENU_POSITION = 999;

	/**
	 * Migration constructor.
	 */
	public function __construct() {

		add_action( 'admin_menu', [ $this, 'add_menu' ], 100 + self::MENU_POSITION );
	}

	/**
	 * 旧ツールバーボタン設定取得
	 *
	 * @return array
	 */
	public static function get_old_toolbar_button_option() {
		$migration = [];
		$section   = 'inline';

		if ( is_null( Option::get_option( $section, '', null ) ) ) {
			return [];
		}

		$marker_default_color = [
			1 => '#DA6272',
			2 => '#45A1CF',
			3 => '#FFEE55',
		];

		for ( $i = 1; $i <= 3; $i++ ) {
			$font_size = ( Option::get_option_by_number( $section, 'font_size_' . $i, 100 ) / 100 );
			$color     = Option::get_option( $section, 'color_' . $i, '#222222' );
			$default   = Option::get_default_option( $section, 'color_' . $i, '#222222' );
			if ( $color === $default ) {
				$color = '';
			}
			$type         = Option::get_option( $section, 'type_' . $i, 'normal' );
			$weight       = 'bold' === $type ? 700 : '';
			$style        = 'italic' === $type ? 'italic' : '';
			$mark_color   = Option::get_option( $section, 'mark_color_' . $i, $marker_default_color[ $i ] );
			$mark_opacity = Option::get_option_by_number( $section, 'mark_opacity_' . $i, 30 );
			$mark_weight  = Option::get_option_by_number( $section, 'mark_weight_' . $i, 25 );
			$marker       = sprintf(
				'linear-gradient(transparent %s, rgba(%s, %s) %s)',
				( 100 - $mark_weight ) . '%',
				implode( ',', Styles::hex_2_rgb( $mark_color ) ),
				$mark_opacity / 100,
				( 100 - $mark_weight ) . '%'
			);
			$migration[]  = [
				'enable'    => true,
				'style'     => [
					'font-size'      => $font_size . 'em',
					'color'          => $color,
					'font-weight'    => $weight,
					'font-style'     => $style,
					'@markerWeight'  => (int) $mark_weight,
					'@markerOpacity' => (int) $mark_opacity,
					'@markerColor'   => $mark_color,
					'background'     => $marker,
				],
				'customCss' => '',
				'lock'      => '',
			];

		}

		return $migration;
	}

	/**
	 * 旧ツールバーアイテム設定取得
	 *
	 * @return array
	 */
	public static function get_old_toolbar_item_option() {
		$migration = [];
		$section   = 'inline';

		if ( is_null( Option::get_option( $section, '', null ) ) ) {
			return [];
		}

		$font_size               = ( Option::get_option_by_number( $section, 'larger', 120 ) / 100 );
		$migration['larger']     = [
			'name'  => 'larger',
			'label' => '少し大きく',
			'style' => [
				'font-size' => $font_size . 'em',
			],
		];
		$font_size               = ( Option::get_option_by_number( $section, 'smaller', 80 ) / 100 );
		$migration['smaller']    = [
			'name'  => 'smaller',
			'label' => '少し小さく',
			'style' => [
				'font-size' => $font_size . 'em',
			],
		];
		$font_size               = ( Option::get_option_by_number( $section, 'larger_sp', 120 ) / 100 );
		$migration['larger-sp']  = [
			'name'        => 'larger-sp',
			'label'       => '少し大きく(SP)',
			'mobileStyle' => [
				'font-size' => $font_size . 'em',
			],
		];
		$font_size               = ( Option::get_option_by_number( $section, 'smaller_sp', 80 ) / 100 );
		$migration['smaller-sp'] = [
			'name'        => 'smaller-sp',
			'label'       => '少し小さく(SP)',
			'mobileStyle' => [
				'font-size' => $font_size . 'em',
			],
		];

		return $migration;
	}

	/**
	 * 設定移行が必要か.
	 */
	public static function need_migration() {
		$option = Option::get_option_all();
		if ( empty( $option ) ) {
			return false;
		}
		if ( ! isset( $option['inline'] ) ) {
			return false;
		}

		return true;
	}

	/**
	 * メニュー追加
	 */
	public function add_menu() {
		if ( ! self::need_migration() && ! isset( $_POST['ystdb-migration'] ) ) {
			return;
		}
		add_submenu_page(
			Admin_Menu::MENU_SLUG,
			'v2 -> v3 設定移行',
			'v2 -> v3 設定移行',
			'manage_options',
			self::MENU_SLUG,
			[ $this, 'add_page' ],
			10
		);
	}

	/**
	 * 設定画面.
	 */
	public function add_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		$result         = $this->v2_to_v3_migration();
		$need_migration = self::need_migration();
		?>
		<div class="wrap ystdb-menu-page">
			<h1 class="ystdb-menu__title">v2 → v3 設定移行</h1>
			<div id="ystdb-menu" class="ystdb-menu">
				<div class="ystdb-menu__container">
					<div class="ystdb-menu__content">
						<?php if ( $need_migration ) : ?>
							<form method="post" action="">
								<?php wp_nonce_field( Config::NONCE_ACTION, Config::NONCE_NAME ); ?>
								<p>yStandard Blocks バージョン2の設定をバージョン3用の設定にアップグレードします。</p>
								<input type="hidden" name="ystdb-migration" value="true">
								<?php submit_button( 'アップグレードする' ); ?>
							</form>
						<?php else : ?>
							<p>設定移行が完了しました。</p>
							<p><a href="<?php echo esc_url_raw( admin_url( 'admin.php?page=' . Inline_Style::MENU_SLUG ) ); ?>">設定画面を開く</a></p>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * 設定移行.
	 */
	private function v2_to_v3_migration() {
		if ( ! Utility::verify_nonce( Config::NONCE_NAME, Config::NONCE_ACTION ) ) {
			return false;
		}
		if ( ! isset( $_POST['ystdb-migration'] ) ) {
			return false;
		}
		$toolbar_button = self::get_old_toolbar_button_option();
		$toolbar_items  = self::get_old_toolbar_item_option();
		Option::update_section(
			'inlineStyle',
			[
				'buttons' => $toolbar_button,
				'items'   => $toolbar_items,
			]
		);
		Option::delete_section( 'inline' );

		return true;
	}
}

new Migration();
