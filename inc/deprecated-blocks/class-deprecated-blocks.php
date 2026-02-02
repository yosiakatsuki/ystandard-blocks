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
	 * ページ表示
	 */
	public function render_page() {
		$content = $this->get_page_content();
		Admin_Menu::admin_menu_content(
			$content,
			self::CAPABILITY
		);
	}

	/**
	 * ページコンテンツを生成
	 *
	 * @return string
	 */
	private function get_page_content() {
		// 検索実行（画面ロード時とボタン押下時）.
		$search_results = $this->search_deprecated_blocks_usage();

		ob_start();
		?>
		<div class="ystdb-deprecated-blocks">
			<h2>非推奨ブロック一覧</h2>
			<p>以下のブロックは非推奨となっています。新しいブロックへの移行をご検討ください。</p>

			<?php $this->render_deprecated_blocks_table(); ?>

			<div class="ystdb-deprecated-blocks__search" style="margin-top: 2em;">
				<h2>非推奨ブロック使用状況</h2>
				<p>非推奨ブロックが使用されている投稿を検索できます。</p>

				<form method="post" style="margin: 1em 0;">
					<?php wp_nonce_field( 'ystdb_search_deprecated_blocks', 'ystdb_search_nonce' ); ?>
					<button type="submit" name="ystdb_search_deprecated" class="button button-primary">
						再検索
					</button>
				</form>

				<?php $this->render_search_results( $search_results ); ?>

				<div class="ystdb-deprecated-blocks__notice" style="margin-top: 2em; padding: 1em; background: #f0f0f1; border-left: 4px solid #2271b1;">
					<h3 style="margin-top: 0;">補足</h3>
					<ul style="margin-bottom: 0;">
						<li>ウィジェットエリア内のブロックは検索対象外です。ウィジェット画面で直接ご確認ください。</li>
						<li>ブロックテーマのテンプレート（wp_template, wp_template_part）は検索対象に含まれています。</li>
					</ul>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * 非推奨ブロックの使用状況を検索
	 *
	 * @return array 検索結果の配列.
	 */
	private function search_deprecated_blocks_usage() {
		$results    = [];
		$block_ids  = self::get_deprecated_block_ids();
		$post_types = $this->get_searchable_post_types();

		if ( empty( $block_ids ) || empty( $post_types ) ) {
			return $results;
		}

		global $wpdb;

		// 各非推奨ブロックIDで検索.
		foreach ( $block_ids as $block_id ) {
			// ブロックコメント形式で検索（例: <!-- wp:ystdb/svg-button）.
			$search_pattern = '<!-- wp:' . $block_id;

			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching
			$posts = $wpdb->get_results(
				$wpdb->prepare(
					"SELECT ID, post_title, post_type FROM {$wpdb->posts}
					WHERE post_content LIKE %s
					AND post_type IN (" . implode( ',', array_fill( 0, count( $post_types ), '%s' ) ) . ")
					AND post_status IN ('publish', 'draft', 'pending', 'private', 'future')
					ORDER BY post_type, post_title",
					array_merge(
						[ '%' . $wpdb->esc_like( $search_pattern ) . '%' ],
						$post_types
					)
				)
			);

			if ( ! empty( $posts ) ) {
				foreach ( $posts as $post ) {
					$results[] = [
						'post_id'    => $post->ID,
						'post_title' => $post->post_title,
						'post_type'  => $post->post_type,
						'block_id'   => $block_id,
						'edit_link'  => get_edit_post_link( $post->ID, 'raw' ),
					];
				}
			}
		}

		return $results;
	}

	/**
	 * 編集可能な投稿タイプを取得
	 *
	 * @return array 投稿タイプのスラッグ配列.
	 */
	private function get_searchable_post_types() {
		$post_types = get_post_types(
			[
				'show_ui' => true,
			],
			'names'
		);

		// 添付ファイルは除外（ブロックを含まないため）.
		unset( $post_types['attachment'] );

		/**
		 * 検索対象の投稿タイプをフィルターで拡張可能にする
		 *
		 * @param array $post_types 投稿タイプのスラッグ配列.
		 */
		return apply_filters( 'ystdb_deprecated_blocks_searchable_post_types', array_values( $post_types ) );
	}

	/**
	 * 検索結果を表示
	 *
	 * @param array $results 検索結果の配列.
	 */
	private function render_search_results( $results ) {
		if ( empty( $results ) ) {
			echo '<p style="color: #00a32a; font-weight: 600;">非推奨ブロックを使用している投稿は見つかりませんでした。</p>';
			return;
		}

		// 投稿タイプのラベルを取得.
		$post_type_labels = $this->get_post_type_labels();

		// ブロック名のマッピング.
		$block_names = [];
		foreach ( self::get_deprecated_blocks() as $block ) {
			$block_names[ $block['block_id'] ] = $block['name'];
		}

		?>
		<p style="color: #d63638; font-weight: 600;">
			<?php
			printf(
				// translators: %d: 検索結果の件数.
				esc_html__( '%d件の投稿で非推奨ブロックが使用されています。', 'ystandard-blocks' ),
				count( $results )
			);
			?>
		</p>
		<table class="widefat striped" style="margin-top: 1em;">
			<thead>
				<tr>
					<th>投稿タイトル</th>
					<th>投稿タイプ</th>
					<th>使用ブロック</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ( $results as $result ) : ?>
					<tr>
						<td>
							<?php
							$title = $result['post_title'];
							if ( empty( $title ) ) {
								$title = '（タイトルなし）';
							}
							echo esc_html( $title );
							?>
						</td>
						<td>
							<?php
							$post_type_label = isset( $post_type_labels[ $result['post_type'] ] )
								? $post_type_labels[ $result['post_type'] ]
								: $result['post_type'];
							echo esc_html( $post_type_label );
							?>
						</td>
						<td>
							<?php
							$block_name = isset( $block_names[ $result['block_id'] ] )
								? $block_names[ $result['block_id'] ]
								: $result['block_id'];
							echo esc_html( $block_name );
							?>
						</td>
						<td>
							<?php if ( ! empty( $result['edit_link'] ) ) : ?>
								<a href="<?php echo esc_url( $result['edit_link'] ); ?>" class="button button-small" target="_blank">
									編集
								</a>
							<?php else : ?>
								-
							<?php endif; ?>
						</td>
					</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
		<?php
	}

	/**
	 * 投稿タイプのラベルを取得
	 *
	 * @return array 投稿タイプスラッグをキーとしたラベルの配列.
	 */
	private function get_post_type_labels() {
		$labels     = [];
		$post_types = get_post_types( [ 'show_ui' => true ], 'objects' );

		foreach ( $post_types as $post_type ) {
			$labels[ $post_type->name ] = $post_type->labels->singular_name;
		}

		return $labels;
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
