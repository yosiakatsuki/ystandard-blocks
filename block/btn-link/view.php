<?php
/**
 * Ystandard_Blocks
 *
 * @package yStandard_blocks
 * @author  yosiakatsuki
 * @license GPL-2.0+
 */

$attributes            = wp_parse_args(
	$attributes,
	[
		'content'               => '',
		'backgroundColor'       => '',
		'textColor'             => '',
		'customBackgroundColor' => '',
		'customTextColor'       => '',
		'className'             => '',
	]
);
$content               = $attributes['content'];
$backgroundColor       = $attributes['backgroundColor'];
$textColor             = $attributes['textColor'];
$customBackgroundColor = $attributes['customBackgroundColor'];
$customTextColor       = $attributes['customTextColor'];
$className             = $attributes['className'];
$icon                  = $attributes['icon'];
$align                 = $attributes['align'];
if ( ! $content ) {
	return;
}
$wrapClass = [
	'wp-block-button'
];
$class     = [ 'ystdb-btn-link' ];
$style     = [];
/**
 * アイコン
 */
if ( $icon ) {
	$content .= sprintf( '<i class="ystdb-btn-link__icon %s"></i>', $icon );
	$class[] = '-has-icon';
}
/**
 * クラス
 */
if ( $backgroundColor || $customBackgroundColor ) {
	$class[] = '-has-bg-color';
} else {
	$style[] = 'background-color:#222;border-color:#222;';
}
if ( $textColor || $customTextColor ) {
	$class[] = '-has-text-color';
} else {
	$style[] = 'color:#fff;';
}
if ( $backgroundColor ) {
	$class[] = sprintf( 'has-%s-background-color', $backgroundColor );
}
if ( $textColor ) {
	$class[] = sprintf( 'has-%s-color', $textColor );
}
if ( ! empty( $class ) ) {
	$class = sprintf( 'class="%s"', esc_attr( implode( ' ', $class ) ) );
} else {
	$class = '';
}
/**
 * スタイル
 */
if ( $customBackgroundColor ) {
	$style[] = sprintf( 'background-color:%s;', $customBackgroundColor );
}
if ( $customTextColor ) {
	$style[] = sprintf( 'color:%s;', $customTextColor );
}
if ( ! empty( $style ) ) {
	$style = sprintf( ' style="%s"', esc_attr( implode( '', $style ) ) );
} else {
	$style = '';
}

/**
 * ラッパークラス
 */
if ( $className ) {
	$wrapClass[] = $className;
}
if ( $align ) {
	$wrapClass[] = 'has-text-align-' . $align;
}
?>
<div class="<?php echo esc_attr( implode( ' ', $wrapClass ) ); ?>">
	<?php
	printf(
		'<div %s%s>%s</div>',
		$class,
		$style,
		$content
	);
	?>
</div>