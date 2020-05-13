<?php
/**
 * Option Page.
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Option_No_YSTD
 *
 * @package ystandard_blocks
 */
class Option_No_YSTD {

	/**
	 * Option_No_YSTD constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_options_other' ] );
	}

	/**
	 * 非 yStandard オプションページ追加.
	 */
	public function add_options_other() {
		if ( Utility::is_ystandard() ) {
			return;
		}
		add_options_page(
			'yStandard Blocks 設定',
			'yStandard Blocks 設定',
			'manage_options',
			'ystandard-blocks',
			[ $this, 'options_page' ]
		);
	}


	/**
	 * 非yStandard用オプションページ作成
	 */
	public function options_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		$save = $this->save_option();
		?>
		<div class="wrap">
			<h2>yStandard Blocks 設定</h2>
			<?php
			if ( $save ) {
				Notice::success( '設定を更新しました。' );
			}
			?>
			<form method="post" action="">
				<?php wp_nonce_field( Config::NONCE_ACTION, Config::NONCE_NAME ); ?>
				<table class="form-table">
					<tr>
						<th scope="row">警告非表示</th>
						<td>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'hide_no_ystandard_notice' ); ?>" value="0">
								<input id="hide_notice" type="checkbox" name="<?php echo $this->get_option_name( 'hide_no_ystandard_notice' ); ?>" value="1" <?php checked( $this->get_option( 'hide_no_ystandard_notice', '1' ) ); ?>>yStnadard以外のテーマ利用についての警告を非表示にする
							</label>
						</td>
					</tr>
					<tr>
						<th scope="row">Font Awesome</th>
						<td>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'load_font_awesome' ); ?>" value="0">
								<input id="load_font_awesome" type="checkbox" name="<?php echo $this->get_option_name( 'load_font_awesome' ); ?>" value="1" <?php checked( $this->get_option( 'load_font_awesome', '1' ) ); ?>>Font Awesome（アイコンフォント）用スクリプトを読み込む
							</label>
							<p>※テーマや他のプラグインでFont Awesomeを読み込んでいる場合はチェックを外してください。</p><br>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'use_all_icons' ); ?>" value="0">
								<input id="use_all_icons" type="checkbox" name="<?php echo $this->get_option_name( 'use_all_icons' ); ?>" value="1" <?php checked( $this->get_option( 'use_all_icons', '0' ) ); ?>>すべてのFont Awesome（アイコンフォント）アイコンを読み込む
							</label>
							<p>※yStandard BlocksでFont Awesomeを読み込む場合に有効な設定です。<br>※チェックをつけるとすべてのFont Awesomeアイコンを読み込みます。選べるアイコン種類が多くなりますが、読み込み速度が遅くなります。</p><br>
						</td>
					</tr>
					<tr>
						<th scope="row">カラーパレットCSS</th>
						<td>
							<p>
								カラーパレット用CSSを読み込む<br>
								※yStandard Blocksの一部ブロックでカラーパレット用CSSが必要になります。
							</p>
							<br>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'add_color_palette_css_text' ); ?>" value="0">
								<input id="add_color_palette_css_text" type="checkbox" name="<?php $this->get_option_name( 'add_color_palette_css_text' ); ?>" value="1" <?php checked( $this->get_option( 'add_color_palette_css_text', '1' ) ); ?>>テキストカラー
							</label><br>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'add_color_palette_css_bg' ); ?>" value="0">
								<input id="add_color_palette_css_bg" type="checkbox" name="<?php echo $this->get_option_name( 'add_color_palette_css_bg' ); ?>" value="1" <?php checked( $this->get_option( 'add_color_palette_css_bg', '1' ) ); ?>>背景色
							</label><br>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'add_color_palette_css_border' ); ?>" value="0">
								<input id="add_color_palette_css_border" type="checkbox" name="<?php echo $this->get_option_name( 'add_color_palette_css_border' ); ?>" value="1" <?php checked( $this->get_option( 'add_color_palette_css_border', '1' ) ); ?>>枠線の色
							</label><br>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'add_color_palette_css_fill' ); ?>" value="0">
								<input id="add_color_palette_css_fill" type="checkbox" name="<?php echo $this->get_option_name( 'add_color_palette_css_fill' ); ?>" value="1" <?php checked( $this->get_option( 'add_color_palette_css_fill', '1' ) ); ?>>SVG fill
							</label><br>
						</td>
					</tr>
					<tr>
						<th scope="row">文字サイズCSS</th>
						<td>
							<p>
								文字サイズ用CSSを読み込む<br>
								※yStandard Blocksの一部ブロックで編集画面に文字サイズ用CSSが必要になります。
							</p>
							<br>
							<label>
								<input type="hidden" name="<?php echo $this->get_option_name( 'add_font_size_css' ); ?>" value="0">
								<input id="add_font_size_css" type="checkbox" name="<?php echo $this->get_option_name( 'add_font_size_css' ); ?>" value="1" <?php checked( $this->get_option( 'add_font_size_css', '1' ) ); ?>>文字サイズCSS
							</label>
						</td>
					</tr>
				</table>
				<?php submit_button( '更新' ); ?>
			</form>
		</div>
		<?php
	}

	/**
	 * 設定名を作成
	 *
	 * @param string $name 設定名.
	 *
	 * @return string
	 */
	private function get_option_name( $name ) {
		return Config::OPTION_PREFIX . $name;
	}

	/**
	 * 設定取得
	 *
	 * @param string $name    Name.
	 * @param mixed  $default Default.
	 *
	 * @return mixed
	 */
	private function get_option( $name, $default ) {
		return get_option( $this->get_option_name( $name ), $default );
	}

	/**
	 * Save.
	 *
	 * @return bool
	 */
	private function save_option() {

		if ( ! Utility::verify_nonce( Config::NONCE_NAME, Config::NONCE_ACTION ) ) {
			return false;
		}

		if ( ! isset( $_POST[ Config::OPTION_NAME ] ) ) {
			return false;
		}

		$options = [];
		foreach ( $_POST[ Config::OPTION_NAME ] as $key => $value ) {
			$options[ $key ] = Utility::to_bool( $value );
		}

		return update_option( Config::OPTION_NAME, $options );
	}
}

new Option_No_YSTD();
