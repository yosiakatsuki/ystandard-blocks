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
use ystandard_blocks\Format;
use ystandard_blocks\Menu;
use ystandard_blocks\Option;
use ystandard_blocks\Utility;

defined( 'ABSPATH' ) || die();

/**
 * Class Inline
 *
 * @package ystandard_blocks\menu
 */
class Inline {

	/**
	 * Inline constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu_page' ], 101 );
		add_filter( Menu::SAVE_FILTER, [ $this, 'save' ] );
		add_filter(
			Menu::LOCALIZE_SCRIPT_PARAM,
			function ( $param ) {
				$param['inline'] = Format::get_options_all();

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
			'インラインスタイル設定',
			'インラインスタイル',
			'manage_options',
			Menu::MENU_SLUG,
			[ $this, 'add_menu' ]
		);
	}

	/**
	 * メニュー作成
	 */
	public function add_menu() {
		ob_start();
		?>
		<div id="inline-style">
			<h2 class="ystdb-menu__content-title">インラインスタイル設定</h2>
			<p class="ystdb-menu__meta">テキスト編集エリアすぐ上のツールバーに表示されるテキスト装飾ボタンのスタイル設定</p>
			<div class="ystdb-menu__section">
				<?php $this->tool_bar_button_style(); ?>
			</div>
			<div class="ystdb-menu__section">
				<?php $this->larger_smaller_style(); ?>
			</div>
			<input type="hidden" name="ystdb-menu" value="inline">
		</div>
		<div class="uk-margin-medium-top">
			<button type="button" class="uk-button uk-button-default uk-button-primary" onclick="submit();">更新</button>
		</div>
		<?php
		$content = ob_get_clean();
		Menu::blocks_menu_content( $content, 'inline' );
	}

