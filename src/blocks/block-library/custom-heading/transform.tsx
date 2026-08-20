/**
 * WordPress dependencies.
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Aktk dependencies.
 */
import { stripUndefined } from '@aktk/block-components/utils/object';

/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';

const HEADING_LEVELS = [ 1, 2, 3, 4, 5, 6 ];

const normalizeHeadingLevel = ( level?: number ) => {
	return HEADING_LEVELS.includes( Number( level ) ) ? Number( level ) : 2;
};

const getTypographyStyle = ( attributes: any, textAlign?: string ) => {
	const typography = {
		textAlign,
		fontSize:
			! attributes.fontSize && attributes?.style?.typography?.fontSize
				? attributes.style.typography.fontSize
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

const getCustomHeadingStyle = (
	attributes: any,
	responsiveFontSize?: Record< string, string >
) => {
	return stripUndefined( {
		typography: {
			fontSize: attributes.fontSize
				? undefined
				: attributes?.style?.typography?.fontSize ??
				  attributes.customFontSize,
		},
		ystdb: {
			customHeading: {
				responsive: {
					main: {
						typography: {
							fontSize: responsiveFontSize,
						},
					},
				},
			},
		},
	} );
};

const getCoreTextAlignAttribute = ( attributes: any ) => {
	return attributes?.style?.typography?.textAlign ?? attributes.textAlign;
};

const getPixelValue = ( value?: number | string ) => {
	if ( undefined === value || '' === value || 0 === value ) {
		return undefined;
	}
	if ( 'number' === typeof value ) {
		return `${ value }px`;
	}
	if ( /^\d+(\.\d+)?$/.test( value ) ) {
		return `${ value }px`;
	}

	return value;
};

const getLetterSpacingValue = ( value?: number | string ) => {
	if ( undefined === value || '' === value || 0 === value ) {
		return undefined;
	}
	if ( 'number' === typeof value ) {
		return `${ value }em`;
	}
	if ( /^\d+(\.\d+)?$/.test( value ) ) {
		return `${ value }em`;
	}

	return value;
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
					textAlign: getCoreTextAlignAttribute( attributes ),
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					style: getCustomHeadingStyle( attributes ),
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
					style: getCustomHeadingStyle( attributes ),
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
						responsiveFontSize.mobile = getPixelValue(
							attributes.fontSizeMobile
						);
					}
					if ( attributes.fontSizeTablet ) {
						responsiveFontSize.tablet = getPixelValue(
							attributes.fontSizeTablet
						);
					}
					if ( attributes.fontSizeDesktop ) {
						responsiveFontSize.desktop = getPixelValue(
							attributes.fontSizeDesktop
						);
					}
				}

				return createBlock( metadata.name, {
					content: attributes.content,
					level: normalizeHeadingLevel( attributes.level ),
					textAlign: attributes.align, // align -> textAlign
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					style: getCustomHeadingStyle(
						attributes,
						Object.keys( responsiveFontSize ).length > 0
							? responsiveFontSize
							: undefined
					),
					fontWeight: attributes.fontWeight,
					letterSpacing: getLetterSpacingValue(
						attributes.letterSpacing
					),
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
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					fontFamily: attributes.fontFamily,
					style: getTypographyStyle(
						attributes,
						attributes.textAlign
					),
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
