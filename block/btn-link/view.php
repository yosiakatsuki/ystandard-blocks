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
		'buttonSize'            => '',
		'fontSize'              => '',
		'customFontSize'        => '',
	]
);
if ( ! $attributes['content'] ) {
	return;
}
if ( 'custom' === $attributes['icon'] ) {
	if ( ! empty( $attributes['customIcon'] ) ) {
		$attributes['icon'] = $attributes['customIcon'];
	} else {
		$attributes['icon'] = '';
	}
}
$wrapClass = [
	'wp-block-button'
];
$class     = [ 'ystdb-btn-link', 'wp-block-button__link' ];
$style     = [];
/**
 * アイコン
 */
if ( $attributes['icon'] ) {
	$margin                = 'right' === $attributes['iconPosition'] ? 'left' : 'right';
	$icon_style            = 'margin-' . $margin . ':.5rem;';
	$icon_html             = '<i style="' . $icon_style . '" class="ystdb-btn-link__icon ' . $attributes['icon'] . '"></i>';
	$icon_left             = 'left' === $attributes['iconPosition'] ? $icon_html : '';
	$icon_right            = 'right' === $attributes['iconPosition'] ? $icon_html : '';
	$attributes['content'] = preg_replace(
		'/(<a.+?>)(.*)?(<\/a>)/i',
		"$1${icon_left}$2${icon_right}$3",
		$attributes['content']
	);
	$class[]               = '-has-icon';
}
/**
 * クラス
 */
/**
 * 色関連
 */
if ( $attributes['backgroundColor'] || $attributes['customBackgroundColor'] ) {
	$class[] = '-has-bg-color';
} else {
	$style[] = 'background-color:#222;border-color:#222;';
}
if ( $attributes['textColor'] || $attributes['customTextColor'] ) {
	$class[] = '-has-text-color';
} else {
	$style[] = 'color:#fff;';
}
if ( $attributes['backgroundColor'] ) {
	$class[] = 'has-' . $attributes['backgroundColor'] . '-background-color';
}
if ( $attributes['textColor'] ) {
	$class[] = 'has-' . $attributes['textColor'] . '-color';
}
/**
 * フォントサイズ
 */
if ( $attributes['customFontSize'] ) {
	$style[] = 'font-size:' . $attributes['customFontSize'] . 'px;';
} elseif ( $attributes['fontSize'] ) {
	$class[] = 'has-' . $attributes['fontSize'] . '-font-size';
}
if ( ! empty( $class ) ) {
	$class = 'class="' . esc_attr( implode( ' ', $class ) ) . '"';
} else {
	$class = '';
}
/**
 * スタイル
 */
if ( $attributes['customBackgroundColor'] ) {
	$style[] = 'background-color:' . $attributes['customBackgroundColor'] . ';';
}
if ( $attributes['customTextColor'] ) {
	$style[] = 'color:' . $attributes['customTextColor'] . ';';
}
if ( ! empty( $style ) ) {
	$style = ' style="' . esc_attr( implode( '', $style ) ) . '"';
} else {
	$style = '';
}

/**
 * ラッパークラス
 */
if ( $attributes['className'] ) {
	$wrapClass[] = $attributes['className'];
}
if ( $attributes['buttonType'] ) {
	$wrapClass[] = '-' . $attributes['buttonType'];
}
if ( $attributes['buttonSize'] ) {
	$wrapClass[] = '-' . $attributes['buttonSize'];
}
if ( $attributes['align'] ) {
	$wrapClass[] = 'has-text-align-' . $attributes['align'];
}
?>
<div class="<?php echo esc_attr( implode( ' ', $wrapClass ) ); ?>">
	<div <?php echo $class . $style; ?>>
		<?php echo $attributes['content']; ?>
	</div>
</div>