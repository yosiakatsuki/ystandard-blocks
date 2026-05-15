<?php
/**
 * 共有スタイル
 *
 * @package yStandard_blocks
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Shared_Styles.
 */
class Shared_Styles {

	/**
	 * Aktk-block-componentsエディタースタイルのハンドル名.
	 */
	const AKTK_COMPONENTS_EDITOR_HANDLE = 'aktk-components-editor';

	/**
	 * Instance.
	 *
	 * @var Shared_Styles
	 */
	private static $instance;

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'init', [ $this, 'register_shared_styles' ] );
	}

	/**
	 * Instance.
	 *
	 * @return Shared_Styles
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * 共有スタイルの登録
	 *
	 * @return void
	 */
	public function register_shared_styles() {
		$css_path = YSTDB_PATH . '/build/shared/aktk-components-editor.css';
		if ( ! file_exists( $css_path ) ) {
			return;
		}
		wp_register_style(
			self::AKTK_COMPONENTS_EDITOR_HANDLE,
			YSTDB_URL . '/build/shared/aktk-components-editor.css',
			[],
			filemtime( $css_path )
		);
	}
}

Shared_Styles::get_instance();
