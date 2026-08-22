import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { getColorClassName, getFontSizeClass } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { getCustomSpacingValues } from '@aktk/block-components/components/custom-spacing-select/util';
import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';

/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';

/**
 * Deprecated dependencies.
 */
import type { LegacyAttributes } from './types';

const positions = [ 'top', 'right', 'bottom', 'left' ] as const;

/**
 * v3.25.3時点のメインテキスト用クラスを生成.
 *
 * @param attributes 旧ブロック属性.
 * @return クラス名.
 */
export function getMainTextClasses( attributes: LegacyAttributes ) {
	const { clearStyle, fontSize, hasSubText, textAlign, textColor } =
		attributes;
	const fontSizeClass = getFontSizeClass( fontSize || '' );
	const textColorClass = getColorClassName( 'color', textColor || '' );

	return classnames( 'ystdb-custom-heading', {
		[ fontSizeClass ]: !! fontSize,
		[ textColorClass ]: !! textColor,
		'is-clear-style': clearStyle,
		[ `has-text-align-${ textAlign }` ]: !! textAlign && ! hasSubText,
	} );
}

/**
 * v3.25.3時点のメインテキスト用スタイルを生成.
 *
 * @param attributes 旧ブロック属性.
 * @return インラインスタイル.
 */
export function getMainTextStyles( attributes: LegacyAttributes ) {
	const {
		fontSize,
		customFontSize,
		responsiveFontSize,
		margin,
		responsiveMargin,
		padding,
		responsivePadding,
		customTextColor,
		fontStyle,
		fontWeight,
		letterSpacing,
		lineHeight,
		fontFamily,
	} = attributes;
	let hasCustomFontSize = ! fontSize && !! customFontSize;
	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
	const responsiveStyles = types.reduce(
		( styles, type ) => {
			const responsiveSize = responsiveFontSize?.[ type ];

			// プリセットがない場合だけ旧レスポンシブ値を出力する.
			if ( responsiveSize && ! fontSize ) {
				styles[
					getResponsiveCustomPropName( 'heading--font-size', type )
				] = responsiveSize;
				hasCustomFontSize = false;
			}

			const responsiveMarginValue = responsiveMargin?.[ type ];
			const responsivePaddingValue = responsivePadding?.[ type ];

			positions.forEach( ( position ) => {
				const marginValue = responsiveMarginValue?.[ position ];

				// 設定済みの外側余白だけ旧カスタムプロパティへ変換する.
				if ( marginValue ) {
					styles[
						getResponsiveCustomPropName(
							`custom-heading--margin-${ position }`,
							type
						)
					] = presetTokenToCssVar( marginValue ) || marginValue;
				}

				const paddingValue = responsivePaddingValue?.[ position ];

				// 設定済みの内側余白だけ旧カスタムプロパティへ変換する.
				if ( paddingValue ) {
					styles[
						getResponsiveCustomPropName(
							`custom-heading--padding-${ position }`,
							type
						)
					] = presetTokenToCssVar( paddingValue ) || paddingValue;
				}
			} );

			return styles;
		},
		{} as Record< string, string >
	);

	return {
		fontSize: hasCustomFontSize ? customFontSize : undefined,
		color: customTextColor || undefined,
		fontStyle: fontStyle || undefined,
		fontWeight: fontWeight || undefined,
		letterSpacing: letterSpacing || undefined,
		lineHeight,
		fontFamily,
		...getCustomSpacingValues( margin, 'margin' ),
		...getCustomSpacingValues( padding, 'padding' ),
		...responsiveStyles,
	};
}
