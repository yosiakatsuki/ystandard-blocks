<?php
/**
 * Register Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Register
 *
 * @package ystandard_blocks
 */
class Register {

	/**
	 * 非推奨ブロック
	 *
	 * @var array
	 */
	private $deprecated_blocks = [];

	/**
	 * 有効化するブロックのリスト
	 *
	 * @var array
	 */
	private $register_blocks;

	/**
	 * フックの登録など
	 */
	public function register() {
		if ( Utility::wordpress_version_compare( '5.8-alpha-1' ) ) {
			add_filter( 'block_categories_all', [ __CLASS__, 'add_block_categories' ] );
		} else {
			add_filter( 'block_categories', [ __CLASS__, 'add_block_categories' ] );
		}
		$this->init();
		add_action( 'init', [ $this, 'require_dynamic_block_file' ] );
		add_action( 'init', [ $this, 'register_block' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_dynamic_block_scripts' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_assets' ] );
	}

	/**
	 * Add block category
	 *
	 * @param array $categories ブロックカテゴリー.
	 *
	 * @return array
	 */
	public static function add_block_categories( $categories ) {
		$categories[] = [
			'slug'  => Config::BLOCK_CATEGORY,
			'title' => __( '[ys]yStandard Blocks', 'ystandard-blocks' ),
		];
		$categories[] = [
			'slug'  => Config::BLOCK_CATEGORY_BETA,
			'title' => __( '[ys]yStandard Blocks Beta', 'ystandard-blocks' ),
		];
		$categories[] = [
			'slug'  => Config::BLOCK_CATEGORY_DEPRECATED,
			'title' => __( '[ys]yStandard Blocks(非推奨)', 'ystandard-blocks' ),
		];

		return $categories;
	}

	/**
	 * 初期化処理
	 */
	private function init() {
		$this->register_blocks = [
			'normal'  => [],
			'dynamic' => [],
		];
		foreach ( glob( YSTDB_PATH . '/js/blocks/*.js' ) as $file ) {
			if ( is_file( $file ) ) {
				// ブロックの情報.
				$name = basename( $file, '.js' );
				if ( in_array( $name, [ 'app', 'block' ], true ) ) {
					continue;
				}

				$asset = include( YSTDB_PATH . "/js/blocks/${name}.asset.php" );
				// ダイナミックブロック判定.
				$render = YSTDB_PATH . "/blocks/${name}/class-${name}.php";
				$type   = file_exists( $render ) ? 'dynamic' : 'normal';
				// カテゴリー.
				$category = Config::BLOCK_CATEGORY;
				if ( in_array( $name, $this->deprecated_blocks, true ) ) {
					$category = Config::BLOCK_CATEGORY_DEPRECATED;
				}
				// セット.
				$this->register_blocks[ $type ][] = [
					'name'         => $name,
					'url'          => str_replace( YSTDB_PATH, YSTDB_URL, $file ),
					'dependencies' => $asset['dependencies'],
					'version'      => $asset['version'],
					'render'       => $render,
					'category'     => $category,
				];
			}
		}
	}

	/**
	 * ブロックの登録
	 */
	public function register_block() {
		if ( ! is_admin() ) {
			return;
		}
		/**
		 * ブロック共通スクリプト
		 */
		$asset_file = include( YSTDB_PATH . '/js/blocks/block.asset.php' );
		wp_enqueue_script(
			Config::BLOCK_EDITOR_SCRIPT_HANDLE,
			YSTDB_URL . '/js/blocks/block.js',
			$asset_file['dependencies'],
			$asset_file['version']
		);
		wp_localize_script(
			Config::BLOCK_EDITOR_SCRIPT_HANDLE,
			'ystdb',
			$this->create_block_config()
		);
		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations(
				Config::BLOCK_EDITOR_SCRIPT_HANDLE,
				Config::TEXT_DOMAIN,
				YSTDB_PATH . '/languages'
			);
		}
		foreach ( $this->register_blocks['normal'] as $block ) {
			$handle = 'ystandard-blocks-' . $block['name'];
			wp_register_script(
				$handle,
				$block['url'],
				$block['dependencies'],
				$block['version']
			);
			register_block_type(
				$block['category'] . '/' . $block['name'],
				[ 'editor_script' => $handle ]
			);
		}
	}

	/**
	 * ダイナミックブロックのファイルを読み込み.
	 */
	public function require_dynamic_block_file() {
		foreach ( $this->register_blocks['dynamic'] as $block ) {
			require_once( $block['render'] );
		}
	}

	/**
	 * ブロックassets
	 */
	public function enqueue_block_editor_assets() {
		wp_enqueue_style(
			Config::BLOCK_EDITOR_CSS_HANDLE,
			YSTDB_URL . '/css/ystandard-blocks-edit.css',
			[],
			filemtime( YSTDB_PATH . '/css/ystandard-blocks-edit.css' )
		);
	}

	/**
	 * ダイナミックブロックの登録
	 */
	public function enqueue_dynamic_block_scripts() {
		foreach ( $this->register_blocks['dynamic'] as $block ) {
			wp_enqueue_script(
				'ystandard-blocks-' . $block['name'],
				$block['url'],
				$block['dependencies'],
				$block['version']
			);
		}
	}

	/**
	 * ブロックエディターにわたすパラメーターを作成
	 *
	 * @return array
	 */
	private function create_block_config() {
		return apply_filters(
			'ystdb_block_config',
			[
				'yStandard' => Utility::is_ystandard() ? '1' : '', // 廃止予定.
				'isYSTD'    => Utility::is_ystandard() ? '1' : '',
				'homeUrl'   => home_url(),
				'pluginUrl' => YSTDB_URL,
			]
		);
	}
}

$block_register = new Register();
$block_register->register();
