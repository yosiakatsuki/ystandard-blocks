<?php
/**
 * Balloon
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();


/**
 * Class Balloon
 *
 * @package ystandard_blocks
 */
class Balloon {
	/**
	 * 吹き出し画像登録数
	 */
	const BALLOON_OPTION = 30;
	/**
	 * 吹き出し用設定取得
	 */
	public static function get_balloon_images() {
		$result = [];
		for ( $i = 1; $i <= self::BALLOON_OPTION; $i ++ ) {
			$image = Option::get_option( 'balloon_image_' . $i, '' );
			$name  = Option::get_option( 'balloon_name_' . $i, '' );
			if ( ! empty( $image ) ) {
				$id       = attachment_url_to_postid( $image );
				$result[] = [
					'url'  => $image,
					'id'   => $id,
					'name' => $name,
				];
			}
		}

		return $result;
	}
}

new Balloon();
