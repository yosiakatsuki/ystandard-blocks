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
		add_action(
			Menu::MENU_ADD_ACTION,
			function () {
				echo '<li><a href="#">インライン</a></li>';
			}
		);
		add_action( Menu::PANEL_ADD_ACTION, [ $this, 'add_menu' ] );
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
	 * メニュー作成
	 */
	public function add_menu() {
		?>
		<li>
			<div id="inline-style">
				<h2 class="uk-text-lead uk-heading-divider">インラインスタイル設定</h2>
				<p class="uk-text-meta uk-text-small">テキスト編集エリアすぐ上のツールバーに表示されるテキスト装飾ボタンのスタイル設定</p>
				<div class="uk-margin-medium-top">
					<?php $this->tool_bar_button_style(); ?>
				</div>
				<h2 class="uk-text-lead uk-heading-divider">少し大きく・少し小さく</h2>
				<p class="uk-text-meta uk-text-small">ツールバー内の「▼」から選択できるテキストサイズ変更ボタンの設定</p>
				<div class="uk-grid-divider uk-margin-large-bottom" uk-grid>
					<div class="uk-width-1-2@m">
						<h4 class="uk-text-small uk-heading-divider">少し大きく</h4>
						<p class="uk-text-small uk-text-meta">標準サイズからの相対サイズ(%)を設定してください。</p>
						<div class="uk-form-horizontal">
							<div class="uk-margin-small">
								<label
									for="<?php echo Option::get_option_name( 'inline_style_larger' ); ?>"
									class="uk-form-label uk-text-small">
									文字サイズ
								</label>
								<div class="uk-form-controls">
									<input
										name="<?php echo Option::get_option_name( 'inline_style_larger' ); ?>"
										type="number"
										class="uk-input"
										min="60"
										max="200"
										:value="inline.larger"
										@input="changeTextSize('larger',$event.target.value)"
									>
								</div>
							</div>
							<div class="uk-margin-small">
								<label
									for="<?php echo Option::get_option_name( 'inline_style_larger_sp' ); ?>"
									class="uk-form-label uk-text-small">
									文字サイズ(SP)
								</label>
								<div class="uk-form-controls">
									<input
										name="<?php echo Option::get_option_name( 'inline_style_larger_sp' ); ?>"
										type="number"
										class="uk-input"
										min="60"
										max="200"
										:value="inline.largerSP"
										@input="changeTextSize('largerSP',$event.target.value)"
									>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-1-2@m">
						<div class="uk-flex uk-flex-column" style="height: 100%;">
							<p class="uk-margin-remove uk-text-meta">プレビュー</p>
							<div class="uk-card uk-card-default uk-card-body" style="flex-grow: 1;">
								<div>
									<span class="uk-text-small uk-text-meta">標準サイズ</span><br>
									<span style="font-size: 1rem;">テキストを少し大きくする</span>
								</div>
								<div class="uk-margin-small-top">
									<span class="uk-text-small uk-text-meta">少し大きく</span><br>
									<span v-bind:style="previewTextSize('larger')">テキストを少し大きくする</span>
								</div>
								<div class="uk-margin-small-top">
									<span class="uk-text-small uk-text-meta">少し大きく(SP)</span><br>
									<span v-bind:style="previewTextSize('largerSP')">テキストを少し大きくする</span>
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
								<label
									for="<?php echo Option::get_option_name( 'inline_style_smaller' ); ?>"
									class="uk-form-label uk-text-small">
									文字サイズ
								</label>
								<div class="uk-form-controls">
									<input
										name="<?php echo Option::get_option_name( 'inline_style_smaller' ); ?>"
										type="number"
										class="uk-input"
										min="60"
										max="200"
										:value="inline.smaller"
										@input="changeTextSize('smaller',$event.target.value)"
									>
								</div>
							</div>
							<div class="uk-margin-small">
								<label
									for="<?php echo Option::get_option_name( 'inline_style_smaller_sp' ); ?>"
									class="uk-form-label uk-text-small">
									文字サイズ(SP)
								</label>
								<div class="uk-form-controls">
									<input
										name="<?php echo Option::get_option_name( 'inline_style_smaller_sp' ); ?>"
										type="number"
										class="uk-input"
										min="60"
										max="200"
										:value="inline.smallerSP"
										@input="changeTextSize('smallerSP',$event.target.value)"
									>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-width-1-2@m">
						<div class="uk-flex uk-flex-column" style="height: 100%;">
							<p class="uk-margin-remove uk-text-meta">プレビュー</p>
							<div class="uk-card uk-card-default uk-card-body" style="flex-grow: 1;">
								<div>
									<span class="uk-text-small uk-text-meta">標準サイズ</span><br>
									<span style="font-size: 1rem;">テキストを少し小さくする</span>
								</div>
								<div class="uk-margin-small-top">
									<span class="uk-text-small uk-text-meta">少し小さく</span><br>
									<span v-bind:style="previewTextSize('smaller')">テキストを少し小さくする</span>
								</div>
								<div class="uk-margin-small-top">
									<span class="uk-text-small uk-text-meta">少し小さく(SP)</span><br>
									<span v-bind:style="previewTextSize('smallerSP')">テキストを少し小さくする</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<?php
	}

	/**
	 * ツールバー用設定
	 */
	private function tool_bar_button_style() {
		for ( $i = 1; $i <= 3; $i ++ ) :
			?>
			<div class="uk-grid-divider uk-margin-large-bottom" uk-grid>
				<div class="uk-width-1-2@m">
					<h4 class="uk-text-small uk-heading-divider">インラインスタイル <?php echo $i; ?></h4>
					<h5 class="uk-text-small uk-margin-remove uk-text-bold">文字・装飾</h5>
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
									<div class="uk-flex">
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

					<h5 class="uk-text-small uk-margin-remove-bottom uk-margin-medium-top uk-text-bold">マーカー</h5>
					<div class="uk-form-horizontal">
						<div class="uk-margin-small">
							<label
								for="<?php echo Option::get_option_name( 'inline_style_fz_' . $i ); ?>"
								class="uk-form-label uk-text-small">
								マーカー色
							</label>

							<div class="uk-form-controls">
								<div class="uk-button-group">
									<div class="uk-flex">
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

		if ( isset( $_POST[ Config::OPTION_NAME ] ) ) {
			$new = $_POST[ Config::OPTION_NAME ];

			// サニタイズ.
			for ( $i = 1; $i <= 3; $i ++ ) {
				// サイズ.
				if ( ! isset( $new[ 'inline_style_fz_' . $i ] ) ) {
					$new[ 'inline_style_fz_' . $i ] = 100;
				}
				$new[ 'inline_style_fz_' . $i ] = Utility::sanitize_size( $new[ 'inline_style_fz_' . $i ], 100, 200, 60 );
				// 文字色.
				if ( ! isset( $new[ 'inline_style_color_' . $i ] ) ) {
					$new[ 'inline_style_color_' . $i ] = '#222222';
				}
				$new[ 'inline_style_color_' . $i ] = Utility::sanitize_hex( $new[ 'inline_style_color_' . $i ], '#222222' );
				// タイプ.
				if ( ! isset( $new[ 'inline_style_type_' . $i ] ) ) {
					$new[ 'inline_style_type_' . $i ] = 'normal';
				}
				$new[ 'inline_style_type_' . $i ] = $this->sanitize_type( $new[ 'inline_style_type_' . $i ] );
				// マーカー色.
				if ( ! isset( $new[ 'inline_style_mark_color_' . $i ] ) ) {
					$new[ 'inline_style_mark_color_' . $i ] = Format::MARKER_DEFAULT_COLOR[ $i ];
				}
				$new[ 'inline_style_mark_color_' . $i ] = Utility::sanitize_hex( $new[ 'inline_style_mark_color_' . $i ], Format::MARKER_DEFAULT_COLOR[ $i ] );
				// マーカー濃さ.
				if ( ! isset( $new[ 'inline_style_mark_opacity_' . $i ] ) ) {
					$new[ 'inline_style_mark_opacity_' . $i ] = 30;
				}
				$new[ 'inline_style_mark_opacity_' . $i ] = Utility::sanitize_size( $new[ 'inline_style_mark_opacity_' . $i ], 30, 100, 0 );
				// マーカー太さ.
				if ( ! isset( $new[ 'inline_style_mark_weight_' . $i ] ) ) {
					$new[ 'inline_style_mark_weight_' . $i ] = 25;
				}
				$new[ 'inline_style_mark_weight_' . $i ] = Utility::sanitize_size( $new[ 'inline_style_mark_weight_' . $i ], 25, 100, 0 );
			}

			// サイズ.
			if ( ! isset( $new['inline_style_larger'] ) ) {
				$new['inline_style_larger'] = 100;
			}
			$new['inline_style_larger'] = Utility::sanitize_size( $new['inline_style_larger'], 100, 200, 60 );
			if ( ! isset( $new['inline_style_larger_sp'] ) ) {
				$new['inline_style_larger_sp'] = 100;
			}
			$new['inline_style_larger_sp'] = Utility::sanitize_size( $new['inline_style_larger_sp'], 100, 200, 60 );
			if ( ! isset( $new['inline_style_smaller'] ) ) {
				$new['inline_style_smaller'] = 100;
			}
			$new['inline_style_smaller'] = Utility::sanitize_size( $new['inline_style_smaller'], 100, 200, 60 );
			if ( ! isset( $new['inline_style_smaller_sp'] ) ) {
				$new['inline_style_smaller_sp'] = 100;
			}
			$new['inline_style_smaller_sp'] = Utility::sanitize_size( $new['inline_style_smaller_sp'], 100, 200, 60 );


			$options = array_merge(
				$options,
				$new
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
