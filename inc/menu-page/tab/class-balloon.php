<?php
/**
 * 吹き出し
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
	 * Balloon constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu_page' ], 101 );
		add_action(
			Menu::SCRIPT_ENQUEUE,
			function () {
				wp_enqueue_media();
			}
		);
		add_filter(
			Menu::SCRIPT_ENQUEUE_DEPS,
			function ( $deps ) {
				$deps[] = 'jquery';

				return $deps;
			}
		);
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
	 * メニュー追加
	 */
	public function add_menu_page() {
		add_submenu_page(
			Menu::MENU_SLUG,
			'吹き出し画像登録',
			'吹き出し登録',
			'manage_options',
			'ystdb-balloon',
			[ $this, 'add_menu' ]
		);
	}

	/**
	 * メニュー作成
	 */
	public function add_menu() {
		ob_start();
		?>
		<div id="balloon">
			<h2 class="ystdb-menu__content-title">吹き出し画像登録</h2>
			<p class="ystdb-menu__meta">吹き出しブロックでよく使う画像・名前を登録できます。</p>
			<div class="uk-margin-medium-top">
				<div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-4@s uk-child-width-1-4@m uk-text-center" uk-sortable="handle: .uk-card" uk-grid>
					<div v-for="(item,index) in balloon">
						<div class="uk-card uk-card-default uk-card-body uk-margin-small-bottom">
							<div class="ystdb-balloon__image-option">
								<div class="ystdb-balloon__image" v-if="item.url">
									<img :src="item.url" :alt="item.name">
									<button class="uk-button uk-button-link uk-button-small" type="button" @click="selectImage(index)">画像を変更</button>
								</div>
								<div class="ystdb-balloon__image" v-if="! item.url">
									<button type="button" class="ystdb-balloon__image-none uk-button-text" @click="selectImage(index)">
										<span uk-icon="icon:user"></span>
									</button>
									<button class="uk-button uk-button-link uk-button-small" type="button" @click="selectImage(index)">画像を選択</button>
								</div>
							</div>
							<div class="ystdb-balloon__name uk-margin-small-top">
								<div class="uk-form-controls">
									<input class="uk-input" type="text" placeholder="名前を入力..." v-model="item.name">
								</div>
							</div>
							<div class="uk-margin-small-top">
								<button type="button" class="uk-button uk-button-text uk-button-small uk-text-meta" @click="deleteImage(index)">
										<span class="uk-flex uk-flex-center">
											<span uk-icon="icon:close"></span>
											<span>削除</span>
										</span>
								</button>
							</div>
							<input type="hidden" name="<?php echo Option::get_option_name( 'balloon', 'image' ) . '[]'; ?>" :value="item.url">
							<input type="hidden" name="<?php echo Option::get_option_name( 'balloon', 'name' ) . '[]'; ?>" :value="item.name">
						</div>
					</div>
				</div>
			</div>
			<div class="uk-margin-medium-top uk-flex uk-flex-between">
				<span class="uk-text-small uk-text-meta">件数: {{count}}</span>
				<button type="button" class="uk-button uk-button-secondary" @click="addImage()">画像を追加</button>
			</div>
			<input type="hidden" name="ystdb-menu" value="balloon">
		</div>
		<div class="uk-margin-medium-top">
			<button type="button" class="uk-button uk-button-default uk-button-primary" onclick="submit();">更新</button>
		</div>
		<?php
		$content = ob_get_clean();
		Menu::blocks_menu_content( $content, 'balloon' );
	}

	/**
	 * 設定保存用データ作成
	 *
	 * @param array $options Options.
	 *
	 * @return array
	 */
	public function save( $options ) {
		if ( 'balloon' !== $_POST['ystdb-menu'] ) {
			return $options;
		}
		if ( isset( $_POST[ Config::OPTION_NAME ] ) ) {
			$new['balloon'] = [];
			// 取得.
			$image = $_POST[ Config::OPTION_NAME ]['balloon']['image'];
			$name  = $_POST[ Config::OPTION_NAME ]['balloon']['name'];
			if ( ! empty( $image ) ) {
				for ( $i = 0; $i <= count( $image ); $i ++ ) {
					if ( $image[ $i ] ) {
						$new['balloon'][] = [
							'image' => $image[ $i ],
							'name'  => $name[ $i ],
						];
					}
				}
			}

			$options = array_merge(
				$options,
				$new
			);
		}

		return $options;
	}
}

new Balloon();
