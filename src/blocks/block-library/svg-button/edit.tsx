import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	RichText,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import { BlockControls } from './block-controls';
import { InspectorControls } from './inspector-controls';
import { SvgIcon } from '@aktk/blocks/components/svg-icon';
import { BUTTON_NEW_TAB_REL } from '@aktk/blocks/config';
import {
	getDeprecatedFontResponsiveClass,
	getDeprecatedFontResponsiveStyle,
} from '@aktk/blocks/deprecated/components/responsive-font-size';
import {
	getDeprecatedPaddingResponsiveClass,
	getDeprecatedPaddingResponsiveStyle,
} from '@aktk/blocks/deprecated/components/responsive-number-control';
import URLInput from '@aktk/blocks/components/url-input';

// @ts-ignore
function svgButton(props) {
	const {
		textColor,
		backgroundColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		className,
	} = props;

	const {
		borderRadius,
		text,
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

	const wrapClasses = classnames(className, 'wp-block-button', {
		[`has-text-align-${align}`]: align,
		[fontSize.class]: fontSize.class && !isFontSizeResponsive,
		...getDeprecatedFontResponsiveClass(
			isFontSizeResponsive,
			fontSizeDesktop,
			fontSizeTablet,
			fontSizeMobile
		),
	});
	const wrapStyles = {
		fontSize:
			fontSize.size && !isFontSizeResponsive ? fontSize.size : undefined,
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
			[textColor.class]: textColor.class,
			'has-text-color': textColor.class,
			[backgroundColor.class]: backgroundColor.class,
			'has-background': backgroundColor.class,
			'is-block':
				buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile,
			'is-block--desktop': buttonBlockDesktop,
			'is-block--tablet': buttonBlockTablet,
			'is-block--mobile': buttonBlockMobile,
			'is-vertical-padding-responsive': isPaddingVerticalResponsive,
			'is-horizontal-padding-responsive': isPaddingHorizontalResponsive,
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
		color: textColor.color,
		backgroundColor: backgroundColor.color,
		borderRadius,
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

	const blockProps = useBlockProps({});

	return (
		<>
			<BlockControls {...props} />
			<InspectorControls {...props} />
			<div {...blockProps}>
				<div className={wrapClasses} style={wrapStyles}>
					<span className={linkClasses} style={linkStyles}>
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
									<SvgIcon name={iconLeft} />
								</span>
							)}
							<RichText
								tagName={'span'}
								placeholder={__('Add text…')}
								value={text}
								onChange={(value) =>
									setAttributes({ text: value })
								}
								// @ts-ignore
								withoutInteractiveFormatting
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
									<SvgIcon name={iconRight} />
								</span>
							)}
						</span>
					</span>
				</div>

				{!!isSelected && (
					<div className={'p-3'}>
						<URLInput
							label={__('リンク', 'ystandard-blocks')}
							value={url}
							onChange={(value) => setAttributes({ url: value })}
							disableSuggestions={!isSelected}
						/>

						<ToggleControl
							label={__('新しいタブで開く', 'ystandard-blocks')}
							onChange={(value) => {
								const newLinkTarget = value
									? '_blank'
									: undefined;
								let updatedRel = rel;
								if (newLinkTarget && !rel) {
									updatedRel = BUTTON_NEW_TAB_REL;
								} else if (
									!newLinkTarget &&
									rel === BUTTON_NEW_TAB_REL
								) {
									updatedRel = undefined;
								}
								setAttributes({
									linkTarget: newLinkTarget,
									rel: updatedRel,
								});
							}}
							checked={linkTarget === '_blank'}
						/>
					</div>
				)}
			</div>
		</>
	);
}

// @ts-ignore
export default compose([
	withColors('backgroundColor', { textColor: 'color' }),
	withFontSizes('fontSize'),
])(svgButton);
