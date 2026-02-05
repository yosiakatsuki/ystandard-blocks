<?php
/**
 * Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\helper\Helper_Amp;
use ystandard_blocks\utils\Styles;
use ystandard_blocks\utils\Version;

defined( 'ABSPATH' ) || die();

/**
 * Blocks.
 */
class Blocks {

	/**
	 * 有効化するブロックのリスト
	 *
	 * @var array
	 */
	private $register_blocks;

	/**
	 * 非推奨ブロック
	 *
	 * @var array
	 */
	private $deprecated_blocks = [];

	/**
	 * Constructor.
	 */
	public function __construct() {
		if ( Version::wordpress_version_compare( '5.8-alpha-1' ) ) {
			add_filter( 'block_categories_all', [ $this, 'add_block_categories' ] );
		} else {
			add_filter( 'block_categories', [ $this, 'add_block_categories' ] );
		}
		$this->init_blocks();
		// 以下は徐々に移行する.
		$this->init();
		add_action( 'init', [ $this, 'require_dynamic_block_file' ] );
		add_action( 'init', [ $this, 'register_block' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_assets' ] );
		add_filter( 'yststd_parts_block_preview_styles', [ $this, 'add_parts_preview_style' ] );
		add_filter( 'block_type_metadata', [ $this, 'block_type_metadata' ] );
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
			if ( ! is_file( $file ) ) {
				continue;
			}
			$style        = null;
			$editor_style = null;
			// ブロックの情報.

			$name = basename( $file, '.js' );
			if ( in_array( $name, [ 'app', 'block' ], true ) ) {
				continue;
			}

			$asset = include YSTDB_PATH . "/js/blocks/{$name}.asset.php";
			// ダイナミックブロック判定.
			$render = YSTDB_PATH . "/blocks/{$name}/class-{$name}-block.php";
			$type   = file_exists( $render ) ? 'dynamic' : 'normal';
			// ブロック固有の処理読み込み.
			$block_php = YSTDB_PATH . "/blocks/{$name}/class-{$name}.php";
			if ( is_file( $block_php ) ) {
				require_once $block_php;
			}
			// カテゴリー.
			$category = Config::BLOCK_CATEGORY;
			if ( in_array( $name, $this->deprecated_blocks, true ) ) {
				$category = Config::BLOCK_CATEGORY_DEPRECATED;
			}
			if ( 'normal' === $type ) {
				// スクリプト関連.
				$style_path = YSTDB_PATH . "/css/blocks/{$name}/block.css";
				if ( is_file( $style_path ) ) {
					$style = [
						'handle' => "ystdb-block-style-{$name}",
						'src'    => $this->replace_path_to_url( $style_path ),
						'var'    => filemtime( $style_path ),
					];
				}

				$editor_style_path = YSTDB_PATH . "/css/blocks/{$name}/edit.css";
				if ( is_file( $editor_style_path ) ) {
					$editor_style = [
						'handle' => "ystdb-block-editor-style-{$name}",
						'src'    => $this->replace_path_to_url( $editor_style_path ),
						'var'    => filemtime( $editor_style_path ),
					];
				}
			}
			// セット.
			$this->register_blocks[ $type ][] = [
				'name'         => $name,
				'url'          => $this->replace_path_to_url( $file ),
				'dependencies' => $asset['dependencies'],
				'version'      => $asset['version'],
				'render'       => $render,
				'style'        => $style,
				'editor_style' => $editor_style,
			];
		}
	}

	/**
	 * ブロックのファイル読み込み
	 *
	 * @return void
	 */
	private function init_blocks() {
		$blocks = glob( YSTDB_PATH . '/build/blocks/**/index.php' );
		foreach ( $blocks as $file ) {
			require_once $file;
		}
	}

	/**
	 * ダイナミックブロックの登録
	 */
	public function require_dynamic_block_file() {
		foreach ( $this->register_blocks['dynamic'] as $block ) {
			require_once $block['render'];
		}
	}

	/**
	 * ブロックの登録
	 */
	public function register_block() {
		if ( is_admin() ) {
			/**
			 * ブロック共通スクリプト
			 */
			wp_enqueue_script(
				Config::BLOCK_EDITOR_SCRIPT_HANDLE,
				YSTDB_URL . '/js/admin-menu/admin-app.js'
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
		}
		foreach ( $this->register_blocks['normal'] as $block ) {
			$handle              = 'ystandard-blocks-' . $block['name'];
			$block_type          = Config::BLOCK_CATEGORY . '/' . $block['name'];
			$register_block_args = [ 'editor_script' => $handle ];
			wp_register_script(
				$handle,
				$block['url'],
				$block['dependencies'],
				$block['version']
			);

			if ( ! is_null( $block['style'] ) && ! is_admin() ) {
				wp_register_style(
					$block['style']['handle'],
					$block['style']['src'],
					[],
					$block['style']['var']
				);
				$register_block_args['style'] = $block['style']['handle'];
			}
			if ( ! is_null( $block['editor_style'] ) ) {
				wp_register_style(
					$block['editor_style']['handle'],
					$block['editor_style']['src'],
					[],
					$block['editor_style']['var']
				);
				$register_block_args['editor_style'] = $block['editor_style']['handle'];
			}
			register_block_type( $block_type, $register_block_args );
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
				'yStandard'      => Utility::is_ystandard() ? '1' : '', // TODO:廃止予定.
				'isYSTD'         => Utility::is_ystandard() ? '1' : '',
				'homeUrl'        => home_url(),
				'pluginUrl'      => YSTDB_URL,
				'useAmp'         => Helper_Amp::use_amp_plugin(),
				'breakpoint'     => Styles::get_breakpoints(),
				'breakpointBase' => Styles::get_breakpoints_base_size(),
			]
		);
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
	 * ブロックのメタデータを調整.
	 *
	 * @param array $metadata メタデータ.
	 *
	 * @return array
	 */
	public function block_type_metadata( $metadata ) {
		// Blocksのブロックだけ処理する.
		if ( isset( $metadata['name'] ) && false !== strpos( $metadata['name'], 'ystdb' ) ) {
			// ファイルの更新時間をバージョンにセット.CSS等のキャッシュ対策.
			if ( isset( $metadata['file'] ) && file_exists( $metadata['file'] ) ) {
				$metadata['version'] = filemtime( $metadata['file'] );
			}
		}

		return $metadata;
	}

	/**
	 * パーツブロック表示用CSS追加
	 *
	 * @param array $styles スタイル.
	 *
	 * @return array
	 */
	public function add_parts_preview_style( $styles ) {

		$path = YSTDB_PATH . '/css/ystandard-blocks.css';
		if ( is_file( $path ) ) {
			$styles[] = [
				'css'            => file_get_contents( $path ),
				'baseURL'        => YSTDB_URL . '/css/ystandard-blocks.css',
				'__unstableType' => 'plugin',
			];
		}
		$styles[] = [
			'css'            => Enqueue::get_fallback_animation_css(),
			'__unstableType' => 'plugin',
		];

		return $styles;
	}

	/**
	 * Add block category
	 *
	 * @param array $categories ブロックカテゴリー.
	 *
	 * @return array
	 */
	public function add_block_categories( $categories ) {
		$blocks_categories   = [];
		$blocks_categories[] = [
			'slug'  => Config::BLOCK_CATEGORY,
			'title' => __( '[ys]yStandard Blocks', 'ystandard-blocks' ),
		];
		$blocks_categories[] = [
			'slug'  => Config::BLOCK_CATEGORY_BETA,
			'title' => __( '[ys]yStandard Blocks Beta', 'ystandard-blocks' ),
		];
		$blocks_categories[] = [
			'slug'  => Config::BLOCK_CATEGORY_DEPRECATED,
			'title' => __( '[ys]yStandard Blocks(非推奨)', 'ystandard-blocks' ),
		];

		if ( apply_filters( 'ystdb_block_category_top', false ) ) {
			return array_merge( $blocks_categories, $categories );
		}

		return array_merge( $categories, $blocks_categories );
	}

	/**
	 * パス文字列をURLに変換する.
	 *
	 * @param string $path Path.
	 *
	 * @return string
	 */
	private function replace_path_to_url( $path ) {
		return str_replace( YSTDB_PATH, YSTDB_URL, $path );
	}
}

new Blocks();
