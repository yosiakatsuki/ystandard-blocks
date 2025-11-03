import { Bookmark } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';
/**
 * Aktk Dependencies.
 */
import { COLORS } from '@aktk/block-components/config';

/**
 * Plugin.
 */
import { CATEGORY } from '@aktk/blocks/config';
import { mergeDefaultAttributes } from '@aktk/blocks/utils';
/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';
import edit from './edit';
import save from './save';
import './style.scss';

/**
 * ブロック変換定義
 */
const transforms = {
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
				} );
			},
		},
	],
};

export function registerCustomHeadingBlock() {
	const blockAttributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);
	// @ts-ignore
	registerBlockType( metadata.name, {
		...metadata,
		...{
			icon: (
				<Bookmark
					stroke={ COLORS.iconBetaForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.beta,
			blockAttributes,
			edit,
			save,
			example: {},
			transforms,
			merge( attributes, attributesToMerge ) {
				return {
					content:
						// @ts-ignore.
						( attributes.content || '' ) +
						// @ts-ignore.
						( attributesToMerge.content || '' ),
				};
			},
		},
	} );
}
registerCustomHeadingBlock();
