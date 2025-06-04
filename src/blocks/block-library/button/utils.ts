import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies.
 */
import { getColorClassName } from '@wordpress/block-editor';

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

export function getWrapClasses( attributes: Attributes ) {
	const className = attributes?.className || '';
	return classnames( 'ystdb-custom-button', {
		[ `ystdb-block-${ attributes?.clientId }` ]: attributes?.clientId,
		[ className ]: attributes?.className,
		[ `is-type--${ attributes?.buttonType }` ]: attributes?.buttonType,
	} );
}

export function getWrapStyles( attributes: Attributes ) {
	const { align } = attributes;
	return {
		'justify-content': align,
	};
}

type LinkClasses = Attributes & {
	gradientClass?: string;
};

export function getLinkClasses( attributes: LinkClasses ) {
	const {
		className = '',
		textColor = '',
		fontSize = '',
		backgroundColor = '',
		gradientClass = '',
		border,
		animation,
	} = attributes;

	const textColorClass = getColorClassName( 'color', textColor );
	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const hasAnimation = !! animation?.type && 'none' !== animation?.type;

	return classnames( 'ystdb-custom-button__link', {
		[ className ]: !! className,
		[ textColorClass ]: !! textColor,
		[ `${ fontSize }` ]: !! fontSize,
		[ backgroundColorClass ]: !! backgroundColor,
		[ `${ gradientClass }` ]: !! gradientClass,
		'has-animation': hasAnimation,
		[ `has-animation--${ animation?.type }` ]: hasAnimation,
		// @ts-ignore
		'has-border-color': !! border?.color,
		...getBlockStyleClasses( {
			textColor: textColor || attributes?.customTextColor,
			backgroundColor:
				backgroundColor || attributes?.customBackgroundColor,
			gradients: gradientClass || attributes?.customGradient,
		} ),
	} );
}

export function getLinkStyles( attributes: Attributes ) {
	const {
		iconPosition,
		customTextColor,
		fontSize,
		customBackgroundColor,
		customGradient,
		borderRadius,
		border,
		responsiveFontSize,
		responsivePadding,
		width,
		responsiveWidth,
		padding,
		animation,
	} = attributes;

	const borderRadiusStyles = getBorderRadiusStyles( borderRadius );

	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
	const position = [ 'top', 'right', 'bottom', 'left' ] as const;

	// レスポンシブ指定のあるスタイルを生成.
	const responsiveStyles = types.reduce(
		( acc, type ) => {
			// font-size.
			const _fontSize = responsiveFontSize?.[ type ];
			if ( _fontSize ) {
				acc[
					getResponsiveCustomPropName( 'button--font-size', type )
				] = _fontSize;
			}
			// padding.
			const _padding = responsivePadding?.[ type ];
			position.forEach( ( pos ) => {
				const paddingValue = _padding?.[ pos ];
				if ( paddingValue ) {
					acc[
						getResponsiveCustomPropName(
							`button--padding-${ pos }`,
							type
						)
					] = presetTokenToCssVar( paddingValue ) || paddingValue;
				}
			} );
			// width.
			const _width = responsiveWidth?.[ type ];
			if ( _width ) {
				// @ts-expect-error
				acc[ getResponsiveCustomPropName( 'button--width', type ) ] =
					_width;
			}

			return acc;
		},
		{} as Record< string, string >
	);

	// アニメーションのスタイル.
	const hasAnimation =
		!! animation?.type &&
		'none' !== animation?.type &&
		!! animation?.interval;
	const animationDuration = hasAnimation
		? `${ animation.interval }s`
		: undefined;

	return {
		[ `--ystdb--button--justify` ]: iconPosition,
		[ getResponsiveCustomPropName( 'button--font-size', 'desktop' ) ]:
			responsiveFontSize?.desktop,
		color: customTextColor,
		width,
		fontSize,
		background: customGradient,
		backgroundColor: customBackgroundColor,
		animationDuration,
		...getCustomSpacingValues( padding, 'padding' ),
		...borderRadiusStyles,
		...getBorderStyles( border ),
		...responsiveStyles,
	};
}
