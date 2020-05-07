<?php
/**
 * Init
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Polyfill
 *
 * @package ystandard_blocks
 */
class Polyfill {
	/**
	 * Polyfill constructor.
	 */
	public function __construct() {
		if ( ! $this->is_ie() ) {
			return;
		}
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_polyfill' ], 11 );
	}

	/**
	 * Enqueue Polyfill.
	 */
	public function enqueue_polyfill() {
		wp_enqueue_script(
			'ystandard-blocks-intersection-observer-polyfill',
			YSTDB_URL . '/library/IntersectionObserver/polyfill/intersection-observer.js',
			[],
			null
		);
	}

	/**
	 * IEチェック
	 *
	 * @return bool
	 */
	private function is_ie() {
		$ua = [
			'Trident',
			'MSIE',
		];

		return $this->check_user_agent( $ua );
	}

	/**
	 * ユーザーエージェントチェック
	 *
	 * @param array $ua ユーザーエージェント文字列リスト.
	 *
	 * @return bool
	 */
	private function check_user_agent( $ua ) {
		if ( ! isset( $_SERVER['HTTP_USER_AGENT'] ) ) {
			return false;
		}
		$pattern = '/' . implode( '|', $ua ) . '/i';

		return preg_match( $pattern, $_SERVER['HTTP_USER_AGENT'] );
	}
}

new Polyfill();
