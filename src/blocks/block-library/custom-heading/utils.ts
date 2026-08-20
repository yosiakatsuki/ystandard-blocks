import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { getColorClassName } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { getCustomSpacingValues } from '@aktk/block-components/components/custom-spacing-select/util';
import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import { stripUndefined } from '@aktk/block-components/utils/object';
import {
	getResponsiveCustomProperties,
	presetTokenToCssVar,
} from '@aktk/block-components/utils/style-engine';

/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
/**
 * Block dependencies.
 */
import type { Attributes } from './types';

const positions = [ 'top', 'right', 'bottom', 'left' ] as const;

/**
 * メインテキストのクラスを生成.
 * @param attributes
 * @return
 */
export function getMainTextClasses( attributes: Attributes ) {
	const { clearStyle, hasSubText, textAlign, textColor } = attributes;

	const textColorClass = getColorClassName( 'color', textColor || '' );

	return classnames( 'ystdb-custom-heading', {
		[ textColorClass ]: !! textColor,
		'is-clear-style': clearStyle,
		[ `has-text-align-${ textAlign }` ]: !! textAlign && ! hasSubText,
	} );
}

/**
 * メインテキストのレスポンシブフォントサイズを取得.
 *
 * @param attributes ブロック属性.
 * @return レスポンシブフォントサイズ.
 */
export function getMainResponsiveFontSize( attributes: Attributes ) {
	return attributes.style?.ystdb?.customHeading?.responsive?.main?.typography
		?.fontSize;
}

/**
 * メインテキストのレスポンシブフォントサイズを更新.
 *
 * @param style    コアのstyle属性.
 * @param fontSize レスポンシブフォントサイズ.
 * @return 更新後のstyle属性.
 */
export function updateMainResponsiveFontSize(
	style: Attributes[ 'style' ],
	fontSize?: ResponsiveFontSize
) {
	return stripUndefined( {
		...style,
		ystdb: {
			...style?.ystdb,
			customHeading: {
				...style?.ystdb?.customHeading,
				responsive: {
					...style?.ystdb?.customHeading?.responsive,
					main: {
						...style?.ystdb?.customHeading?.responsive?.main,
						typography: {
							...style?.ystdb?.customHeading?.responsive?.main
								?.typography,
							fontSize,
						},
					},
				},
			},
		},
	} ) as Attributes[ 'style' ];
}

/**
 * メインテキストのスタイルを生成.
 * @param attributes
 * @return
 */
export function getMainTextStyles( attributes: Attributes ) {
	const {
		margin,
		responsiveMargin,
		padding,
		responsivePadding,
		customTextColor,
		fontStyle,
		fontWeight,
		letterSpacing,
		lineHeight,
		fontFamily,
	} = attributes;
	const responsiveFontSize = getMainResponsiveFontSize( attributes );
	const responsiveFontSizeStyles = getResponsiveCustomProperties(
		'heading--font-size',
		responsiveFontSize
	);

	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
	// レスポンシブ指定のあるスタイルを生成.
	const responsiveStyles = types.reduce(
		( acc, type ) => {
			// margin, padding.
			const _margin = responsiveMargin?.[ type ];
			const _padding = responsivePadding?.[ type ];

			positions.forEach( ( position ) => {
				// margin.
				const marginValue = _margin?.[ position ];
				if ( marginValue ) {
					acc[
						getResponsiveCustomPropName(
							`custom-heading--margin-${ position }`,
							type
						)
					] = presetTokenToCssVar( marginValue ) || marginValue;
				}

				// padding.
				const paddingValue = _padding?.[ position ];
				if ( paddingValue ) {
					acc[
						getResponsiveCustomPropName(
							`custom-heading--padding-${ position }`,
							type
						)
					] = presetTokenToCssVar( paddingValue ) || paddingValue;
				}
			} );
			return acc;
		},
		{} as Record< string, string >
	);

	return {
		color: customTextColor || undefined,
		fontStyle: fontStyle || undefined,
		fontWeight: fontWeight || undefined,
		letterSpacing: letterSpacing || undefined,
		lineHeight,
		fontFamily,
		...getCustomSpacingValues( margin, 'margin' ),
		...getCustomSpacingValues( padding, 'padding' ),
		...responsiveFontSizeStyles,
		...responsiveStyles,
	};
}