	/**
	 * 少し大きく・少し小さく
	 */
	private function larger_smaller_style() {
		?>
		<h2 class="ystdb-menu__content-sub-title">少し大きく・少し小さく</h2>
		<p class="uk-text-meta uk-text-small">ツールバー内の「▼」から選択できるテキストサイズ変更ボタンの設定</p>
		<div class="uk-grid-divider uk-margin-large-bottom" uk-grid>
			<div class="uk-width-1-2@m">
				<h4 class="uk-text-small uk-heading-divider">少し大きく</h4>
				<p class="uk-text-small uk-text-meta">標準サイズからの相対サイズ(%)を設定してください。</p>
				<div class="uk-form-horizontal">
					<div class="uk-margin-small">
						<label class="uk-form-label uk-text-small">文字サイズ<small class="ystdb-menu__range-info">60~200</small></label>
						<div class="uk-form-controls">
							<input
								type="number"
								class="uk-input"
								min="60"
								max="200"
								v-model="inline.larger"
							>
							<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'larger' ); ?>" :value="inline.larger">
						</div>
					</div>
					<div class="uk-margin-small">
						<label class="uk-form-label uk-text-small">文字サイズ(SP)<small class="ystdb-menu__range-info">60~200</small></label>
						<div class="uk-form-controls">
							<input
								type="number"
								class="uk-input"
								min="60"
								max="200"
								v-model="inline.largerSP"
							>
							<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'larger_sp' ); ?>" :value="inline.largerSP">
						</div>
					</div>
				</div>
			</div>
			<div class="uk-width-1-2@m">
				<div class="uk-flex uk-flex-column">
					<p class="uk-margin-remove uk-text-meta">プレビュー</p>
					<div class="uk-card uk-card-default uk-card-body">
						<div>
							<span class="uk-text-small uk-text-meta">標準サイズ</span><br>
							<span style="font-size: 1rem;">テキストを少し大きくする</span>
						</div>
						<div class="uk-margin-small-top">
							<span class="uk-text-small uk-text-meta">少し大きく</span><br>
							<span v-bind:style="previewLager">テキストを少し大きくする</span>
						</div>
						<div class="uk-margin-small-top">
							<span class="uk-text-small uk-text-meta">少し大きく(SP)</span><br>
							<span v-bind:style="previewLagerSP">テキストを少し大きくする</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="uk-grid-divider uk-margin-large-bottom" uk-grid>
			<div class="uk-width-1-2@m">
				<h4 class="uk-text-small uk-heading-divider">少し小さく</h4>
				<p class="uk-text-small uk-text-meta">標準サイズからの相対サイズ(%)を設定してください。</p>
				<div class="uk-form-horizontal">
					<div class="uk-margin-small">
						<label class="uk-form-label uk-text-small">文字サイズ<small class="ystdb-menu__range-info">60~200</small></label>
						<div class="uk-form-controls">
							<input
								type="number"
								class="uk-input"
								min="60"
								max="200"
								v-model="inline.smaller"
							>
							<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'smaller' ); ?>" :value="inline.smaller">
						</div>
					</div>
					<div class="uk-margin-small">
						<label class="uk-form-label uk-text-small">文字サイズ(SP)<small class="ystdb-menu__range-info">60~200</small></label>
						<div class="uk-form-controls">
							<input
								type="number"
								class="uk-input"
								min="60"
								max="200"
								v-model="inline.smallerSP"
							>
							<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'smaller_sp' ); ?>" :value="inline.smallerSP">
						</div>
					</div>
				</div>
			</div>
			<div class="uk-width-1-2@m">
				<div class="uk-flex uk-flex-column">
					<p class="uk-margin-remove uk-text-meta">プレビュー</p>
					<div class="uk-card uk-card-default uk-card-body">
						<div>
							<span class="uk-text-small uk-text-meta">標準サイズ</span><br>
							<span style="font-size: 1rem;">テキストを少し小さくする</span>
						</div>
						<div class="uk-margin-small-top">
							<span class="uk-text-small uk-text-meta">少し小さく</span><br>
							<span v-bind:style="previewSmaller">テキストを少し小さくする</span>
						</div>
						<div class="uk-margin-small-top">
							<span class="uk-text-small uk-text-meta">少し小さく(SP)</span><br>
							<span v-bind:style="previewSmallerSP">テキストを少し小さくする</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * ツールバー用設定
	 */
	private function tool_bar_button_style() {
		?>
		<?php for ( $i = 1; $i <= 3; $i ++ ) : ?>
			<div class="ystdb-menu__preview-section">
				<div>
					<h4 class="ystdb-menu__content-sub-title">インラインスタイル <?php echo $i; ?></h4>
					<h5 class="ystdb-menu__label">文字・装飾</h5>
					<div class="ystdb-menu__inline-form"></div>
					<div class="uk-form-horizontal">
						<div class="uk-margin-small">
							<label class="uk-form-label uk-text-small">文字サイズ(%)<small class="ystdb-menu__range-info">60~200</small></label>
							<div class="uk-form-controls">
								<input
									type="number"
									class="uk-input"
									min="60"
									max="200"
									v-model="inline.fontSize<?php echo $i; ?>"
								>
							</div>
							<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'font_size_' . $i ); ?>" :value="inline.fontSize<?php echo $i; ?>">
						</div>

						<div class="uk-margin-small">
							<label class="uk-form-label uk-text-small">文字色</label>

							<div class="uk-form-controls">
								<div class="uk-button-group">
									<div class="uk-flex">
										<span class="uk-button uk-button-default color-picker-preview uk-text-small" v-bind:style="{color:inline.color<?php echo $i; ?>,backgroundColor:'currentColor'}">-</span>
										<button class="uk-button uk-button-default color-picker-button uk-text-small" type="button">変更</button>
										<div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
											<chrome-picker v-model="inline.color<?php echo $i; ?>" @input="updateColor(<?php echo $i; ?>)"></chrome-picker>
											<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'color_' . $i ); ?>" :value="inline.color<?php echo $i; ?>">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="uk-margin-small">
							<label class="uk-form-label uk-text-small">装飾タイプ</label>
							<div class="uk-form-controls uk-form-controls-text uk-text-small">
								<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'type_' . $i ); ?>" :value="inline.type<?php echo $i; ?>">
								<label class="uk-margin-small-right">
									<input
										class="uk-radio"
										type="radio"
										value="normal"
										v-model="inline.type<?php echo $i; ?>"
									> 装飾なし
								</label>
								<label class="uk-margin-small-right">
									<input
										class="uk-radio"
										type="radio"
										value="bold"
										v-model="inline.type<?php echo $i; ?>"
									> 太字
								</label>
								<label>
									<input
										class="uk-radio"
										type="radio"
										value="italic"
										v-model="inline.type<?php echo $i; ?>"
									> 斜体
								</label>
							</div>
						</div>
					</div>

					<h5 class="uk-text-small uk-margin-remove-bottom uk-margin-medium-top uk-text-bold">マーカー</h5>
					<div class="uk-form-horizontal">
						<div class="uk-margin-small">
							<label class="uk-form-label uk-text-small">マーカー色</label>

							<div class="uk-form-controls">
								<div class="uk-button-group">
									<div class="uk-flex">
										<span class="uk-button uk-button-default color-picker-preview uk-text-small" v-bind:style="{color:inline.markColor<?php echo $i; ?>,backgroundColor:'currentColor'}">-</span>
										<button class="uk-button uk-button-default color-picker-button uk-text-small" type="button">変更</button>
										<div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
											<chrome-picker v-model="inline.markColor<?php echo $i; ?>" @input="updateMakerColor(<?php echo $i; ?>)"></chrome-picker>
											<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'mark_color_' . $i ); ?>" :value="inline.markColor<?php echo $i; ?>">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="uk-margin-small">
							<label class="uk-form-label uk-text-small">マーカーの濃さ(%)<small class="ystdb-menu__range-info">0~100</small></label>

							<div class="uk-form-controls">
								<input

									type="number"
									class="uk-input"
									min="0"
									max="100"
									v-model="inline.markOpacity<?php echo $i; ?>"
								>
								<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'mark_opacity_' . $i ); ?>" :value="inline.markOpacity<?php echo $i; ?>">
							</div>
						</div>

						<div class="uk-margin-small">
							<label class="uk-form-label uk-text-small">マーカー太さ(%)<small class="ystdb-menu__range-info">0~100</small></label>

							<div class="uk-form-controls">
								<input
									type="number"
									class="uk-input"
									min="0"
									max="100"
									v-model="inline.markWeight<?php echo $i; ?>"
								>
								<input type="hidden" name="<?php echo Option::get_option_name( 'inline', 'mark_weight_' . $i ); ?>" :value="inline.markWeight<?php echo $i; ?>">
							</div>
						</div>
					</div>

				</div>
				<div class="uk-width-1-2@m">
					<div class="uk-flex uk-flex-column">
						<p class="uk-margin-remove uk-text-meta">プレビュー</p>
						<div class="uk-card uk-card-default uk-card-body">
							<span v-bind:style="previewMaker(<?php echo $i; ?>)">インラインスタイル <?php echo $i; ?></span>
						</div>
					</div>
				</div>
			</div>
		<?php endfor; ?>
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

		if ( 'inline' !== $_POST['ystdb-menu'] ) {
			return $options;
		}

		if ( isset( $_POST[ Config::OPTION_NAME ] ) && isset( $_POST[ Config::OPTION_NAME ]['inline'] ) ) {
			$new = $_POST[ Config::OPTION_NAME ]['inline'];

			// サニタイズ.
			for ( $i = 1; $i <= 3; $i ++ ) {
				// サイズ.
				if ( ! isset( $new[ 'font_size_' . $i ] ) ) {
					$new[ 'font_size_' . $i ] = 100;
				}
				$new[ 'font_size_' . $i ] = Utility::sanitize_size( $new[ 'font_size_' . $i ], 100, 200, 60 );
				// 文字色.
				if ( ! isset( $new[ 'color_' . $i ] ) ) {
					$new[ 'color_' . $i ] = '#222222';
				}
				$new[ 'color_' . $i ] = Utility::sanitize_hex( $new[ 'color_' . $i ], '#222222' );
				// タイプ.
				if ( ! isset( $new[ 'type_' . $i ] ) ) {
					$new[ 'type_' . $i ] = 'normal';
				}
				$new[ 'type_' . $i ] = $this->sanitize_type( $new[ 'type_' . $i ] );
				// マーカー色.
				if ( ! isset( $new[ 'mark_color_' . $i ] ) ) {
					$new[ 'mark_color_' . $i ] = Format::MARKER_DEFAULT_COLOR[ $i ];
				}
				$new[ 'mark_color_' . $i ] = Utility::sanitize_hex( $new[ 'mark_color_' . $i ], Format::MARKER_DEFAULT_COLOR[ $i ] );
				// マーカー濃さ.
				if ( ! isset( $new[ 'mark_opacity_' . $i ] ) ) {
					$new[ 'mark_opacity_' . $i ] = 30;
				}
				$new[ 'mark_opacity_' . $i ] = Utility::sanitize_size( $new[ 'mark_opacity_' . $i ], 30, 100, 0 );
				// マーカー太さ.
				if ( ! isset( $new[ 'mark_weight_' . $i ] ) ) {
					$new[ 'mark_weight_' . $i ] = 25;
				}
				$new[ 'mark_weight_' . $i ] = Utility::sanitize_size( $new[ 'mark_weight_' . $i ], 25, 100, 0 );
			}

			// サイズ.
			if ( ! isset( $new['larger'] ) ) {
				$new['larger'] = 120;
			}
			$new['larger'] = Utility::sanitize_size( $new['larger'], 120, 200, 60 );
			if ( ! isset( $new['larger_sp'] ) ) {
				$new['larger_sp'] = 120;
			}
			$new['larger_sp'] = Utility::sanitize_size( $new['larger_sp'], 120, 200, 60 );
			if ( ! isset( $new['smaller'] ) ) {
				$new['smaller'] = 80;
			}
			$new['smaller'] = Utility::sanitize_size( $new['smaller'], 80, 200, 60 );
			if ( ! isset( $new['smaller_sp'] ) ) {
				$new['smaller_sp'] = 80;
			}
			$new['smaller_sp'] = Utility::sanitize_size( $new['smaller_sp'], 80, 200, 60 );

			$save['inline'] = $new;
			$options        = array_merge(
				$options,
				$save
			);
		}

		return $options;
	}

	/**
	 * 装飾タイプのサニタイズ
	 *
	 * @param string $type タイプ.
	 *
	 * @return string
	 */
	private function sanitize_type( $type ) {
		$list = [
			'normal',
			'bold',
			'italic',
		];

		if ( ! in_array( $type, $list, true ) ) {
			return 'normal';
		}

		return $type;
	}

}

new Inline();
