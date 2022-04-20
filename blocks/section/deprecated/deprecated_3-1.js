import classnames from 'classnames';

import {
	getColorClassName,
	InnerBlocks,
	__experimentalGetGradientClass,
	useBlockProps,
} from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';
import {
	BACKGROUND_TYPE_IMAGE,
	BACKGROUND_TYPE_VIDEO,
	dividerPath,
} from '../config';
import { getBackgroundPosition, getBackgroundSize } from '../shared';
import getCssClamp from '@ystdb/util/_getCssClamp';
import getDataClamp from '@ystdb/util/_getDataClamp';

export const deprecated31 = [
	{
		attributes: {
			align: {
				type: 'string',
				default: 'full',
			},
			marginTop: {
				type: 'number',
				default: 0,
			},
			marginTopResponsive: {
				type: 'bool',
				default: false,
			},
			marginTopMobile: {
				type: 'number',
				default: 0,
			},
			marginBottom: {
				type: 'number',
				default: 0,
			},
			marginBottomResponsive: {
				type: 'bool',
				default: false,
			},
			marginBottomMobile: {
				type: 'number',
				default: 0,
			},
			paddingTop: {
				type: 'number',
				default: 80,
			},
			paddingTopResponsive: {
				type: 'bool',
				default: false,
			},
			paddingTopMobile: {
				type: 'number',
				default: 0,
			},
			paddingBottom: {
				type: 'number',
				default: 80,
			},
			paddingBottomResponsive: {
				type: 'bool',
				default: false,
			},
			paddingBottomMobile: {
				type: 'number',
				default: 0,
			},
			paddingLeft: {
				type: 'number',
				default: 0,
			},
			paddingLeftResponsive: {
				type: 'bool',
				default: false,
			},
			paddingLeftMobile: {
				type: 'number',
				default: 0,
			},
			paddingRight: {
				type: 'number',
				default: 0,
			},
			paddingRightResponsive: {
				type: 'bool',
				default: false,
			},
			paddingRightMobile: {
				type: 'number',
				default: 0,
			},
			paddingRightPreferred: {
				type: 'number',
				default: 10,
			},
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			gradient: {
				type: 'string',
			},
			customGradient: {
				type: 'string',
			},
			useCustomOverlaySize: {
				type: 'bool',
				default: false,
			},
			overlaySizeX: {
				type: 'string',
				default: '100',
			},
			overlaySizeUnitX: {
				type: 'string',
				default: '%',
			},
			overlaySizeY: {
				type: 'string',
				default: '100',
			},
			overlaySizeUnitY: {
				type: 'string',
				default: '%',
			},
			overlayPositionX: {
				type: 'string',
				default: 'top',
			},
			overlayPositionValueX: {
				type: 'string',
				default: '0',
			},
			overlayPositionUnitX: {
				type: 'string',
				default: '%',
			},
			overlayPositionY: {
				type: 'string',
				default: 'left',
			},
			overlayPositionValueY: {
				type: 'string',
				default: '0',
			},
			overlayPositionUnitY: {
				type: 'string',
				default: '%',
			},
			backgroundImageOpacity: {
				type: 'integer',
				default: 100,
			},
			backgroundType: {
				type: 'string',
				default: 'image',
			},
			focalPoint: {
				type: 'object',
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
			backgroundImageParallax: {
				type: 'bool',
				default: false,
			},
			backgroundImageSize: {
				type: 'string',
			},
			backgroundImageSizeX: {
				type: 'string',
			},
			backgroundImageSizeUnitX: {
				type: 'string',
				default: 'px',
			},
			backgroundImageSizeY: {
				type: 'string',
			},
			backgroundImageSizeUnitY: {
				type: 'string',
				default: 'px',
			},
			backgroundImageRepeat: {
				type: 'string',
				default: 'no-repeat',
			},
			backgroundImageOnOverlay: {
				type: 'bool',
				default: false,
			},
			backgroundImageOnOverlayOpacity: {
				type: 'integer',
				default: 80,
			},
			textColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
			dividerTypeTop: {
				type: 'string',
				default: 'skew',
			},
			dividerTopReverse: {
				type: 'bool',
				default: false,
			},
			dividerTopResponsive: {
				type: 'bool',
				default: false,
			},
			dividerLevelTop: {
				type: 'number',
				default: 0,
			},
			dividerLevelTopMobile: {
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
			dividerBottomReverse: {
				type: 'bool',
				default: false,
			},
			dividerBottomResponsive: {
				type: 'bool',
				default: false,
			},
			dividerLevelBottom: {
				type: 'number',
				default: 0,
			},
			dividerLevelBottomMobile: {
				type: 'number',
				default: 0,
			},
			dividerColorBottom: {
				type: 'string',
			},
			customDividerColorBottom: {
				type: 'string',
			},
			innerCustomWidth: {
				type: 'integer',
				default: 0,
			},
			screenHeightMode: {
				type: 'bool',
				default: false,
			},
			sectionMinHeight: {
				type: 'number',
				default: 0,
			},
			animationType: {
				type: 'string',
				default: 'none',
			},
			animationSpeed: {
				type: 'number',
				default: 2,
			},
			animationDelay: {
				type: 'number',
				default: 0,
			},
			wrapperTag: {
				type: 'string',
				default: 'div',
			},
		},
		supports: {
			align: [ 'wide', 'full' ],
			anchor: true,
			className: false,
		},
		save( { attributes } ) {
			const {
				wrapperTag,
				backgroundColor,
				customBackgroundColor,
				textColor,
				customTextColor,
				marginTop,
				marginTopResponsive,
				marginTopMobile,
				marginBottom,
				marginBottomResponsive,
				marginBottomMobile,
				paddingTop,
				paddingTopResponsive,
				paddingTopMobile,
				paddingBottom,
				paddingBottomResponsive,
				paddingBottomMobile,
				paddingLeft,
				paddingLeftResponsive,
				paddingLeftMobile,
				paddingRight,
				paddingRightResponsive,
				paddingRightMobile,
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
				backgroundImageOnOverlay,
				backgroundImageOnOverlayOpacity,
				innerCustomWidth,
				dividerTypeTop,
				dividerTopReverse,
				dividerLevelTop,
				dividerTopResponsive,
				dividerLevelTopMobile,
				dividerColorTop,
				customDividerColorTop,
				dividerTypeBottom,
				dividerBottomReverse,
				dividerLevelBottom,
				dividerBottomResponsive,
				dividerLevelBottomMobile,
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

			const isImageBackground = BACKGROUND_TYPE_IMAGE === backgroundType;
			const isVideoBackground = BACKGROUND_TYPE_VIDEO === backgroundType;
			const showFocalPointPicker =
				isVideoBackground ||
				( isImageBackground && ! backgroundImageParallax );
			const gradientClass = __experimentalGetGradientClass( gradient );

			/**
			 * 色設定
			 */
			const textColorClass = getColorClassName( 'color', textColor );
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
			 * 背景画像
			 */
			const backgroundImageStyles = {
				backgroundImage:
					backgroundImageURL && isImageBackground
						? `url('${ backgroundImageURL }')`
						: undefined,
				backgroundPosition: getBackgroundPosition(
					showFocalPointPicker,
					focalPoint
				),
				backgroundRepeat:
					'no-repeat' === backgroundImageRepeat
						? undefined
						: backgroundImageRepeat,
				backgroundSize: getBackgroundSize(
					backgroundImageSize,
					backgroundImageSizeX,
					backgroundImageSizeY,
					backgroundImageSizeUnitX,
					backgroundImageSizeUnitY
				),
			};

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
			const sectionClass = classnames( 'ystdb-section', {
				'has-background-image': backgroundImageURL,
				'is-screen-height': screenHeightMode,
				'has-animation': hasAnimation,
				'has-parallax': backgroundImageParallax,
			} );
			const dataAnimation = hasAnimation ? animationType : undefined;

			const getMargin = ( useResponsive, desktop, mobile ) => {
				if ( ! useResponsive ) {
					if ( 0 === desktop ) {
						return 0;
					}
					return undefined !== desktop ? `${ desktop }px` : undefined;
				}
				return getCssClamp( {
					desktop,
					mobile,
				} );
			};
			/**
			 * セクションスタイル
			 */
			let sectionStyles = {
				color: textColorClass ? undefined : customTextColor,
				paddingTop: getMargin(
					paddingTopResponsive,
					paddingTop,
					paddingTopMobile
				),
				paddingBottom: getMargin(
					paddingBottomResponsive,
					paddingBottom,
					paddingBottomMobile
				),
				marginTop: getMargin(
					marginTopResponsive,
					marginTop,
					marginTopMobile
				),
				marginBottom: getMargin(
					marginBottomResponsive,
					marginBottom,
					marginBottomMobile
				),
				minHeight: sectionMinHeight
					? sectionMinHeight + 'px'
					: undefined,
				animationDuration: hasAnimation
					? `${ animationSpeed }s`
					: undefined,
				animationDelay:
					hasAnimation && 0 < animationDelay
						? `${ animationDelay }s`
						: undefined,
			};
			if ( ! backgroundImageOnOverlay ) {
				sectionStyles = {
					...sectionStyles,
					...backgroundImageStyles,
				};
			}

			const sectionClampData = {
				'margin-top': marginTopResponsive
					? `${ marginTop }${ marginUnit }`
					: undefined,
				'margin-bottom': marginBottomResponsive
					? `${ marginBottom }${ marginUnit }`
					: undefined,
				'padding-top': paddingTopResponsive
					? `${ paddingTop }${ paddingUnit }`
					: undefined,
				'padding-bottom': paddingBottomResponsive
					? `${ paddingBottom }${ paddingUnit }`
					: undefined,
			};

			/**
			 * 背景マスク
			 */
			const bgMaskClass = classnames( 'ystdb-section__bg', {
				'has-background': backgroundColor || customBackgroundColor,
				'has-background-gradient': gradient || customGradient,
				[ backgroundClass ]: backgroundClass,
				[ gradientClass ]: gradientClass,
				'is-custom-size': useCustomOverlaySize,
			} );
			const getMaskBackground = () => {
				if ( customGradient ) {
					return customGradient;
				}
				if ( ! backgroundClass && customBackgroundColor ) {
					return customBackgroundColor;
				}
				return undefined;
			};
			const getMaskPosition = () => {
				if ( ! useCustomOverlaySize ) {
					return {};
				}
				const posX = !! overlayPositionValueX
					? `${ overlayPositionValueX }${ overlayPositionUnitX }`
					: 0;
				const posY = !! overlayPositionValueY
					? `${ overlayPositionValueY }${ overlayPositionUnitY }`
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
					useCustomOverlaySize && !! overlaySizeX
						? `${ overlaySizeX }${ overlaySizeUnitX }`
						: undefined,
				height:
					useCustomOverlaySize && !! overlaySizeY
						? `${ overlaySizeY }${ overlaySizeUnitY }`
						: undefined,
				...getMaskPosition(),
			};

			let overlayImageStyle = {
				opacity: backgroundImageOnOverlayOpacity / 100,
			};
			if ( backgroundImageOnOverlay ) {
				overlayImageStyle = {
					...overlayImageStyle,
					...backgroundImageStyles,
				};
			}

			/**
			 * インナー
			 */
			const innerClasses = classnames( 'ystdb-section__inner', {
				'has-text-color': textColorClass || customTextColor,
				[ textColorClass ]: textColorClass,
			} );
			const innerStyles = {
				maxWidth: 0 < innerCustomWidth ? innerCustomWidth : undefined,
				marginRight: 'auto',
				marginLeft: 'auto',
				paddingLeft: getMargin(
					paddingLeftResponsive,
					paddingLeft,
					paddingLeftMobile
				),
				paddingRight: getMargin(
					paddingRightResponsive,
					paddingRight,
					paddingRightMobile
				),
			};

			const innerClampData = {
				'padding-left': paddingLeftResponsive
					? `${ paddingLeft }${ paddingUnit }`
					: undefined,
				'padding-right': paddingRightResponsive
					? `${ paddingRight }${ paddingUnit }`
					: undefined,
			};

			const divider = ( attr ) => {
				const {
					type,
					reverse,
					position,
					level,
					colorClass,
					customColor,
					useResponsive,
					levelMobile,
				} = attr;

				const dividerClass = classnames(
					'ystdb-section__divider',
					`ystdb-section__divider--${ position }`,
					`ystdb-section__divider--${ type }`
				);
				let pathLevel = level;
				if ( reverse ) {
					pathLevel = -1 * pathLevel;
				}
				if ( useResponsive ) {
					pathLevel = 0 > pathLevel ? -100 : 100;
				}
				const path = dividerPath( type, pathLevel );
				const svgClass = classnames( 'ystdb-section__divider-image', {
					[ colorClass ]: colorClass,
				} );
				const style = useResponsive
					? {
							height: getCssClamp( {
								desktop: Math.abs( level ),
								mobile: Math.abs( levelMobile ),
							} ),
					  }
					: undefined;

				return (
					<div className={ dividerClass }>
						<SVG
							className={ svgClass }
							viewBox="0 0 100 100"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio={ 'none' }
							style={ style }
							{ ...getDataClamp( {
								height: useResponsive
									? `${ Math.abs( level ) }px`
									: undefined,
							} ) }
						>
							<Path d={ path } fill={ customColor } />
						</SVG>
					</div>
				);
			};

			const dividerTop =
				0 !== dividerLevelTop &&
				( dividerColorTopClass || customDividerColorTop );
			const dividerBottom =
				0 !== dividerLevelBottom &&
				( dividerColorBottomClass || customDividerColorBottom );

			const blockProps = useBlockProps.save( {
				className: sectionClass,
				style: sectionStyles,
				'data-animation': dataAnimation,
				...getDataClamp( sectionClampData ),
			} );

			return (
				<div { ...blockProps }>
					{ isVideoBackground && (
						<video
							className="ystdb-section__video-background"
							autoPlay
							muted
							loop
							playsInline
							src={ backgroundImageURL }
							style={ {
								objectPosition: getBackgroundPosition(
									showFocalPointPicker,
									focalPoint
								),
							} }
						/>
					) }
					{ showBgMask && (
						<div
							className={ bgMaskClass }
							aria-hidden="true"
							role="img"
							style={ bgMaskStyle }
						>
							{ backgroundImageOnOverlay && (
								<div
									className={ 'ystdb-section__overlay-image' }
									aria-hidden="true"
									role="img"
									style={ overlayImageStyle }
								>
									&nbsp;
								</div>
							) }
							&nbsp;
						</div>
					) }
					{ dividerTop &&
						divider( {
							type: dividerTypeTop,
							reverse: dividerTopReverse,
							position: 'top',
							level: Math.abs( dividerLevelTop ),
							colorClass: dividerColorTopClass,
							customColor: customDividerColorTop,
							useResponsive: dividerTopResponsive,
							levelMobile: dividerLevelTopMobile,
						} ) }
					{ dividerBottom &&
						divider( {
							type: dividerTypeBottom,
							reverse: dividerBottomReverse,
							position: 'bottom',
							level: Math.abs( dividerLevelBottom ),
							colorClass: dividerColorBottomClass,
							customColor: customDividerColorBottom,
							useResponsive: dividerBottomResponsive,
							levelMobile: dividerLevelBottomMobile,
						} ) }
					<div className="ystdb-section__container">
						<Wrapper
							className={ innerClasses }
							style={ innerStyles }
							{ ...getDataClamp( innerClampData ) }
						>
							<InnerBlocks.Content />
						</Wrapper>
					</div>
				</div>
			);
		},
	},
];
