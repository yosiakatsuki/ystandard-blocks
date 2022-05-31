import classnames from 'classnames';
import SVGIcon from '@aktk/components/svg-icon';

import {
	RichText,
	getColorClassName,
	getFontSizeClass,
} from '@wordpress/block-editor';
import {
	getPaddingResponsiveClass,
	getPaddingResponsiveStyle,
} from '@aktk/components/responsive-number-control/functions';
import {
	getFontResponsiveClass,
	getFontResponsiveStyle,
} from '@aktk/components/responsive-font-size/functions';
import getDataProperty from '@aktk/util/_getResponsivPropertye';

export const blockAttributes = {
	text: {
		type: 'string',
		source: 'html',
		selector: '.ystdb-button__text',
	},
	borderRadius: {
		type: 'number',
		default: 4,
	},
	iconLeft: {
		type: 'string',
	},
	iconSizeLeft: {
		type: 'string',
		default: '',
	},
	iconRight: {
		type: 'string',
	},
	iconSizeRight: {
		type: 'string',
		default: '',
	},
	align: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	fontSize: {
		type: 'string',
	},
	customFontSize: {
		type: 'number',
	},
	isFontSizeResponsive: {
		type: 'bool',
		default: false,
	},
	fontSizeMobile: {
		type: 'number',
	},
	fontSizeTablet: {
		type: 'number',
	},
	fontSizeDesktop: {
		type: 'number',
	},
	url: {
		type: 'string',
	},
	linkTarget: {
		type: 'string',
	},
	rel: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'rel',
	},
	paddingType: {
		type: 'string',
		default: '',
	},
	isPaddingVerticalResponsive: {
		type: 'bool',
	},
	paddingVerticalDesktop: {
		type: 'number',
	},
	paddingVerticalTablet: {
		type: 'number',
	},
	paddingVerticalMobile: {
		type: 'number',
	},
	isPaddingHorizontalResponsive: {
		type: 'bool',
	},
	paddingHorizontalDesktop: {
		type: 'number',
	},
	paddingHorizontalTablet: {
		type: 'number',
	},
	paddingHorizontalMobile: {
		type: 'number',
	},
	buttonBlockDesktop: {
		type: 'bool',
	},
	buttonBlockTablet: {
		type: 'bool',
	},
	buttonBlockMobile: {
		type: 'bool',
	},
	maxWidth: {
		type: 'number',
		default: 100,
	},
	maxUnit: {
		type: 'string',
		default: '%',
	},
	animationType: {
		type: 'string',
		default: 'none',
	},
	animationInterval: {
		type: 'number',
		default: 5,
	},
};

export const blockSupports = {
	align: false,
	className: false,
};

