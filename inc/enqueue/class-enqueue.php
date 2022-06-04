<?php
/**
 * Enqueue
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_Amp;
use ystandard_blocks\helper\Helper_CSS;

defined( 'ABSPATH' ) || die();

/**
 * Class Enqueue
 *
 * @package ystandard_blocks
 */
class Enqueue {

	/**
	 * Enqueue constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ], 11 );
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 11 );
		add_filter( 'script_loader_tag', [ $this, 'script_loader_tag' ], PHP_INT_MAX, 3 );
		add_action( 'wp_head', [ $this, 'noscript_styles' ], PHP_INT_MAX );
	}

	/**
	 * Enqueue Styles.
	 */
	public function enqueue_styles() {
		wp_enqueue_style(
			Config::CSS_HANDLE,
			YSTDB_URL . '/css/ystandard-blocks.css',
			[],
			YSTDB_VERSION
		);
		/**
		 * AMP対応
		 */
		if ( Helper_Amp::is_amp() ) {
			wp_add_inline_style(
				Config::CSS_HANDLE,
				$this->get_fallback_animation_css()
			);
		}
	}

	/**
	 * Enqueue Scripts.
	 */
	public function enqueue_scripts() {
		if ( Helper_Amp::is_amp() ) {
			return;
		}
		wp_enqueue_script(
			Config::JS_APP_HANDLE,
			YSTDB_URL . '/js/app/app.js',
			[],
			filemtime( YSTDB_PATH . '/js/app/app.js' ),
			true
		);
		wp_script_add_data( Config::JS_APP_HANDLE, 'defer', true );
	}

	/**
	 * Noscriptで出力するCSS
	 */
	public function noscript_styles() {
		if ( Helper_Amp::is_amp() ) {
			return;
		}
		printf(
			'<noscript><style>%s</style></noscript>' . PHP_EOL,
			Helper_CSS::minify( self::get_fallback_animation_css() )
		);
	}

	/**
	 * アニメーションできないときのCSS取得
	 *
	 * @return string
	 */
	public static function get_fallback_animation_css() {
		return '.ystdb-section.has-animation:not(:root) {opacity:1;}';
	}

	/**
	 * JavaScript
	 *
	 * @param string $tag    The `<script>` tag for the enqueued script.
	 * @param string $handle The script's registered handle.
	 * @param string $src    The script's source URL.
	 *
	 * @return string
	 */
	public function script_loader_tag( $tag, $handle, $src ) {
		if ( is_admin() ) {
			return $tag;
		}
		if ( apply_filters( 'ystdb_disable_script_loader_tag', false ) ) {
			return $tag;
		}
		foreach ( [ 'async', 'defer' ] as $attr ) {
			if ( ! wp_scripts()->get_data( $handle, $attr ) ) {
				continue;
			}
			if ( ! preg_match( ":\s$attr(=|>|\s):", $tag ) ) {
				$tag = preg_replace( ':(?=></script>):', " $attr", $tag, 1 );
			}
			break;
		}

		return $tag;
	}
}

new Enqueue();
