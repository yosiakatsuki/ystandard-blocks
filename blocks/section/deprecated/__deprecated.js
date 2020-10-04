import classnames from 'classnames';
import getNum from '../../../src/js/util/_getNum';

import { getColorClassName, InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';
import { dividerPath } from '../config';

const blockAttributes = {
	wrapperTag: {
		type: 'string',
		default: 'div',
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
	margin: {
		type: 'string',
		default: 'normal',
	},
	marginTop: {
		type: 'integer',
		default: 24,
	},
	marginBottom: {
		type: 'integer',
		default: 24,
	},
	padding: {
		type: 'string',
		default: 'normal',
	},
	paddingTop: {
		type: 'integer',
		default: 32,
	},
	paddingBottom: {
		type: 'integer',
		default: 32,
	},
	innerWidth: {
		type: 'string',
		default: 'normal',
	},
	innerCustomWidth: {
		type: 'integer',
		default: 0,
	},
};

export const __deprecated = [
	{
		attributes: {
			...blockAttributes,
			marginTop: {
				type: 'integer',
				default: 2,
			},
			marginBottom: {
				type: 'integer',
				default: 2,
			},
			paddingTop: {
				type: 'number',
				default: 3,
			},
			paddingBottom: {
				type: 'number',
				default: 3,
			},
			paddingLeft: {
				type: 'number',
				default: 0,
			},
			paddingRight: {
				type: 'number',
				default: 0,
			},
			backgroundImageURL: {
				type: 'string',
			},
			backgroundImageAlt: {
				type: 'string',
			},
			backgroundImageID: {
				type: 'integer',
				default: 0,
			},
			backgroundImageOpacity: {
				type: 'integer',
				default: 50,
			},
			backgroundImageParallax: {
				type: 'bool',
				default: false,
			},
			screenHeightMode: {
				type: 'bool',
				default: false,
			},
			sectionMinHeight: {
				type: 'number',
				default: 0,
			},
			dividerTypeTop: {
				type: 'string',
				default: 'skew',
			},
			dividerLevelTop: {
				type: 'number',
				default: 0,
			},
			dividerColorTop: {
				type: 'string',
			},
			customDividerColorTop: {
				type: 'string',
			},
			dividerTypeBottom: {
				type: 'string',
				default: 'skew',
			},
			dividerLevelBottom: {
				type: 'number',
				default: 0,
			},
			dividerColorBottom: {
				type: 'string',
			},
			customDividerColorBottom: {
				type: 'string',
			},
			animationType: {
				type: 'string',
				default: 'none',
			},
			animationSpeed: {
				type: 'number',
				default: 3,
			},
		},
		supports: {
			align: ['wide', 'full'],
			anchor: true,
			className: false,
		},
		migrate(attributes) {
			return {
				...attributes,
				marginTop: attributes.marginTop * 16,
				marginBottom: attributes.marginBottom * 16,
				paddingTop: attributes.paddingTop * 16,
				paddingBottom: attributes.paddingBottom * 16,
				paddingLeft: attributes.paddingLeft * 16,
				paddingRight: attributes.paddingRight * 16,
			};
		},
		save({ attributes }) {
			const {
				wrapperTag,
				backgroundColor,
				customBackgroundColor,
				textColor,
				customTextColor,
				marginTop,
				marginBottom,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
				backgroundImageURL,
				backgroundImageOpacity,
				backgroundImageParallax,
				innerCustomWidth,
				dividerTypeTop,
				dividerLevelTop,
				dividerColorTop,
				customDividerColorTop,
				dividerTypeBottom,
				dividerLevelBottom,
				dividerColorBottom,
				customDividerColorBottom,
				screenHeightMode,
				sectionMinHeight,
				animationType,
				animationSpeed,
			} = attributes;

			/**
			 * HTMLタグ
			 */
			const Wrapper = wrapperTag;

			/**
			 * 色設定
			 */
			const textColorClass = getColorClassName('color', textColor);
			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);
			const dividerColorTopClass = getColorClassName(
				'fill',
				dividerColorTop
			);
			const dividerColorBottomClass = getColorClassName(
				'fill',
				dividerColorBottom
			);

			/**
			 * アニメーション
			 */
			const hasAnimation = animationType && 'none' !== animationType;

			/**
			 * 背景関連
			 */
			const showBgMask =
				backgroundImageURL || backgroundColor || customBackgroundColor;

			/**
			 * セクションクラス名
			 */
			const sectionClass = classnames('ystdb-section', {
				'has-background-image': backgroundImageURL,
				'is-screen-height': screenHeightMode,
				'has-animation': hasAnimation,
				'has-parallax': backgroundImageParallax,
			});
			const dataAnimation = hasAnimation ? animationType : undefined;
			/**
			 * セクションスタイル
			 */
			const sectionStyles = {
				color: textColorClass ? undefined : customTextColor,
				paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
				paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
				marginTop: marginTop + 'rem',
				marginBottom: marginBottom + 'rem',
				backgroundImage: backgroundImageURL
					? `url("${backgroundImageURL}")`
					: undefined,
				minHeight: sectionMinHeight
					? sectionMinHeight + 'px'
					: undefined,
				paddingLeft: 0 < innerCustomWidth ? '1rem' : undefined,
				paddingRight: 0 < innerCustomWidth ? '1rem' : undefined,
				animationDuration: hasAnimation
					? `${animationSpeed}s`
					: undefined,
			};

			/**
			 * 背景マスク
			 */
			const bgMaskClass = classnames('ystdb-section__bg', {
				'has-background': backgroundColor || customBackgroundColor,
				[backgroundClass]: backgroundClass,
			});
			const bgMaskStyle = {
				backgroundColor:
					!backgroundClass && !customBackgroundColor
						? '#000'
						: customBackgroundColor,
				opacity: backgroundImageOpacity / 100,
			};

			/**
			 * インナー
			 */
			const innerClasses = classnames('ystdb-section__inner', {
				'has-text-color': textColorClass || customTextColor,
				[textColorClass]: textColorClass,
			});
			const innerStyles = {
				maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
				marginRight: 'auto',
				marginLeft: 'auto',
				paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
				paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem',
			};

			const divider = (
				type,
				position,
				level,
				colorClass,
				customColor
			) => {
				const dividerClass = classnames(
					'ystdb-section__divider',
					`ystdb-section__divider--${position}`,
					`ystdb-section__divider--${type}`
				);
				const path = dividerPath(type, level);
				const svgClass = classnames('ystdb-section__divider-image', {
					[colorClass]: colorClass,
				});

				return (
					<div className={dividerClass}>
						<SVG
							className={svgClass}
							viewBox="0 0 100 100"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
						>
							<Path d={path} strokewidth="0" fill={customColor} />
						</SVG>
					</div>
				);
			};

			const dividerTop =
				0 !== dividerLevelTop &&
				(dividerColorTopClass || customDividerColorTop);
			const dividerBottom =
				0 !== dividerLevelBottom &&
				(dividerColorBottomClass || customDividerColorBottom);

			return (
				<div
					className={sectionClass}
					style={sectionStyles}
					data-animation={dataAnimation}
				>
					{showBgMask && (
						<div
							className={bgMaskClass}
							aria-hidden="true"
							role="img"
							style={bgMaskStyle}
						>
							&nbsp;
						</div>
					)}
					{dividerTop &&
						divider(
							dividerTypeTop,
							'top',
							dividerLevelTop,
							dividerColorTopClass,
							customDividerColorTop
						)}
					{dividerBottom &&
						divider(
							dividerTypeBottom,
							'bottom',
							dividerLevelBottom,
							dividerColorBottomClass,
							customDividerColorBottom
						)}
					<div className="ystdb-section__container">
						<Wrapper className={innerClasses} style={innerStyles}>
							<InnerBlocks.Content />
						</Wrapper>
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
			paddingLeft: {
				type: 'number',
				default: 0,
			},
			paddingRight: {
				type: 'number',
				default: 0,
			},
			innerCustomWidth: {
				type: 'integer',
				default: 960,
			},
			backgroundImageURL: {
				type: 'string',
			},
			backgroundImageAlt: {
				type: 'string',
			},
			backgroundImageID: {
				type: 'integer',
				default: 0,
			},
			backgroundImageOpacity: {
				type: 'integer',
				default: 50,
			},
			backgroundSkew: {
				type: 'number',
				default: 0,
			},
			backgroundSkewWidth: {
				type: 'number',
				default: 90,
			},
		},
		supports: {
			align: ['wide', 'full'],
			anchor: true,
			className: false,
		},
		migrate(attributes) {
			return {
				...attributes,
				dividerLevelTop: attributes.backgroundSkew,
				dividerLevelBottom: attributes.backgroundSkew,
				animationType: 'none',
				animationSpeed: 3,
				backgroundImageParallax: false,
			};
		},
		save({ attributes }) {
			const {
				backgroundColor,
				textColor,
				customBackgroundColor,
				customTextColor,
				wrapperTag,
				marginTop,
				marginBottom,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
				backgroundImageURL,
				backgroundImageOpacity,
				backgroundSkew,
				backgroundSkewWidth,
				innerCustomWidth,
			} = attributes;
			/**
			 * HTMLタグ
			 */
			const Wrapper = wrapperTag;

			/**
			 * 色設定
			 */
			const textClass = getColorClassName('color', textColor);
			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);
			/**
			 * 背景関連
			 */
			const hasBackground =
				(backgroundColor || customBackgroundColor) && !backgroundSkew;
			const hasBackgroundClass = backgroundClass && !backgroundSkew;
			const hasBackgroundImage = backgroundImageURL && !backgroundSkew;
			const hasBackgroundDim = backgroundImageURL && !backgroundSkew;
			const backgroundDimClass =
				'has-background-dim-' +
				10 * Math.round(backgroundImageOpacity / 10);

			/**
			 * メインクラス名
			 */
			const classes = classnames('ystdb-section', {
				'has-text-color': textColor || customTextColor,
				[textClass]: textClass,
				'has-background': hasBackground,
				[backgroundClass]: hasBackgroundClass,
				'has-background-image': hasBackgroundImage,
				'has-background-dim': hasBackgroundDim,
				[backgroundDimClass]: hasBackgroundDim,
				'has-background-skew': backgroundSkew,
			});
			/**
			 * インナーブロックのクラス名
			 */
			const innerClasses = 'ystdb-section__inner';
			/**
			 * セクションスタイル
			 */
			const sectionStyles = {
				backgroundColor:
					backgroundClass || backgroundSkew
						? undefined
						: customBackgroundColor,
				color: textClass ? undefined : customTextColor,
				marginTop: 0 === marginTop ? 0 : marginTop + 'rem',
				marginBottom: 0 === marginBottom ? 0 : marginBottom + 'rem',
				paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
				paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
				backgroundImage: hasBackgroundImage
					? `url("${backgroundImageURL}")`
					: undefined,
				paddingLeft: '1rem',
				paddingRight: '1rem',
			};
			/**
			 * インナーのスタイル
			 */
			const innerStyles = {
				maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
				marginRight: 'auto',
				marginLeft: 'auto',
				paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
				paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem',
			};
			/**
			 * 背景斜めのマスク
			 */
			const skewMask = () => {
				if (backgroundSkew) {
					const backgroundSkewValue = backgroundSkew + 'deg';
					const skewStyle = {
						height: backgroundSkewWidth
							? backgroundSkewWidth + '%'
							: undefined,
						backgroundColor: backgroundClass
							? undefined
							: customBackgroundColor,
						transform: `skewY(${backgroundSkewValue}) translateY(-50%)`,
					};
					const skewClass = classnames('ystdb-section__mask', {
						'has-background':
							backgroundColor || customBackgroundColor,
						[backgroundClass]: backgroundClass,
					});
					return <div className={skewClass} style={skewStyle}></div>;
				}
			};

			return (
				<div className={classes} style={sectionStyles}>
					{skewMask()}
					<Wrapper className={innerClasses} style={innerStyles}>
						<InnerBlocks.Content />
					</Wrapper>
				</div>
			);
		},
	},
	{
		attributes: blockAttributes,
		migrate({ marginTop, marginBottom, paddingTop, paddingBottom }) {
			return {
				marginTop: getNum(marginTop, -10, 10, 0),
				marginBottom: getNum(marginBottom, -10, 10, 0),
				paddingTop: getNum(paddingTop, 0, 10),
				paddingBottom: getNum(paddingBottom, 0, 10),
			};
		},
		save(props) {
			const { attributes } = props;
			const {
				backgroundColor,
				textColor,
				customBackgroundColor,
				customTextColor,
				wrapperTag,
				marginTop,
				marginBottom,
				paddingTop,
				paddingBottom,
				innerCustomWidth,
			} = attributes;

			const Wrapper = wrapperTag;

			const textClass = getColorClassName('color', textColor);
			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);

			const classes = classnames('ystdb-section', {
				'has-text-color': textColor || customTextColor,
				[textClass]: textClass,
				'has-background': backgroundColor || customBackgroundColor,
				[backgroundClass]: backgroundClass,
			});
			const innerClasses = 'ystdb-section__inner';

			const sectionStyles = {
				backgroundColor: backgroundClass
					? undefined
					: customBackgroundColor,
				color: textClass ? undefined : customTextColor,
				'margin-top': marginTop,
				'margin-bottom': marginBottom,
				'padding-top': paddingTop,
				'padding-bottom': paddingBottom,
			};
			const innerStyles = {
				'max-width':
					innerCustomWidth !== 0 ? innerCustomWidth : undefined,
				'margin-right': 'auto',
				'margin-left': 'auto',
			};

			return (
				<div className={classes} style={sectionStyles}>
					<Wrapper className={innerClasses} style={innerStyles}>
						<InnerBlocks.Content />
					</Wrapper>
				</div>
			);
		},
	},
];
