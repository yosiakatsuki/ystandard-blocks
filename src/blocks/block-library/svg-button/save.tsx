import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import {
	RichText,
	getColorClassName,
	getFontSizeClass,
	useBlockProps,
} from '@wordpress/block-editor';
/**
 * Plugin dependencies.
 */
import {
	getDeprecatedFontResponsiveClass,
	getDeprecatedFontResponsiveStyle,
} from '@aktk/blocks/deprecated/components/responsive-font-size';
import {
	getDeprecatedPaddingResponsiveClass,
	getDeprecatedPaddingResponsiveStyle,
} from '@aktk/blocks/deprecated/components/responsive-number-control';
import { SvgIcon } from '@aktk/block-components/components/svg-icon';
import getDeprecatedDataProperty from '@aktk/blocks/deprecated/utils/responsive';

// @ts-ignore
export default function save({ attributes }) {
	const {
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
		backgroundColor,
		customBackgroundColor,
		text,
		borderRadius,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		isFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
		align,
		url,
		rel,
		linkTarget,
		isPaddingVerticalResponsive,
		paddingVerticalDesktop,
		paddingVerticalTablet,
		paddingVerticalMobile,
		isPaddingHorizontalResponsive,
		paddingHorizontalDesktop,
		paddingHorizontalTablet,
		paddingHorizontalMobile,
		buttonBlockDesktop,
		buttonBlockTablet,
		buttonBlockMobile,
		maxWidth,
		maxUnit,
		animationType,
		animationInterval,
	} = attributes;

	const textClass = getColorClassName('color', textColor);
	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const fontSizeClass = getFontSizeClass(fontSize);

	const wrapClasses = classnames('wp-block-button', {
		[`has-text-align-${align}`]: align,
		[fontSizeClass]: fontSizeClass && !isFontSizeResponsive,
		...getDeprecatedFontResponsiveClass(
			isFontSizeResponsive,
			fontSizeDesktop,
			fontSizeTablet,
			fontSizeMobile
		),
	});
	const wrapStyles = {
		fontSize:
			!fontSizeClass && customFontSize && !isFontSizeResponsive
				? customFontSize
				: undefined,
		...getDeprecatedFontResponsiveStyle({
			isResponsive: isFontSizeResponsive,
			desktop: fontSizeDesktop,
			tablet: fontSizeTablet,
			mobile: fontSizeMobile,
		}),
	};

	const linkClasses = classnames(
		'wp-block-button__link',
		'ystdb-button__link',
		{
			[textClass]: textClass,
			'has-text-color': textColor || customTextColor,
			[backgroundClass]: backgroundClass,
			'has-background': backgroundColor || customBackgroundColor,
			'no-border-radius': borderRadius === 0,
			'is-block':
				buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile,
			'is-block--desktop': buttonBlockDesktop,
			'is-block--tablet': buttonBlockTablet,
			'is-block--mobile': buttonBlockMobile,
			'has-animation': animationType && 'none' !== animationType,
			[`has-animation--${animationType}`]: 'none' !== animationType,
			...getDeprecatedPaddingResponsiveClass({
				isResponsive: isPaddingVerticalResponsive,
				desktop: paddingVerticalDesktop,
				tablet: paddingVerticalTablet,
				mobile: paddingVerticalMobile,
				prefix: 'vertical',
			}),
			...getDeprecatedPaddingResponsiveClass({
				isResponsive: isPaddingHorizontalResponsive,
				desktop: paddingHorizontalDesktop,
				tablet: paddingHorizontalTablet,
				mobile: paddingHorizontalMobile,
				prefix: 'horizontal',
			}),
		}
	);

	const linkStyles = {
		color: textClass ? undefined : customTextColor,
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		maxWidth:
			(buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile) &&
			maxWidth
				? `${maxWidth}${maxUnit}`
				: undefined,
		animationDuration:
			'none' !== animationType && animationInterval
				? `${animationInterval}s`
				: undefined,
		paddingTop:
			!isPaddingVerticalResponsive && paddingVerticalDesktop
				? paddingVerticalDesktop
				: undefined,
		paddingBottom:
			!isPaddingVerticalResponsive && paddingVerticalDesktop
				? paddingVerticalDesktop
				: undefined,
		paddingRight:
			!isPaddingHorizontalResponsive && paddingHorizontalDesktop
				? paddingHorizontalDesktop
				: undefined,
		paddingLeft:
			!isPaddingHorizontalResponsive && paddingHorizontalDesktop
				? paddingHorizontalDesktop
				: undefined,
		...getDeprecatedPaddingResponsiveStyle({
			isResponsive: isPaddingVerticalResponsive,
			desktop: paddingVerticalDesktop,
			tablet: paddingVerticalTablet,
			mobile: paddingVerticalMobile,
			prefix: 'vertical',
		}),
		...getDeprecatedPaddingResponsiveStyle({
			isResponsive: isPaddingHorizontalResponsive,
			desktop: paddingHorizontalDesktop,
			tablet: paddingHorizontalTablet,
			mobile: paddingHorizontalMobile,
			prefix: 'horizontal',
		}),
	};

	const blockProps = useBlockProps.save({
		className: wrapClasses,
		style: wrapStyles,
	});

	return (
		<div {...blockProps}>
			<a
				href={url}
				className={linkClasses}
				style={linkStyles}
				target={linkTarget}
				rel={rel}
				{...getDeprecatedDataProperty({
					'font-size': isFontSizeResponsive
						? `${fontSizeDesktop}px`
						: undefined,
					'padding-top': isPaddingVerticalResponsive
						? `${paddingVerticalDesktop}px`
						: undefined,
					'padding-bottom': isPaddingVerticalResponsive
						? `${paddingVerticalDesktop}px`
						: undefined,
					'padding-right': isPaddingHorizontalResponsive
						? `${paddingHorizontalDesktop}px`
						: undefined,
					'padding-left': isPaddingHorizontalResponsive
						? `${paddingHorizontalDesktop}px`
						: undefined,
				})}
			>
				<span className="ystdb-button__link-content">
					{!!iconLeft && (
						<span
							className={classnames(
								'ystdb-button__icon',
								'ystdb-button__icon--left',
								{
									[iconSizeLeft]: iconSizeLeft,
								}
							)}
						>
							<SvgIcon.Content name={iconLeft} />
						</span>
					)}
					<RichText.Content
						tagName={'span'}
						value={text}
						className={'ystdb-button__text'}
					/>
					{!!iconRight && (
						<span
							className={classnames(
								'ystdb-button__icon',
								'ystdb-button__icon--right',
								{
									[iconSizeRight]: iconSizeRight,
								}
							)}
						>
							<SvgIcon.Content name={iconRight} />
						</span>
					)}
				</span>
			</a>
		</div>
	);
}
