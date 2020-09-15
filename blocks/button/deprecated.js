import classnames from 'classnames';

import {
	RichText,
	getColorClassName,
	getFontSizeClass,
} from '@wordpress/block-editor';

const deprecated = [
	{
		attributes: {
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
				type: 'string',
			},
			url: {
				type: 'string',
			},
			linkTarget: {
				type: 'string',
			},
			rel: {
				type: 'string',
			},
			paddingType: {
				type: 'string',
				default: '',
			},
			buttonType: {
				type: 'string',
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
			className: {
				type: 'string',
				default: '',
			},
		},
		supports: {
			align: false,
			className: false,
		},
		save({ attributes }) {
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
				align,
				url,
				rel,
				linkTarget,
				paddingType,
				buttonType,
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
				[fontSizeClass]: fontSizeClass,
			});

			const linkClasses = classnames(
				'wp-block-button__link',
				'ystdb-button__link',
				{
					[textClass]: textClass,
					'has-text-color': textColor || customTextColor,
					[backgroundClass]: backgroundClass,
					'has-background': backgroundColor || customBackgroundColor,
					'no-border-radius': borderRadius === 0,
					[paddingType]: paddingType,
					[buttonType]: buttonType,
					'has-animation': animationType,
					[`has-animation--${animationType}`]:
						'none' !== animationType,
				}
			);
			const wrapStyles = {
				fontSize:
					!fontSizeClass && customFontSize
						? customFontSize + 'px'
						: undefined,
			};
			const linkStyles = {
				color: textClass ? undefined : customTextColor,
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
				borderRadius: borderRadius ? borderRadius + 'px' : undefined,
				maxWidth:
					buttonType && maxWidth
						? `${maxWidth}${maxUnit}`
						: undefined,
				animationDuration:
					'none' !== animationType && animationInterval
						? `${animationInterval}s`
						: undefined,
			};

			return (
				<div className={wrapClasses} style={wrapStyles}>
					<a
						href={url}
						className={linkClasses}
						style={linkStyles}
						target={linkTarget}
						rel={rel}
					>
						<span className="ystdb-button__link-content">
							{!!iconLeft && (
								<i
									className={classnames(
										'ystdb-button__icon',
										'ystdb-button__icon--left',
										iconLeft,
										{
											[iconSizeLeft]: iconSizeLeft,
										}
									)}
								></i>
							)}
							<RichText.Content
								tagName={'span'}
								value={text}
								className={'ystdb-button__text'}
							/>
							{!!iconRight && (
								<i
									className={classnames(
										'ystdb-button__icon',
										'ystdb-button__icon--right',
										iconRight,
										{
											[iconSizeRight]: iconSizeRight,
										}
									)}
								></i>
							)}
						</span>
					</a>
				</div>
			);
		},
	},
];

export default deprecated;
