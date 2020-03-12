<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use Cassandra\Custom;

/**
 * Class Register
 */
class Register {

	/**
	 * 読み込みブロック一覧
	 *
	 * @var array
	 */
	private $blocks = [
		'button'  => [
			'name'    => 'ystdb/ys-btn',
			'no-ystd' => true,
		],
		'columns' => [
			'name'    => 'ystdb/columns',
			'no-ystd' => true,
		],
		'column'  => [
			'name'    => 'ystdb/column',
			'no-ystd' => true,
		],
		'fa-icon' => [
			'name'    => 'ystdb/fa-icon',
			'no-ystd' => true,
		],
		'section' => [
			'name'    => 'ystdb/section',
			'no-ystd' => true,
		],
		'heading' => [
			'name'    => 'ystdb/heading',
			'no-ystd' => true,
		],
		'balloon' => [
			'name'    => 'ystdb/balloon',
			'no-ystd' => true,
		],
	];

	/**
	 * ダイナミックブロック一覧
	 *
	 * @var array
	 */
	private $dynamic_block = [
		'button-link' => [
			'name'    => 'ystdb/btn-link',
			'no-ystd' => true,
			'class'   => 'button-link',
		],
		'card'        => [
			'name'    => 'ystdb/card',
			'no-ystd' => true,
			'class'   => 'card',
		],
	];
	/**
	 * スタイル、フォーマット、コア拡張など
	 *
	 * @var array
	 */
	private $block_editor_assets = [
		'format'            => true,
		'ex-hide-by-device' => true,
	];

	/**
	 * Register constructor.
	 */
	function __construct() {
		if ( is_admin() ) {
			add_action( 'init', [ $this, 'register_block' ] );
		}
		add_action( 'init', [ $this, 'register_dynamic_block' ] );
		add_action( 'init', [ $this, 'add_extension_attributes' ], PHP_INT_MAX );
		add_action(
			'enqueue_block_editor_assets',
			[ $this, 'enqueue_block_editor_assets' ]
		);
	}

	/**
	 * ブロックの登録
	 */
	public function register_block() {

		/**
		 * 通常ブロック
		 */
		foreach ( $this->blocks as $key => $value ) {
			/**
			 * 非yStandardの利用チェック
			 */
			if ( ! Main::is_ystandard() ) {
				if ( ! $value['no-ystd'] ) {
					continue;
				}
			}
			$asset_file = include( YSTDB_PATH . '/js/' . $key . '.asset.php' );
			$handle     = 'ystandard-blocks-' . $key;
			wp_register_script(
				$handle,
				YSTDB_URL . '/js/' . $key . '.js',
				$asset_file['dependencies'],
				$asset_file['version']
			);
			register_block_type(
				$value['name'],
				[ 'editor_script' => $handle ]
			);
		}

	}

	/**
	 * ブロックassets
	 */
	public function enqueue_block_editor_assets() {
		/**
		 * ブロック共通スクリプト
		 */
		$asset_file = include( YSTDB_PATH . '/js/block.asset.php' );
		wp_enqueue_script(
			'ystandard-blocks-editor',
			YSTDB_URL . '/js/block.js',
			$asset_file['dependencies'],
			$asset_file['version']
		);
		wp_localize_script(
			'ystandard-blocks-editor',
			'ystdb',
			$this->create_block_config()
		);
		foreach ( $this->block_editor_assets as $key => $value ) {
			/**
			 * 非yStandardの利用チェック
			 */
			if ( ! Main::is_ystandard() ) {
				if ( ! $value ) {
					continue;
				}
			}
			$asset_file = include( YSTDB_PATH . '/js/' . $key . '.asset.php' );
			wp_enqueue_script(
				'ystandard-blocks-' . $key,
				YSTDB_URL . '/js/' . $key . '.js',
				$asset_file['dependencies'],
				$asset_file['version']
			);
		}
	}

	/**
	 * ダイナミックブロック登録
	 */
	public function register_dynamic_block() {

		/**
		 * ダイナミックブロック
		 */
		foreach ( $this->dynamic_block as $key => $value ) {
			/**
			 * 非yStandardの利用チェック
			 */
			if ( ! Main::is_ystandard() ) {
				if ( ! $value['no-ystd'] ) {
					continue;
				}
			}
			$asset_file = include( YSTDB_PATH . '/js/' . $key . '.asset.php' );
			$handle     = 'ystandard-blocks-' . $key;
			wp_register_script(
				$handle,
				YSTDB_URL . '/js/' . $key . '.js',
				$asset_file['dependencies'],
				$asset_file['version']
			);
			require_once( YSTDB_PATH . '/blocks/' . $key . '/class-' . $value['class'] . '.php' );
		}
	}

	/**
	 * ダイナミックブロックに attributes 追加
	 */
	public function add_extension_attributes() {
		$extension_attributes       = [];
		$extension_attributes_files = [
			'ex-hide-by-device',
		];
		/**
		 * 追加するパラメーターをまとめる
		 */
		foreach ( $extension_attributes_files as $item ) {
			$extension_attributes = array_merge(
				$extension_attributes,
				include( YSTDB_PATH . '/blocks/' . $item . '/attributes.php' )
			);
		}
		/**
		 * 既存ブロックにパラメーター追加
		 */
		if ( class_exists( 'WP_Block_Type_Registry' ) ) {
			$dynamic_blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
			foreach ( $dynamic_blocks as $name => $args ) {
				foreach ( $extension_attributes as $attr_name => $attr ) {
					$args->attributes[ $attr_name ] = $attr;
				}
			}
		}
	}

	/**
	 * ブロックエディターにわたすパラメーターを作成
	 *
	 * @return array
	 */
	private function create_block_config() {
		return [
			'yStandard'     => Main::is_ystandard() ? '1' : '',
			'useAllIcons'   => Options::is_use_all_icons() ? 'all' : '',
			'homeUrl'       => home_url(),
			'pluginUrl'     => YSTDB_URL,
			'balloonImages' => Customizer::get_balloon_images(),
		];
	}
}

new Register();
