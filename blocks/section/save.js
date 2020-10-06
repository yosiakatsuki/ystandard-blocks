import classnames from 'classnames';

import {
	getColorClassName,
	InnerBlocks,
	__experimentalGetGradientClass,
} from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';
import {
	dividerPath,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
} from './config';
import { getBackgroundPosition, getBackgroundSize } from './shared';

export default function save(props) {
	const { attributes } = props;
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
		useCustomOverlaySize,
		overlaySizeX,
		overlaySizeUnitX,
		overlaySizeY,
		overlaySizeUnitY,
		overlayPositionX,
		overlayPositionValueX,
		overlayPositionUnitX,
		overlayPositionY,
		overlayPositionValueY,
		overlayPositionUnitY,
		gradient,
		customGradient,
		backgroundType,
		focalPoint,
		backgroundImageURL,
		backgroundImageOpacity,
		backgroundImageParallax,
		backgroundImageSize,
		backgroundImageSizeX,
		backgroundImageSizeUnitX,
		backgroundImageSizeY,
		backgroundImageSizeUnitY,
		backgroundImageRepeat,
		innerCustomWidth,
		dividerTypeTop,
		dividerLevelTop,
		dividerTopResponsive,
		dividerLevelTopMin,
		dividerLevelTopPreferred,
		dividerColorTop,
		customDividerColorTop,
		dividerTypeBottom,
		dividerLevelBottom,
		dividerBottomResponsive,
		dividerLevelBottomMin,
		dividerLevelBottomPreferred,
		dividerColorBottom,
		customDividerColorBottom,
		screenHeightMode,
		sectionMinHeight,
		animationType,
		animationSpeed,
		animationDelay,
	} = attributes;

	/**
	 * HTMLタグ
	 */
	const Wrapper = wrapperTag;

	const marginUnit = 'px';
	const paddingUnit = 'px';

	const isImageBackground = IMAGE_BACKGROUND_TYPE === backgroundType;
	const isVideoBackground = VIDEO_BACKGROUND_TYPE === backgroundType;
	const showFocalPointPicker =
		isVideoBackground || (isImageBackground && !backgroundImageParallax);
	const gradientClass = __experimentalGetGradientClass(gradient);

	/**
	 * 色設定
	 */
	const textColorClass = getColorClassName('color', textColor);
	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const dividerColorTopClass = getColorClassName('fill', dividerColorTop);
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
		backgroundImageURL ||
		backgroundColor ||
		customBackgroundColor ||
		gradientClass ||
		customGradient;

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
		paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + paddingUnit,
		marginTop: marginTop + marginUnit,
		marginBottom: marginBottom + marginUnit,
		backgroundImage: backgroundImageURL
			? `url("${backgroundImageURL}")`
			: undefined,
		minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
		paddingLeft: 0 < innerCustomWidth ? '1rem' : undefined,
		paddingRight: 0 < innerCustomWidth ? '1rem' : undefined,
		animationDuration: hasAnimation ? `${animationSpeed}s` : undefined,
		animationDelay:
			hasAnimation && 0 < animationDelay
				? `${animationDelay}s`
				: undefined,
		backgroundPosition: getBackgroundPosition(
			showFocalPointPicker,
			focalPoint
		),
		backgroundSize: getBackgroundSize(
			backgroundImageSize,
			backgroundImageSizeX,
			backgroundImageSizeY,
			backgroundImageSizeUnitX,
			backgroundImageSizeUnitY
		),
		backgroundRepeat:
			'no-repeat' === backgroundImageRepeat
				? undefined
				: backgroundImageRepeat,
	};

	/**
	 * 背景マスク
	 */
	const bgMaskClass = classnames('ystdb-section__bg', {
		'has-background': backgroundColor || customBackgroundColor,
		'has-background-gradient': gradient || customGradient,
		[backgroundClass]: backgroundClass,
		[gradientClass]: gradientClass,
		'is-custom-size': useCustomOverlaySize,
	});
	const getMaskBackground = () => {
		if (customGradient) {
			return customGradient;
		}
		if (!backgroundClass && customBackgroundColor) {
			return customBackgroundColor;
		}
		return undefined;
	};
	const getMaskPosition = () => {
		if (!useCustomOverlaySize) {
			return {};
		}
		const posX = !!overlayPositionValueX
			? `${overlayPositionValueX}${overlayPositionUnitX}`
			: 0;
		const posY = !!overlayPositionValueY
			? `${overlayPositionValueY}${overlayPositionUnitY}`
			: 0;
		return {
			top: 'top' === overlayPositionX ? posX : undefined,
			bottom: 'bottom' === overlayPositionX ? posX : undefined,
			left: 'left' === overlayPositionY ? posY : undefined,
			right: 'right' === overlayPositionY ? posY : undefined,
		};
	};
	const bgMaskStyle = {
		background: getMaskBackground(),
		opacity: backgroundImageOpacity / 100,
		width:
			useCustomOverlaySize && !!overlaySizeX
				? `${overlaySizeX}${overlaySizeUnitX}`
				: undefined,
		height:
			useCustomOverlaySize && !!overlaySizeY
				? `${overlaySizeY}${overlaySizeUnitY}`
				: undefined,
		...getMaskPosition(),
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
		paddingRight: 0 === paddingRight ? 0 : paddingRight + paddingUnit,
	};

	const divider = (attr) => {
		const {
			type,
			position,
			level,
			levelUnit,
			colorClass,
			customColor,
			useResponsive,
			levelMin,
			levelMinUnit,
			levelPreferred,
		} = attr;

		const dividerClass = classnames(
			'ystdb-section__divider',
			`ystdb-section__divider--${position}`,
			`ystdb-section__divider--${type}`
		);
		let pathLevel = level;
		if (useResponsive) {
			pathLevel = 0 > level ? -100 : 100;
		}
		const path = dividerPath(type, pathLevel);
		const svgClass = classnames('ystdb-section__divider-image', {
			[colorClass]: colorClass,
		});
		const dataResponsiveClamp = useResponsive
			? {
					height: Math.abs(level),
					width: 'auto',
			  }
			: undefined;

		const clampLevel = `${Math.abs(level)}${levelUnit}`;
		const clampMinLevel = `${Math.abs(levelMin)}${levelMinUnit}`;
		const style = useResponsive
			? {
					height: `clamp( ${clampMinLevel}, ${levelPreferred}vw, ${clampLevel} )`,
			  }
			: undefined;

		return (
			<div className={dividerClass}>
				<SVG
					className={svgClass}
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio={'none'}
					data-responsive-clamp={dataResponsiveClamp}
					style={style}
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
			{isVideoBackground && (
				<video
					className="ystdb-section__video-background"
					autoPlay
					muted
					loop
					src={backgroundImageURL}
					style={{
						objectPosition: getBackgroundPosition(
							showFocalPointPicker,
							focalPoint
						),
					}}
				/>
			)}
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
				divider({
					type: dividerTypeTop,
					position: 'top',
					level: dividerLevelTop,
					levelUnit: 'px',
					colorClass: dividerColorTopClass,
					customColor: customDividerColorTop,
					useResponsive: dividerTopResponsive,
					levelMin: dividerLevelTopMin,
					levelMinUnit: 'px',
					levelPreferred: dividerLevelTopPreferred,
				})}
			{dividerBottom &&
				divider({
					type: dividerTypeBottom,
					position: 'bottom',
					level: dividerLevelBottom,
					levelUnit: 'px',
					colorClass: dividerColorBottomClass,
					customColor: customDividerColorBottom,
					useResponsive: dividerBottomResponsive,
					levelMin: dividerLevelBottomMin,
					levelMinUnit: 'px',
					levelPreferred: dividerLevelBottomPreferred,
				})}
			<div className="ystdb-section__container">
				<Wrapper className={innerClasses} style={innerStyles}>
					<InnerBlocks.Content />
				</Wrapper>
			</div>
		</div>
	);
}
