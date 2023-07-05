<?php
/**
 * リンク型ボタン
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

namespace ystandard_blocks;

defined( 'ABSPATH' ) || die();

/**
 * Class SVG_Button_Link_Block.
 */
class SVG_Button_Link_Block {
	/**
	 * ブロックパラメーター
	 *
	 * @var array
	 */
	private $block_attributes = [];

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_block' ] );
		$this->block_attributes = Block_Utility::get_block_attributes( __DIR__ );
	}

	/**
	 * ブロック登録
	 *
	 * @return void
	 */
	public function register_block() {
		register_block_type(
			__DIR__,
			[ 'render_callback' => [ $this, 'render' ] ]
		);
	}

	/**
	 * レンダリング
	 *
	 * @param array $attributes Attributes.
	 * @param mixed $content    Content.
	 *
	 * @return mixed|null
	 */
	public function render( $attributes, $content = null ) {

		$attributes = Block_Utility::parse_default( $attributes, $this->block_attributes );

		if ( empty( $attributes['content'] ) ) {
			return '';
		}

		$wrap_class = [ 'wp-block-button' ];
		$link_class = [
			'ystdb-btn-link',
			'ystdb-button__link',
			'wp-block-button__link',
		];
		$wrap_style = [];
		$link_style = [];

		/**
		 * ラッパー
		 */
		if ( $attributes['className'] ) {
			$wrap_class[] = $attributes['className'];
		}
		if ( $attributes['align'] ) {
			$wrap_class[] = "has-text-align-{$attributes['align']}";
		}
		if ( $attributes['customFontSize'] ) {
			$wrap_style[] = "font-size:{$attributes['customFontSize']}";
		} elseif ( $attributes['fontSize'] ) {
			$wrap_class[] = "has-{$attributes['fontSize']}-font-size";
		}

		/**
		 * リンク
		 */
		if ( $attributes['textColor'] || $attributes['customTextColor'] ) {
			$link_class[] = 'has-text-color';
		}
		if ( $attributes['textColor'] ) {
			$link_class[] = "has-{$attributes['textColor']}-color";
		}
		if ( $attributes['customTextColor'] ) {
			$link_style[] = "color:{$attributes['customTextColor']}";
		}
		if ( $attributes['backgroundColor'] || $attributes['customBackgroundColor'] ) {
			$link_class[] = 'has-background';
		}
		if ( $attributes['backgroundColor'] ) {
			$link_class[] = "has-{$attributes['backgroundColor']}-background-color";
		}
		if ( $attributes['customBackgroundColor'] ) {
			$link_style[] = "background-color:{$attributes['customBackgroundColor'] }";
		}

		if ( 0 === $attributes['borderRadius'] ) {
			$link_class[] = 'no-border-radius';
		} else {
			$link_style[] = 'border-radius:' . $attributes['borderRadius'] . 'px';
		}
		if ( $attributes['paddingType'] ) {
			$link_class[] = $attributes['paddingType'];
		}
		if ( $attributes['buttonType'] ) {
			$link_class[] = $attributes['buttonType'];
			if ( $attributes['maxWidth'] ) {
				$link_style[] = 'max-width:' . $attributes['maxWidth'] . $attributes['maxUnit'];
			}
		}
		if ( $attributes['animationType'] && 'none' !== $attributes['animationType'] ) {
			$link_class[] = 'has-animation';
			$link_class[] = 'has-animation--' . $attributes['animationType'];

			if ( $attributes['animationInterval'] ) {
				$link_style[] = 'animation-duration:' . $attributes['animationInterval'] . 's';
			}
		}
		/**
		 * アイコン
		 */
		$icon_left       = '';
		$icon_right      = '';
		$icon_wrap_class = [ 'ystdb-button__icon' ];
		if ( $attributes['iconLeftSVG'] ) {
			$icon_wrap_class_left = array_merge(
				$icon_wrap_class,
				[
					'ystdb-button__icon--left',
					$attributes['iconSizeLeft'] ? $attributes['iconSizeLeft'] : '',
				]
			);
			// アイコン用クラス作成.
			$icon_class = array_merge(
				[ 'ys-icon' ],
				[ false !== strpos( $attributes['iconLeft'], 'sns-' ) ? 'sns-icon' : '' ]
			);
			// アイコンHTML.
			$icon_left = sprintf(
				'<span class="%s"><span class="%s">%s</span></span>',
				esc_attr( implode( ' ', $icon_wrap_class_left ) ),
				esc_attr( implode( ' ', $icon_class ) ),
				$attributes['iconLeftSVG']
			);
		}
		if ( $attributes['iconRightSVG'] ) {
			$icon_class_right = array_merge(
				$icon_wrap_class,
				[
					'ystdb-button__icon--right',
					$attributes['iconSizeRight'] ? $attributes['iconSizeRight'] : '',
				]
			);
			// アイコン用クラス作成.
			$icon_class = array_merge(
				[ 'ys-icon' ],
				[ false !== strpos( $attributes['iconRight'], 'sns-' ) ? 'sns-icon' : '' ]
			);
			// アイコンHTML.
			$icon_right = sprintf(
				'<span class="%s"><span class="%s">%s</span></span>',
				esc_attr( implode( ' ', $icon_class_right ) ),
				esc_attr( implode( ' ', $icon_class ) ),
				$attributes['iconRightSVG']
			);
		}

		/**
		 * スタイル作成
		 */
		$wrap_style = $this->get_style_attr( $wrap_style );
		$link_style = $this->get_style_attr( $link_style );
		ob_start();
		?>
		<div class="<?php echo $this->get_class_names( $wrap_class ); ?>"<?php echo $wrap_style; ?>>
			<span class="<?php echo $this->get_class_names( $link_class ); ?>"<?php echo $link_style; ?>>
				<span class="ystdb-button__link-content">
					<?php
					echo $icon_left;
					echo $attributes['content'];
					echo $icon_right;
					?>
				</span>
			</span>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Style属性作成
	 *
	 * @param array $styles Styles.
	 *
	 * @return string
	 */
	private function get_style_attr( $styles ) {
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
	 * @param string $default default class.
	 *
	 * @return string
	 */
	private function get_class_names( $classes = [], $default = '' ) {
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
}

new SVG_Button_Link_Block();
