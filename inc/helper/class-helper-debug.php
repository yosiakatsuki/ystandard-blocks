<?php
/**
 * Helper : debug
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks\helper;

defined( 'ABSPATH' ) || die();

/**
 * Class Debug
 *
 * @package ystandard_blocks\helper
 */
class Helper_Debug {

	/**
	 * デバッグモード.
	 *
	 * @return bool
	 */
	public static function is_debug_mode() {
		return defined( 'WP_DEBUG' ) && WP_DEBUG;
	}

	/**
	 * 変数の内容をファイルに出力（開発用）
	 *
	 * @param mixed  $var  value.
	 * @param string $file File Name.
	 * @param string $line Line Number.
	 */
	public static function debug_var_dump_file( $var, $file = '', $line = '' ) {
		ob_start();
		echo date_i18n( 'Y.m.d H:i:s' ) . '<br>' . PHP_EOL;
		if ( $file || $line ) {
			echo $file . ' ' . $line . '<br>' . PHP_EOL;
		}
		var_dump( $var );
		$dump = ob_get_contents();
		ob_end_clean();
		file_put_contents( ABSPATH . 'wp-content/uploads/debug.html', $dump, FILE_APPEND );
	}
}
