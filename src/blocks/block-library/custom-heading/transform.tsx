/**
 * WordPress dependencies.
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';

const HEADING_LEVELS = [ 1, 2, 3, 4, 5, 6 ];

const normalizeHeadingLevel = ( level?: number ) => {
	return HEADING_LEVELS.includes( Number( level ) ) ? Number( level ) : 2;
};

const getTypographyStyle = ( attributes: any ) => {
	const typography = {
		fontSize:
			! attributes.fontSize && attributes.customFontSize
				? attributes.customFontSize
				: undefined,
		fontWeight: attributes.fontWeight,
		fontStyle: attributes.fontStyle,
		letterSpacing: attributes.letterSpacing,
		lineHeight: attributes.lineHeight,
	};
	const filteredTypography = Object.fromEntries(
		Object.entries( typography ).filter( ( [ , value ] ) => !! value )
	);

	return Object.keys( filteredTypography ).length > 0
		? { typography: filteredTypography }
		: undefined;
};

const getCustomHeadingTypographyAttributes = ( attributes: any ) => {
	return {
		fontWeight: attributes?.style?.typography?.fontWeight,
		fontStyle: attributes?.style?.typography?.fontStyle,
		letterSpacing: attributes?.style?.typography?.letterSpacing,
		lineHeight: attributes?.style?.typography?.lineHeight,
	};
};

const getCustomFontSizeAttribute = ( attributes: any ) => {
	if ( attributes.fontSize ) {
		return attributes.customFontSize;
	}

	return attributes.customFontSize ?? attributes?.style?.typography?.fontSize;
};

/**
 * ブロック変換定義
 */
export const transforms = {
	from: [
		// core/heading からの変換
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( attributes: any ) => {
				return createBlock( metadata.name, {
					content: attributes.content,
					level: normalizeHeadingLevel( attributes.level ),
					textAlign: attributes.textAlign,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					customFontSize: getCustomFontSizeAttribute( attributes ),
					fontFamily: attributes.fontFamily,
					...getCustomHeadingTypographyAttributes( attributes ),
				} );
			},
		},
		// core/paragraph からの変換
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( attributes: any ) => {
				return createBlock( metadata.name, {
					content: attributes.content,
					level: 2,
					textAlign: attributes.align,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					customFontSize: getCustomFontSizeAttribute( attributes ),
					fontFamily: attributes.fontFamily,
					...getCustomHeadingTypographyAttributes( attributes ),
				} );
			},
		},
		// ystdb/heading からの変換
		{
			type: 'block',
			blocks: [ 'ystdb/heading' ],
			transform: ( attributes: any ) => {
				// responsiveFontSize オブジェクトの構築
				const responsiveFontSize: any = {};
				if ( attributes.useFontSizeResponsive ) {
					if ( attributes.fontSizeMobile ) {
						responsiveFontSize.mobile = attributes.fontSizeMobile;
					}
					if ( attributes.fontSizeTablet ) {
						responsiveFontSize.tablet = attributes.fontSizeTablet;
					}
					if ( attributes.fontSizeDesktop ) {
						responsiveFontSize.desktop = attributes.fontSizeDesktop;
					}
				}

				return createBlock( metadata.name, {
					content: attributes.content,
					level: normalizeHeadingLevel( attributes.level ),
					textAlign: attributes.align, // align -> textAlign
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					customFontSize: attributes.customFontSize,
					responsiveFontSize:
						Object.keys( responsiveFontSize ).length > 0
							? responsiveFontSize
							: undefined,
					fontWeight: attributes.fontWeight,
					letterSpacing: attributes.letterSpacing
						? String( attributes.letterSpacing )
						: undefined,
					clearStyle: attributes.clearStyle,
				} );
			},
		},
	],
	to: [
		// core/heading への変換
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( attributes: any ) => {
				return createBlock( 'core/heading', {
					content: attributes.content,
					level: normalizeHeadingLevel( attributes.level ),
					textAlign: attributes.textAlign,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					fontFamily: attributes.fontFamily,
					style: getTypographyStyle( attributes ),
				} );
			},
		},
		// core/paragraph への変換
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( attributes: any ) => {
				return createBlock( 'core/paragraph', {
					content: attributes.content,
					align: attributes.textAlign,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					fontFamily: attributes.fontFamily,
					style: getTypographyStyle( attributes ),
				} );
			},
		},
	],
};
