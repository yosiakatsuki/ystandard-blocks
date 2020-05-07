<?php
/**
 * Option
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Option
 *
 * @package ystandard_blocks
 */
class Option {

	const OPTION_PREFIX = 'ystdb_';

	/**
	 * Option constructor.
	 */
	public function __construct() {
		if ( ! Utility::is_ystandard() ) {
			add_action( 'admin_menu', [ $this, 'blocks_option' ] );
			add_action( 'admin_init', [ $this, 'register_option' ] );
		}
	}

	/**
	 * 設定名を作成
	 *
	 * @param string $name 設定名.
	 *
	 * @return string
	 */
	public static function get_option_name( $name ) {
		return self::OPTION_PREFIX . $name;
	}

	/**
	 * 設定取得
	 *
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_option( $name, $default ) {
		$option = get_option(
			self::get_option_name( $name ),
			self::get_default_option( $name, $default )
		);

		return $option;
	}

	/**
	 * デフォルト値取得
	 *
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return mixed
	 */
	public static function get_default_option( $name, $default ) {
		$name = self::get_option_name( $name );

		return apply_filters( "ystdb_get_default_${name}", $default, $name );
	}

	/**
	 * 設定取得(Bool)
	 *
	 * @param string $name    設定名.
	 * @param mixed  $default デフォルト.
	 *
	 * @return bool
	 */
	public static function get_option_by_bool( $name, $default ) {
		$option = self::get_option( $name, $default );

		return Utility::to_bool( $option );
	}

	/**
	 * 設定を数値として取得
	 *
	 * @param string $name    設定名.
	 * @param int    $default デフォルト.
	 *
	 * @return int
	 */
	public static function get_option_by_number( $name, $default = 0 ) {
		$option = self::get_option( $name, $default );
		if ( is_numeric( $option ) ) {
			return $option;
		}

		return $default;
	}

	/**
	 * オプションページ追加
	 */
	public function blocks_option() {
		add_options_page(
			'yStandard Blocks 設定',
			'yStandard Blocks 設定',
			'manage_options',
			'ystandard-blocks-option',
			[ $this, 'options_page' ]
		);
	}

	/**
	 * オプションの準備
	 */
	public function register_option() {
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'hide_no_ystandard_notice' ) );
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'load_font_awesome' ) );
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'add_color_palette_css_text' ) );
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'add_color_palette_css_bg' ) );
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'add_color_palette_css_border' ) );
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'add_color_palette_css_fill' ) );
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'add_font_size_css' ) );
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'use_all_icons' ) );
	}

	/**
	 * 非yStandard用オプションページ作成
	 */
	public function options_page() {
		?>
		<div class="wrap">
			<h2>yStandard Blocks 設定</h2>
			<form method="post" action="options.php">
				<?php
				settings_fields( 'ystandard-blocks-group' );
				do_settings_sections( 'ystandard-blocks-group' );
				?>
				<table class="form-table">
					<tr>
						<th scope="row">警告非表示</th>
						<td>
							<label>
								<input id="hide_no_ystandard_notice" type="checkbox" name="<?php echo self::get_option_name( 'hide_no_ystandard_notice' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'hide_no_ystandard_notice', false ) ); ?>>yStnadard以外のテーマ利用についての警告を非表示にする
							</label>
						</td>
					</tr>
					<tr>
						<th scope="row">Font Awesome</th>
						<td>
							<label>
								<input id="load_font_awesome" type="checkbox" name="<?php echo self::get_option_name( 'load_font_awesome' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'load_font_awesome', true ) ); ?>>Font Awesome（アイコンフォント）用スクリプトを読み込む
							</label>
							<p>※テーマや他のプラグインでFont Awesomeを読み込んでいる場合はチェックを外してください。</p><br>
							<label>
								<input id="use_all_icons" type="checkbox" name="<?php echo self::get_option_name( 'use_all_icons' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'use_all_icons', false ) ); ?>>すべてのFont Awesome（アイコンフォント）アイコンを読み込む
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
								<input id="add_color_palette_css_text" type="checkbox" name="<?php echo self::get_option_name( 'add_color_palette_css_text' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'add_color_palette_css_text', true ) ); ?>>テキストカラー
							</label><br>
							<label>
								<input id="add_color_palette_css_bg" type="checkbox" name="<?php echo self::get_option_name( 'add_color_palette_css_bg' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'add_color_palette_css_bg', true ) ); ?>>背景色
							</label><br>
							<label>
								<input id="add_color_palette_css_border" type="checkbox" name="<?php echo self::get_option_name( 'add_color_palette_css_border' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'add_color_palette_css_border', true ) ); ?>>枠線の色
							</label><br>
							<label>
								<input id="add_color_palette_css_fill" type="checkbox" name="<?php echo self::get_option_name( 'add_color_palette_css_fill' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'add_color_palette_css_fill', true ) ); ?>>SVG fill
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
								<input id="add_font_size_css" type="checkbox" name="<?php echo self::get_option_name( 'add_font_size_css' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'add_font_size_css', true ) ); ?>>文字サイズCSS
							</label>
						</td>
					</tr>
				</table>
				<?php submit_button( '更新' ); ?>
			</form>
		</div>
		<?php
	}
}

new Option();
