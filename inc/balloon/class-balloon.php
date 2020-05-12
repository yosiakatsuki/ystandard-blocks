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
	 * 吹き出し用設定取得
	 */
	public static function get_balloon_images() {
		$result         = [];
		$balloon_option = Option::get_option( 'balloon', [] );

		foreach ( $balloon_option as $item ) {
			$image = $item['image'];
			$name  = $item['name'];
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
