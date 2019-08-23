<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

class Ystandard_Blocks_Options {

	const OPTION_PREFIX = 'ystdb_';

	public function __construct() {
	}

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
			hexdec( substr( $color, 5, 2 ) )
		];
	}
}