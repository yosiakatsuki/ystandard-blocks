import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	URLInput,
	InspectorControls,
	withColors,
	MediaUpload,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, RadioControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import ToggleControl from '@aktk/block-components/wp-controls/toggle-control';
import TextControl from '@aktk/block-components/wp-controls/text-control';
import TextareaControl from '@aktk/block-components/wp-controls/textarea-control';
import RangeControl from '@aktk/block-components/wp-controls/range-control';
/**
 * Blocks.
 */
import { ystdbConfig } from '@aktk/config/config.js';
import ColorPaletteControl from '@aktk/components/color-palette-control';

import { cardTypes, imageSizes, imageTypes, imageAlignList } from './config';

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
		imageURL,
		imageAlt,
		imageID,
		showDscr,
		dscrCharCount,
		dscr,
		showDomain,
		caption,
	} = attributes;

	const ALLOWED_MEDIA_TYPES = [ 'image' ];

	const selectedCardType = cardType ? cardType : 'horizon';
	const selectedImageType = imageType ? imageType : 'fitText';
	const isCardHorizon =
		'horizon' === selectedCardType || 'fixed-horizon' === selectedCardType;

	const updateUrl = ( value ) => {
		setAttributes( { url: value } );
		if ( !! value && -1 === value.indexOf( ystdb.homeUrl ) ) {
			setAttributes( {
				linkTarget: '_blank',
			} );
		} else {
			setAttributes( {
				linkTarget: undefined,
				rel: undefined,
			} );
		}
	};

	/**
	 * 画像設定コントロール
	 *
	 * @param {Object} obj
	 */
	const mediaUploadRender = ( obj ) => {
		if ( 0 === imageID ) {
			return (
				<Button isSecondary={ true } onClick={ obj.open }>
					{ __( '画像を選択', 'ystandard-blocks' ) }
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
					<img src={ imageURL } alt={ imageAlt } />
				</Button>
				<Button
					isSecondary={ true }
					onClick={ () => {
						setAttributes( {
							imageURL: '',
							imageID: 0,
						} );
					} }
				>
					{ __( '画像をクリア', 'ystandard-blocks' ) }
				</Button>
			</div>
		);
	};

	return (
		<div className={ 'wp-block-html' }>
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'リンク設定', 'ystandard-blocks' ) }>
						<BaseControl>
							<URLInput
								label={ __( 'Link' ) }
								className="ystdb-card__url-input is-use-inspector-control"
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
								__nextHasNoMarginBottom
							/>
						</BaseControl>
						<BaseControl>
							<ToggleControl
								label={ __( 'Open in new tab' ) }
								onChange={ ( value ) => {
									const newLinkTarget = value
										? '_blank'
										: undefined;

									setAttributes( {
										linkTarget: newLinkTarget,
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
					<PanelBody
						title={ __( 'カード表示設定', 'ystandard-blocks' ) }
					>
						<BaseControl>
							<RadioControl
								label={ __(
									'カード表示タイプ',
									'ystandard-blocks'
								) }
								selected={ selectedCardType }
								options={ cardTypes }
								onChange={ ( option ) => {
									setAttributes( { cardType: option } );
								} }
							/>
							<div className="ystdb-inspector-controls__label">
								{ __( 'カード背景色', 'ystandard-blocks' ) }
							</div>
							<ColorPaletteControl
								label={ __(
									'カード背景色',
									'ystandard-blocks'
								) }
								value={ backgroundColor.color }
								onChange={ ( color ) => {
									setBackgroundColor( color );
								} }
							/>
							<div className="ystdb-inspector-controls__label">
								{ __( 'カード枠線', 'ystandard-blocks' ) }
							</div>
							<ColorPaletteControl
								label={ __(
									'カード枠線色',
									'ystandard-blocks'
								) }
								value={ borderColor.color }
								onChange={ ( color ) => {
									setBorderColor( color );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'タイトル', 'ystandard-blocks' ) }
					>
						<BaseControl>
							<TextareaControl
								label={ __( 'タイトル', 'ystandard-blocks' ) }
								value={ title }
								onChange={ ( value ) => {
									setAttributes( { title: value } );
								} }
								help={
									<div className={ `ystdb-info__small` }>
										表示されるタイトルを指定できます。
										<br />
										何も入力しなければ自動で取得されます。
									</div>
								}
							/>
							<div className="ystdb-inspector-controls__label">
								{ __( 'タイトル文字色', 'ystandard-blocks' ) }
							</div>
							<ColorPaletteControl
								label={ __(
									'タイトル文字色',
									'ystandard-blocks'
								) }
								value={ titleColor.color }
								onChange={ ( color ) => {
									setTitleColor( color );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( '画像設定', 'ystandard-blocks' ) }
					>
						<BaseControl>
							<ToggleControl
								label={ __(
									'画像を表示する',
									'ystandard-blocks'
								) }
								onChange={ () => {
									setAttributes( {
										showImage: ! showImage,
									} );
								} }
								checked={ showImage }
							/>
						</BaseControl>
						<BaseControl>
							<div className="ystdb-inspector-controls__label">
								{ __( 'カスタム画像', 'ystandard-blocks' ) }
							</div>
							<MediaUpload
								onSelect={ ( media ) => {
									setAttributes( {
										imageURL: media.url,
										imageID: media.id,
										imageAlt: media.alt,
									} );
								} }
								type={ ALLOWED_MEDIA_TYPES }
								value={ imageID }
								render={ mediaUploadRender }
							/>
						</BaseControl>
						{ isCardHorizon && (
							<Fragment>
								<BaseControl>
									<div className={ `ystdb-info__small` }>
										「カード表示タイプ」が「横型」のときに有効な設定です。
									</div>
									<div className="ystdb-inspector-controls__label">
										{ __(
											'画像サイズ',
											'ystandard-blocks'
										) }
									</div>
									<div
										className={
											'ystdb-btn-selector components-base-control'
										}
									>
										{ imageSizes.map( ( item ) => {
											const selectedImageSize = imageSize
												? imageSize
												: 'normal';
											return (
												<Button
													key={ item.value }
													isSecondary={
														selectedImageSize !==
														item.value
													}
													isPrimary={
														selectedImageSize ===
														item.value
													}
													onClick={ () => {
														setAttributes( {
															imageSize:
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
									<RadioControl
										label={ __(
											'画像表示タイプ',
											'ystandard-blocks'
										) }
										selected={ selectedImageType }
										options={ imageTypes }
										onChange={ ( option ) => {
											setAttributes( {
												imageType: option,
											} );
										} }
									/>
								</BaseControl>
								<BaseControl>
									<RadioControl
										label={ __(
											'画像表示位置',
											'ystandard-blocks'
										) }
										selected={ imageAlign }
										options={ imageAlignList }
										onChange={ ( option ) => {
											setAttributes( {
												imageAlign: option,
											} );
										} }
									/>
								</BaseControl>
							</Fragment>
						) }
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( '概要文設定', 'ystandard-blocks' ) }
					>
						<BaseControl>
							<ToggleControl
								label={ __(
									'概要文を表示する',
									'ystandard-blocks'
								) }
								onChange={ () => {
									setAttributes( {
										showDscr: ! showDscr,
									} );
								} }
								checked={ showDscr }
							/>
							<RangeControl
								value={ dscrCharCount }
								label={ __(
									'概要文の字数',
									'ystandard-blocks'
								) }
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
									<div className={ `ystdb-info__small` }>
										表示される概要文を指定できます。
										<br />
										何も入力しなければ自動で取得されます。
									</div>
								}
							/>
							<div className="ystdb-inspector-controls__label">
								{ __( '概要 文字色', 'ystandard-blocks' ) }
							</div>
							<ColorPaletteControl
								label={ __(
									'概要 文字色',
									'ystandard-blocks'
								) }
								value={ dscrColor.color }
								onChange={ ( color ) => {
									setDscrColor( color );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'ドメイン表示設定', 'ystandard-blocks' ) }
					>
						<BaseControl>
							<ToggleControl
								label={ __(
									'ドメインを表示する',
									'ystandard-blocks'
								) }
								onChange={ () => {
									setAttributes( {
										showDomain: ! showDomain,
									} );
								} }
								checked={ showDomain }
							/>
							<div className="ystdb-inspector-controls__label">
								{ __( 'ドメイン 文字色', 'ystandard-blocks' ) }
							</div>
							<ColorPaletteControl
								label={ __(
									'ドメイン 文字色',
									'ystandard-blocks'
								) }
								value={ domainColor.color }
								onChange={ ( color ) => {
									setDomainColor( color );
								} }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'キャプション', 'ystandard-blocks' ) }
					>
						<BaseControl>
							<TextareaControl
								value={ caption }
								onChange={ ( value ) => {
									setAttributes( { caption: value } );
								} }
								help={
									<div className={ `ystdb-info__small` }>
										カード下に表示されるキャプションテキストを設定できます。
										<br />
										※HTMLは使用できません。HTMLを入力しても表示時に削除されます。
									</div>
								}
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>

				<div className={ classnames( 'ystdb-card__edit' ) }>
					{ ( isSelected || ! url ) && (
						<div className={ 'ystdb-card__edit-container' }>
							<URLInput
								label={ __(
									'リンクを作成するURLを入力',
									'ystandard-blocks'
								) }
								className="ystdb-card__url-input"
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
								__nextHasNoMarginBottom
							/>
						</div>
					) }
					{ !! url && (
						<>
							<div
								className={ classnames( 'ystdb-card__preview', {
									'is-rendered': url,
								} ) }
							>
								<ServerSideRender
									block="ystdb/card"
									attributes={ attributes }
								/>
							</div>
						</>
					) }
				</div>
			</Fragment>
		</div>
	);
};

export default compose( [
	withColors( 'backgroundColor', 'borderColor', {
		titleColor: 'color',
		dscrColor: 'color',
		domainColor: 'color',
	} ),
] )( cardEdit );
