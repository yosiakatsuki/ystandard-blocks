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
 * Class Init
 *
 * @package ystandard_blocks
 */
class Init {

	/**
	 * Init constructor.
	 */
	public function __construct() {
		add_filter( 'body_class', [ $this, 'body_class' ] );
		add_filter( 'ys_system_info', [ $this, 'add_system_info' ], 11 );
		add_filter( 'ystdb_get_version', [ $this, 'get_ystd_blocks_version' ] );
	}

	/**
	 * システム情報追加
	 *
	 * @param array $info システム情報.
	 *
	 * @return array
	 */
	public function add_system_info( $info ) {
		$info[] = 'yStandard Blocks バージョン: ' . YSTDB_VERSION;

		return $info;
	}

	/**
	 * バージョン情報の取得.
	 *
	 * @param string $ver Version.
	 *
	 * @return string
	 */
	public function get_ystd_blocks_version( $ver ) {
		return YSTDB_VERSION;
	}

	/**
	 * Body Class.
	 *
	 * @param array $classes classes.
	 *
	 * @return array
	 */
	public function body_class( $classes ) {
		$classes[] = Config::BODY_CLASS;

		return $classes;
	}
}

new Init();
