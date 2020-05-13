<?php
/**
 * 初期化
 *
 * @package ystandard
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\menu_page;

use ystandard_blocks\Menu;

defined( 'ABSPATH' ) || die();

/**
 * Class Reset
 *
 * @package ystandard_blocks\menu_page
 */
class Reset {

	/**
	 * Reset constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu_page' ], 101 );
		add_filter( Menu::SAVE_FILTER, [ $this, 'save' ] );
	}

	/**
	 * メニュー追加
	 */
	public function add_menu_page() {
		add_submenu_page(
			Menu::MENU_SLUG,
			'設定初期化',
			'設定初期化',
			'manage_options',
			'ystdb-reset',
			[ $this, 'add_menu' ]
		);
	}

	/**
	 * メニュー作成
	 */
	public function add_menu() {
		ob_start();
		?>
		<div id="reset">
			<h2 class="ystdb-menu__content-title">設定初期化</h2>
			<p class="ystdb-menu__meta">各設定を初期化します。</p>
			<div class="uk-margin-medium-top">
				<div>
					<label><input name="reset-inline" type="checkbox" class="uk-checkbox" value="1"> インラインスタイル設定を初期化する</label>
				</div>
				<div class="uk-margin-small-top">
					<label><input name="reset-balloon" type="checkbox" class="uk-checkbox" value="1"> 吹き出し登録を全て消去する</label>
				</div>
			</div>
			<div class="uk-margin-medium-top">
				<input type="hidden" name="ystdb-menu" value="reset">
				<button type="button" class="uk-button uk-button-danger" onclick="submit();">初期化を実行する</button>
			</div>
		</div>
		<?php
		$content = ob_get_clean();
		Menu::blocks_menu_content( $content, 'reset' );
	}

	/**
	 * 初期化実行
	 *
	 * @param array $options Options.
	 *
	 * @return array
	 */
	public function save( $options ) {
		if ( 'reset' !== $_POST['ystdb-menu'] ) {
			return $options;
		}

		if ( isset( $_POST['reset-inline'] ) ) {
			$options['inline'] = [];
		}
		if ( isset( $_POST['reset-balloon'] ) ) {
			$options['balloon'] = [];
		}

		return $options;
	}
}

new Reset();
