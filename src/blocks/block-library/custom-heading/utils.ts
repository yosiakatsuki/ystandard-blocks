import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { getFontSizeClass, getColorClassName } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { getCustomSpacingValues } from '@aktk/block-components/components/custom-spacing-select';
import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';

/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
/**
 * Block dependencies.
 */
import type { Attributes } from './types';

const positions = [ 'top', 'right', 'bottom', 'left' ] as const;

/**
 * メインテキストのクラスを生成.
 * @param attributes
 * @return
 */
export function getMainTextClasses( attributes: Attributes ) {
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
 * メインテキストのスタイルを生成.
 * @param attributes
 * @return
 */
export function getMainTextStyles( attributes: Attributes ) {
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

	// カスタムフォントサイズが有効かどうか.
	let hasCustomFontSize = ! fontSize && !! customFontSize;

	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
	// レスポンシブ指定のあるスタイルを生成.
	const responsiveStyles = types.reduce(
		( acc, type ) => {
			// font-size.
			const _fontSize = responsiveFontSize?.[ type ];
			if ( _fontSize && ! fontSize ) {
				acc[
					getResponsiveCustomPropName( 'heading--font-size', type )
				] = _fontSize;
				hasCustomFontSize = false;
			}

			// margin, padding.
			const _margin = responsiveMargin?.[ type ];
			const _padding = responsivePadding?.[ type ];

			positions.forEach( ( position ) => {
				// margin.
				const marginValue = _margin?.[ position ];
				if ( marginValue ) {
					acc[
						getResponsiveCustomPropName(
							`custom-heading--margin-${ position }`,
							type
						)
					] = presetTokenToCssVar( marginValue ) || marginValue;
				}

				// padding.
				const paddingValue = _padding?.[ position ];
				if ( paddingValue ) {
					acc[
						getResponsiveCustomPropName(
							`custom-heading--padding-${ position }`,
							type
						)
					] = presetTokenToCssVar( paddingValue ) || paddingValue;
				}
			} );
			return acc;
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
