<?php
/**
 * Font Awesome
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Font_Awesome
 *
 * @package ystandard_blocks
 */
class Font_Awesome {
	/**
	 * Font_Awesome constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ], 12 );
		add_action( 'enqueue_block_editor_assets', [ $this, 'block_editor_assets' ] );
	}

	/**
	 * Enqueue.
	 */
	public function enqueue_scripts() {
		if ( Utility::is_ystandard() ) {
			return;
		}
		if ( Utility::is_amp() ) {
			return;
		}
		if ( ! self::is_use_font_awesome() ) {
			return;
		}
		if ( self::is_use_all_icons() ) {
			wp_enqueue_script(
				'font-awesome',
				YSTDB_URL . '/library/fontawesome/js/all.js',
				[],
				YSTDB_VERSION,
				true
			);
		} else {
			wp_enqueue_script(
				'font-awesome',
				YSTDB_URL . '/js/icons.js',
				[],
				YSTDB_VERSION,
				true
			);
		}

		wp_add_inline_script(
			'font-awesome',
			'FontAwesomeConfig = { searchPseudoElements: true };',
			'before'
		);
		wp_script_add_data( 'font-awesome', 'defer', true );
	}

	/**
	 * エディター用
	 */
	public function block_editor_assets() {
		if ( ! self::is_use_font_awesome() ) {
			return;
		}
		wp_enqueue_style(
			'font-awesome',
			YSTDB_URL . '/library/fontawesome/css/all.css',
			[],
			YSTDB_VERSION
		);
	}

	/**
	 * Font Awesomeを使うか.
	 */
	public static function is_use_font_awesome() {
		if ( Utility::is_ystandard() ) {
			return function_exists( 'ys_get_option' ) && 'none' !== ys_get_option( 'ys_enqueue_icon_font_type' );
		}

		return get_option( Config::OPTION_PREFIX . 'load_font_awesome', false );
	}

	/**
	 * すべてのアイコンを使用するか
	 *
	 * @return bool
	 */
	public static function is_use_all_icons() {

		if ( Utility::is_ystandard() ) {
			/**
			 * テーマがyStandardの場合は本体の設定に従う
			 */
			$use_all_icons = false;
			if ( function_exists( 'ys_get_option' ) && 'all' === ys_get_option( 'ys_enqueue_icon_font_type' ) ) {
				$use_all_icons = true;
			}
		} else {
			/**
			 * 非yStandardな環境
			 */
			$use_all_icons = true;
			if ( get_option( Config::OPTION_PREFIX . 'load_font_awesome', true ) ) {
				$use_all_icons = get_option( Config::OPTION_PREFIX . 'use_all_icons', false );
			}
		}

		return apply_filters( 'ystdb_is_use_all_icons', $use_all_icons );
	}
}

new Font_Awesome();
