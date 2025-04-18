import classnames from 'classnames';
/**
 * WordPress Dependencies
 */
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	BlockControls,
	ContrastChecker,
	withColors,
	useInnerBlocksProps,
	__experimentalUseGradient,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	SVG,
	Path,
	SelectControl,
	FocalPointPicker,
	ExternalLink,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

/**
 * Aktk Dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import RangeControl from '@aktk/block-components/wp-controls/range-control';
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';

import {
	marginType,
	wrapperTagNames,
	dividerTypes,
	animationTypes,
	dividerPath,
	overlaySizeUnitOption,
	overlayPositionXOption,
	overlayPositionYOption,
	backgroundImageSizeOption,
	backgroundImageSizeUnitOption,
	backgroundImageRepeatOption,
	BACKGROUND_TYPE_IMAGE,
	BACKGROUND_TYPE_VIDEO,
} from './config';
import { getBackgroundPosition, getBackgroundSize } from './shared';
import getNum from '../../src/js/util/_getNum';
import getNumberInputStep from '../../src/js/util/_getNumberInputStep';
import ResponsiveRangeControl from '../../src/js/components/responsive-range';
import getCssClamp from '../../src/js/util/_getCssClamp';
import convertPHPObject2JS from '../../src/js/util/_convertPHPObject2JS';
import * as BlockOptions from './inspector-controls';
import * as ToolbarControls from './block-controls';
import { getBorderProperty } from './function/border';
import PanelContentWidth from './inspector-controls/content-width';
import ColorPaletteControl from '@aktk/components/color-palette-control';

const SectionEdit = ( props ) => {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		setBackgroundColor,
		textColor,
		setTextColor,
		dividerColorTop,
		setDividerColorTop,
		dividerColorBottom,
		setDividerColorBottom,
		borderColor,
		className,
	} = props;
	const {
		align,
		wrapperTag,
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
		dividerTypeBottom,
		dividerBottomReverse,
		dividerLevelBottom,
		dividerBottomResponsive,
		dividerLevelBottomMobile,
		screenHeightMode,
		sectionMinHeight,
		animationType,
		animationSpeed,
		animationDelay,
		containerFluid,
	} = attributes;

	const [ previewAnimation, setPreviewAnimation ] = useState( false );
	const [ useDarkImagePreview, setUseDarkImagePreview ] = useState( false );

	const { gradientClass, gradientValue, setGradient } =
		__experimentalUseGradient();

	const rangeStep = 1;
	const rangeMax = 200;
	const rangeMin = 0;

	const Wrapper = wrapperTag;

	const isContainerFluid = 'full' === align && containerFluid;

	/**
	 * 背景画像関連
	 */
	const DARK_IMAGE_PREVIEW_COLOR = '#313131';
	const showBgMask =
		backgroundImageURL || backgroundColor.color || gradientValue;
	const isImageBackground = BACKGROUND_TYPE_IMAGE === backgroundType;
	const isVideoBackground = BACKGROUND_TYPE_VIDEO === backgroundType;
	const showFocalPointPicker =
		! isVideoBackground ||
		( isImageBackground && ! backgroundImageParallax );

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

	const hasAnimation = previewAnimation && 'none' !== animationType;

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
	 * セクションクラス名
	 */
	const sectionClass = classnames( className, 'ystdb-section', {
		'has-background-image': isImageBackground,
		'has-background-video': isVideoBackground,
		'is-screen-height': screenHeightMode,
		'has-animation': hasAnimation,
		[ `animation--${ animationType }` ]: hasAnimation,
		'is-container-fluid': isContainerFluid,
	} );

	/**
	 * セクションスタイル
	 */
	let sectionStyles = {
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
		marginTop: getMargin( marginTopResponsive, marginTop, marginTopMobile ),
		marginBottom: getMargin(
			marginBottomResponsive,
			marginBottom,
			marginBottomMobile
		),
		color: textColor.color,
		minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
		animationDuration: hasAnimation ? `${ animationSpeed }s` : undefined,
		animationDelay:
			hasAnimation && 0 < animationDelay
				? `${ animationDelay }s`
				: undefined,
		...getBorderProperty( {
			...attributes,
			...{
				customBorderColor: borderColor.color,
			},
		} ),
	};
	if ( ! backgroundImageOnOverlay ) {
		sectionStyles = {
			...sectionStyles,
			...backgroundImageStyles,
		};
	}
	/**
	 * 背景マスク
	 */
	const bgMaskClass = classnames( 'ystdb-section__bg', {
		'has-background': backgroundColor.color,
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background-gradient': gradientValue,
		[ gradientClass ]: gradientClass,
		'is-custom-size': useCustomOverlaySize,
	} );
	const getMaskBackground = () => {
		if ( gradientValue ) {
			return gradientValue;
		}
		if ( backgroundColor.color ) {
			return backgroundColor.color;
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

	const divider = ( attr ) => {
		const {
			type,
			reverse,
			position,
			level,
			color,
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
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio={ 'none' }
					style={ style }
				>
					<Path d={ path } fill={ color } />
				</SVG>
			</div>
		);
	};

	/**
	 * Block Props.
	 */
	const blockProps = useBlockProps( {
		className: sectionClass,
		style: sectionStyles,
	} );
	/**
	 * InnerBlocks Props.
	 */
	const innerBlocksProps = useInnerBlocksProps( {
		className: classnames( 'ystdb-section__inner', {
			'has-text-color': textColor.color,
			[ textColor.class ]: textColor.class,
		} ),
		style: {
			maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
			marginRight: 'auto',
			marginLeft: 'auto',
			paddingLeft:
				0 === paddingLeft && ! paddingLeftResponsive
					? undefined
					: getMargin(
							paddingLeftResponsive,
							paddingLeft,
							paddingLeftMobile
					  ),
			paddingRight:
				0 === paddingRight && ! paddingRightResponsive
					? undefined
					: getMargin(
							paddingRightResponsive,
							paddingRight,
							paddingRightMobile
					  ),
		},
	} );
	return (
		<>
			<BlockControls>
				<ToolbarControls.ContainerFluid { ...props } />
			</BlockControls>
			<InspectorControls>
				<div className="ystdb-inspectorcontrols">
					<PanelBody title={ __( '余白設定', 'ystandard-blocks' ) }>
						<BaseControl
							id={ 'margin' }
							label={ __( '余白設定(外側)', 'ystandard-blocks' ) }
						>
							<BaseControl
								id={ 'margin-preset' }
								label={ __(
									'かんたん設定',
									'ystandard-blocks'
								) }
							>
								<div
									className={
										'ystdb-btn-selector components-base-control'
									}
								>
									{ marginType.margin.map( ( item ) => {
										return (
											<Button
												key={ item.value }
												isSecondary
												onClick={ () => {
													setAttributes( {
														marginTop: item.num,
														marginBottom: item.num,
													} );
												} }
											>
												<span>{ item.label }</span>
											</Button>
										);
									} ) }
								</div>
							</BaseControl>
							<BaseControl data-control="margin-top">
								<ResponsiveRangeControl
									id={ 'margin-top' }
									label={ __( '上側', 'ystandard-blocks' ) }
									useResponsive={ marginTopResponsive }
									changeResponsiveMode={ ( value ) => {
										setAttributes( {
											marginTopResponsive: value,
										} );
									} }
									desktopValue={ marginTop }
									desktopOnChange={ ( value ) =>
										setAttributes( {
											marginTop: getNum(
												value,
												-1 * rangeMax,
												rangeMax,
												0
											),
										} )
									}
									desktopControl={ () => {
										return (
											<RangeControl
												value={ marginTop }
												onChange={ ( value ) =>
													setAttributes( {
														marginTop: getNum(
															value,
															-1 * rangeMax,
															rangeMax,
															0
														),
													} )
												}
												min={ -1 * rangeMax }
												max={ rangeMax }
												step={ rangeStep }
											/>
										);
									} }
									min={ -1 * rangeMax }
									max={ rangeMax }
									step={ rangeStep }
									mobileValue={ marginTopMobile }
									mobileUnit={ '' }
									mobileOnChange={ ( value ) =>
										setAttributes( {
											marginTopMobile: getNum(
												value,
												-1 * rangeMax,
												rangeMax,
												0
											),
										} )
									}
								/>
							</BaseControl>
							<BaseControl data-control="margin-bottom">
								<ResponsiveRangeControl
									id={ 'margin-bottom' }
									label={ __( '下側', 'ystandard-blocks' ) }
									useResponsive={ marginBottomResponsive }
									changeResponsiveMode={ ( value ) => {
										setAttributes( {
											marginBottomResponsive: value,
										} );
									} }
									desktopValue={ marginBottom }
									desktopOnChange={ ( value ) =>
										setAttributes( {
											marginBottom: getNum(
												value,
												-1 * rangeMax,
												rangeMax,
												0
											),
										} )
									}
									desktopControl={ () => {
										return (
											<RangeControl
												value={ marginBottom }
												onChange={ ( value ) =>
													setAttributes( {
														marginBottom: getNum(
															value,
															-1 * rangeMax,
															rangeMax,
															0
														),
													} )
												}
												min={ -1 * rangeMax }
												max={ rangeMax }
												step={ rangeStep }
											/>
										);
									} }
									min={ -1 * rangeMax }
									max={ rangeMax }
									step={ rangeStep }
									mobileValue={ marginBottomMobile }
									mobileUnit={ '' }
									mobileOnChange={ ( value ) =>
										setAttributes( {
											marginBottomMobile: getNum(
												value,
												-1 * rangeMax,
												rangeMax,
												0
											),
										} )
									}
								/>
							</BaseControl>
							<p>
								<span className={ `ystdb-info__small` }>
									※数字が大きいほど余白が大きくなります。
								</span>
							</p>
						</BaseControl>
						<BaseControl
							id={ 'padding' }
							label={ __( '余白設定(内側)', 'ystandard-blocks' ) }
						>
							<BaseControl
								id={ 'padding-preset' }
								label={ __(
									'かんたん設定',
									'ystandard-blocks'
								) }
							>
								<div
									className={
										'ystdb-btn-selector components-base-control'
									}
								>
									{ marginType.padding.map( ( item ) => {
										return (
											<Button
												key={ item.value }
												isSecondary
												onClick={ () => {
													setAttributes( {
														paddingTop: item.num,
														paddingBottom: item.num,
													} );
												} }
											>
												<span>{ item.label }</span>
											</Button>
										);
									} ) }
									<br />
									<div>
										<span className={ `ystdb-info__small` }>
											※上下余白のかんたん設定
										</span>
									</div>
								</div>
							</BaseControl>
							<BaseControl data-control="padding-top">
								<ResponsiveRangeControl
									id={ 'padding-top' }
									label={ __( '上側', 'ystandard-blocks' ) }
									useResponsive={ paddingTopResponsive }
									changeResponsiveMode={ ( value ) => {
										setAttributes( {
											paddingTopResponsive: value,
										} );
									} }
									desktopValue={ paddingTop }
									desktopOnChange={ ( value ) =>
										setAttributes( {
											paddingTop: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
									desktopControl={ () => {
										return (
											<RangeControl
												value={ paddingTop }
												onChange={ ( value ) =>
													setAttributes( {
														paddingTop: getNum(
															value,
															rangeMin,
															rangeMax
														),
													} )
												}
												min={ rangeMin }
												max={ rangeMax }
												step={ rangeStep }
											/>
										);
									} }
									min={ rangeMin }
									max={ rangeMax }
									step={ rangeStep }
									mobileValue={ paddingTopMobile }
									mobileUnit={ '' }
									mobileOnChange={ ( value ) =>
										setAttributes( {
											paddingTopMobile: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
								/>
							</BaseControl>
							<BaseControl data-control="padding-bottom">
								<ResponsiveRangeControl
									id={ 'padding-bottom' }
									label={ __( '下側', 'ystandard-blocks' ) }
									useResponsive={ paddingBottomResponsive }
									changeResponsiveMode={ ( value ) => {
										setAttributes( {
											paddingBottomResponsive: value,
										} );
									} }
									desktopValue={ paddingBottom }
									desktopOnChange={ ( value ) =>
										setAttributes( {
											paddingBottom: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
									desktopControl={ () => {
										return (
											<RangeControl
												value={ paddingBottom }
												onChange={ ( value ) =>
													setAttributes( {
														paddingBottom: getNum(
															value,
															rangeMin,
															rangeMax
														),
													} )
												}
												min={ rangeMin }
												max={ rangeMax }
												step={ rangeStep }
											/>
										);
									} }
									min={ rangeMin }
									max={ rangeMax }
									step={ rangeStep }
									mobileValue={ paddingBottomMobile }
									mobileUnit={ '' }
									mobileOnChange={ ( value ) =>
										setAttributes( {
											paddingBottomMobile: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
								/>
							</BaseControl>
							<BaseControl data-control="padding-left">
								<ResponsiveRangeControl
									id={ 'padding-left' }
									label={ __( '左側', 'ystandard-blocks' ) }
									useResponsive={ paddingLeftResponsive }
									changeResponsiveMode={ ( value ) => {
										setAttributes( {
											paddingLeftResponsive: value,
										} );
									} }
									desktopValue={ paddingLeft }
									desktopOnChange={ ( value ) =>
										setAttributes( {
											paddingLeft: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
									desktopControl={ () => {
										return (
											<RangeControl
												value={ paddingLeft }
												onChange={ ( value ) =>
													setAttributes( {
														paddingLeft: getNum(
															value,
															rangeMin,
															rangeMax
														),
													} )
												}
												min={ rangeMin }
												max={ rangeMax }
												step={ rangeStep }
											/>
										);
									} }
									min={ rangeMin }
									max={ rangeMax }
									step={ rangeStep }
									mobileValue={ paddingLeftMobile }
									mobileUnit={ '' }
									mobileOnChange={ ( value ) =>
										setAttributes( {
											paddingLeftMobile: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
								/>
							</BaseControl>
							<BaseControl data-control="padding-right">
								<ResponsiveRangeControl
									id={ 'padding-right' }
									label={ __( '右側', 'ystandard-blocks' ) }
									useResponsive={ paddingRightResponsive }
									changeResponsiveMode={ ( value ) => {
										setAttributes( {
											paddingRightResponsive: value,
										} );
									} }
									desktopValue={ paddingRight }
									desktopOnChange={ ( value ) =>
										setAttributes( {
											paddingRight: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
									desktopControl={ () => {
										return (
											<RangeControl
												value={ paddingRight }
												onChange={ ( value ) =>
													setAttributes( {
														paddingRight: getNum(
															value,
															rangeMin,
															rangeMax
														),
													} )
												}
												min={ rangeMin }
												max={ rangeMax }
												step={ rangeStep }
											/>
										);
									} }
									min={ rangeMin }
									max={ rangeMax }
									step={ rangeStep }
									mobileValue={ paddingRightMobile }
									mobileUnit={ '' }
									mobileOnChange={ ( value ) =>
										setAttributes( {
											paddingRightMobile: getNum(
												value,
												rangeMin,
												rangeMax
											),
										} )
									}
								/>
							</BaseControl>
							<p>
								<span className={ `ystdb-info__small` }>
									※数字が大きいほど余白が大きくなります。
								</span>
							</p>
						</BaseControl>
					</PanelBody>
					<PanelColorGradientSettings
						title={ __(
							'背景色・オーバーレイ',
							'ystandard-blocks'
						) }
						initialOpen={ false }
						settings={ [
							{
								colorValue: backgroundColor.color,
								gradientValue,
								onColorChange: setBackgroundColor,
								onGradientChange: setGradient,
								label: __( '背景色', 'ystandard-blocks' ),
							},
						] }
					>
						<BaseControl
							id={ 'overlay-opacity' }
							label={ __( '不透明度', 'ystandard-blocks' ) }
						>
							<RangeControl
								value={ backgroundImageOpacity }
								onChange={ ( value ) =>
									setAttributes( {
										backgroundImageOpacity: getNum(
											value,
											0,
											100
										),
									} )
								}
								min={ 0 }
								max={ 100 }
								step={ 1 }
							/>
						</BaseControl>
						<BaseControl
							id={ 'overlay-custom-size' }
							label={ __( 'サイズ・配置', 'ystandard-blocks' ) }
						>
							<ToggleControl
								label={ __(
									'サイズ・配置を指定する',
									'ystandard-blocks'
								) }
								checked={ useCustomOverlaySize }
								onChange={ () => {
									if ( useCustomOverlaySize ) {
										setAttributes( {
											overlaySizeX: undefined,
											overlaySizeUnitX: undefined,
											overlaySizeY: undefined,
											overlaySizeUnitY: undefined,
											overlayPositionX: undefined,
											overlayPositionValueX: undefined,
											overlayPositionUnitX: undefined,
											overlayPositionY: undefined,
											overlayPositionValueY: undefined,
											overlayPositionUnitY: undefined,
										} );
									}
									setAttributes( {
										useCustomOverlaySize:
											! useCustomOverlaySize,
									} );
								} }
							/>
						</BaseControl>
						{ useCustomOverlaySize && (
							<>
								<BaseControl
									id={ 'overlay-size' }
									label={ __( 'サイズ', 'ystandard-blocks' ) }
								>
									<div className="ystdb-inspector-controls__columns">
										<span>
											{ __( '幅', 'ystandard-blocks' ) }
										</span>
										<NumberControl
											value={ overlaySizeX }
											onChange={ ( value ) => {
												const newValue =
													'' === value
														? ''
														: getNum(
																value,
																0,
																9999,
																0
														  );
												setAttributes( {
													overlaySizeX:
														newValue.toString(),
												} );
											} }
											min={ 0 }
											max={ 9999 }
											step={ getNumberInputStep(
												overlaySizeUnitX
											) }
											style={ { flexGrow: 1 } }
											__next40pxDefaultSize
										/>
										<SelectControl
											value={ overlaySizeUnitX }
											options={ overlaySizeUnitOption }
											onChange={ ( type ) => {
												setAttributes( {
													overlaySizeUnitX: type,
												} );
											} }
											__next40pxDefaultSize
											__nextHasNoMarginBottom
										/>
									</div>
									<div className="ystdb-inspector-controls__columns">
										<span>
											{ __( '高さ', 'ystandard-blocks' ) }
										</span>
										<NumberControl
											value={ overlaySizeY }
											onChange={ ( value ) => {
												const newValue =
													'' === value
														? ''
														: getNum(
																value,
																0,
																9999,
																0
														  );
												setAttributes( {
													overlaySizeY:
														newValue.toString(),
												} );
											} }
											min={ 0 }
											max={ 9999 }
											step={ getNumberInputStep(
												overlaySizeUnitY
											) }
											style={ { flexGrow: 1 } }
											__next40pxDefaultSize
										/>
										<SelectControl
											value={ overlaySizeUnitY }
											options={ overlaySizeUnitOption }
											onChange={ ( type ) => {
												setAttributes( {
													overlaySizeUnitY: type,
												} );
											} }
											__next40pxDefaultSize
											__nextHasNoMarginBottom
										/>
									</div>
								</BaseControl>
								<BaseControl
									id={ 'overlay-position' }
									label={ __( '配置', 'ystandard-blocks' ) }
								>
									<div className="ystdb-inspector-controls__columns">
										<SelectControl
											value={ overlayPositionX }
											options={ overlayPositionXOption }
											onChange={ ( type ) => {
												setAttributes( {
													overlayPositionX: type,
												} );
											} }
											__next40pxDefaultSize
											__nextHasNoMarginBottom
										/>
										<NumberControl
											value={ overlayPositionValueX }
											onChange={ ( value ) => {
												const newValue =
													'' === value
														? ''
														: getNum(
																value,
																0,
																9999,
																0
														  );
												setAttributes( {
													overlayPositionValueX:
														newValue.toString(),
												} );
											} }
											min={ 0 }
											max={ 9999 }
											step={ getNumberInputStep(
												overlayPositionUnitX
											) }
											style={ { flexGrow: 1 } }
											__next40pxDefaultSize
										/>

										<SelectControl
											value={ overlayPositionUnitX }
											options={ overlaySizeUnitOption }
											onChange={ ( type ) => {
												setAttributes( {
													overlayPositionUnitX: type,
												} );
											} }
										/>
									</div>
									<div className="ystdb-inspector-controls__columns">
										<SelectControl
											value={ overlayPositionY }
											options={ overlayPositionYOption }
											onChange={ ( type ) => {
												setAttributes( {
													overlayPositionY: type,
												} );
											} }
											__next40pxDefaultSize
											__nextHasNoMarginBottom
										/>
										<NumberControl
											value={ overlayPositionValueY }
											onChange={ ( value ) => {
												const newValue =
													'' === value
														? ''
														: getNum(
																value,
																0,
																9999,
																0
														  );
												setAttributes( {
													overlayPositionValueY:
														newValue.toString(),
												} );
											} }
											min={ 0 }
											max={ 9999 }
											step={ getNumberInputStep(
												overlayPositionUnitY
											) }
											style={ { flexGrow: 1 } }
											__next40pxDefaultSize
										/>

										<SelectControl
											value={ overlayPositionUnitY }
											options={ overlaySizeUnitOption }
											onChange={ ( type ) => {
												setAttributes( {
													overlayPositionUnitY: type,
												} );
											} }
											__next40pxDefaultSize
											__nextHasNoMarginBottom
										/>
									</div>
								</BaseControl>
							</>
						) }
					</PanelColorGradientSettings>
					<PanelBody
						title={ __( '背景画像・動画', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<BlockOptions.BackgroundImage { ...props } />
						{ backgroundImageURL &&
							BACKGROUND_TYPE_IMAGE === backgroundType && (
								<BaseControl>
									<ToggleControl
										label={ __(
											'プレビューの背景を暗くする',
											'ystandard-blocks'
										) }
										checked={ useDarkImagePreview }
										onChange={ () => {
											setUseDarkImagePreview(
												! useDarkImagePreview
											);
										} }
									/>
								</BaseControl>
							) }
						{ showFocalPointPicker && backgroundImageURL && (
							<>
								<BaseControl
									id={ 'background-point' }
									label={ __(
										'表示位置',
										'ystandard-blocks'
									) }
								>
									<FocalPointPicker
										label={ __( 'Focal point picker' ) }
										url={ backgroundImageURL }
										value={ focalPoint }
										onChange={ ( newFocalPoint ) => {
											setAttributes( {
												focalPoint: newFocalPoint,
											} );
										} }
										className={ classnames( {
											'dark-focal-point-picker':
												useDarkImagePreview,
										} ) }
									/>
								</BaseControl>
								<BaseControl
									id={ 'background-size' }
									label={ __( 'サイズ', 'ystandard-blocks' ) }
								>
									<SelectControl
										value={ backgroundImageSize }
										options={ backgroundImageSizeOption }
										onChange={ ( type ) => {
											setAttributes( {
												backgroundImageSize: type,
											} );
											if ( 'custom' !== type ) {
												setAttributes( {
													backgroundImageSizeX:
														undefined,
													backgroundImageSizeY:
														undefined,
													backgroundImageSizeUnitX:
														'px',
													backgroundImageSizeUnitY:
														'px',
												} );
											}
										} }
										__next40pxDefaultSize
										__nextHasNoMarginBottom
									/>
									{ 'custom' === backgroundImageSize && (
										<>
											<div className="ystdb-inspector-controls__columns">
												<span>
													{ __(
														'幅',
														'ystandard-blocks'
													) }
												</span>
												<NumberControl
													value={
														backgroundImageSizeX
													}
													onChange={ ( value ) => {
														const newValue =
															'' === value
																? ''
																: getNum(
																		value,
																		0,
																		9999,
																		0
																  );
														setAttributes( {
															backgroundImageSizeX:
																newValue.toString(),
														} );
													} }
													min={ 0 }
													max={ 9999 }
													step={ getNumberInputStep(
														backgroundImageSizeUnitX
													) }
													style={ { flexGrow: 1 } }
													__next40pxDefaultSize
												/>
												<SelectControl
													value={
														backgroundImageSizeUnitX
													}
													options={
														backgroundImageSizeUnitOption
													}
													onChange={ ( type ) => {
														setAttributes( {
															backgroundImageSizeUnitX:
																type,
														} );
													} }
													__next40pxDefaultSize
													__nextHasNoMarginBottom
												/>
											</div>
											<div className="ystdb-inspector-controls__columns">
												<span>
													{ __(
														'高さ',
														'ystandard-blocks'
													) }
												</span>
												<NumberControl
													value={
														backgroundImageSizeY
													}
													onChange={ ( value ) => {
														const newValue =
															'' === value
																? ''
																: getNum(
																		value,
																		0,
																		9999,
																		0
																  );
														setAttributes( {
															backgroundImageSizeY:
																newValue.toString(),
														} );
													} }
													min={ 0 }
													max={ 9999 }
													step={ getNumberInputStep(
														backgroundImageSizeUnitY
													) }
													style={ { flexGrow: 1 } }
													__next40pxDefaultSize
												/>
												<SelectControl
													value={
														backgroundImageSizeUnitY
													}
													options={
														backgroundImageSizeUnitOption
													}
													onChange={ ( type ) => {
														setAttributes( {
															backgroundImageSizeUnitY:
																type,
														} );
													} }
													__next40pxDefaultSize
													__nextHasNoMarginBottom
												/>
											</div>
										</>
									) }
								</BaseControl>
								<BaseControl
									id={ 'background-repeat' }
									label={ __(
										'繰り返し',
										'ystandard-blocks'
									) }
								>
									<SelectControl
										value={ backgroundImageRepeat }
										options={ backgroundImageRepeatOption }
										onChange={ ( type ) => {
											setAttributes( {
												backgroundImageRepeat: type,
											} );
										} }
										__next40pxDefaultSize
										__nextHasNoMarginBottom
									/>
								</BaseControl>
								<BaseControl
									id={ 'background-opacity' }
									label={ __(
										'固定背景',
										'ystandard-blocks'
									) }
								>
									<ToggleControl
										label={ __(
											'背景を固定する',
											'ystandard-blocks'
										) }
										checked={ backgroundImageParallax }
										onChange={ () => {
											setAttributes( {
												backgroundImageParallax:
													! backgroundImageParallax,
											} );
										} }
									/>
								</BaseControl>
							</>
						) }
						<PanelBody
							title={ __( '背景パターン', 'ystandard-blocks' ) }
							initialOpen={ false }
						>
							<BaseControl>
								<div className="ystdb-inspector-controls__dscr">
									背景パターン画像を使うときに便利な設定です。
								</div>
							</BaseControl>
							<BaseControl
								id={ 'background-pattern-overlay' }
								label={ __(
									'オーバーレイ',
									'ystandard-blocks'
								) }
							>
								<ToggleControl
									label={ __(
										'背景画像をオーバーレイより前に重ねる',
										'ystandard-blocks'
									) }
									checked={ backgroundImageOnOverlay }
									onChange={ () => {
										if ( backgroundImageOnOverlay ) {
											setAttributes( {
												backgroundImageOnOverlayOpacity: 80,
											} );
										}
										setAttributes( {
											backgroundImageOnOverlay:
												! backgroundImageOnOverlay,
										} );
									} }
								/>
								<div className="ystdb-inspector-controls__dscr">
									白など明るい色のパターン画像を使う場合はこの設定をONにしてください。
								</div>
							</BaseControl>
							{ backgroundImageOnOverlay && (
								<BaseControl
									id={ 'background-pattern-overlay-opacity' }
									label={ __(
										'背景画像の不透明度',
										'ystandard-blocks'
									) }
								>
									<RangeControl
										value={
											backgroundImageOnOverlayOpacity
										}
										onChange={ ( value ) =>
											setAttributes( {
												backgroundImageOnOverlayOpacity:
													getNum( value, 0, 100 ),
											} )
										}
										min={ 0 }
										max={ 100 }
										step={ 1 }
									/>
								</BaseControl>
							) }
							<BaseControl
								id={ 'background-pattern-preset' }
								label={ __(
									'サンプル背景パターン',
									'ystandard-blocks'
								) }
							>
								{ !! ystdb.sectionBackgroundPatterns ? (
									<>
										<div className="ystdb-inspector-controls__dscr">
											背景パターンのサンプルデザインです。デザインを選択すると、必要な設定がセットされます。
										</div>
										<div className="ystdb__design-select">
											{ ystdb.sectionBackgroundPatterns.map(
												( item ) => {
													const imageUrl = item.image;
													return (
														<Button
															key={ item.name }
															onClick={ () => {
																setAttributes( {
																	...convertPHPObject2JS(
																		item.value
																	),
																	backgroundImageURL:
																		imageUrl,
																} );
																setUseDarkImagePreview(
																	item.useDarkPreview
																);
															} }
															style={ {
																...item.style,
																backgroundImage: `url('${ imageUrl }')`,
																backgroundColor:
																	item.useDarkPreview
																		? DARK_IMAGE_PREVIEW_COLOR
																		: undefined,
															} }
														>
															<span
																style={ {
																	opacity: 0,
																} }
															>
																{ item.name }
															</span>
														</Button>
													);
												}
											) }
										</div>
									</>
								) : (
									<>
										<div className="ystdb-premium-feature">
											<ExternalLink
												herf={
													'https://wp-ystandard.com/plugins/ystandard-toolbox/'
												}
											>
												yStandard Toolbox
											</ExternalLink>
											をインストール・有効化している場合、サンプル背景パターンを利用できます。
										</div>
									</>
								) }
							</BaseControl>
						</PanelBody>
					</PanelBody>
					<PanelBody
						title={ __( '枠線設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<BlockOptions.BorderSize { ...props } />
						<BlockOptions.BorderStyle { ...props } />
						<BlockOptions.BorderColor { ...props } />
					</PanelBody>
					<PanelBody
						title={ __( '文字設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<BaseControl
							id={ 'text-color' }
							label={ __( '文字色', 'ystandard-blocks' ) }
						>
							<ColorPaletteControl
								label={ __( '文字色', 'ystandard-blocks' ) }
								value={ textColor.color }
								onChange={ ( color ) => {
									setTextColor( color );
								} }
							/>
							<ContrastChecker
								backgroundColor={ backgroundColor.color }
								textColor={ textColor.color }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={ __( '区切り線（上）', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className="ystdb-inspector-controls__dscr">
							タイプ・レベル・色をすべて設定すると表示されます。
							<br />
							<br />
						</div>
						<BaseControl
							id={ 'divider-top-type' }
							label={ __( 'タイプ', 'ystandard-blocks' ) }
						>
							<div
								className={
									'ystdb-btn-selector components-base-control'
								}
							>
								{ dividerTypes.map( ( item ) => {
									return (
										<Button
											key={ item.value }
											isSecondary={
												dividerTypeTop !== item.value
											}
											isPrimary={
												dividerTypeTop === item.value
											}
											onClick={ () => {
												setAttributes( {
													dividerTypeTop: item.value,
												} );
											} }
										>
											<span>{ item.label }</span>
										</Button>
									);
								} ) }
							</div>
						</BaseControl>
						<BaseControl>
							<ToggleControl
								label={ __(
									'左右反転させる',
									'ystandard-blocks'
								) }
								checked={
									dividerTopReverse || 0 > dividerLevelTop
								}
								onChange={ () => {
									setAttributes( {
										dividerTopReverse: ! dividerTopReverse,
									} );
								} }
							/>
						</BaseControl>
						<ResponsiveRangeControl
							id={ 'divider-level-top' }
							label={ __( 'レベル', 'ystandard-blocks' ) }
							useResponsive={ dividerTopResponsive }
							changeResponsiveMode={ ( value ) => {
								setAttributes( {
									dividerTopResponsive: value,
								} );
							} }
							desktopValue={ Math.abs( dividerLevelTop ) }
							desktopUnit={ '' }
							desktopOnChange={ ( value ) =>
								setAttributes( {
									dividerLevelTop: getNum( value, 0, 100, 0 ),
								} )
							}
							min={ 0 }
							max={ 100 }
							mobileValue={ dividerLevelTopMobile }
							mobileUnit={ '' }
							mobileOnChange={ ( value ) =>
								setAttributes( {
									dividerLevelTopMobile: getNum(
										value,
										0,
										100,
										0
									),
								} )
							}
						/>
						<BaseControl
							id={ 'divider-top-color' }
							label={ __( '色', 'ystandard-blocks' ) }
						>
							<ColorPaletteControl
								label={ __( '色', 'ystandard-blocks' ) }
								value={ dividerColorTop.color }
								onChange={ ( color ) => {
									setDividerColorTop( color );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={ __( '区切り線（下）', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className="ystdb-inspector-controls__dscr">
							タイプ・レベル・色をすべて設定すると表示されます。
							<br />
							<br />
						</div>
						<BaseControl
							id={ 'divider-bottom-type' }
							label={ __( 'タイプ', 'ystandard-blocks' ) }
						>
							<div
								className={
									'ystdb-btn-selector components-base-control'
								}
							>
								{ dividerTypes.map( ( item ) => {
									return (
										<Button
											key={ item.value }
											isSecondary={
												dividerTypeBottom !== item.value
											}
											isPrimary={
												dividerTypeBottom === item.value
											}
											onClick={ () => {
												setAttributes( {
													dividerTypeBottom:
														item.value,
												} );
											} }
										>
											<span>{ item.label }</span>
										</Button>
									);
								} ) }
							</div>
						</BaseControl>
						<BaseControl>
							<ToggleControl
								label={ __(
									'左右反転させる',
									'ystandard-blocks'
								) }
								checked={
									dividerBottomReverse ||
									0 > dividerLevelBottom
								}
								onChange={ () => {
									setAttributes( {
										dividerBottomReverse:
											! dividerBottomReverse,
									} );
								} }
							/>
						</BaseControl>
						<ResponsiveRangeControl
							label={ __( 'レベル', 'ystandard-blocks' ) }
							useResponsive={ dividerBottomResponsive }
							changeResponsiveMode={ ( value ) => {
								setAttributes( {
									dividerBottomResponsive: value,
								} );
							} }
							desktopValue={ Math.abs( dividerLevelBottom ) }
							desktopUnit={ '' }
							desktopOnChange={ ( value ) =>
								setAttributes( {
									dividerLevelBottom: getNum(
										value,
										0,
										100,
										0
									),
								} )
							}
							min={ 0 }
							max={ 100 }
							mobileValue={ dividerLevelBottomMobile }
							mobileUnit={ '' }
							mobileOnChange={ ( value ) =>
								setAttributes( {
									dividerLevelBottomMobile: getNum(
										value,
										-100,
										100,
										0
									),
								} )
							}
						/>
						<BaseControl
							id={ 'divider-bottom-color' }
							label={ __( '色', 'ystandard-blocks' ) }
						>
							<ColorPaletteControl
								label={ __( '色', 'ystandard-blocks' ) }
								value={ dividerColorBottom.color }
								onChange={ ( color ) => {
									setDividerColorBottom( color );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelContentWidth { ...props } />
					<PanelBody
						title={ __( 'セクション高さ設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className="ystdb-inspector-controls__label">
							{ __( '高さ設定', 'ystandard-blocks' ) }
						</div>
						<ToggleControl
							label={ __(
								'画面と同じ高さにする',
								'ystandard-blocks'
							) }
							checked={ screenHeightMode }
							onChange={ () => {
								setAttributes( {
									screenHeightMode: ! screenHeightMode,
								} );
							} }
						/>
						<RangeControl
							label={ __(
								'セクション最小高さ',
								'ystandard-blocks'
							) }
							value={ sectionMinHeight }
							onChange={ ( value ) =>
								setAttributes( {
									sectionMinHeight: getNum(
										value,
										0,
										1000,
										0
									),
								} )
							}
							min={ 0 }
							max={ 1000 }
							allowReset={ true }
						/>
						<div className="ystdb-inspector-controls__dscr">
							※「画面と同じ高さにする」をONにした場合、セクション最小高さも合わせて設定してください。（例：500）
						</div>
					</PanelBody>
					<PanelBody
						title={ __( 'アニメーション設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<BaseControl>
							<SelectControl
								label={ __(
									'アニメーション種類',
									'ystandard-blocks'
								) }
								value={ animationType }
								options={ animationTypes }
								onChange={ ( type ) => {
									setAttributes( {
										animationType: type,
									} );
								} }
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</BaseControl>
						<BaseControl>
							<RangeControl
								label={ __(
									'アニメーション速度',
									'ystandard-blocks'
								) }
								value={ getNum( animationSpeed, 1, 10, 2 ) }
								onChange={ ( value ) =>
									setAttributes( {
										animationSpeed: getNum(
											value,
											1,
											10,
											2
										),
									} )
								}
								min={ 1 }
								max={ 10 }
								step={ 0.1 }
								allowReset={ true }
							/>
						</BaseControl>
						<BaseControl>
							<RangeControl
								label={ __(
									'アニメーション開始までの時間',
									'ystandard-blocks'
								) }
								value={ getNum( animationDelay, 0, 10, 0 ) }
								onChange={ ( value ) =>
									setAttributes( {
										animationDelay: getNum(
											value,
											0,
											10,
											0
										),
									} )
								}
								min={ 0 }
								max={ 10 }
								step={ 0.1 }
								allowReset={ true }
							/>
						</BaseControl>
						<BaseControl>
							<Button
								key={ 'check-animation' }
								isPrimary
								onClick={ () => {
									setPreviewAnimation( ! previewAnimation );
									if ( ! previewAnimation ) {
										setTimeout(
											() => {
												setPreviewAnimation( false );
											},
											( animationDelay +
												animationSpeed ) *
												1000
										);
									}
								} }
							>
								{ previewAnimation
									? __(
											'アニメーションの停止',
											'ystandard-blocks'
									  )
									: __(
											'アニメーションの確認',
											'ystandard-blocks'
									  ) }
							</Button>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={ __( 'HTMLタグ設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<p>
							<span className={ `ystdb-info__small` }>
								コンテンツを囲むHTMLタグを選択できます。
							</span>
						</p>
						<div
							className={
								'ystdb-btn-selector components-base-control'
							}
						>
							{ wrapperTagNames.map( ( item ) => {
								return (
									<Button
										key={ item.tag }
										isSecondary={ wrapperTag !== item.tag }
										isPrimary={ wrapperTag === item.tag }
										onClick={ () => {
											setAttributes( {
												wrapperTag: item.tag,
											} );
										} }
									>
										<span>{ item.tag }</span>
									</Button>
								);
							} ) }
						</div>
					</PanelBody>
				</div>
			</InspectorControls>

			<div { ...blockProps }>
				{ isVideoBackground && (
					<video
						className="ystdb-section__video-background"
						autoPlay
						muted
						loop
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
				{ 0 !== dividerLevelTop &&
					dividerColorTop.color &&
					divider( {
						type: dividerTypeTop,
						reverse: dividerTopReverse,
						position: 'top',
						level: dividerLevelTop,
						color: dividerColorTop.color,
						useResponsive: dividerTopResponsive,
						levelMobile: dividerLevelTopMobile,
					} ) }
				{ 0 !== dividerLevelBottom &&
					dividerColorBottom.color &&
					divider( {
						type: dividerTypeBottom,
						reverse: dividerBottomReverse,
						position: 'bottom',
						level: dividerLevelBottom,
						color: dividerColorBottom.color,
						useResponsive: dividerBottomResponsive,
						levelMobile: dividerLevelBottomMobile,
					} ) }
				<div className="ystdb-section__container">
					<Wrapper { ...innerBlocksProps } />
				</div>
			</div>
		</>
	);
};

export default compose( [
	withColors( 'backgroundColor', {
		textColor: 'color',
		dividerColorTop: 'fill',
		dividerColorBottom: 'fill',
		borderColor: 'borderColor',
	} ),
] )( SectionEdit );
