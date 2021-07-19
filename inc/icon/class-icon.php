<?php
/**
 * Icon
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Icon
 *
 * @package ystandard_blocks
 */
class Icon {

	/**
	 * カスタムアイコンのプレフィックス
	 */
	const CUSTOM_ICON_PREFIX = 'custom-';
	/**
	 * カスタムアイコンのカテゴリー
	 */
	const CUSTOM_ICON_CATEGORY = 'custom';

	/**
	 * Icon constructor.
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', [ $this, 'add_icons' ], 100 );
	}

	/**
	 * アイコンリストの追加
	 */
	public function add_icons() {
		wp_localize_script(
			Config::BLOCK_EDITOR_SCRIPT_HANDLE,
			'ystdbIconList',
			$this->get_icons()
		);
	}

	/**
	 * 使えるアイコンの一覧を取得
	 *
	 * @return array
	 */
	private function get_icons() {

		$icons = include( YSTDB_PATH . '/library/svg-icons/svg-icons.php' );
		// カスタムアイコン.
		$custom_icons = apply_filters( 'ys_get_custom_icon', [] );

		// TODO:よく使うアイコン機能実装.

		// 結合.
		$icons = array_merge(
			$this->sanitize_custom_icon( $custom_icons ),
			$icons
		);

		return apply_filters( 'ys_get_icon_list', $icons );
	}

	/**
	 * カスタムアイコンにプレフィックスを追加
	 *
	 * @param array $icons Icons.
	 *
	 * @return array
	 */
	private function sanitize_custom_icon( $icons ) {
		if ( ! is_array( $icons ) || empty( $icons ) ) {
			return $icons;
		}
		foreach ( $icons as $icon ) {
			$icon['name'] = self::CUSTOM_ICON_PREFIX . $icon['name'];
			if ( ! isset( $icon['category'] ) ) {
				$icon['category'] = self::CUSTOM_ICON_PREFIX;
			}
		}

		return $icons;
	}
}

new Icon();
