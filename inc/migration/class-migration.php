<?php
/**
 * Migration
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Migration
 *
 * @package ystandard_blocks
 */
class Migration {

	/**
	 * Nonce Action.
	 */
	const ACTION = 'ystdb-migration';
	/**
	 * Nonce Name.
	 */
	const NONCE = 'ystdb-migration-nonce';

	/**
	 * 設定移行ツールを隠す設定.
	 */
	const HIDE_MIGRATION_MENU = 'ystdb-hide-migration';
	/**
	 * 設定移行ツールを隠す設定キー.
	 */
	const HIDE_MIGRATION_KEY = 'v2.0.0';

	/**
	 * Migration constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_migration_page' ], 999 );
		Notice::set_notice( [ $this, 'notice' ] );
	}

	/**
	 * 警告表示
	 */
	public function notice() {
		global $hook_suffix;
		if ( strpos( $hook_suffix, 'ystdb-migration' ) ) {
			return;
		}

		if ( ! $this->show_migration_page() ) {
			return;
		}
		delete_option( self::HIDE_MIGRATION_MENU );
		ob_start();
		?>
		<p>yStandard Blocks v2.0.0からアイコンを使うブロックの仕様変更とプラグイン設定に仕様変更がありました。</p>
		<p>設定移行ツールを使って設定の移行とブロックの変換を実施してください。</p>
		<p><a href="<?php echo admin_url( 'tools.php?page=ystdb-migration' ); ?>">設定移行ツールを開く</a></p>
		<?php
		Notice::warning( ob_get_clean() );
	}

	/**
	 * 移行メニュー
	 */
	public function add_migration_page() {
		if ( self::HIDE_MIGRATION_KEY === get_option( self::HIDE_MIGRATION_MENU, '' ) ) {
			return;
		}
		add_management_page(
			'yStandard Blocks 設定移行ツール',
			'yStandard Blocks 設定移行ツール',
			'manage_options',
			'ystdb-migration',
			[ $this, 'add_menu' ],
			999
		);
	}

	/**
	 * 設定ページを表示するか
	 */
	private function show_migration_page() {
		$old      = self::exist_old_option();
		$register = new Register();
		$posts    = $register->get_posts_with_deprecated_blocks();
		if ( ! $old && empty( $posts ) ) {
			return false;
		}

		return true;
	}

