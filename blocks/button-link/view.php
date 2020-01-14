<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

use \ystandard_blocks\Helper;

$attributes = wp_parse_args(
	$attributes,
	[
		'className'             => '',
		'content'               => '',
		'borderRadius'          => 4,
		'iconLeft'              => '',
		'iconSizeLeft'          => '',
		'iconRight'             => '',
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
	return;
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
	$wrap_class[] = Helper::get_align_class( $attributes['align'] );
}
if ( $attributes['customFontSize'] ) {
	$wrap_style[] = Helper::get_font_size_style( $attributes['customFontSize'] );
} elseif ( $attributes['fontSize'] ) {
	$wrap_class[] = Helper::get_font_size_class( $attributes['fontSize'] );
}

/**
 * リンク
 */
if ( $attributes['textColor'] || $attributes['customTextColor'] ) {
	$link_class[] = Helper::get_has_class( 'text-color', $attributes['textColor'], $attributes['customTextColor'] );
}
if ( $attributes['textColor'] ) {
	$link_class[] = Helper::get_text_color_class( $attributes['textColor'] );
}
if ( $attributes['customTextColor'] ) {
	$link_style[] = Helper::get_text_color_style( $attributes['customTextColor'] );
}
if ( $attributes['backgroundColor'] || $attributes['customBackgroundColor'] ) {
	$link_class[] = Helper::get_has_class( 'background', $attributes['backgroundColor'], $attributes['customBackgroundColor'] );
}
if ( $attributes['backgroundColor'] ) {
	$link_class[] = Helper::get_background_color_class( $attributes['backgroundColor'] );
}
if ( $attributes['customBackgroundColor'] ) {
	$link_style[] = Helper::get_background_color_style( $attributes['customBackgroundColor'] );
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
$icon_left  = '';
$icon_right = '';
$icon_class = [ 'ystdb-button__icon' ];
if ( $attributes['iconLeft'] ) {
	$icon_class_left = array_merge(
		$icon_class,
		[
			'ystdb-button__icon--left',
			$attributes['iconLeft'],
			$attributes['iconSizeLeft'] ? $attributes['iconSizeLeft'] : '',
		]
	);
	$icon_left       = '<i class="' . esc_attr( implode( ' ', $icon_class_left ) ) . '"></i>';
}
if ( $attributes['iconRight'] ) {
	$icon_class_right = array_merge(
		$icon_class,
		[
			'ystdb-button__icon--right',
			$attributes['iconRight'],
			$attributes['iconSizeRight'] ? $attributes['iconSizeRight'] : '',
		]
	);
	$icon_right       = '<i class="' . esc_attr( implode( ' ', $icon_class_right ) ) . '"></i>';
}

/**
 * スタイル作成
 */
$wrap_style = Helper::get_style_attr( $wrap_style );
$link_style = Helper::get_style_attr( $link_style );

?>
<div class="<?php echo Helper::get_class_names( $wrap_class ); ?>"<?php echo $wrap_style; ?>>
	<span class="<?php echo Helper::get_class_names( $link_class ); ?>"<?php echo $link_style; ?>>
		<span class="ystdb-button__link-content">
		<?php
		echo $icon_left;
		echo $attributes['content'];
		echo $icon_right;
		?>
		</span>
	</span>
</div>
