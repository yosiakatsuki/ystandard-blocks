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
	 * 読み込みブロック一覧
	 *
	 * @var array
	 */
	private $blocks = [
		'svg-button' => [
			'name'    => 'ystdb/svg-button',
			'no-ystd' => true,
		],
		'svg-icon'   => [
			'name'    => 'ystdb/svg-icon',
			'no-ystd' => true,
		],
		'columns'    => [
			'name'    => 'ystdb/columns',
			'no-ystd' => true,
		],
		'column'     => [
			'name'    => 'ystdb/column',
			'no-ystd' => true,
		],
		'section'    => [
			'name'    => 'ystdb/section',
			'no-ystd' => true,
		],
		'heading'    => [
			'name'    => 'ystdb/heading',
			'no-ystd' => true,
		],
		'balloon'    => [
			'name'    => 'ystdb/balloon',
			'no-ystd' => true,
		],
	];

	/**
	 * 非推奨ブロック
	 *
	 * @var array
	 */
	private $deprecated_blocks = [];

	/**
	 * ダイナミックブロック一覧
	 *
	 * @var array
	 */
	private $dynamic_block = [
		'svg-button-link'         => [
			'name'    => 'ystdb/svg-button-link',
			'no-ystd' => true,
			'class'   => 'svg-button-link',
		],
		'card'                    => [
			'name'    => 'ystdb/card',
			'no-ystd' => true,
			'class'   => 'card',
		],
		'conditional-group-block' => [
			'name'    => 'ystdb/conditional-group-block',
			'no-ystd' => true,
			'class'   => 'conditional-group-block',
		],
	];

	/**
	 * 非推奨ダイナミックブロック
	 *
	 * @var array
	 */
	private $deprecated_dynamic_blocks = [];

	/**
	 * スタイル、フォーマット、コア拡張など
	 *
	 * @var array
	 */
	private $block_editor_assets = [
		'format' => true,
	];

	/**
	 * フックの登録など
	 */
	public function register() {
		add_action( 'init', [ $this, 'register_block' ] );
		add_action( 'init', [ $this, 'register_dynamic_block' ] );
		add_action(
			'enqueue_block_editor_assets',
			[ $this, 'enqueue_block_editor_assets' ]
		);
	}

	/**
	 * ブロックの登録
	 */
	public function register_block() {
		if ( ! is_admin() ) {
			return;
		}
		$blocks = $this->blocks;
		// 非推奨ブロックのチェック.
		$deprecated_blocks = $this->check_deprecated_blocks( $this->deprecated_blocks );
		if ( ! empty( $deprecated_blocks ) ) {
			$blocks = array_merge(
				$blocks,
				$deprecated_blocks
			);
		}
		foreach ( $blocks as $key => $value ) {
			/**
			 * 非yStandardの利用チェック
			 */
			if ( ! Utility::is_ystandard() ) {
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
			Config::BLOCK_EDITOR_SCRIPT_HANDLE,
			YSTDB_URL . '/js/block.js',
			$asset_file['dependencies'],
			$asset_file['version']
		);
		wp_localize_script(
			Config::BLOCK_EDITOR_SCRIPT_HANDLE,
			'ystdb',
			$this->create_block_config()
		);
		wp_set_script_translations(
			Config::BLOCK_EDITOR_SCRIPT_HANDLE,
			Config::TEXT_DOMAIN,
			YSTDB_PATH . '/languages'
		);
		foreach ( $this->block_editor_assets as $key => $value ) {
			/**
			 * 非yStandardの利用チェック
			 */
			if ( ! Utility::is_ystandard() ) {
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

		$blocks = $this->dynamic_block;
		// 非推奨ブロックのチェック.
		$deprecated_blocks = $this->check_deprecated_blocks( $this->deprecated_dynamic_blocks );
		if ( ! empty( $deprecated_blocks ) ) {
			$blocks = array_merge(
				$blocks,
				$deprecated_blocks
			);
		}
		/**
		 * ダイナミックブロック
		 */
		foreach ( $blocks as $key => $value ) {
			/**
			 * 非yStandardの利用チェック
			 */
			if ( ! Utility::is_ystandard() ) {
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
	 * ブロックエディターにわたすパラメーターを作成
	 *
	 * @return array
	 */
	private function create_block_config() {
		return apply_filters(
			'ystdb_block_config',
			[
				'yStandard'     => Utility::is_ystandard() ? '1' : '',
				'homeUrl'       => home_url(),
				'pluginUrl'     => YSTDB_URL,
				'balloonImages' => Balloon::get_balloon_images(),
			]
		);
	}

	/**
	 * 非推奨ブロックの利用チェック
	 *
	 * @param array $blocks 非推奨ブロックのリスト.
	 *
	 * @return array
	 */
	private function check_deprecated_blocks( $blocks ) {
		$result = [];

		foreach ( $blocks as $key => $value ) {
			if ( $this->is_use_block( $value['name'] ) ) {
				$result[ $key ] = $value;
			}
		}

		return $result;
	}

	/**
	 * ブロックが使われているかの確認.
	 *
	 * @param string $name Name.
	 *
	 * @return bool
	 */
	private function is_use_block( $name ) {
		// フロント側ではチェックしない.
		if ( ! is_admin() ) {
			return true;
		}

		$result = $this->get_posts_with_blocks( $name );

		return ! empty( $result );
	}

	/**
	 * ブロックが使われている投稿の取得.
	 *
	 * @param string $name Block Name.
	 *
	 * @return \WP_Post[]
	 */
	private function get_posts_with_blocks( $name ) {
		$types = get_post_types( [ 'public' => true ] );
		if ( in_array( 'ys-parts', $types, true ) ) {
			$types[] = 'ys-parts';
		}

		return get_posts(
			[
				'post_type' => $types,
				's'         => $name,
			]
		);
	}

	/**
	 * 非推奨ブロックが使われている投稿の取得.
	 *
	 * @return \WP_Post[]
	 */
	public function get_posts_with_deprecated_blocks() {
		$blocks = array_merge(
			$this->deprecated_blocks,
			$this->deprecated_dynamic_blocks
		);
		$result = [];
		foreach ( $blocks as $key => $value ) {
			$posts = $this->get_posts_with_blocks( $value['name'] );
			foreach ( $posts as $post ) {
				if ( ! array_key_exists( $post->post_name, $result ) ) {
					$result[ $post->post_name ] = [
						'title' => $post->post_title,
						'url'   => get_permalink( $post ),
						'edit'  => get_edit_post_link( $post ),
					];
				}
			}
		}

		return $result;
	}
}

$block_register = new Register();
$block_register->register();