	/**
	 * 移行ツールメニュー表示
	 */
	public function add_menu() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}
		// 設定移行.
		$migration = $this->migration_options();
		// 情報取得.
		$new      = get_option( Config::OPTION_NAME, null );
		$old      = self::exist_old_option();
		$register = new Register();
		$posts    = $register->get_posts_with_deprecated_blocks();
		?>
		<div class="wrap ystdb-migration">
			<?php
			if ( $migration ) {
				Notice::success( '設定を更新しました。' );
			}
			?>
			<h2>設定移行ツール</h2>
			<?php
			if ( self::HIDE_MIGRATION_KEY === get_option( self::HIDE_MIGRATION_MENU, '' ) ) {
				Notice::success( '設定移行ツールを削除しました。このページは間もなく表示できなくなります。<br><a href="' . admin_url() . '">ダッシュボードに戻る</a>' );

				return;
			}
			?>
			<p>旧設定から新設定への変換、非推奨ブロックの存在チェックが出来るページです。</p>
			<p><a href="https://wp-ystandard.com/blocks-v1-v2-migration/" target="_blank" rel="noreferrer noopener">» マニュアルを見る</a></p>
			<form method="post" action="" id="ystdb-migration">
				<?php wp_nonce_field( self::ACTION, self::NONCE ); ?>
				<hr>
				<h3><?php echo ! $old ? '✅' : ''; ?>旧設定→新設定への移行</h3>
				<?php if ( $old ) : ?>
					<p>
						<strong>旧設定</strong> : <?php echo $old ? 'あり' : 'なし'; ?><br>
						<strong>新設定</strong> : <?php echo ! is_null( $new ) ? 'あり' : 'なし'; ?>
					</p>
					<p>
						<strong>移行方法を選んでください▼</strong><br>
						<label><input type="radio" name="migration-type" value="migration"> 旧設定を新設定に変換する</label><br>
						<label><input type="radio" name="migration-type" value="delete"> 旧設定を削除する</label>
					</p>
					<p>
						<small>※新・旧両方の設定がある場合、変換をせずに新設定画面で設定を保存している可能性があります。<br>新設定画面での設定内容をそのまま残す場合は「旧設定を削除する」を選択してください。</small>
					</p>
					<p>
						<?php submit_button( '変換を実行する' ); ?>
					</p>
				<?php else : ?>
					<p>旧設定はありません。<br>変換もしくは削除が完了しています。</p>
				<?php endif; ?>
				<hr>
				<h3><?php echo empty( $posts ) ? '✅' : ''; ?>非推奨ブロックのチェック</h3>
				<p>
					v2.0.0からアイコンの表示ができるブロックに大きな変更が入り、これまでのブロックは非推奨となりました。<br>
					アイコン以外のほとんどの設定（色など）は新しいブロックへと簡単に引き継げます。
				</p>
				<p>
					非推奨になったブロックが使われている投稿の一覧です。<br>
					一覧右側の 「編集」から投稿の編集画面を開き、ブロックの変換をしてください。<br>
					<small>※ブロックの自動変換機能はありません。内容を確認しながらブロックの変換を実施してください。</small>
				</p>
				<?php if ( empty( $posts ) ) : ?>
					<p>非推奨ブロックが使われている投稿はありません。</p>
				<?php else : ?>
					<ul style="list-style: none;margin: 0;padding: 0;border-top:1px solid #aaa;">
						<?php foreach ( $posts as $slug => $item ) : ?>
							<li style="display: flex;border:1px solid #aaa;border-top: 0;padding: 1em;margin: 0;">
								<a href="<?php echo esc_url_raw( $item['url'] ); ?>" style="color: currentColor;"><?php echo esc_html( $item['title'] ); ?></a>
								<a href="<?php echo esc_url_raw( $item['edit'] ); ?>" style="margin-left: auto;white-space: nowrap;padding: 0 .25em;" target="_blank">編集</a>
							</li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>
				<?php if ( ! $old && empty( $posts ) ) : ?>
					<hr>
					<h3>yStandard Blocks 設定移行ツールの削除</h3>
					<p>この設定移行ツールページをメニューに表示したくない場合は「移行ツールを非表示にする」にチェックをつけて更新してください。</p>
					<p>
						<label><input type="checkbox" name="<?php echo self::HIDE_MIGRATION_MENU; ?>" value="<?php echo self::HIDE_MIGRATION_KEY; ?>"> 移行ツールを非表示にする</label><br>
						<small>※設定保存後、ダッシュボードが表示されます。</small>
					</p>
					<?php submit_button( '更新' ); ?>
				<?php endif; ?>
			</form>
		</div>
		<?php
	}

	/**
	 * 旧設定の存在確認
	 *
	 * @return bool
	 */
	public static function exist_old_option() {
		if ( ! Utility::is_ystandard() ) {
			return false;
		}
		$options = self::get_old_option_list();
		foreach ( $options as $key ) {
			$option = get_option( Config::OPTION_PREFIX . $key, null );
			if ( ! is_null( $option ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * 設定移行
	 */
	private function migration_options() {
		if ( ! Utility::verify_nonce( self::NONCE, self::ACTION ) ) {
			return false;
		}
		if ( isset( $_POST[ self::HIDE_MIGRATION_MENU ] ) ) {
			update_option( self::HIDE_MIGRATION_MENU, $_POST[ self::HIDE_MIGRATION_MENU ] );
		}

		if ( ! isset( $_POST['migration-type'] ) ) {
			return false;
		}
		$type = $_POST['migration-type'];
		if ( 'migration' === $type ) {
			$convert = self::convert_new_options();
			$result  = update_option( Config::OPTION_NAME, $convert );
			if ( $result ) {
				$this->delete_old_options();
			}
		} else {
			$this->delete_old_options();
		}

		return true;
	}

	/**
	 * 旧オプションを新オプション形式にする
	 */
	public static function convert_new_options() {
		$result  = [];
		$options = self::get_old_option_list();
		// インライン.
		$inline = [];
		foreach ( $options as $key ) {
			if ( false !== strpos( $key, 'inline_style' ) ) {
				$option = get_option( Config::OPTION_PREFIX . $key, null );
				if ( ! is_null( $option ) ) {
					$key            = str_replace( 'inline_style_', '', $key );
					$key            = str_replace( 'fz_', 'font_size_', $key );
					$inline[ $key ] = $option;
				}
			}
		}
		$result['inline'] = $inline;
		/**
		 * 吹き出し系
		 */
		$balloon = [];
		for ( $i = 1; $i <= 30; $i ++ ) {
			$image = get_option( Config::OPTION_PREFIX . 'balloon_image_' . $i, null );
			$name  = get_option( Config::OPTION_PREFIX . 'balloon_name_' . $i, null );
			if ( ! is_null( $image ) || ! is_null( $name ) ) {
				$balloon[] = [
					'image' => is_null( $image ) ? '' : $image,
					'name'  => is_null( $name ) ? '' : $name,
				];
			}
		}
		$result['balloon'] = $balloon;

		return $result;
	}

	/**
	 * 旧設定の削除
	 */
	public function delete_old_options() {
		/**
		 * 設定削除
		 */
		$options = self::get_old_option_list();
		// 削除.
		foreach ( $options as $key ) {
			delete_option( Config::OPTION_PREFIX . $key );
		}
	}

	/**
	 * 旧オプションリストを取得
	 *
	 * @return array
	 */
	public static function get_old_option_list() {
		$options = [];
		/**
		 * インライン系
		 */
		$options[] = 'inline_style_larger';
		$options[] = 'inline_style_smaller';
		$options[] = 'inline_style_larger_sp';
		$options[] = 'inline_style_smaller_sp';
		for ( $i = 1; $i <= 3; $i ++ ) {
			$options[] = 'inline_style_fz_' . $i;
			$options[] = 'inline_style_color_' . $i;
			$options[] = 'inline_style_mark_color_' . $i;
			$options[] = 'inline_style_mark_opacity_' . $i;
			$options[] = 'inline_style_mark_weight_' . $i;
			$options[] = 'inline_style_type_' . $i;
		}
		/**
		 * 吹き出し系
		 */
		for ( $i = 1; $i <= 30; $i ++ ) {
			$options[] = 'balloon_image_' . $i;
			$options[] = 'balloon_name_' . $i;
		}
		/**
		 * その他
		 */
		$options[] = 'hide_no_ystandard_notice';
		$options[] = 'load_font_awesome';
		$options[] = 'add_color_palette_css_text';
		$options[] = 'add_color_palette_css_bg';
		$options[] = 'add_color_palette_css_border';
		$options[] = 'add_color_palette_css_fill';
		$options[] = 'add_font_size_css';
		$options[] = 'use_all_icons';

		return $options;
	}

}

new Migration();
