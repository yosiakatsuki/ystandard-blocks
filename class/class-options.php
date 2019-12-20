<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

/**
 * Class Options
 */
class Options {

	const OPTION_PREFIX = 'ystdb_';

	/**
	 * Options constructor.
	 */
	public function __construct() {
		if ( ! Main::is_ystandard() ) {
			add_action( 'admin_menu', [ $this, 'blocks_option' ] );
			add_action( 'admin_init', [ $this, 'register_option' ] );
		}
	}

	/**
	 * デフォルト設定
	 *
	 * @return array
	 */
	public static function get_default_options() {
		return [
			'inline_style_fz_1'          => 100,
			'inline_style_color_1'       => '#222222',
			'inline_style_mark_color_1'  => '#D53939',
			'inline_style_mark_weight_1' => 25,
			'inline_style_type_1'        => 'normal',
			'inline_style_fz_2'          => 100,
			'inline_style_color_2'       => '#222222',
			'inline_style_mark_color_2'  => '#82B9E3',
			'inline_style_mark_weight_2' => 25,
			'inline_style_type_2'        => 'normal',
			'inline_style_fz_3'          => 100,
			'inline_style_color_3'       => '#222222',
			'inline_style_mark_color_3'  => '#F5EC84',
			'inline_style_mark_weight_3' => 25,
			'inline_style_type_3'        => 'normal',
			'hide_no_ystandard_notice'   => false,
			'load_font_awesome'          => true,
			'add_editor_color_and_size'  => true,
		];
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
	 * @param string $name 設定名.
	 *
	 * @return mixed
	 */
	public static function get_option( $name ) {
		$option = get_option(
			self::get_option_name( $name ),
			self::get_default_option( $name )
		);

		return $option;
	}

	/**
	 * 設定取得(Bool)
	 *
	 * @param string $name 設定名.
	 *
	 * @return bool
	 */
	public static function get_option_by_bool( $name ) {
		$option = self::get_option( $name );
		if ( 1 === $option || '1' === $option || true === $option || 'true' === $option ) {
			return true;
		}

		return false;
	}

	/**
	 * デフォルト値取得
	 *
	 * @param string $name 設定名.
	 *
	 * @return bool|mixed
	 */
	public static function get_default_option( $name ) {
		$defaults = self::get_default_options();

		return isset( $defaults[ $name ] ) ? $defaults[ $name ] : false;
	}

	/**
	 * カラーコードをrgbに変換
	 *
	 * @param string $color カラーコード.
	 *
	 * @return array
	 */
	public static function hex_2_rgb( $color ) {
		return [
			hexdec( substr( $color, 1, 2 ) ),
			hexdec( substr( $color, 3, 2 ) ),
			hexdec( substr( $color, 5, 2 ) ),
		];
	}

	/**
	 * オプションページ追加
	 */
	public function blocks_option() {
		add_options_page(
			'yStandard blocks 設定',
			'yStandard blocks 設定',
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
		register_setting( 'ystandard-blocks-group', $this->get_option_name( 'add_editor_color_and_size' ) );
	}

	/**
	 * 非yStandard用オプションページ作成
	 */
	public function options_page() {
		?>
		<div class="wrap">
			<h2>yStandard blocks 設定</h2>
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
								<input id="hide_no_ystandard_notice" type="checkbox" name="<?php echo self::get_option_name( 'hide_no_ystandard_notice' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'hide_no_ystandard_notice' ) ); ?>>yStnadard以外のテーマ利用についての警告を非表示にする
							</label>
						</td>
					</tr>
					<tr>
						<th scope="row">Font Awesome</th>
						<td>
							<label>
								<input id="load_font_awesome" type="checkbox" name="<?php echo self::get_option_name( 'load_font_awesome' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'load_font_awesome' ) ); ?>>Font Awesome（アイコンフォント）用スクリプトを読み込む
							</label>
							<p>※テーマや他のプラグインでFont Awesomeを読み込んでいる場合はチェックを外してください。</p>
						</td>
					</tr>
					<tr>
						<th scope="row">編集画面カラーパレット・フォントサイズ</th>
						<td>
							<label>
								<input id="add_editor_color_and_size" type="checkbox" name="<?php echo self::get_option_name( 'add_editor_color_and_size' ); ?>" value="1" <?php checked( self::get_option_by_bool( 'add_editor_color_and_size' ) ); ?>>編集画面にカラーパレット・文字サイズ用CSSを読み込む
							</label>
							<p>※yStandard Blocksの一部ブロックで編集画面にカラーパレット・文字サイズ用CSSが必要になります。</p>
						</td>
					</tr>
				</table>
				<?php submit_button( '更新' ); ?>
			</form>
		</div>
		<?php
	}
}

new Options();
