<?php
/**
 * 非推奨ブロック管理
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Deprecated_Blocks
 *
 * 非推奨ブロックの情報表示と使用状況検索機能を提供
 *
 * @package ystandard_blocks
 */
class Deprecated_Blocks {
	/**
	 * Menu Slug.
	 */
	const MENU_SLUG = 'ystdb-deprecated-blocks';

	/**
	 * Menu Position.
	 */
	const MENU_POSITION = 20;

	/**
	 * ページへのアクセスに必要な権限
	 *
	 * Edit_others_posts: 編集者以上がアクセス可能
	 */
	const CAPABILITY = 'edit_others_posts';

	/**
	 * 非推奨ブロック情報
	 *
	 * ブロックの追加・削除はこの配列を編集してください。
	 *
	 * @var array
	 */
	private static $deprecated_blocks = [
		[
			'name'            => 'カスタムボタン（旧）',
			'block_id'        => 'ystdb/svg-button',
			'deprecated_date' => '2026-02-02',
			'removal_date'    => '2027年2月末頃予定',
		],
		[
			'name'            => 'ボタン型リンク',
			'block_id'        => 'ystdb/btn-link',
			'deprecated_date' => '2023-11-09',
			'removal_date'    => '2026年8月末頃予定',
		],
	];

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu' ], 100 + self::MENU_POSITION );
		add_filter( Config::ADMIN_MENU_NAV_LIST, [ $this, 'add_nav_item' ], self::MENU_POSITION );
	}

	/**
	 * 非推奨ブロック情報を取得
	 *
	 * @return array
	 */
	public static function get_deprecated_blocks() {
		/**
		 * 非推奨ブロック情報をフィルターで拡張可能にする
		 *
		 * @param array $deprecated_blocks 非推奨ブロック情報の配列.
		 */
		return apply_filters( 'ystdb_deprecated_blocks', self::$deprecated_blocks );
	}

	/**
	 * 非推奨ブロックのIDリストを取得
	 *
	 * @return array
	 */
	public static function get_deprecated_block_ids() {
		$blocks = self::get_deprecated_blocks();
		return array_column( $blocks, 'block_id' );
	}

	/**
	 * メニュー追加
	 */
	public function add_menu() {
		add_submenu_page(
			Admin_Menu::MENU_SLUG,
			'非推奨ブロック',
			'非推奨ブロック',
			self::CAPABILITY,
			self::MENU_SLUG,
			[ $this, 'render_page' ],
			self::MENU_POSITION
		);
	}

	/**
	 * メニューナビゲーション追加
	 *
	 * @param array $items List.
	 *
	 * @return array
	 */
	public function add_nav_item( $items ) {
		$items[ self::MENU_SLUG ] = [
			'label' => '非推奨ブロック',
			'link'  => admin_url( 'admin.php?page=' . self::MENU_SLUG ),
		];

		return $items;
	}

	/**
	 * ページ表示
	 */
	public function render_page() {
		$content = $this->get_page_content();
		Admin_Menu::admin_menu_content(
			$content,
			self::MENU_SLUG,
			true,
			self::CAPABILITY
		);
	}

	/**
	 * ページコンテンツを生成
	 *
	 * @return string
	 */
	private function get_page_content() {
		ob_start();
		?>
		<div class="ystdb-deprecated-blocks">
			<h2>非推奨ブロック一覧</h2>
			<p>以下のブロックは非推奨となっています。新しいブロックへの移行をご検討ください。</p>

			<?php $this->render_deprecated_blocks_table(); ?>

			<div class="ystdb-deprecated-blocks__search" style="margin-top: 2em;">
				<h2>非推奨ブロック使用状況</h2>
				<p>非推奨ブロックが使用されている投稿を検索できます。（この機能は今後実装予定です）</p>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * 非推奨ブロックの表を描画
	 */
	private function render_deprecated_blocks_table() {
		$blocks = self::get_deprecated_blocks();

		if ( empty( $blocks ) ) {
			echo '<p>現在、非推奨のブロックはありません。</p>';
			return;
		}
		?>
		<table class="widefat striped" style="margin-top: 1em;">
			<thead>
				<tr>
					<th>ブロック名</th>
					<th>ブロックID</th>
					<th>非推奨日</th>
					<th>廃止予定</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ( $blocks as $block ) : ?>
					<tr>
						<td><?php echo esc_html( $block['name'] ); ?></td>
						<td><code><?php echo esc_html( $block['block_id'] ); ?></code></td>
						<td><?php echo esc_html( $block['deprecated_date'] ); ?></td>
						<td><?php echo esc_html( $block['removal_date'] ); ?></td>
					</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
		<?php
	}
}

new Deprecated_Blocks();
