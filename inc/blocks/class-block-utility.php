<?php
/**
 * Block Utility.
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

use ystandard_blocks\utils\File;
use ystandard_blocks\utils\Styles;
use ystandard_blocks\utils\Types;

defined( 'ABSPATH' ) || die();

/**
 * Class Block_Utility.
 */
class Block_Utility {

	/**
	 * 初期値の解析
	 *
	 * @param array $attributes       Attributes.
	 * @param array $block_attributes Block Attributes.
	 *
	 * @return array
	 */
	public static function parse_default( $attributes, $block_attributes ) {
		foreach ( $block_attributes as $key => $item ) {
			if ( ! isset( $attributes[ $key ] ) ) {
				$attributes[ $key ] = isset( $item['default'] ) ? $item['default'] : null;
			}
			if ( isset( $item['type'] ) && 'bool' === $item['type'] ) {
				$attributes[ $key ] = Types::to_bool( $attributes[ $key ] );
			}
		}

		return $attributes;
	}

	/**
	 * Get Block Attributes.
	 *
	 * @param string $dir  Directory.
	 * @param string $file File.
	 *
	 * @return array
	 */
	public static function get_block_attributes( $dir, $file = 'block.json' ) {
		$result   = [];
		$metadata = self::get_block_metadata( $dir, $file );
		if ( isset( $metadata['attributes'] ) ) {
			$result = $metadata['attributes'];
		}
		if ( isset( $metadata['supports']['className'] ) && ! isset( $result['className'] ) ) {
			$result['className'] = '';
		}

		return $result;
	}

	/**
	 * Get Block Metadata.
	 *
	 * @param string $dir  Directory.
	 * @param string $file File.
	 *
	 * @return array
	 */
	public static function get_block_metadata( $dir, $file = 'block.json' ) {
		$file_path = $dir . '/' . $file;
		if ( ! is_file( $file_path ) ) {
			return [];
		}
		$metadata = File::get_json_file_contents( $file_path );
		if ( ! is_array( $metadata ) ) {
			return [];
		}

		return $metadata;
	}

	/**
	 * ブロックにラッパークラス追加
	 *
	 * @param string $class_names   クラス.
	 * @param string $block_content ブロックコンテンツ.
	 *
	 * @return string
	 */
	public static function add_wrapper_class( $class_names, $block_content ) {
		$class_names = ! is_array( $class_names ) ? [ $class_names ] : $class_names;

		return preg_replace(
			'/' . preg_quote( 'class="', '/' ) . '/',
			'class="' . esc_attr( implode( ' ', $class_names ) ) . ' ',
			$block_content,
			1
		);
	}

	/**
	 * ブロックのインラインスタイル用設定を取得
	 *
	 * @param array  $block Block object.
	 * @param string $name  Style name.
	 *
	 * @return bool|array
	 */
	public static function get_block_style( $block, $name = 'style' ) {
		if ( ! isset( $block['attrs'][ $name ] ) ) {
			return false;
		}

		return $block['attrs'][ $name ];
	}

	/**
	 * ブロック追加用クラス名を取得.
	 *
	 * @param string $block_name ブロック名.
	 *
	 * @return string
	 */
	public static function get_unique_class( $block_name ) {
		$block_name = str_replace( '/', '-', $block_name );
		$class      = wp_unique_id( $block_name . '-' );

		return $class;
	}

	/**
	 * CSS指定用クラス.
	 *
	 * @param string $class_name Class Name.
	 *
	 * @return string
	 */
	public static function get_css_container_class( $class_name ) {
		return ".{$class_name}.{$class_name}";
	}


	/**
	 * ブロックインラインCSSを作成する.
	 *
	 * @param string $selector セレクター.
	 * @param array  $styles   スタイル.
	 *
	 * @return string
	 */
	public static function compile_block_inline_css( $selector, $styles ) {
		$style = '';
		// デスクトップ.
		if ( Styles::has_responsive_style( 'desktop', $styles ) ) {
			$style .= sprintf(
				'%s{%s}',
				$selector,
				Styles::compile_inline_css( $styles['desktop'] )
			);
		}
		// タブレット.
		if ( Styles::has_responsive_style( 'tablet', $styles ) ) {
			$style .= Styles::add_media_query_tablet(
				sprintf(
					'%s{%s}',
					$selector,
					Styles::compile_inline_css( $styles['tablet'] )
				)
			);
		}
		// モバイル.
		if ( Styles::has_responsive_style( 'mobile', $styles ) ) {
			$style .= Styles::add_media_query_mobile(
				sprintf(
					'%s{%s}',
					$selector,
					Styles::compile_inline_css( $styles['mobile'] )
				)
			);
		}

		return $style;
	}


	/**
	 * ブロック用インラインCSSを出力する.
	 *
	 * @param string $style    CSS.
	 * @param int    $priority Priority.
	 *
	 * @return void
	 */
	public static function enqueue_block_inline_css( $style, $priority = 100 ) {
		add_action(
			'wp_footer',
			static function () use ( $style ) {
				echo "<style>$style</style>" . PHP_EOL;
			},
			$priority
		);
	}
}
