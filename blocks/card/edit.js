import { ystdbConfig } from '../../src/js/config/config';
import classnames from 'classnames';

import {
	URLInput,
	InspectorControls,
	withColors,
} from '@wordpress/block-editor';

import {
	Fragment,
} from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	RangeControl,
	RadioControl,
	Button,
	ColorPalette,
	ServerSideRender,
} from '@wordpress/components';

import {
	cardTypes,
	imageSizes,
	imageTypes,
	imageAlignList,
} from './config';

import {
	compose,
} from '@wordpress/compose';
import { select } from '@wordpress/data';

import { __ } from '@wordpress/i18n';

const cardEdit = ( props ) => {
	const {
		attributes,
		setAttributes,
		isSelected,
		backgroundColor,
		setBackgroundColor,
		borderColor,
		setBorderColor,
		titleColor,
		setTitleColor,
		dscrColor,
		setDscrColor,
		domainColor,
		setDomainColor,
	} = props;
	const {
		url,
		linkTarget,
		rel,
		cardType,
		title,
		showImage,
		imageSize,
		imageType,
		imageAlign,
		showDscr,
		dscrCharCount,
		dscr,
		showDomain,
	} = attributes;

	const { colors } = select( 'core/block-editor' ).getSettings();

	const selectedCardType = cardType ? cardType : 'horizon';
	const selectedImageType = imageType ? imageType : 'fitText';
	const isCardHorizon = ( 'horizon' === selectedCardType || 'fixed-horizon' === selectedCardType );

	const updateUrl = ( value ) => {
		setAttributes( { url: value } );
		if ( !! value && -1 === value.indexOf( ystdb.homeUrl ) ) {
			setAttributes( {
				linkTarget: '_blank',
				rel: ystdbConfig.button.newTabRel,
			} );
		}
	};

	return (
		<div className={ 'wp-block-html' }>
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'リンク設定', 'ystandard-blocks' ) }>
						<BaseControl>
							<URLInput
								label={ __( 'Link' ) }
								className="ystdb-button__link"
								value={ url }
								/* eslint-disable jsx-a11y/no-autofocus */
								autoFocus={ false }
								/* eslint-enable jsx-a11y/no-autofocus */
								onChange={ ( value ) => {
									updateUrl( value );
								} }
								disableSuggestions={ ! isSelected }
								isFullWidth
								hasBorder
							/>
						</BaseControl>
						<BaseControl>
							<ToggleControl
								label={ __( 'Open in new tab' ) }
								onChange={ ( value ) => {
									const newLinkTarget = value ? '_blank' : undefined;
									let updatedRel = rel;
									if ( newLinkTarget && ! rel ) {
										updatedRel = ystdbConfig.button.newTabRel;
									} else if ( ! newLinkTarget && rel === ystdbConfig.button.newTabRel ) {
										updatedRel = undefined;
									}
									setAttributes( {
										linkTarget: newLinkTarget,
										rel: updatedRel,
									} );
								} }
								checked={ linkTarget === '_blank' }
							/>
							<TextControl
								label={ __( 'Link rel' ) }
								value={ rel || '' }
								onChange={ ( value ) => {
									setAttributes( { rel: value } );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title={ __( 'カード表示設定', 'ystandard-blocks' ) }>
						<BaseControl>
							<RadioControl
								label={ __( 'カード表示タイプ', 'ystandard-blocks' ) }
								selected={ selectedCardType }
								options={ cardTypes }
								onChange={ ( option ) => {
									setAttributes( { cardType: option } );
								} }
							/>
							<div
								className="ystdb-inspector-controls__label">{ __( 'カード背景色', 'ystandard-blocks' ) }</div>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setBackgroundColor( color );
								} }
								value={ backgroundColor.color }
							/>
							<div className="ystdb-inspector-controls__label">{ __( 'カード枠線', 'ystandard-blocks' ) }</div>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setBorderColor( color );
								} }
								value={ borderColor.color }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'タイトル', 'ystandard-blocks' ) }>
						<BaseControl>
							<TextareaControl
								label={ __( 'タイトル', 'ystandard-blocks' ) }
								value={ title }
								onChange={ ( value ) => {
									setAttributes( { title: value } );
								} }
								help={
									<div className={ `ystdb-info__small` }>表示されるタイトルを指定できます。<br />何も入力しなければ自動で取得されます。
									</div>
								}
							/>
							<div
								className="ystdb-inspector-controls__label">{ __( 'タイトル文字色', 'ystandard-blocks' ) }</div>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setTitleColor( color );
								} }
								value={ titleColor.color }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( '画像設定', 'ystandard-blocks' ) }>
						<BaseControl>
							<ToggleControl
								label={ __( '画像を表示する', 'ystandard-blocks' ) }
								onChange={ () => {
									setAttributes( {
										showImage: ! showImage,
									} );
								} }
								checked={ showImage }
							/>
						</BaseControl>
						{ ( isCardHorizon &&
							<Fragment>
								<BaseControl>
									<div className={ `ystdb-info__small` }>「カード表示タイプ」が「横型」のときに有効な設定です。
									</div>
									<div
										className="ystdb-inspector-controls__label">{ __( '画像サイズ', 'ystandard-blocks' ) }</div>
									<div className={ 'ystdb-btn-selector components-base-control' }>
										{ imageSizes.map( ( item ) => {
											const selectedImageSize = imageSize ? imageSize : 'normal';
											return (
												<Button
													key={ item.value }
													isDefault
													isPrimary={ selectedImageSize === item.value }
													onClick={ () => {
														setAttributes( {
															imageSize: item.value,
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
									<RadioControl
										label={ __( '画像表示タイプ', 'ystandard-blocks' ) }
										selected={ selectedImageType }
										options={ imageTypes }
										onChange={ ( option ) => {
											setAttributes( { imageType: option } );
										} }
									/>
								</BaseControl>
								<BaseControl>
									<RadioControl
										label={ __( '画像表示位置', 'ystandard-blocks' ) }
										selected={ imageAlign }
										options={ imageAlignList }
										onChange={ ( option ) => {
											setAttributes( { imageAlign: option } );
										} }
									/>
								</BaseControl>
							</Fragment>
						) }
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( '概要文設定', 'ystandard-blocks' ) }>
						<BaseControl>
							<ToggleControl
								label={ __( '概要文を表示する', 'ystandard-blocks' ) }
								onChange={ () => {
									setAttributes( {
										showDscr: ! showDscr,
									} );
								} }
								checked={ showDscr }
							/>
							<RangeControl
								value={ dscrCharCount }
								label={ __( '概要文の字数', 'ystandard-blocks' ) }
								min={ 0 }
								max={ 160 }
								initialPosition={ 40 }
								allowReset
								onChange={ ( value ) => {
									setAttributes( {
										dscrCharCount: ! value ? 40 : value,
									} );
								} }
							/>
							<TextareaControl
								label={ __( '概要文', 'ystandard-blocks' ) }
								value={ dscr }
								onChange={ ( value ) => {
									setAttributes( { dscr: value } );
								} }
								help={
									<div className={ `ystdb-info__small` }>表示される概要文を指定できます。<br />何も入力しなければ自動で取得されます。
									</div>
								}
							/>
							<div
								className="ystdb-inspector-controls__label">{ __( '概要 文字色', 'ystandard-blocks' ) }</div>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setDscrColor( color );
								} }
								value={ dscrColor.color }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'ドメイン表示設定', 'ystandard-blocks' ) }>
						<BaseControl>
							<ToggleControl
								label={ __( 'ドメインを表示する', 'ystandard-blocks' ) }
								onChange={ () => {
									setAttributes( {
										showDomain: ! showDomain,
									} );
								} }
								checked={ showDomain }
							/>
							<div
								className="ystdb-inspector-controls__label">{ __( 'ドメイン 文字色', 'ystandard-blocks' ) }</div>
							<ColorPalette
								colors={ colors }
								disableCustomColors={ false }
								onChange={ ( color ) => {
									setDomainColor( color );
								} }
								value={ domainColor.color }
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>

				<div className={ classnames( 'ystdb-card__edit', { 'is-rendered': url } ) }>
					{ ( url ) ? (
						<ServerSideRender
							block="ystdb/card"
							attributes={ attributes }
						/>
					) : (
						<Fragment>
							<div className={ 'ystdb-card__edit-text' }>リンクを作成するURLを入力</div>
							<URLInput
								label={ __( 'Link' ) }
								className="ystdb-button__link"
								value={ url }
								/* eslint-disable jsx-a11y/no-autofocus */
								autoFocus={ false }
								/* eslint-enable jsx-a11y/no-autofocus */
								onChange={ ( value ) => {
									updateUrl( value );
								} }
								disableSuggestions={ ! isSelected }
								isFullWidth
								hasBorder
							/>
						</Fragment>
					) }
				</div>
			</Fragment>
		</div>
	);
};

export default compose( [
	withColors(
		'backgroundColor',
		'borderColor',
		{
			titleColor: 'color',
			dscrColor: 'color',
			domainColor: 'color',
		}
	),
] )( cardEdit );
