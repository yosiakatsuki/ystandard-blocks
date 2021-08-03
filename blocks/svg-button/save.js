import classnames from 'classnames';
import SVGIcon from '@ystdb/components/svg-icon';

import {
	RichText,
	getColorClassName,
	getFontSizeClass,
} from '@wordpress/block-editor';
import {
	getPaddingResponsiveClass,
	getPaddingResponsiveStyle,
} from '@ystdb/components/responsive-number-control/functions';
import {
	getFontResponsiveClass,
	getFontResponsiveStyle,
} from '@ystdb/components/responsive-font-size/functions';
import getDataProperty from '@ystdb/util/_getResponsivPropertye';

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
		...getFontResponsiveClass(
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
		...getFontResponsiveStyle({
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
			...getPaddingResponsiveClass({
				isResponsive: isPaddingVerticalResponsive,
				desktop: paddingVerticalDesktop,
				tablet: paddingVerticalTablet,
				mobile: paddingVerticalMobile,
				prefix: 'vertical',
			}),
			...getPaddingResponsiveClass({
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
		...getPaddingResponsiveStyle({
			isResponsive: isPaddingVerticalResponsive,
			desktop: paddingVerticalDesktop,
			tablet: paddingVerticalTablet,
			mobile: paddingVerticalMobile,
			prefix: 'vertical',
		}),
		...getPaddingResponsiveStyle({
			isResponsive: isPaddingHorizontalResponsive,
			desktop: paddingHorizontalDesktop,
			tablet: paddingHorizontalTablet,
			mobile: paddingHorizontalMobile,
			prefix: 'horizontal',
		}),
	};

	return (
		<div className={wrapClasses} style={wrapStyles}>
			<a
				href={url}
				className={linkClasses}
				style={linkStyles}
				target={linkTarget}
				rel={rel}
				{...getDataProperty({
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
							<SVGIcon name={iconLeft} />
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
							<SVGIcon name={iconRight} />
						</span>
					)}
				</span>
			</a>
		</div>
	);
}
