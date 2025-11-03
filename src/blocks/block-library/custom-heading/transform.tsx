/**
 * WordPress dependencies.
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';

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
					level: attributes.level,
					textAlign: attributes.textAlign,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					customFontSize: attributes.customFontSize,
					fontWeight: attributes?.style?.typography?.fontWeight,
					fontStyle: attributes?.style?.typography?.fontStyle,
					letterSpacing: attributes?.style?.typography?.letterSpacing,
					lineHeight: attributes?.style?.typography?.lineHeight,
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
					level: attributes.level,
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
					level: attributes.level,
					textAlign: attributes.textAlign,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					customFontSize: attributes.customFontSize,
				} );
			},
		},
	],
};
