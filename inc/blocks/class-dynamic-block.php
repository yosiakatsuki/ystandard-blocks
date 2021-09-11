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
	 * @param string $slug       Slug.
	 * @param array  $attributes block attributes.
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
		register_block_type(
			"ystdb/{$this->block_name}",
			[
				'editor_script'   => $this->script_name,
				'attributes'      => $this->block_attributes,
				'render_callback' => [ $this, 'render' ],
			]
		);
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
}
