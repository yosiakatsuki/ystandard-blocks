import classnames from 'classnames';

import { getColorClassName, InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';
import { dividerPath } from '../config';

export const deprecated24 = [
	{
		attributes: {
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
			marginTop: {
				type: 'number',
				default: 0,
			},
			marginBottom: {
				type: 'number',
				default: 0,
			},
			paddingTop: {
				type: 'number',
				default: 80,
			},
			paddingBottom: {
				type: 'number',
				default: 80,
			},
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
				default: 100,
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
				default: 2,
			},
		},
		migrate(attributes) {
			return {
				...attributes,
				backgroundType: attributes.backgroundImageURL
					? 'image'
					: undefined,
				dividerTopReverse: 0 > attributes.dividerLevelTop,
				dividerLevelTop: Math.abs(attributes.dividerLevelTop),
				dividerBottomReverse: 0 > attributes.dividerLevelBottom,
				dividerLevelBottom: Math.abs(attributes.dividerLevelBottom),
			};
		},
		supports: {
			align: ['wide', 'full'],
			anchor: true,
			className: false,
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

			const marginUnit = 'px';
			const paddingUnit = 'px';

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
				paddingTop: 0 === paddingTop ? 0 : paddingTop + paddingUnit,
				paddingBottom:
					0 === paddingBottom ? 0 : paddingBottom + paddingUnit,
				marginTop: marginTop + marginUnit,
				marginBottom: marginBottom + marginUnit,
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
				paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + paddingUnit,
				paddingRight:
					0 === paddingRight ? 0 : paddingRight + paddingUnit,
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
];
