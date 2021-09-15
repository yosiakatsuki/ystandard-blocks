<?php
/**
 * Api
 *
 * @package ystandard
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Api
 *
 * @package ystandard_blocks
 */
class Api {

	/**
	 * Status : Success
	 */
	const STATUS_SUCCESS = 'success';
	/**
	 * Status : Error
	 */
	const STATUS_ERROR = 'error';

	/**
	 * レスポンス作成
	 *
	 * @param string|int|array|bool $status  ステータス.
	 * @param string                $message メッセージ.
	 * @param array                 $data    データ.
	 *
	 * @return \WP_Error|\WP_HTTP_Response|\WP_REST_Response
	 */
	public static function create_response( $status, $message = '', $data = [] ) {

		return rest_ensure_response(
			[
				'status'  => self::get_status( $status ),
				'message' => $message,
				'data'    => $data,
			]
		);
	}

	/**
	 * ステータス取得
	 *
	 * @param string|int|array|bool $status ステータス.
	 *
	 * @return string
	 */
	public static function get_status( $status ) {

		if ( is_array( $status ) ) {
			if ( in_array( false, $status, true ) ) {
				$status = false;
			} else {
				$status = true;
			}
		}

		if ( true === $status || 200 === $status || '200' === $status || self::STATUS_SUCCESS === $status ) {
			return self::STATUS_SUCCESS;
		}

		return self::STATUS_ERROR;
	}
}
