import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies.
 */
import { getColorClassName } from '@wordpress/block-editor';

/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
import { getBlockStyleClasses } from '@aktk/blocks/components/block-classes';
import { getBorderRadiusStyles } from '@aktk/blocks/components/border-radius-control';
import { getBorderStyles } from '@aktk/blocks/components/border-box-control';

/**
 * Block dependencies.
 */
import type { Attributes } from './types';

export function getWrapClasses(attributes: Attributes) {
	const className = attributes?.className || '';
	return classnames('ystdb-custom-button', {
		[`ystdb-block-${attributes?.clientId}`]: attributes?.clientId,
		[className]: attributes?.className,
		[`is-type--${attributes?.buttonType}`]: attributes?.buttonType,
	});
}

type LinkClasses = Attributes & {
	gradientClass?: string;
};

export function getLinkClasses(attributes: LinkClasses) {
	const {
		className = '',
		textColor = '',
		fontSize = '',
		backgroundColor = '',
		gradientClass = '',
	} = attributes;

	const textColorClass = getColorClassName('color', textColor);
	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	return classnames('ystdb-custom-button__link', {
		[className]: !!className,
		[textColorClass]: !!textColor,
		[`${fontSize}`]: !!fontSize,
		[backgroundColorClass]: !!backgroundColor,
		[`${gradientClass}`]: !!gradientClass,
		...getBlockStyleClasses({
			textColor: textColor || attributes?.customTextColor,
			backgroundColor:
				backgroundColor || attributes?.customBackgroundColor,
			gradients: gradientClass || attributes?.customGradient,
		}),
	});
}

export function getLinkStyles(attributes: Attributes) {
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
	} = attributes;

	const borderRadiusStyles = getBorderRadiusStyles(borderRadius);

	const types = ['desktop', 'tablet', 'mobile'] as const;
	const position = ['top', 'right', 'bottom', 'left'] as const;

	// レスポンシブ指定のあるスタイルを生成.
	const responsiveStyles = types.reduce(
		(acc, type) => {
			// font-size.
			const _fontSize = responsiveFontSize?.[type];
			if (_fontSize) {
				acc[getResponsiveCustomPropName('button--font-size', type)] =
					_fontSize;
			}
			// padding.
			const _padding = responsivePadding?.[type];
			position.forEach((pos) => {
				const paddingValue = _padding?.[pos];
				if (paddingValue) {
					acc[
						getResponsiveCustomPropName(
							`button--padding-${pos}`,
							type
						)
					] = paddingValue;
				}
			});

			return acc;
		},
		{} as Record<string, string>
	);

	return {
		[`--ystdb-button-justify`]: iconPosition,
		[getResponsiveCustomPropName('button--font-size', 'desktop')]:
			responsiveFontSize?.desktop,
		color: customTextColor,
		fontSize,
		background: customGradient,
		backgroundColor: customBackgroundColor,
		...borderRadiusStyles,
		...getBorderStyles(border),
		...responsiveStyles,
	};
}
