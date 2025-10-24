import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies.
 */
import { getColorClassName, getFontSizeClass } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { getCustomSpacingValues } from '@aktk/block-components/components/custom-spacing-select';
import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';
import { getBorderRadiusStyles } from '@aktk/block-components/components/border-radius-control';
/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
import { getBlockStyleClasses } from '@aktk/blocks/components/block-classes';
import { getBorderStyles } from '@aktk/blocks/components/border-box-control';
/**
 * Block dependencies.
 */
import type { Attributes } from './types';

/**
 * アイコンブロックのクラスを取得
 *
 * @param attributes
 */
export function getBlockClasses( attributes: Attributes ) {
	const { align } = attributes;
	return classnames( 'ystdb-icon', {
		[ `has-text-align-${ align }` ]: align,
	} );
}

export function getWrapClasses( attributes: Attributes ) {
	const {
		url,
		textColor,
		customTextColor,
		fontSize,
		backgroundColor,
		customBackgroundColor,
	} = attributes;

	const textColorClass = getColorClassName( 'color', textColor ) || '';
	const fontSizeClass = getFontSizeClass( fontSize || '' ) || '';

	return classnames( 'ystdb-icon__wrap', {
		'ystdb-icon__link': url,
		[ textColorClass ]: !! textColor,
		[ fontSizeClass ]: !! fontSize,
		...getBlockStyleClasses( {
			textColor: textColor || customTextColor,
			backgroundColor: backgroundColor || customBackgroundColor,
		} ),
	} );
}

export function getWrapStyles( attributes: Attributes ) {
	const {
		customTextColor,
		customBackgroundColor,
		customFontSize,
		responsiveFontSize,
		padding,
		responsivePadding,
		width,
		responsiveWidth,
		height,
		responsiveHeight,
		borderRadius,
		border,
	} = attributes;

	// レスポンシブ指定のあるスタイルを生成.
	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
	const position = [ 'top', 'right', 'bottom', 'left' ] as const;
	const responsiveStyles = types.reduce(
		( acc, type ) => {
			// フォントサイズ.
			if ( responsiveFontSize ) {
				const value = responsiveFontSize[ type ];
				if ( value ) {
					const propName = getResponsiveCustomPropName(
						'icon--font-size',
						type
					);
					acc[ propName ] = value;
				}
			}
			// padding.
			const _padding = responsivePadding?.[ type ];
			position.forEach( ( pos ) => {
				const paddingValue = _padding?.[ pos ];
				if ( paddingValue ) {
					acc[
						getResponsiveCustomPropName(
							`icon--padding-${ pos }`,
							type
						)
					] = presetTokenToCssVar( paddingValue ) || paddingValue;
				}
			} );
			// width.
			const _width = responsiveWidth?.[ type ];
			if ( _width ) {
				// @ts-ignore
				acc[ getResponsiveCustomPropName( 'icon--width', type ) ] =
					_width;
			}
			// height.
			const _height = responsiveHeight?.[ type ];
			if ( _height ) {
				// @ts-ignore
				acc[ getResponsiveCustomPropName( 'icon--height', type ) ] =
					_height;
			}
			return acc;
		},
		{} as Record< string, string >
	);

	return {
		color: customTextColor || undefined,
		backgroundColor: customBackgroundColor || undefined,
		fontSize: customFontSize || undefined,
		width,
		height,
		...responsiveStyles,
		...getCustomSpacingValues( padding, 'padding' ),
		...getBorderRadiusStyles( borderRadius ),
		...getBorderStyles( border ),
	};
}
