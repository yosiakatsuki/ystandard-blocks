<?php
/**
 * 管理画面通知
 *
 * @package ystandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Notice
 *
 * @package ystandard_blocks
 */
class Notice {

	/**
	 * アクション名
	 */
	const ACTION = 'admin_notices';

	/**
	 * アクションのセット
	 *
	 * @param string|array $function      Function.
	 * @param int          $priority      Priority.
	 * @param int          $accepted_args Args.
	 */
	public static function set_notice( $function, $priority = 10, $accepted_args = 1 ) {
		add_action( self::ACTION, $function, $priority, $accepted_args );
	}

	/**
	 * 管理画面通知
	 *
	 * @param string $content notice content.
	 * @param string $type    type.
	 * @param bool   $wpautop wpautop.
	 */
	public static function notice( $content, $type = 'error', $wpautop = true ) {
		if ( $wpautop ) {
			$content = wpautop( $content );
		}
		echo "<div class=\"notice notice-${type} is-dismissible\">${content}</div>";
	}

	/**
	 * 管理画面通知 - 完了
	 *
	 * @param string $content notice content.
	 * @param bool   $wpautop wpautop.
	 */
	public static function success( $content, $wpautop = true ) {
		self::notice( $content, 'success', $wpautop );
	}

	/**
	 * 管理画面通知 - お知らせ
	 *
	 * @param string $content notice content.
	 * @param bool   $wpautop wpautop.
	 */
	public static function info( $content, $wpautop = true ) {
		self::notice( $content, 'info', $wpautop );
	}

	/**
	 * 管理画面通知 - 警告
	 *
	 * @param string $content notice content.
	 * @param bool   $wpautop wpautop.
	 */
	public static function warning( $content, $wpautop = true ) {
		self::notice( $content, 'warning', $wpautop );
	}

	/**
	 * 管理画面通知 - エラー
	 *
	 * @param string $content notice content.
	 * @param bool   $wpautop wpautop.
	 */
	public static function error( $content, $wpautop = true ) {
		self::notice( $content, 'error', $wpautop );
	}

	/**
	 * 管理画面通知 - 装飾なし
	 *
	 * @param string $content notice content.
	 * @param bool   $wpautop wpautop.
	 */
	public static function plain( $content, $wpautop = true ) {
		if ( $wpautop ) {
			$content = wpautop( $content );
		}
		echo "<div class=\"notice\">${content}</div>";
	}

}
