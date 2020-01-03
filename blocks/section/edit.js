import classnames from 'classnames';
import { marginType, wrapperTagNames, dividerTypes, animationTypes, dividerPath } from './config';
import getNum from '../../src/js/util/_getNum';
import { select } from '@wordpress/data';

import {
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	withColors,
	InnerBlocks,
	MediaUpload,
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
} from '@wordpress/components';

import {
	Fragment,
} from '@wordpress/element';
import {
	compose,
} from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

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
		backgroundImageURL,
		backgroundImageAlt,
		backgroundImageID,
		backgroundImageOpacity,
		backgroundImageParallax,
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

	const rangeStep = 0.5;

	const Wrapper = wrapperTag;
	/**
	 * 背景画像関連
	 */
	const ALLOWED_MEDIA_TYPES = [ 'image' ];
	const showBgMask = backgroundImageURL || backgroundColor.color;

	/**
	 * 編集画面のラッパー
	 */
	const editWrapStyle = {
		paddingTop: 0 === marginTop ? 0 : marginTop + 'rem',
		paddingBottom: 0 === marginBottom ? 0 : marginBottom + 'rem',
	};

	/**
	 * セクションクラス名
	 */
	const sectionClass = classnames(
		className,
		'ystdb-section',
		{
			'has-background-image': backgroundImageURL,
			'is-screen-height': screenHeightMode,
		}
	);
	/**
	 * セクションスタイル
	 */
	const sectionStyles = {
		color: textColor.color,
		paddingTop: 0 === paddingTop ? 0 : paddingTop + 'rem',
		paddingBottom: 0 === paddingBottom ? 0 : paddingBottom + 'rem',
		backgroundImage: backgroundImageURL ? `url("${ backgroundImageURL }")` : undefined,
		minHeight: sectionMinHeight ? sectionMinHeight + 'px' : undefined,
	};
	/**
	 * 背景マスク
	 */
	const bgMaskClass = classnames(
		'ystdb-section__bg',
		{
			'has-background': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
		}
	);
	const bgMaskStyle = {
		backgroundColor: backgroundColor.color ? backgroundColor.color : '#000',
		opacity: ( backgroundImageOpacity / 100 ),
	};
	/**
	 * インナー
	 */
	const innerClasses = classnames(
		'ystdb-section__inner',
		{
			'has-text-color': textColor.color,
			[ textColor.class ]: textColor.class,
		}
	);
	const innerStyles = {
		maxWidth: innerCustomWidth !== 0 ? innerCustomWidth : undefined,
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingLeft: 0 === paddingLeft ? 0 : paddingLeft + 'rem',
		paddingRight: 0 === paddingRight ? 0 : paddingRight + 'rem',
	};

	/**
	 * 画像設定コントロール
	 *
	 * @param {Object} obj
	 */
	const mediaUploadRender = ( obj ) => {
		if ( 0 === backgroundImageID ) {
			return (
				<Button
					isDefault
					onClick={ obj.open }
				>
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
					<img src={ backgroundImageURL } alt={ backgroundImageAlt } />
				</Button>
				<Button
					isDefault
					onClick={ () => {
						setAttributes( {
							backgroundImageURL: '',
							backgroundImageID: 0,
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
				<SVG viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
					<Path d={ path } strokewidth="0" fill={ color } />
				</SVG>
			</div>
		);
	};
	return (
		<Fragment>
			<div className={ 'ystdb-section__edit-wrap' } style={ editWrapStyle }>

				<div className={ sectionClass } style={ sectionStyles }>
					{ ( showBgMask && <div
						className={ bgMaskClass }
						aria-hidden="true"
						role="img"
						style={ bgMaskStyle }>&nbsp;</div> ) }
					{ ( 0 !== dividerLevelTop && dividerColorTop.color && divider( dividerTypeTop, 'top', dividerLevelTop, dividerColorTop.color ) ) }
					{ ( 0 !== dividerLevelBottom && dividerColorBottom.color && divider( dividerTypeBottom, 'bottom', dividerLevelBottom, dividerColorBottom.color ) ) }
					<div className="ystdb-section__container">
						<Wrapper className={ innerClasses } style={ innerStyles }>
							<InnerBlocks />
						</Wrapper>
					</div>
				</div>

			</div>

			<InspectorControls>
				<div className="ystdb-inspectorcontrols">
					<PanelBody title={ __( '余白設定', 'ystandard-blocks' ) }>
						<BaseControl>
							<div
								className="ystdb-inspector-controls__label">{ __( '余白設定(外側)', 'ystandard-blocks' ) }</div>
							<div className={ `ystdb-info__label` }>かんたん設定</div>
							<div className={ 'ystdb-btn-selector components-base-control' }>
								{ marginType.margin.map( ( item ) => {
									return (
										<Button
											key={ item.value }
											isDefault
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
								onChange={ ( value ) => setAttributes( { marginTop: getNum( value, -10, 10, 0 ) } ) }
								min={ -10 }
								max={ 10 }
								step={ rangeStep }
							/>
							<RangeControl
								label={ __( '下側', 'ystandard-blocks' ) }
								value={ marginBottom }
								onChange={ ( value ) => setAttributes( { marginBottom: getNum( value, -10, 10, 0 ) } ) }
								min={ -10 }
								max={ 10 }
								step={ rangeStep }
							/>
							<p>
								<span className={ `ystdb-info__small` }>※数字が大きいほど余白が大きくなります。</span>
								<span className={ `ystdb-info__small` }>※単位はremです。</span>
							</p>
						</BaseControl>
						<BaseControl>
							<div
								className="ystdb-inspector-controls__label">{ __( '余白設定(内側)', 'ystandard-blocks' ) }</div>
							<div className={ `ystdb-info__label` }>かんたん設定</div>
							<div className={ 'ystdb-btn-selector components-base-control' }>
								{ marginType.padding.map( ( item ) => {
									return (
										<Button
											key={ item.value }
											isDefault
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
									<span className={ `ystdb-info__small` }>※上下余白のかんたん設定</span>
								</div>
							</div>
							<RangeControl
								label={ __( '上側', 'ystandard-blocks' ) }
								value={ paddingTop }
								onChange={ ( value ) => setAttributes( { paddingTop: getNum( value, 0, 10 ) } ) }
								min={ 0 }
								max={ 10 }
								step={ rangeStep }
							/>
							<RangeControl
								label={ __( '下側', 'ystandard-blocks' ) }
								value={ paddingBottom }
								onChange={ ( value ) => setAttributes( { paddingBottom: getNum( value, 0, 10 ) } ) }
								min={ 0 }
								max={ 10 }
								step={ rangeStep }
							/>
							<RangeControl
								label={ __( '左側', 'ystandard-blocks' ) }
								value={ paddingLeft }
								onChange={ ( value ) => setAttributes( { paddingLeft: getNum( value, 0, 5 ) } ) }
								min={ 0 }
								max={ 5 }
								step={ rangeStep }
							/>
							<RangeControl
								label={ __( '右側', 'ystandard-blocks' ) }
								value={ paddingRight }
								onChange={ ( value ) => setAttributes( { paddingRight: getNum( value, 0, 5 ) } ) }
								min={ 0 }
								max={ 5 }
								step={ rangeStep }
							/>
							<div>
								<span className={ `ystdb-info__small` }>※数字が大きいほど余白が大きくなります。</span>
								<span className={ `ystdb-info__small` }>※単位はremです。</span>
							</div>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={ __( '背景設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className="ystdb-inspector-controls__label">{ __( '背景画像', 'ystandard-blocks' ) }</div>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									backgroundImageURL: media.url,
									backgroundImageID: media.id,
									backgroundImageAlt: media.alt,
								} );
							} }
							type={ ALLOWED_MEDIA_TYPES }
							value={ backgroundImageID }
							render={ mediaUploadRender }
						/>
						<br /><br />
						<RangeControl
							label={ __( '背景色の濃さ', 'ystandard-blocks' ) }
							value={ backgroundImageOpacity }
							onChange={ ( value ) => setAttributes( { backgroundImageOpacity: getNum( value, 0, 100 ) } ) }
							min={ 0 }
							max={ 100 }
							step={ 1 }
						/>
						<p>
							<span className={ `ystdb-info__small` }>※数値が大きいほど背景画像が見えづらくなります。</span>
							<span className={ `ystdb-info__small` }>※画像の上に重ねる色は、色設定の「背景色」で変更できます。</span>
						</p>
						<div className="ystdb-inspector-controls__label">{ __( '固定背景', 'ystandard-blocks' ) }</div>
						<ToggleControl
							label={ __( '背景を固定する', 'ystandard-blocks' ) }
							checked={ backgroundImageParallax }
							onChange={ () => {
								setAttributes( {
									backgroundImageParallax: ! backgroundImageParallax,
								} );
							} }
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: ( color ) => {
									setBackgroundColor( color );
								},
								label: __( 'Background Color' ),
							},
							{
								value: textColor.color,
								onChange: ( color ) => {
									setTextColor( color );
								},
								label: __( 'Text Color' ),
							},
						] }
					>
						<ContrastChecker
							backgroundColor={ backgroundColor.color }
							textColor={ textColor.color }
						/>
					</PanelColorSettings>
					<PanelBody
						title={ __( '区切り線設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className="ystdb-inspector-controls__dscr">タイプ・レベル・色をすべて設定すると表示されます。<br />上下のブロックの背景色と色を合わせることをオススメします。<br /><br />
						</div>

						<div className="ystdb-inspector-controls__label">{ __( '上側の区切り設定', 'ystandard-blocks' ) }</div>
						<div className="ystdb-inspector-controls__label">{ __( '区切りタイプ', 'ystandard-blocks' ) }</div>
						<div className={ 'ystdb-btn-selector components-base-control' }>
							{ dividerTypes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
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
						<RangeControl
							label={ __( 'レベル', 'ystandard-blocks' ) }
							value={ dividerLevelTop }
							onChange={ ( value ) => setAttributes( { dividerLevelTop: getNum( value, -100, 100, 0 ) } ) }
							min={ -100 }
							max={ 100 }
							allowReset={ true }
						/>
						<div className="ystdb-inspector-controls__label">{ __( '色', 'ystandard-blocks' ) }</div>
						<ColorPalette
							colors={ colors }
							disableCustomColors={ false }
							onChange={ ( color ) => {
								setDividerColorTop( color );
							} }
							value={ dividerColorTop.color }
						/>
						<br />
						<div className="ystdb-inspector-controls__label">{ __( '下側の区切り設定', 'ystandard-blocks' ) }</div>
						<div className="ystdb-inspector-controls__label">{ __( '区切りタイプ', 'ystandard-blocks' ) }</div>
						<div className={ 'ystdb-btn-selector components-base-control' }>
							{ dividerTypes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
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
						<RangeControl
							label={ __( 'レベル', 'ystandard-blocks' ) }
							value={ dividerLevelBottom }
							onChange={ ( value ) => setAttributes( { dividerLevelBottom: getNum( value, -100, 100, 0 ) } ) }
							min={ -100 }
							max={ 100 }
							allowReset={ true }
						/>
						<div className="ystdb-inspector-controls__label">{ __( '色', 'ystandard-blocks' ) }</div>
						<ColorPalette
							colors={ colors }
							disableCustomColors={ false }
							onChange={ ( color ) => {
								setDividerColorBottom( color );
							} }
							value={ dividerColorBottom.color }
						/>

					</PanelBody>
					<PanelBody
						title={ __( 'コンテンツ幅設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className={ `ystdb-info__label` }>かんたん設定</div>
						<div className={ 'ystdb-btn-selector components-base-control' }>
							{ marginType.innerWidth.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
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
							label={ __( 'コンテンツ部分の最大幅', 'ystandard-blocks' ) }
							value={ innerCustomWidth }
							onChange={ ( value ) => setAttributes( { innerCustomWidth: getNum( value, 0, 1920, 0 ) } ) }
							min={ 0 }
							max={ 1920 }
							step={ 16 }
							allowReset={ true }
						/>
						<p>
							<span className={ `ystdb-info__small` }>※最大幅の指定をしない場合は0にしてください。</span>
						</p>
					</PanelBody>
					<PanelBody
						title={ __( 'セクション高さ設定', 'ystandard-blocks' ) }
						initialOpen={ false }
					>
						<div className="ystdb-inspector-controls__label">{ __( '高さ設定', 'ystandard-blocks' ) }</div>
						<ToggleControl
							label={ __( '画面と同じ高さにする', 'ystandard-blocks' ) }
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
							onChange={ ( value ) => setAttributes( { sectionMinHeight: getNum( value, 0, 1000, 0 ) } ) }
							min={ 0 }
							max={ 1000 }
							allowReset={ true }
						/>
						<div
							className="ystdb-inspector-controls__dscr">※「画面と同じ高さにする」をONにした場合、セクション最小高さも合わせて設定してください。（例：500）
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
							onChange={ ( value ) => setAttributes( { animationSpeed: getNum( value, 1, 10, 3 ) } ) }
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
							<span className={ `ystdb-info__small` }>コンテンツを囲むHTMLタグを選択できます。</span>
						</p>
						<div className={ 'ystdb-btn-selector components-base-control' }>
							{ wrapperTagNames.map( ( item ) => {
								return (
									<Button
										key={ item.tag }
										isDefault
										isPrimary={ wrapperTag === item.tag }
										onClick={ () => {
											setAttributes( { wrapperTag: item.tag } );
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
