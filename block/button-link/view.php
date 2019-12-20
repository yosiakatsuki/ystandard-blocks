<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

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
	$wrap_class[] = 'has-text-align-' . $attributes['align'];
}
if ( $attributes['customFontSize'] ) {
	$wrap_style[] = 'font-size:' . $attributes['customFontSize'] . 'px';
} elseif ( $attributes['fontSize'] ) {
	$wrap_class[] = 'has-' . $attributes['fontSize'] . '-font-size';
}

/**
 * リンク
 */
if ( $attributes['textColor'] || $attributes['customTextColor'] ) {
	$link_class[] = 'has-text-color';
}
if ( $attributes['textColor'] ) {
	$link_class[] = 'has-' . $attributes['textColor'] . '-color';
}
if ( $attributes['customTextColor'] ) {
	$link_style[] = 'color:' . $attributes['customTextColor'] . '';
}
if ( $attributes['backgroundColor'] || $attributes['customBackgroundColor'] ) {
	$link_class[] = 'has-background';
}
if ( $attributes['backgroundColor'] ) {
	$link_class[] = 'has-' . $attributes['backgroundColor'] . '-background-color';
}
if ( $attributes['customBackgroundColor'] ) {
	$link_style[] = 'background-color:' . $attributes['customBackgroundColor'];
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
$wrap_style = ! empty( $wrap_style ) ? ' style="' . esc_attr( implode( ';', $wrap_style ) ) . ';"' : '';
$link_style = ! empty( $link_style ) ? ' style="' . esc_attr( implode( ';', $link_style ) ) . ';"' : '';

?>
<div class="<?php echo esc_attr( implode( ' ', $wrap_class ) ); ?>"<?php echo $wrap_style; ?>>
	<span class="<?php echo esc_attr( implode( ' ', $link_class ) ); ?>"<?php echo $link_style; ?>>
		<span class="ystdb-button__link-content">
		<?php
		echo $icon_left;
		echo $attributes['content'];
		echo $icon_right;
		?>
		</span>
	</span>
</div>
