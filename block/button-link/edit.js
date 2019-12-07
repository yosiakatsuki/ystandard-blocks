import classnames from 'classnames';
import IconSelect from '../../src/js/components/icon-select/index';

import {
	BlockControls,
	PlainText,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	getColorClassName,
	withColors,
	FontSizePicker,
	withFontSizes,
} from '@wordpress/block-editor';

import {
	Fragment,
} from '@wordpress/element';

import {
	Disabled,
	PanelBody,
	BaseControl,
	ToggleControl,
	ServerSideRender,
	RadioControl,
} from '@wordpress/components';

import {
	withState,
	compose,
} from '@wordpress/compose';

import { __ } from '@wordpress/i18n';

const btnLinkEdit = ( props ) => {
	const {
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
		attributes,
		setAttributes,
		setState,
		isPreview,
		styles,
		className,
		fontSize,
		setFontSize,
	} = props;
	const {
		content,
		icon,
		align,
		buttonType,
		customIcon,
		iconPosition,
		buttonSize,
	} = attributes;

	/**
	 * 色設定
	 */
	const bgColor = backgroundColor.color ? backgroundColor.color : '#222';
	const txtColor = textColor.color ? textColor.color : '#fff';

	return (
		<div className={ 'wp-block-html' }>
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
					/>
					<div className="components-toolbar">
						<button
							className={ `components-tab-button ${ ! isPreview ? 'is-active' : '' }` }
							onClick={ () => {
								setState( { isPreview: false } );
							} }
						>
							<span>HTML</span>
						</button>
						<button
							className={ `components-tab-button ${ isPreview ? 'is-active' : '' }` }
							onClick={ () => {
								setState( { isPreview: true } );
							} }
						>
							<span>{ __( 'Preview' ) }</span>
						</button>
					</div>
				</BlockControls>
				<Disabled.Consumer>
					{ () => (
						( isPreview ) ? (
							<div className={ 'ystdb-btn-link__preview' }>
								<ServerSideRender
									block="ystdb/btn-link"
									attributes={ attributes }
								/>
							</div>
						) : (
							<PlainText
								value={ content }
								onChange={ ( content ) => setAttributes( { content } ) }
								placeholder={ 'HTMLを入力...' }
								aria-label={ __( 'HTML' ) }
							/>
						)
					) }
				</Disabled.Consumer>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ true }
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
					<PanelBody title={ __( 'テキスト設定', 'ystandard-blocks' ) }>
						<FontSizePicker
							label={ __( '文字サイズ', 'ystandard-blocks' ) }
							value={ fontSize.size }
							onChange={ ( font ) => {
								setFontSize( font );
							} }
						/>
					</PanelBody>
					<IconSelect
						panelTitle={ __( 'アイコン設定', 'ystandard-blocks' ) }
						iconPosition={ iconPosition }
						onChangePosition={ ( option ) => {
							setAttributes( { iconPosition: option } );
						} }
						selectedIcon={ icon }
						onClickIcon={ ( value ) => {
							setAttributes( { icon: value } );
						} }
					/>
					<PanelBody title={ __( '表示タイプ', 'ystandard-blocks' ) }>
						<BaseControl>
							<ToggleControl
								label={ __( 'ブロック表示にする', 'ystandard-blocks' ) }
								checked={ ( buttonType === 'full' ) }
								onChange={ () => {
									setAttributes( {
										buttonType: buttonType === 'full' ? '' : 'full',
									} );
								} }
							/>
							<div className={ `ystdb-inspectorcontrols__horizontal-radio` }>
								<RadioControl
									label={ __( 'ボタンサイズ', 'ystandard-blocks' ) }
									selected={ buttonSize }
									options={ [
										{ label: __( '通常', 'ystandard-blocks' ), value: '' },
										{ label: __( '大', 'ystandard-blocks' ), value: 'lg' },
										{ label: __( '小', 'ystandard-blocks' ), value: 'sm' },
									] }
									onChange={ ( option ) => {
										setAttributes( { buttonSize: option } );
									} }
								/>
							</div>
						</BaseControl>
					</PanelBody>

				</InspectorControls>
			</Fragment>
		</div>
	);
};

export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	withState( { isPreview: false, styles: '' } ),
	withFontSizes( 'fontSize' ),
] )( btnLinkEdit );
