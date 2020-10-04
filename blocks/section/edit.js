import classnames from 'classnames';
import {
	marginType,
	wrapperTagNames,
	dividerTypes,
	animationTypes,
	dividerPath,
	backgroundImageSizeOption,
	backgroundImageSizeUnitOption,
	backgroundImageRepeatOption,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
} from './config';
import {
	getBackgroundPosition,
	getBackgroundSize,
} from './shared';
import getNum from '../../src/js/util/_getNum';
import { select } from '@wordpress/data';

import {
	InspectorControls,
	ContrastChecker,
	withColors,
	InnerBlocks,
	MediaUpload,
	__experimentalBlock as Block,
} from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
	RangeControl,
	Button,
	SVG,
	Path,
	ColorPalette,
	ToggleControl,
	SelectControl,
	FocalPointPicker,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

import { Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import getNumberInputStep from "../../src/js/util/_getNumberInputStep";

const sectionEdit = ( props ) => {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		textColor,
		dividerColorTop,
		dividerColorBottom,
		setBackgroundColor,
		setTextColor,
		setDividerColorTop,
		setDividerColorBottom,
		className,
	} = props;
	const {
		wrapperTag,
		marginTop,
		marginBottom,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		backgroundType,
		focalPoint,
		backgroundImageURL,
		backgroundImageAlt,
		backgroundImageID,
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
		dividerTypeBottom,
		dividerLevelBottom,
		screenHeightMode,
		sectionMinHeight,
		animationType,
		animationSpeed,
	} = attributes;

	const { colors } = select( 'core/block-editor' ).getSettings();

	const rangeStep = 1;
	const rangeMax = 200;
	const rangeMin = 0;

	const Wrapper = wrapperTag;
	/**
	 * 背景画像関連
	 */
	const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];
	const showBgMask = backgroundImageURL || backgroundColor.color;
	const isImageBackground = IMAGE_BACKGROUND_TYPE === backgroundType;
	const isVideoBackground = VIDEO_BACKGROUND_TYPE === backgroundType;
	const showFocalPointPicker = ! isVideoBackground || ( isImageBackground && ! backgroundImageParallax );

	/**
	 * 編集画面のラッパー
	 */
	const editWrapStyle = {
		paddingTop: 0 === marginTop ? 0 : marginTop + 'px',
		paddingBottom: 0 === marginBottom ? 0 : marginBottom + 'px',
	};

	/**
	 * セクションクラス名
	 */
	const sectionClass = classnames( className, 'ystdb-section', {
		'has-background-image': isImageBackground,
		'has-background-video': isVideoBackground,
		'is-screen-height': screenHeightMode,
	} );


	/**
	 * セクションスタイル
	 */
	const sectionStyles = {
			color: textColor.color,
			paddingTop: 0 === paddingTop ? 0 : paddingTop + 'px',
			paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'px',
			backgroundImage: backgroundImageURL && isImageBackground
				? `url("${ backgroundImageURL }")`
				: undefined,
			minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
			backgroundPosition: getBackgroundPosition( showFocalPointPicker, focalPoint ),
			backgroundSize: getBackgroundSize(
				backgroundImageSize,
				backgroundImageSizeX,
				backgroundImageSizeY,
				backgroundImageSizeUnitX,
				backgroundImageSizeUnitY,
			),
			backgroundRepeat: 'no-repeat' === backgroundImageRepeat ? undefined : backgroundImageRepeat,
		}
	;

	/**
	 * 背景マスク
	 */
	const bgMaskClass = classnames( 'ystdb-section__bg', {
		'has-background': backgroundColor.color,
		[ backgroundColor.class ]: backgroundColor.class,
	} );
	const bgMaskStyle = {
		backgroundColor: backgroundColor.color ? backgroundColor.color : '#000',
		opacity: backgroundImageOpacity / 100,
	};
	/**
	 * インナー
	 */
	const innerClasses = classnames( 'ystdb-section__inner', {
		'has-text-color': textColor.color,
		[ textColor.class ]: textColor.class,
	} );
	const innerStyles = {
		maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'px',
		paddingRight: 0 === paddingRight ? 0 : paddingRight + 'px',
	};

	/**
	 * 画像設定コントロール
	 *
	 * @param {Object} obj
	 */
	const mediaUploadRender = ( obj ) => {
		if ( 0 === backgroundImageID ) {
			return (
				<Button isSecondary onClick={ obj.open }>
					{ __( '背景画像を選択', 'ystandard-blocks' ) }
				</Button>
			);
		}
		return (
			<div>
				<Button
					onClick={ obj.open }
					className={ 'ystdb-mediaupload__preview' }
					style={ { padding: 0 } }
				>
					{ backgroundType === IMAGE_BACKGROUND_TYPE && (
						<img src={ backgroundImageURL } alt={ backgroundImageAlt }/>
					) }
					{ backgroundType === VIDEO_BACKGROUND_TYPE && (
						<video
							autoPlay
							muted
							loop
							src={ backgroundImageURL }
						/>
					) }
				</Button>
				<Button
					isSecondary
					onClick={ () => {
						setAttributes( {
							backgroundImageURL: '',
							backgroundImageID: 0,
							backgroundType: undefined,
							focalPoint: undefined,
						} );
					} }
				>
					{ __( '背景画像をクリア', 'ystandard-blocks' ) }
				</Button>
			</div>
		);
	};

	const divider = ( type, position, level, color ) => {
		const dividerClass = classnames(
			'ystdb-section__divider',
			`ystdb-section__divider--${ position }`,
			`ystdb-section__divider--${ type }`
		);
		const path = dividerPath( type, level );
		return (
			<div className={ dividerClass }>
				<SVG
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<Path d={ path } strokewidth="0" fill={ color }/>
				</SVG>
			</div>
		);
	};
	return (
		<Fragment>
			<InspectorControls>
				<div className="ystdb-inspectorcontrols">
					<PanelBody title={ __( '余白設定', 'ystandard-blocks' ) }>
						<BaseControl id={ 'margin' } label={ __( '余白設定(外側)', 'ystandard-blocks' ) }>
							<div className={ `ystdb-info__label` }>
								かんたん設定
							</div>
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
							<RangeControl
								label={ __( '上側', 'ystandard-blocks' ) }
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
							<RangeControl
								label={ __( '下側', 'ystandard-blocks' ) }
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
							<p>
								<span className={ `ystdb-info__small` }>
									※数字が大きいほど余白が大きくなります。
								</span>
							</p>
						</BaseControl>
						<BaseControl>
							<div className="ystdb-inspector-controls__label">
								{ __( '余白設定(内側)', 'ystandard-blocks' ) }
							</div>
							<div className={ `ystdb-info__label` }>
								かんたん設定
							</div>
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
								<br/>
								<div>
									<span className={ `ystdb-info__small` }>
										※上下余白のかんたん設定
									</span>
								</div>
							</div>
							<RangeControl
								label={ __( '上側', 'ystandard-blocks' ) }
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
							<RangeControl
								label={ __( '下側', 'ystandard-blocks' ) }
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
							<RangeControl
								label={ __( '左側', 'ystandard-blocks' ) }
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
							<RangeControl
								label={ __( '右側', 'ystandard-blocks' ) }
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
							<div>
								<span className={ `ystdb-info__small` }>
									※数字が大きいほど余白が大きくなります。
								</span>
							</div>
						</BaseControl>
					</PanelBody>
					<PanelBody title={ __( '背景設定', 'ystandard-blocks' ) } initialOpen={ false }>
						<BaseControl id={ 'background-color' } label={ __( '背景色', 'ystandard-blocks' ) }>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setBackgroundColor( color );
								} }
								value={ backgroundColor.color }
							/>
						</BaseControl>
						<BaseControl id={ 'background-opacity' } label={ __( '背景色の濃さ', 'ystandard-blocks' ) }>
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
						<BaseControl id={ 'background-image' } label={ __( '背景画像', 'ystandard-blocks' ) }>
							<div>
								<MediaUpload
									onSelect={ ( media ) => {
										let mediaType;
										if ( media.media_type ) {
											if ( media.media_type === IMAGE_BACKGROUND_TYPE ) {
												mediaType = IMAGE_BACKGROUND_TYPE;
											} else {
												mediaType = VIDEO_BACKGROUND_TYPE;
											}
										} else {
											if (
												media.type !== IMAGE_BACKGROUND_TYPE &&
												media.type !== VIDEO_BACKGROUND_TYPE
											) {
												return;
											}
											mediaType = media.type;
										}
										setAttributes( {
											backgroundImageURL: media.url,
											backgroundImageID: media.id,
											backgroundImageAlt: media.alt,
											backgroundType: mediaType,
										} );
										if ( 100 === backgroundImageOpacity ) {
											setAttributes( {
												backgroundImageOpacity: 50,
											} );
										}
									} }
									type={ ALLOWED_MEDIA_TYPES }
									value={ backgroundImageID }
									render={ mediaUploadRender }
								/>
							</div>
						</BaseControl>
						{ showFocalPointPicker && backgroundImageURL && (
							<>
								<BaseControl id={ 'background-point' } label={ __( '表示位置', 'ystandard-blocks' ) }>
									<FocalPointPicker
										label={ __( 'Focal point picker' ) }
										url={ backgroundImageURL }
										value={ focalPoint }
										onChange={ ( newFocalPoint ) => {
											setAttributes( {
												focalPoint: newFocalPoint,
											} )
										}
										}
									/>
								</BaseControl>
								<BaseControl id={ 'background-size' } label={ __( 'サイズ', 'ystandard-blocks' ) }>
									<SelectControl
										value={ backgroundImageSize }
										options={ backgroundImageSizeOption }
										onChange={ ( type ) => {
											setAttributes( {
												backgroundImageSize: type,
											} );
											if ( 'custom' !== type ) {
												setAttributes( {
													backgroundImageSizeX: undefined,
													backgroundImageSizeY: undefined,
													backgroundImageSizeUnitX: 'px',
													backgroundImageSizeUnitY: 'px',
												} );
											}
										} }
									/>
									{ 'custom' === backgroundImageSize && (
										<>
											<div className="ystdb-inspector-controls__columns">
												<span>{ __( '幅　', 'ystandard-blocks' ) }</span>
												<NumberControl
													value={ backgroundImageSizeX }
													onChange={ ( value ) => {
														const newValue =
															'' === value
																? ''
																: getNum( value, 0, 9999, 0 );
														setAttributes( {
															backgroundImageSizeX: newValue.toString(),
														} );
													} }
													min={ 0 }
													max={ 9999 }
													step={ getNumberInputStep( backgroundImageSizeX ) }
													style={ { flexGrow: 1 } }
												/>
												<SelectControl
													value={ backgroundImageSizeUnitX }
													options={ backgroundImageSizeUnitOption }
													onChange={ ( type ) => {
														setAttributes( {
															backgroundImageSizeUnitX: type,
														} );
													} }
												/>
											</div>
											<div className="ystdb-inspector-controls__columns">
												<span>{ __( '高さ', 'ystandard-blocks' ) }</span>
												<NumberControl
													value={ backgroundImageSizeY }
													onChange={ ( value ) => {
														const newValue =
															'' === value
																? ''
																: getNum( value, 0, 9999, 0 );
														setAttributes( {
															backgroundImageSizeY: newValue.toString(),
														} );
													} }
													min={ 0 }
													max={ 9999 }
													step={ getNumberInputStep( backgroundImageSizeY ) }
													style={ { flexGrow: 1 } }
												/>
												<SelectControl
													value={ backgroundImageSizeUnitY }
													options={ backgroundImageSizeUnitOption }
													onChange={ ( type ) => {
														setAttributes( {
															backgroundImageSizeUnitY: type,
														} );
													} }
												/>
											</div>
										</>
									) }
								</BaseControl>
								<BaseControl id={ 'background-repeat' } label={ __( '繰り返し', 'ystandard-blocks' ) }>
									<SelectControl
										value={ backgroundImageRepeat }
										options={ backgroundImageRepeatOption }
										onChange={ ( type ) => {
											setAttributes( {
												backgroundImageRepeat: type,
											} );
										} }
									/>
								</BaseControl>
							</>
						) }
						<BaseControl id={ 'background-opacity' } label={ __( '固定背景', 'ystandard-blocks' ) }>
							<ToggleControl
								label={ __( '背景を固定する', 'ystandard-blocks' ) }
								checked={ backgroundImageParallax }
								onChange={ () => {
									setAttributes( {
										backgroundImageParallax: ! backgroundImageParallax,
									} );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title={ __( '文字設定', 'ystandard-blocks' ) } initialOpen={ false }>
						<BaseControl
							id={ 'text-color' }
							label={ __( '文字色', 'ystandard-blocks' ) }
						>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setTextColor( color );
								} }
								value={ textColor.color }
							/>
							<ContrastChecker
								backgroundColor={ backgroundColor.color }
								textColor={ textColor.color }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title={ __( '区切り線（上）', 'ystandard-blocks' ) } initialOpen={ false }>
						<div className="ystdb-inspector-controls__dscr">
							タイプ・レベル・色をすべて設定すると表示されます。<br/><br/>
						</div>
						<BaseControl
							id={ 'divider-top-type' }
							label={ __( 'タイプ', 'ystandard-blocks' ) }
						>
							<div className={ 'ystdb-btn-selector components-base-control' }>
								{ dividerTypes.map( ( item ) => {
									return (
										<Button
											key={ item.value }
											isSecondary={ dividerTypeTop !== item.value }
											isPrimary={ dividerTypeTop === item.value }
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
						<RangeControl
							label={ __( 'レベル', 'ystandard-blocks' ) }
							value={ dividerLevelTop }
							onChange={ ( value ) =>
								setAttributes( {
									dividerLevelTop: getNum(
										value,
										-100,
										100,
										0
									),
								} )
							}
							min={ -100 }
							max={ 100 }
							allowReset={ true }
						/>
						<BaseControl
							id={ 'divider-top-color' }
							label={ __( '色', 'ystandard-blocks' ) }
						>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setDividerColorTop( color );
								} }
								value={ dividerColorTop.color }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={ __( '区切り線（下）', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className="ystdb-inspector-controls__dscr">
							タイプ・レベル・色をすべて設定すると表示されます。<br/><br/>
						</div>
						<BaseControl
							id={ 'divider-bottom-type' }
							label={ __( 'タイプ', 'ystandard-blocks' ) }
						>
							<div className={ 'ystdb-btn-selector components-base-control' }>
								{ dividerTypes.map( ( item ) => {
									return (
										<Button
											key={ item.value }
											isSecondary={ dividerTypeBottom !== item.value }
											isPrimary={ dividerTypeBottom === item.value }
											onClick={ () => {
												setAttributes( {
													dividerTypeBottom: item.value,
												} );
											} }
										>
											<span>{ item.label }</span>
										</Button>
									);
								} ) }
							</div>
						</BaseControl>
						<RangeControl
							label={ __( 'レベル', 'ystandard-blocks' ) }
							value={ dividerLevelBottom }
							onChange={ ( value ) =>
								setAttributes( {
									dividerLevelBottom: getNum(
										value,
										-100,
										100,
										0
									),
								} )
							}
							min={ -100 }
							max={ 100 }
							allowReset={ true }
						/>
						<BaseControl
							id={ 'divider-bottom-color' }
							label={ __( '色', 'ystandard-blocks' ) }
						>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setDividerColorBottom( color );
								} }
								value={ dividerColorBottom.color }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={ __( 'コンテンツ幅設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className={ `ystdb-info__label` }>かんたん設定</div>
						<div
							className={
								'ystdb-btn-selector components-base-control'
							}
						>
							{ marginType.innerWidth.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isSecondary
										onClick={ () => {
											setAttributes( {
												innerCustomWidth: item.num,
											} );
										} }
									>
										<span>{ item.label }</span>
									</Button>
								);
							} ) }
						</div>
						<RangeControl
							label={ __(
								'コンテンツ部分の最大幅',
								'ystandard-blocks'
							) }
							value={ innerCustomWidth }
							onChange={ ( value ) =>
								setAttributes( {
									innerCustomWidth: getNum( value, 0, 1920, 0 ),
								} )
							}
							min={ 0 }
							max={ 1920 }
							step={ 16 }
							allowReset={ true }
						/>
						<p>
							<span className={ `ystdb-info__small` }>
								※最大幅の指定をしない場合は0にしてください。
							</span>
						</p>
					</PanelBody>
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
							label={ __( 'セクション最小高さ', 'ystandard-blocks' ) }
							value={ sectionMinHeight }
							onChange={ ( value ) =>
								setAttributes( {
									sectionMinHeight: getNum( value, 0, 1000, 0 ),
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
						<SelectControl
							label={ __( 'アニメーション種類', 'ystandard-blocks' ) }
							value={ animationType }
							options={ animationTypes }
							onChange={ ( type ) => {
								setAttributes( {
									animationType: type,
								} );
							} }
						/>
						<RangeControl
							label={ __( 'アニメーション速度', 'ystandard-blocks' ) }
							value={ getNum( animationSpeed, 1, 10, 3 ) }
							onChange={ ( value ) =>
								setAttributes( {
									animationSpeed: getNum( value, 1, 10, 3 ),
								} )
							}
							min={ 1 }
							max={ 10 }
							allowReset={ true }
						/>
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

			<Block.div
				className={ 'ystdb-section__edit-wrap' }
				style={ editWrapStyle }
			>
				<div className={ sectionClass } style={ sectionStyles }>
					{ isVideoBackground && (
						<video
							className="ystdb-section__video-background"
							autoPlay
							muted
							loop
							src={ backgroundImageURL }
							style={ { objectPosition: getBackgroundPosition( showFocalPointPicker, focalPoint ) } }
						/>
					) }
					{ showBgMask && (
						<div
							className={ bgMaskClass }
							aria-hidden="true"
							role="img"
							style={ bgMaskStyle }
						>
							&nbsp;
						</div>
					) }
					{ 0 !== dividerLevelTop &&
					dividerColorTop.color &&
					divider(
						dividerTypeTop,
						'top',
						dividerLevelTop,
						dividerColorTop.color
					) }
					{ 0 !== dividerLevelBottom &&
					dividerColorBottom.color &&
					divider(
						dividerTypeBottom,
						'bottom',
						dividerLevelBottom,
						dividerColorBottom.color
					) }
					<div className="ystdb-section__container">
						<Wrapper className={ innerClasses } style={ innerStyles }>
							<InnerBlocks/>
						</Wrapper>
					</div>
				</div>
			</Block.div>
		</Fragment>
	);
};

export default compose( [
	withColors( 'backgroundColor', {
		textColor: 'color',
		dividerColorTop: 'fill',
		dividerColorBottom: 'fill',
	} ),
] )( sectionEdit );
