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
	const { className, align } = attributes;
	return classnames( 'ystdb-icon', className, {
		[ `has-text-align-${ align }` ]: align,
	} );
}

export function getWrapClasses( attributes: Attributes ) {
	const {
		textColor,
		customTextColor,
		fontSize,
		iconSize,
		backgroundColor,
		customBackgroundColor,
	} = attributes;
	const textColorClass = getColorClassName( 'color', textColor ) || '';

	return classnames( 'ystdb-icon__wrap', {
		[ textColorClass ]: !! textColor,
		[ getFontSizeClass( fontSize || '' ) ]: fontSize,
		[ `is-size--${ iconSize }` ]: iconSize,
		...getBlockStyleClasses( {
			textColor: textColor || customTextColor,
			backgroundColor: backgroundColor || customBackgroundColor,
		} ),
	} );
}

export function getWrapStyles( attributes: Attributes ) {
	const { customTextColor, customFontSize, responsiveFontSize } = attributes;

	// レスポンシブ指定のあるスタイルを生成.
	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
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
			return acc;
		},
		{} as Record< string, string >
	);

	return {
		color: customTextColor || undefined,
		fontSize: customFontSize || undefined,
		...responsiveStyles,
	};
}
