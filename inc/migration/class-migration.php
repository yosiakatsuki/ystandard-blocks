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
	 * 設定変換リスト
	 *
	 * @return array
	 */
	public function get_migration_list() {
		return [
			'hide_no_ystandard_notice' => 'hide_notice',
		];
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