export const deprecated2101 = [
	{
		attributes: {
			...blockAttributes,
		},
		supports: {
			...blockSupports,
		},
		migrate( attributes ) {
			let newFontSize = attributes.customFontSize;
			if ( 'number' === typeof newFontSize ) {
				newFontSize = newFontSize.toString().replace( 'px', '' ) + 'px';
			}
			return {
				...attributes,
				customFontSize: newFontSize,
			};
		},
		save( { attributes } ) {
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

			const textClass = getColorClassName( 'color', textColor );
			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);
			const fontSizeClass = getFontSizeClass( fontSize );

			const wrapClasses = classnames( 'wp-block-button', {
				[ `has-text-align-${ align }` ]: align,
				[ fontSizeClass ]: fontSizeClass && ! isFontSizeResponsive,
				...getFontResponsiveClass(
					isFontSizeResponsive,
					fontSizeDesktop,
					fontSizeTablet,
					fontSizeMobile
				),
			} );
			const wrapStyles = {
				fontSize:
					! fontSizeClass && customFontSize && ! isFontSizeResponsive
						? customFontSize + 'px'
						: undefined,
				...getFontResponsiveStyle( {
					isResponsive: isFontSizeResponsive,
					desktop: fontSizeDesktop,
					tablet: fontSizeTablet,
					mobile: fontSizeMobile,
				} ),
			};

			const linkClasses = classnames(
				'wp-block-button__link',
				'ystdb-button__link',
				{
					[ textClass ]: textClass,
					'has-text-color': textColor || customTextColor,
					[ backgroundClass ]: backgroundClass,
					'has-background': backgroundColor || customBackgroundColor,
					'no-border-radius': borderRadius === 0,
					'is-block':
						buttonBlockDesktop ||
						buttonBlockTablet ||
						buttonBlockMobile,
					'is-block--desktop': buttonBlockDesktop,
					'is-block--tablet': buttonBlockTablet,
					'is-block--mobile': buttonBlockMobile,
					'has-animation': animationType && 'none' !== animationType,
					[ `has-animation--${ animationType }` ]:
						'none' !== animationType,
					...getPaddingResponsiveClass( {
						isResponsive: isPaddingVerticalResponsive,
						desktop: paddingVerticalDesktop,
						tablet: paddingVerticalTablet,
						mobile: paddingVerticalMobile,
						prefix: 'vertical',
					} ),
					...getPaddingResponsiveClass( {
						isResponsive: isPaddingHorizontalResponsive,
						desktop: paddingHorizontalDesktop,
						tablet: paddingHorizontalTablet,
						mobile: paddingHorizontalMobile,
						prefix: 'horizontal',
					} ),
				}
			);

			const linkStyles = {
				color: textClass ? undefined : customTextColor,
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
				borderRadius: borderRadius ? borderRadius + 'px' : undefined,
				maxWidth:
					( buttonBlockDesktop ||
						buttonBlockTablet ||
						buttonBlockMobile ) &&
					maxWidth
						? `${ maxWidth }${ maxUnit }`
						: undefined,
				animationDuration:
					'none' !== animationType && animationInterval
						? `${ animationInterval }s`
						: undefined,
				paddingTop:
					! isPaddingVerticalResponsive && paddingVerticalDesktop
						? paddingVerticalDesktop
						: undefined,
				paddingBottom:
					! isPaddingVerticalResponsive && paddingVerticalDesktop
						? paddingVerticalDesktop
						: undefined,
				paddingRight:
					! isPaddingHorizontalResponsive && paddingHorizontalDesktop
						? paddingHorizontalDesktop
						: undefined,
				paddingLeft:
					! isPaddingHorizontalResponsive && paddingHorizontalDesktop
						? paddingHorizontalDesktop
						: undefined,
				...getPaddingResponsiveStyle( {
					isResponsive: isPaddingVerticalResponsive,
					desktop: paddingVerticalDesktop,
					tablet: paddingVerticalTablet,
					mobile: paddingVerticalMobile,
					prefix: 'vertical',
				} ),
				...getPaddingResponsiveStyle( {
					isResponsive: isPaddingHorizontalResponsive,
					desktop: paddingHorizontalDesktop,
					tablet: paddingHorizontalTablet,
					mobile: paddingHorizontalMobile,
					prefix: 'horizontal',
				} ),
			};

			return (
				<div className={ wrapClasses } style={ wrapStyles }>
					<a
						href={ url }
						className={ linkClasses }
						style={ linkStyles }
						target={ linkTarget }
						rel={ rel }
						{ ...getDataProperty( {
							'font-size': isFontSizeResponsive
								? `${ fontSizeDesktop }px`
								: undefined,
							'padding-top': isPaddingVerticalResponsive
								? `${ paddingVerticalDesktop }px`
								: undefined,
							'padding-bottom': isPaddingVerticalResponsive
								? `${ paddingVerticalDesktop }px`
								: undefined,
							'padding-right': isPaddingHorizontalResponsive
								? `${ paddingHorizontalDesktop }px`
								: undefined,
							'padding-left': isPaddingHorizontalResponsive
								? `${ paddingHorizontalDesktop }px`
								: undefined,
						} ) }
					>
						<span className="ystdb-button__link-content">
							{ !! iconLeft && (
								<span
									className={ classnames(
										'ystdb-button__icon',
										'ystdb-button__icon--left',
										{
											[ iconSizeLeft ]: iconSizeLeft,
										}
									) }
								>
									<SVGIcon name={ iconLeft } />
								</span>
							) }
							<RichText.Content
								tagName={ 'span' }
								value={ text }
								className={ 'ystdb-button__text' }
							/>
							{ !! iconRight && (
								<span
									className={ classnames(
										'ystdb-button__icon',
										'ystdb-button__icon--right',
										{
											[ iconSizeRight ]: iconSizeRight,
										}
									) }
								>
									<SVGIcon name={ iconRight } />
								</span>
							) }
						</span>
					</a>
				</div>
			);
		},
	},
];
