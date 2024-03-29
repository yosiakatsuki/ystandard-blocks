<?php
/**
 * Utility (徐々にUtils/**へ移行)
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class Utility
 *
 * @package ystandard_blocks
 */
class Utility {
	/**
	 * HTML・改行・ショートコードなしのテキストを取得
	 *
	 * @param string $text content.
	 *
	 * @return string
	 */
	public static function get_plain_text( $text ) {
		$text = html_entity_decode( $text );
		// ショートコード削除.
		$text = strip_shortcodes( $text );
		// HTMLタグ削除.
		$text = wp_strip_all_tags( $text, true );

		return $text;
	}

	/**
	 * テーマバージョン取得
	 *
	 * @param boolean $parent_theme 親テーマ情報かどうか.
	 *
	 * @return string
	 */
	public static function get_theme_version( $parent_theme = false ) {
		/**
		 * 子テーマ情報
		 */
		$theme = wp_get_theme();
		if ( $parent_theme && get_template() !== get_stylesheet() ) {
			/**
			 * 親テーマ情報
			 */
			$theme = wp_get_theme( get_template() );
		}

		return $theme->get( 'Version' );
	}

	/**
	 * テーマ有効化チェック
	 *
	 * @return bool
	 */
	public static function is_ystandard() {
		return 'ystandard' === get_template();
	}

	/**
	 * IEチェック
	 *
	 * @return bool
	 */
	public static function is_ie() {
		$ua = [
			'Trident',
			'MSIE',
		];

		return self::check_user_agent( $ua );
	}

	/**
	 * Edgeチェック
	 *
	 * @return bool
	 */
	public static function is_edge() {
		$ua = [
			'Edge',
		];

		return self::check_user_agent( $ua );
	}

	/**
	 * Parse Block.
	 *
	 * @param string $content content.
	 *
	 * @return array|string
	 */
	public function parse_blocks( $content ) {

		if ( function_exists( 'parse_blocks' ) ) {
			return parse_blocks( $content );
		}
		if ( function_exists( 'gutenberg_parse_blocks' ) ) {
			return gutenberg_parse_blocks( $content );
		}

		return $content;
	}

	/**
	 * Boolに変換
	 *
	 * @param mixed $value var.
	 *
	 * @return bool
	 * @deprecated to Utils/Types::to_bool
	 */
	public static function to_bool( $value ) {
		if ( true === $value || 'true' === $value || 1 === $value || '1' === $value ) {
			return true;
		}

		return false;
	}

	/**
	 * Styleタグ作成
	 *
	 * @param array $styles styles.
	 *
	 * @return string
	 */
	public static function get_style_attr( $styles = [] ) {
		if ( empty( $styles ) ) {
			return '';
		}
		if ( is_array( $styles ) ) {
			$styles = array_filter( $styles );
			if ( empty( $styles ) ) {
				return '';
			}
			$styles = implode( ';', $styles );
		}

		return ' style="' . esc_attr( $styles ) . ';"';
	}

	/**
	 * クラス一覧作成
	 *
	 * @param array  $classes classes.
	 * @param string $default_value default class.
	 *
	 * @return string
	 */
	public static function get_class_names( $classes = [], $default_value = '' ) {
		if ( empty( $classes ) ) {
			return '';
		}
		if ( is_array( $classes ) ) {
			$classes = array_filter( $classes );
			if ( empty( $classes ) ) {
				return '';
			}
			$classes = implode( ' ', $classes );
		}

		return esc_attr( $classes );
	}

	/**
	 * テキストカラースタイル取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_text_color_style( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "color:{$color}";
	}

	/**
	 * テキストカラークラス取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_text_color_class( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "has-{$color}-color";
	}

	/**
	 * 背景色スタイル取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_background_color_style( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "background-color:{$color}";
	}

	/**
	 * 背景色クラス取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_background_color_class( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "has-{$color}-background-color";
	}

	/**
	 * 枠線色スタイル取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_border_color_style( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "border-color:{$color}";
	}

	/**
	 * 枠線色クラス取得
	 *
	 * @param string $color color.
	 *
	 * @return string
	 */
	public static function get_border_color_class( $color ) {
		if ( ! $color ) {
			return '';
		}

		return "has-{$color}-border-color";
	}


	/**
	 * [has-]クラス名作成
	 *
	 * @param string $name   class name.
	 * @param string $class_name  class.
	 * @param string $custom custom value.
	 *
	 * @return string
	 */
	public static function get_has_class( $name, $class_name, $custom ) {
		if ( empty( $class_name ) && empty( $custom ) ) {
			return '';
		}

		return "has-{$name}";
	}

	/**
	 * Nonceチェック
	 *
	 * @param string $name   Name.
	 * @param string $action Action.
	 *
	 * @return bool|int
	 */
	public static function verify_nonce( $name, $action ) {
		// nonceがセットされているかどうか確認.
		if ( ! isset( $_POST[ $name ] ) ) {
			return false;
		}

		return wp_verify_nonce( $_POST[ $name ], $action );
	}

	/**
	 * サイズ関連のサニタイズ
	 *
	 * @param string $number  数値.
	 * @param int    $default_value 初期値.
	 * @param int    $max     最大.
	 * @param int    $min     最小.
	 */
	public static function sanitize_size( $number, $default_value, $max = 200, $min = 60 ) {

		if ( ! is_numeric( $number ) ) {
			return $default_value;
		}
		if ( $number < $min || $number > $max ) {
			return $default_value;
		}

		return $number;
	}

	/**
	 * 投稿タイプ取得
	 *
	 * @param array $args    args.
	 * @param bool  $exclude 除外.
	 *
	 * @return array
	 */
	public static function get_post_types( $args = [], $exclude = true ) {
		$args = array_merge(
			[ 'public' => true ],
			$args
		);

		$types = get_post_types( $args );

		if ( $exclude ) {
			unset( $types['attachment'] );
		}

		foreach ( $types as $key => $value ) {
			$post_type = get_post_type_object( $key );
			if ( $post_type ) {
				$types[ $key ] = $post_type->labels->singular_name;
			}
		}

		return $types;
	}

	/**
	 * ユーザーエージェントのチェック
	 *
	 * @param array $ua 対象ユーザーエージェントのリスト.
	 *
	 * @return boolean
	 */
	public static function check_user_agent( $ua ) {
		if ( ! isset( $_SERVER['HTTP_USER_AGENT'] ) ) {
			return false;
		}
		$pattern = '/' . implode( '|', $ua ) . '/i';

		return preg_match( $pattern, $_SERVER['HTTP_USER_AGENT'] );
	}
}
