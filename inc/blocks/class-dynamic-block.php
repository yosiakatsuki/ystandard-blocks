<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Dynamic_block
 */
abstract class Dynamic_Block {

	/**
	 * ブロック有効化フックのプレフィックス
	 */
	const REGISTER_DYNAMIC_BLOCK_HOOK = 'ystdb_register_dynamic_block_';

	/**
	 * ブロック名
	 *
	 * @var string
	 */
	protected $block_name = '';

	/**
	 * スクリプト名
	 *
	 * @var string
	 */
	protected $script_name = '';

	/**
	 * ブロックパラメーター
	 *
	 * @var array
	 */
	protected $block_attributes = [];

	/**
	 * クラス名
	 *
	 * @var array
	 */
	protected $class_names = [];

	/**
	 * スタイル
	 *
	 * @var array
	 */
	protected $styles = [];

	/**
	 * Render
	 *
	 * @param array  $attributes block attributes.
	 * @param string $content    innerBlocks.
	 *
	 * @return false|string
	 */
	abstract public function render( $attributes, $content = null );

	/**
	 * Render
	 *
	 * @param array  $attributes block attributes.
	 * @param string $content    innerBlocks.
	 *
	 * @return false|string
	 */
	public function _render( $attributes, $content = null ) {
		$attributes = $this->parse_default( $attributes );

		return $this->render( $attributes, $content );
	}

	/**
	 * Render
	 *
	 * @param string $slug       Slug.
	 * @param array  $attributes block attributes.
	 *
	 * @deprecated
	 *
	 * @return false|string
	 */
	public function render_by_view( $slug, $attributes ) {
		$view = apply_filters(
			'ystdb_dynamic_block_view_path',
			YSTDB_PATH . '/blocks/' . $slug . '/view.php',
			$slug
		);
		ob_start();
		include( $view );

		return ob_get_clean();
	}

	/**
	 * Register Dynamic Block
	 */
	public function register_block() {

		if ( ! apply_filters( self::REGISTER_DYNAMIC_BLOCK_HOOK . $this->block_name, true ) ) {
			return;
		}
		$block_type      = "ystdb/{$this->block_name}";
		$block_type_args = [
			'attributes'      => $this->block_attributes,
			'render_callback' => [ $this, '_render' ],
		];
		/**
		 * Editor Script.
		 */
		if ( is_file( YSTDB_PATH . "/js/blocks/{$this->block_name}.js" ) ) {
			$handle = "ystandard-blocks-{$this->block_name}";
			// 依存関係.
			$asset = include( YSTDB_PATH . "/js/blocks/{$this->block_name}.asset.php" );
			// 登録.
			wp_register_script(
				"ystandard-blocks-{$this->block_name}",
				YSTDB_URL . "/js/blocks/{$this->block_name}.js",
				$asset['dependencies'],
				$asset['version']
			);
			$block_type_args['editor_script'] = $handle;
		} else {
			return;
		}
		/**
		 * Front Style.
		 */
		if ( is_file( YSTDB_PATH . "/css/blocks/{$this->block_name}/block.css" ) ) {
			$handle = "ystdb-block-style-{$this->block_name}";
			wp_register_style(
				$handle,
				YSTDB_URL . "/css/blocks/{$this->block_name}/block.css",
				[],
				filemtime( YSTDB_PATH . "/css/blocks/{$this->block_name}/block.css" )
			);
			$block_type_args['style'] = $handle;
		}
		/**
		 * Editor Style.
		 */
		if ( is_file( YSTDB_PATH . "/css/blocks/{$this->block_name}/edit.css" ) ) {
			$handle = "ystdb-block-editor-style-{$this->block_name}";
			wp_register_style(
				$handle,
				YSTDB_URL . "/css/blocks/{$this->block_name}/edit.css",
				[],
				filemtime( YSTDB_PATH . "/css/blocks/{$this->block_name}/edit.css" )
			);
			$block_type_args['editor_style'] = $handle;
		}
		register_block_type( $block_type, $block_type_args );
	}

	/**
	 * テーマでテンプレートを上書き
	 *
	 * @param array  $attributes block attributes.
	 * @param string $slug       slug.
	 * @param string $name       name.
	 *
	 * @return false|string
	 */
	protected function get_template_part( $attributes, $slug, $name = null ) {
		$located = '';

		if ( ! empty( $name ) ) {
			$templates[] = "{$slug}-{$name}.php";
		}

		$templates[] = "{$slug}.php";
		foreach ( $templates as $template_name ) {
			if ( file_exists( STYLESHEETPATH . '/' . $template_name ) ) {
				$located = STYLESHEETPATH . '/' . $template_name;
				break;
			} elseif ( file_exists( TEMPLATEPATH . '/' . $template_name ) ) {
				$located = TEMPLATEPATH . '/' . $template_name;
				break;
			}
		}
		if ( empty( $located ) ) {
			return false;
		}

		ob_start();
		include( $located );

		return ob_get_clean();
	}

	/**
	 * 初期値の解析
	 *
	 * @param array $attributes Attributes.
	 *
	 * @return array
	 */
	protected function parse_default( $attributes ) {
		foreach ( $this->block_attributes as $key => $item ) {
			if ( ! isset( $attributes[ $key ] ) ) {
				$attributes[ $key ] = isset( $item['default'] ) ? $item['default'] : null;
			}
			if ( 'bool' === $item['type'] ) {
				$attributes[ $key ] = Utility::to_bool( $attributes[ $key ] );
			}
		}

		return $attributes;
	}

	/**
	 * クラス名追加.
	 *
	 * @param string|array $class Class Names.
	 * @param bool         $flag  Flag.
	 *
	 * @return void
	 */
	protected function add_class_name( $class, $flag = true ) {
		if ( ! is_array( $class ) ) {
			$class = explode( ' ', $class );
		}
		if ( $flag ) {
			$this->class_names = array_unique( array_merge( $this->class_names, $class ) );
		}
	}

	/**
	 * クラス名取得.
	 *
	 * @param array $attributes ブロックパラメーター.
	 *
	 * @return string
	 */
	protected function get_class_name( $attributes = [] ) {
		$classes = [];
		if ( array_key_exists( 'className', $attributes ) ) {
			$classes[] = $attributes['className'];
		}
		$classes = array_merge( $classes, $this->class_names );

		return implode( ' ', array_filter( $classes ) );
	}
}
