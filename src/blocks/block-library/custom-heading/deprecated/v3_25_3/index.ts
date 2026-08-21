/**
 * Aktk dependencies.
 */
import { stripUndefined } from '@aktk/block-components/utils/object';

/**
 * Deprecated dependencies.
 */
import { attributes as legacyAttributeDefinitions } from './attributes';
import { save } from './save';
import type { LegacyAttributes } from './types';

const supports = {
	align: false,
	anchor: true,
	className: false,
	splitting: true,
} as const;

function hasResponsiveFontSize( legacyAttributes: LegacyAttributes ) {
	return Object.values( legacyAttributes.responsiveFontSize || {} ).some(
		( value ) => undefined !== value && null !== value && '' !== value
	);
}

export const deprecatedV3253 = {
	attributes: legacyAttributeDefinitions,
	supports,
	// @ts-ignore.
	migrate( legacyAttributes: LegacyAttributes ) {
		const {
			customFontSize,
			responsiveFontSize,
			customTextColor,
			textAlign,
			lineHeight,
			letterSpacing,
			fontWeight,
			fontStyle,
			fontFamily,
			margin,
			padding,
			responsiveMargin,
			responsivePadding,
			hasSubText,
			...migratedAttributes
		} = legacyAttributes;
		const hasPresetFontSize = !! legacyAttributes.fontSize;
		const hasResponsiveSize = hasResponsiveFontSize( legacyAttributes );
		const style = stripUndefined( {
			color: {
				text: customTextColor,
			},
			spacing: {
				margin,
				padding,
			},
			typography: {
				fontSize:
					! hasPresetFontSize && ! hasResponsiveSize
						? customFontSize
						: undefined,
				fontFamily,
				fontStyle,
				fontWeight,
				letterSpacing,
				lineHeight,
				textAlign: legacyAttributes.hasSubText ? undefined : textAlign,
			},
			ystdb: {
				customHeading: {
					responsive: {
						group: {
							spacing: {
								margin: responsiveMargin,
								padding: responsivePadding,
							},
						},
						main: {
							typography: {
								fontSize: ! hasPresetFontSize
									? responsiveFontSize
									: undefined,
							},
						},
					},
				},
			},
		} );

		return {
			...migratedAttributes,
			...( hasSubText ? { hasSubText: false } : {} ),
			...( style ? { style } : {} ),
		};
	},
	save,
};
