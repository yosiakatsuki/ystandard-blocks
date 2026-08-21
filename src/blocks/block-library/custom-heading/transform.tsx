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

const getTypographyStyle = (
	attributes: any,
	typographyOverrides: Record< string, unknown > = {}
) => {
	const coreStyle = { ...( attributes.style ?? {} ) };
	// 独自レスポンシブ値はコアブロックで解釈できないため引き渡さない.
	delete coreStyle.ystdb;

	return stripUndefined( {
		...coreStyle,
		typography: {
			...attributes.style?.typography,
			...typographyOverrides,
			fontSize: attributes.fontSize
				? undefined
				: attributes.style?.typography?.fontSize,
		},
	} );
};

const getCustomHeadingStyle = (
	attributes: any,
	responsiveFontSize?: Record< string, string >,
	typographyOverrides: Record< string, unknown > = {},
	colorOverrides: Record< string, unknown > = {}
) => {
	return stripUndefined( {
		...attributes.style,
		color: {
			...attributes.style?.color,
			...colorOverrides,
		},
		typography: {
			...attributes.style?.typography,
			...typographyOverrides,
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
	return (
		attributes?.style?.typography?.textAlign ??
		attributes.textAlign ??
		attributes.align
	);
};

const getColorAttributes = ( attributes: any ) => ( {
	textColor: attributes.textColor,
	backgroundColor: attributes.backgroundColor,
	gradient: attributes.gradient,
} );

const getPixelValue = ( value?: number | string ) => {
	// 未指定値と旧UIで無効扱いだった0は移行先へ持ち込まない.
	if ( undefined === value || '' === value || 0 === value ) {
		return undefined;
	}
	// 数値属性は旧UIと同じpx単位へ正規化する.
	if ( 'number' === typeof value ) {
		return `${ value }px`;
	}
	// 数字だけの文字列も旧UIと同じpx単位へ正規化する.
	if ( /^\d+(\.\d+)?$/.test( value ) ) {
		return `${ value }px`;
	}

	return value;
};

const getLetterSpacingValue = ( value?: number | string ) => {
	// 未指定値と旧UIで無効扱いだった0は移行先へ持ち込まない.
	if ( undefined === value || '' === value || 0 === value ) {
		return undefined;
	}
	// 数値属性は旧UIと同じem単位へ正規化する.
	if ( 'number' === typeof value ) {
		return `${ value }em`;
	}
	// 数字だけの文字列も旧UIと同じem単位へ正規化する.
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
					...getColorAttributes( attributes ),
					fontSize: attributes.fontSize,
					style: getCustomHeadingStyle( attributes, undefined, {
						textAlign: getCoreTextAlignAttribute( attributes ),
					} ),
					fontFamily: attributes.fontFamily,
					fitText: attributes.fitText,
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
					...getColorAttributes( attributes ),
					fontSize: attributes.fontSize,
					style: getCustomHeadingStyle( attributes, undefined, {
						textAlign: getCoreTextAlignAttribute( attributes ),
					} ),
					fontFamily: attributes.fontFamily,
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
				// 旧ブロックでレスポンシブ指定が有効な場合だけ各値を移行する.
				if ( attributes.useFontSizeResponsive ) {
					// モバイル値が保存されている場合だけ単位を補って移行する.
					if ( attributes.fontSizeMobile ) {
						responsiveFontSize.mobile = getPixelValue(
							attributes.fontSizeMobile
						);
					}
					// タブレット値が保存されている場合だけ単位を補って移行する.
					if ( attributes.fontSizeTablet ) {
						responsiveFontSize.tablet = getPixelValue(
							attributes.fontSizeTablet
						);
					}
					// デスクトップ値が保存されている場合だけ単位を補って移行する.
					if ( attributes.fontSizeDesktop ) {
						responsiveFontSize.desktop = getPixelValue(
							attributes.fontSizeDesktop
						);
					}
				}

				return createBlock( metadata.name, {
					content: attributes.content,
					level: normalizeHeadingLevel( attributes.level ),
					...getColorAttributes( attributes ),
					fontSize: attributes.fontSize,
					style: getCustomHeadingStyle(
						attributes,
						Object.keys( responsiveFontSize ).length > 0
							? responsiveFontSize
							: undefined,
						{
							textAlign: attributes.align,
							fontWeight: attributes.fontWeight,
							letterSpacing: getLetterSpacingValue(
								attributes.letterSpacing
							),
						},
						{ text: attributes.customTextColor }
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
					...getColorAttributes( attributes ),
					fontSize: attributes.fontSize,
					fontFamily: attributes.fontFamily,
					fitText: attributes.fitText,
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
					align: getCoreTextAlignAttribute( attributes ),
					...getColorAttributes( attributes ),
					fontSize: attributes.fontSize,
					fontFamily: attributes.fontFamily,
					style: getTypographyStyle( attributes, {
						textAlign: undefined,
					} ),
				} );
			},
		},
	],
};
