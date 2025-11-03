import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { getFontSizeClass } from '@wordpress/block-editor';
/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
/**
 * Block dependencies.
 */
import type { Attributes } from './types';

export function getHeadingClasses( attributes: Attributes ) {
	const { clearStyle, fontSize, textAlign } = attributes;

	const fontSizeClass = getFontSizeClass( fontSize || '' );

	return classnames( 'ystdb-custom-heading', {
		[ fontSizeClass ]: !! fontSize,
		'is-clear-style': clearStyle,
		[ `has-text-align-${ textAlign }` ]: !! textAlign,
	} );
}

export function getHeadingStyles( attributes: Attributes ) {
	const { fontSize, customFontSize, responsiveFontSize } = attributes;

	// カスタムフォントサイズが有効かどうか.
	let hasCustomFontSize = ! fontSize && !! customFontSize;

	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
	// レスポンシブ指定のあるスタイルを生成.
	const responsiveStyles = types.reduce(
		( acc, type ) => {
			// font-size.
			const _fontSize = responsiveFontSize?.[ type ];
			if ( _fontSize ) {
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
		...responsiveStyles,
	};
}
