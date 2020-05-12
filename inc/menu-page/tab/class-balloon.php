<?php
/**
 * インライン装飾設定
 *
 * @package ystandard
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\menu_page;

use ystandard_blocks\Config;
use ystandard_blocks\Menu;
use ystandard_blocks\Option;

defined( 'ABSPATH' ) || die();

/**
 * Class Balloon
 *
 * @package ystandard_blocks\menu_page
 */
class Balloon {

	/**
	 * Inline constructor.
	 */
	public function __construct() {
		add_action(
			Menu::MENU_ADD_ACTION,
			function () {
				echo '<li><a href="#" data-active="1">吹き出し</a></li>';
			}
		);
		add_action( Menu::PANEL_ADD_ACTION, [ $this, 'add_menu' ] );
		add_filter( Menu::SAVE_FILTER, [ $this, 'save' ] );
		add_filter(
			Menu::LOCALIZE_SCRIPT_PARAM,
			function ( $param ) {
				$param['balloon'] = \ystandard_blocks\Balloon::get_balloon_images();

				return $param;
			}
		);
	}

	/**
	 * メニュー作成
	 */
	public function add_menu() {
		?>
		<li>
			<div id="balloon">
				<h2 class="uk-text-lead uk-heading-divider">吹き出し画像登録</h2>
				<p class="uk-text-meta uk-text-small">吹き出しブロックでよく使う画像・名前を登録できます</p>
				<div class="uk-margin-medium-top">
					<div class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center" uk-sortable="handle: .uk-card" uk-grid>
						<div v-for="(item,index) in balloon">
							<div class="uk-card uk-card-default uk-card-body uk-margin-small-bottom">
								<div class="ystdb-balloon__image-option">
									<div class="ystdb-balloon__image" v-if="item.url">
										<img :src="item.url" :alt="item.name">
										<button class="uk-button uk-button-link uk-button-small" type="button">画像を変更</button>
									</div>
									<div class="ystdb-balloon__image-select" v-if="! item.url">
										<button class="uk-button uk-button-primary" type="button">画像を選択</button>
									</div>
								</div>
								<div class="ystdb-balloon__name uk-margin-small-top">
									<div class="uk-form-controls">
										<input class="uk-input" type="text" placeholder="名前を入力..." v-model="item.name">
									</div>
								</div>
								<input type="hidden" name="<?php echo Option::get_option_name( 'balloon' ) . '[url][]'; ?>" :value="item.url">
								<input type="hidden" name="<?php echo Option::get_option_name( 'balloon' ) . '[name][]'; ?>" :value="item.name">
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<?php
	}

	/**
	 * 設定保存用データ作成
	 *
	 * @param array $options Options.
	 *
	 * @return array
	 */
	public function save( $options ) {

		if ( isset( $_POST[ Config::OPTION_NAME ] ) ) {
			$options = array_merge(
				$options,
				$_POST[ Config::OPTION_NAME ]
			);
		}

		return $options;
	}
}

new Balloon();
