<?php
/**
 * Enqueue Embed Styles
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Enqueue_Embed
 *
 * @package ystandard_blocks
 */
class Enqueue_Embed {

	/**
	 * Enqueue_Embed constructor.
	 */
	public function __construct() {
		add_action( 'enqueue_embed_scripts', [ $this, 'enqueue_embed_styles' ] );
	}

	/**
	 * Embedが無効か
	 *
	 * @return bool
	 */
	public static function is_disable_embed() {
		if ( ! Utility::is_ystandard() ) {
			return true;
		}
		$option = get_option( 'ys_option_disable_wp_oembed', true );

		return Utility::to_bool( $option );
	}

	/**
	 * Embed用CSS
	 */
	public function enqueue_embed_styles() {
		if ( self::is_disable_embed() ) {
			$url = YSTDB_URL . '/css/ystandard-blocks-embed.css';
			if ( ! Utility::is_ystandard() ) {
				$url = YSTDB_URL . '/css/ystandard-blocks-embed-no-ystandard.css';
			}
			wp_enqueue_style(
				'ystdb-embed',
				$url,
				[],
				YSTDB_VERSION
			);
			wp_add_inline_style(
				'ystdb-embed',
				'body,.ystdb-card.is-fixed-horizon,.ystdb-card.is-horizon{box-sizing:border-box;}'
			);
		}
	}
}

new Enqueue_Embed();
