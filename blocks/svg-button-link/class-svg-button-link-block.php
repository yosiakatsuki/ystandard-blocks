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
 * Class SVG_Button_Link
 *
 * @package ystandard_blocks
 */
class SVG_Button_Link_Block extends Dynamic_Block {

	/**
	 * Block Name.
	 *
	 * @var string
	 */
	protected $block_name = 'svg-button-link';
	/**
	 * Script Handle.
	 *
	 * @var string
	 */
	protected $script_name = 'ystandard-blocks-svg-button-link';
	/**
	 * Block Attributes.
	 *
	 * @var array
	 */
	protected $block_attributes = [
		'className'             => [
			'type' => 'string',
		],
		'content'               => [
			'type' => 'string',
		],
		'borderRadius'          => [
			'type' => 'number',
		],
		'iconLeft'              => [
			'type' => 'string',
		],
		'iconLeftSVG'           => [
			'type' => 'string',
		],
		'iconSizeLeft'          => [
			'type' => 'string',
		],
		'iconRight'             => [
			'type' => 'string',
		],
		'iconRightSVG'          => [
			'type' => 'string',
		],
		'iconSizeRight'         => [
			'type' => 'string',
		],
		'align'                 => [
			'type' => 'string',
		],
		'backgroundColor'       => [
			'type' => 'string',
		],
		'customBackgroundColor' => [
			'type' => 'string',
		],
		'textColor'             => [
			'type' => 'string',
		],
		'customTextColor'       => [
			'type' => 'string',
		],
		'fontSize'              => [
			'type' => 'string',
		],
		'customFontSize'        => [
			'type' => 'string',
		],
		'paddingType'           => [
			'type' => 'string',
		],
		'buttonType'            => [
			'type' => 'string',
		],
		'maxWidth'              => [
			'type' => 'number',
		],
		'maxUnit'               => [
			'type' => 'string',
		],
		'animationType'         => [
			'type' => 'string',
		],
		'animationInterval'     => [
			'type' => 'number',
		],
	];

	/**
	 * Render
	 *
	 * @param array  $attributes block attributes.
	 * @param string $content    innerBlocks content.
	 *
	 * @return string
	 */
	public function render( $attributes, $content = null ) {

		$attributes = wp_parse_args(
			$attributes,
			[
				'className'             => '',
				'content'               => '',
				'borderRadius'          => 4,
				'iconLeft'              => '',
				'iconLeftSVG'           => '',
				'iconSizeLeft'          => '',
				'iconRight'             => '',
				'iconRightSVG'          => '',
				'iconSizeRight'         => '',
				'align'                 => '',
				'backgroundColor'       => '',
				'customBackgroundColor' => '',
				'textColor'             => '',
				'customTextColor'       => '',
				'fontSize'              => '',
				'customFontSize'        => '',
				'paddingType'           => '',
				'buttonType'            => '',
				'maxWidth'              => 100,
				'maxUnit'               => '%',
				'animationType'         => 'none',
				'animationInterval'     => 5,
			]
		);

		if ( ! $attributes['content'] ) {
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
			$wrap_class[] = Utility::get_align_class( $attributes['align'] );
		}
		if ( $attributes['customFontSize'] ) {
			$wrap_style[] = 'font-size:' . $attributes['customFontSize'];
		} elseif ( $attributes['fontSize'] ) {
			$wrap_class[] = Utility::get_font_size_class( $attributes['fontSize'] );
		}

		/**
		 * リンク
		 */
		if ( $attributes['textColor'] || $attributes['customTextColor'] ) {
			$link_class[] = Utility::get_has_class( 'text-color', $attributes['textColor'], $attributes['customTextColor'] );
		}
		if ( $attributes['textColor'] ) {
			$link_class[] = Utility::get_text_color_class( $attributes['textColor'] );
		}
		if ( $attributes['customTextColor'] ) {
			$link_style[] = Utility::get_text_color_style( $attributes['customTextColor'] );
		}
		if ( $attributes['backgroundColor'] || $attributes['customBackgroundColor'] ) {
			$link_class[] = Utility::get_has_class( 'background', $attributes['backgroundColor'], $attributes['customBackgroundColor'] );
		}
		if ( $attributes['backgroundColor'] ) {
			$link_class[] = Utility::get_background_color_class( $attributes['backgroundColor'] );
		}
		if ( $attributes['customBackgroundColor'] ) {
			$link_style[] = Utility::get_background_color_style( $attributes['customBackgroundColor'] );
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
		$wrap_style = Utility::get_style_attr( $wrap_style );
		$link_style = Utility::get_style_attr( $link_style );
		ob_start();
		?>
		<div class="<?php echo Utility::get_class_names( $wrap_class ); ?>"<?php echo $wrap_style; ?>>
			<span class="<?php echo Utility::get_class_names( $link_class ); ?>"<?php echo $link_style; ?>>
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
}

$svg_button_link = new SVG_Button_Link_Block();
$svg_button_link->register_block();
