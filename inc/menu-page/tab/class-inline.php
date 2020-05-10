<?php
/**
 * インライン装飾設定
 *
 * @package ystandard
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\tab;

use ystandard_blocks\Config;
use ystandard_blocks\Format;
use ystandard_blocks\Menu;
use ystandard_blocks\Option;

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
		add_action( Menu::MENU_ADD_ACTION, function () {
			echo '<li><a href="#">インライン</a></li>';
		} );
		add_action( Menu::PANEL_ADD_ACTION, [ $this, 'add_menu' ] );
		add_filter( Menu::SAVE_FILTER, [ $this, 'save' ] );
		add_filter( Menu::LOCALIZE_SCRIPT_PARAM, function ( $param ) {
			$param['inline'] = Format::get_options_all();

			return $param;
		} );
	}

	/**
	 * メニュー作成
	 */
	public function add_menu() {
		?>
		<li>
			<div id="inline-style">
				<h2 class="uk-text-lead uk-heading-divider">インラインスタイル設定</h2>
				<?php $this->tool_bar_button_style(); ?>
			</div>
		</li>
		<?php
	}

	/**
	 * ツールバー用設定
	 */
	private function tool_bar_button_style() {
		for ( $i = 1; $i <= 3; $i ++ ) : ?>
			<div class="uk-grid-divider uk-margin-large-bottom" uk-grid>
				<div class="uk-width-1-2@m">
					<h3 class="uk-text-small uk-heading-divider">インラインスタイル <?php echo $i; ?></h3>
					<h4 class="uk-text-small uk-margin-remove uk-text-bold">文字・装飾</h4>
					<div class="uk-form-horizontal">
						<div class="uk-margin-small">
							<label
								for="<?php echo Option::get_option_name( 'inline_style_fz_' . $i ); ?>"
								class="uk-form-label uk-text-small">
								文字サイズ(%)
							</label>

							<div class="uk-form-controls">
								<input
									name="<?php echo Option::get_option_name( 'inline_style_fz_' . $i ); ?>"
									type="number"
									class="uk-input"
									min="60"
									max="200"
									step="10"
									:value="inline.fontSize<?php echo $i; ?>"
									@input="changeInlineStyle('fontSize<?php echo $i; ?>',$event.target.value,<?php echo $i; ?>)"
								>
							</div>
						</div>

						<div class="uk-margin-small">
							<label
								for="<?php echo Option::get_option_name( 'inline_style_fz_' . $i ); ?>"
								class="uk-form-label uk-text-small">
								文字色
							</label>

							<div class="uk-form-controls">
								<div class="uk-button-group">
									<div class="uk-inline">
										<span class="uk-button uk-button-default color-picker-preview uk-text-small" v-bind:style="{color:inline.color<?php echo $i; ?>,backgroundColor:'currentColor'}">-</span>
										<button class="uk-button uk-button-default color-picker-button uk-text-small" type="button">変更</button>
										<div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
											<chrome-picker :value="inline.color<?php echo $i; ?>" @input="changeInlineStyle('color<?php echo $i; ?>',$event.hex,<?php echo $i; ?>)"></chrome-picker>
											<input type="hidden" name="<?php echo Option::get_option_name( 'inline_style_color_' . $i ); ?>" :value="inline.color<?php echo $i; ?>">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="uk-margin-small">
							<label
								for="<?php echo Option::get_option_name( 'inline_style_fz_' . $i ); ?>"
								class="uk-form-label uk-text-small">
								装飾タイプ
							</label>

							<div class="uk-form-controls uk-form-controls-text uk-text-small">
								<label class="uk-margin-small-right">
									<input
										class="uk-radio"
										type="radio"
										name="<?php echo Option::get_option_name( 'inline_style_type_' . $i ); ?>"
										value="normal"
										v-model="inline.type<?php echo $i; ?>"
										@change="refreshPreview(<?php echo $i; ?>)"
									> 装飾なし
								</label>
								<label class="uk-margin-small-right">
									<input
										class="uk-radio"
										type="radio"
										name="<?php echo Option::get_option_name( 'inline_style_type_' . $i ); ?>"
										value="bold"
										v-model="inline.type<?php echo $i; ?>"
										@change="refreshPreview(<?php echo $i; ?>)"
									> 太字
								</label>
								<label>
									<input
										class="uk-radio"
										type="radio"
										name="<?php echo Option::get_option_name( 'inline_style_type_' . $i ); ?>"
										value="italic"
										v-model="inline.type<?php echo $i; ?>"
										@change="refreshPreview(<?php echo $i; ?>)"
									> 斜体
								</label>
							</div>
						</div>
					</div>

					<h4 class="uk-text-small uk-margin-remove-bottom uk-margin-medium-top uk-text-bold">マーカー</h4>
					<div class="uk-form-horizontal">
						<div class="uk-margin-small">
							<label
								for="<?php echo Option::get_option_name( 'inline_style_fz_' . $i ); ?>"
								class="uk-form-label uk-text-small">
								マーカー色
							</label>

							<div class="uk-form-controls">
								<div class="uk-button-group">
									<div class="uk-inline">
										<span class="uk-button uk-button-default color-picker-preview uk-text-small" v-bind:style="{color:inline.markColor<?php echo $i; ?>,backgroundColor:'currentColor'}">-</span>
										<button class="uk-button uk-button-default color-picker-button uk-text-small" type="button">変更</button>
										<div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
											<chrome-picker :value="inline.markColor<?php echo $i; ?>" @input="changeInlineStyle('markColor<?php echo $i; ?>',$event.hex,<?php echo $i; ?>)"></chrome-picker>
											<input type="hidden" name="<?php echo Option::get_option_name( 'inline_style_mark_color_' . $i ); ?>" :value="inline.markColor<?php echo $i; ?>">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="uk-margin-small">
							<label
								for="<?php echo Option::get_option_name( 'inline_style_mark_opacity_' . $i ); ?>"
								class="uk-form-label uk-text-small">
								マーカーの濃さ(%)
							</label>

							<div class="uk-form-controls">
								<input
									name="<?php echo Option::get_option_name( 'inline_style_mark_opacity_' . $i ); ?>"
									type="number"
									class="uk-input"
									min="0"
									max="100"
									step="5"
									:value="inline.markOpacity<?php echo $i; ?>"
									@input="changeInlineStyle('markOpacity<?php echo $i; ?>',$event.target.value,<?php echo $i; ?>)"
								>
							</div>
						</div>

						<div class="uk-margin-small">
							<label
								for="<?php echo Option::get_option_name( 'inline_style_mark_weight_' . $i ); ?>"
								class="uk-form-label uk-text-small">
								マーカー太さ(%)
							</label>

							<div class="uk-form-controls">
								<input
									name="<?php echo Option::get_option_name( 'inline_style_mark_weight_' . $i ); ?>"
									type="number"
									class="uk-input"
									min="0"
									max="100"
									step="5"
									:value="inline.markWeight<?php echo $i; ?>"
									@input="changeInlineStyle('markWeight<?php echo $i; ?>',$event.target.value,<?php echo $i; ?>)"
								>
							</div>
						</div>
					</div>

				</div>
				<div class="uk-width-1-2@m">
					<div class="uk-flex uk-flex-column" style="height: 100%;">
						<p class="uk-margin-remove uk-text-meta">プレビュー</p>
						<div class="uk-card uk-card-default uk-card-body" style="flex-grow: 1;">
							<span v-bind:style="preview[<?php echo $i; ?>]">インラインスタイル <?php echo $i; ?></span>
						</div>
					</div>
				</div>
			</div>
		<?php
		endfor;
	}

	/**
	 * 設定保存用データ作成
	 *
	 * @param array $options Options.
	 *
	 * @return array
	 */
	public function save( $options ) {

		var_dump( $_POST[ Config::OPTION_NAME ] );

		return $options;
	}
}

new Inline();
