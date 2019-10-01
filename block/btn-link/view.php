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
		'icon'                  => '',
		'align'                 => '',
		'buttonType'            => '',
		'customIcon'            => '',
		'iconPosition'          => 'right',
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
$buttonType            = $attributes['buttonType'];
$customIcon            = $attributes['customIcon'];
$iconPosition          = $attributes['iconPosition'];
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
	$margin     = 'right' === $iconPosition ? 'left' : 'right';
	$icon_style      = 'margin-' . $margin . ':.5rem;';
	$icon_html  = '<i style="' . $icon_style . '" class="ystdb-btn-link__icon ' . $icon . '"></i>';
	$icon_left  = 'left' === $iconPosition ? $icon_html : '';
	$icon_right = 'right' === $iconPosition ? $icon_html : '';
	$content    = preg_replace(
		'/(<a.+?>)(.*)?(<\/a>)/i',
		"$1${icon_left}$2${icon_right}$3",
		$content
	);
	$class[]    = '-has-icon';
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
	$class[] = 'has-' . $backgroundColor . '-background-color';
}
if ( $textColor ) {
	$class[] = 'has-' . $textColor . '-color';
}
if ( $buttonType ) {
	$class[] = '-' . $buttonType;
}
if ( ! empty( $class ) ) {
	$class = 'class="' . esc_attr( implode( ' ', $class ) ) . '"';
} else {
	$class = '';
}
/**
 * スタイル
 */
if ( $customBackgroundColor ) {
	$style[] = 'background-color:' . $customBackgroundColor . ';';
}
if ( $customTextColor ) {
	$style[] = 'color:' . $customTextColor . ';';
}
if ( ! empty( $style ) ) {
	$style = ' style="' . esc_attr( implode( '', $style ) ) . '"';
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
	<div <?php echo $class . $style; ?>>
		<?php echo $content; ?>
	</div>
</div>