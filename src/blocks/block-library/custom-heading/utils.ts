import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { getFontSizeClass, getColorClassName } from '@wordpress/block-editor';

/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
/**
 * Block dependencies.
 */
import type { Attributes } from './types';

export function getHeadingClasses( attributes: Attributes ) {
	const { clearStyle, fontSize, textAlign, textColor } = attributes;

	const fontSizeClass = getFontSizeClass( fontSize || '' );
	const textColorClass = getColorClassName( 'color', textColor || '' );

	return classnames( 'ystdb-custom-heading', {
		[ fontSizeClass ]: !! fontSize,
		[ textColorClass ]: !! textColor,
		'is-clear-style': clearStyle,
		[ `has-text-align-${ textAlign }` ]: !! textAlign,
	} );
}

export function getHeadingStyles( attributes: Attributes ) {
	const {
		fontSize,
		customFontSize,
		responsiveFontSize,
		customTextColor,
		fontStyle,
		fontWeight,
		letterSpacing,
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
		...responsiveStyles,
	};
}
