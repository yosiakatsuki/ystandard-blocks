import { InlineStyleContext } from './index';
import { useContext, useState } from '@wordpress/element';
import { Icon, desktop, tablet, mobile } from '@wordpress/icons';
import {
	PanelBody,
	ToggleControl,
	BaseControl,
	Button,
	SelectControl,
	RangeControl,
	TextControl,
	Modal,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import { getComponentConfig } from '@aktk/helper/config';
import { hex2rgb } from '@aktk/helper/color';

import Preview from '../components/preview/index';
import ColorPalette from '../components/color-palette/color-palette';
import {
	CancelButton,
	DeleteButton,
	UpdateButton,
} from '../components/button/button';

import schema from './schema.json';
import { getStyle } from './function';
import { getProperty } from '@aktk/helper/object';
import { Save } from 'react-feather';

const ToolbarButtons = () => {
	const { options, buttons, setButtons, isUpdating, updateOption } =
		useContext( InlineStyleContext );

	const fontUnit = getComponentConfig( 'fontUnit' );

	const [ currentButtonIndex, setCurrentButtonIndex ] = useState( 0 );
	const [ isDeleteModalOpen, setIsDeleteModalOpen ] = useState( false );
	const previewText = `インラインスタイル${ currentButtonIndex + 1 }`;

	const openDeleteModal = () => setIsDeleteModalOpen( true );
	const closeDeleteModal = () => setIsDeleteModalOpen( false );

	const getDefaultStyle = (
		name,
		defaultValue = undefined,
		device = 'style'
	) => {
		const style =
			schema.inlineStyle.buttons[ currentButtonIndex ][ device ];
		if ( ! style || ! style.hasOwnProperty( name ) ) {
			return defaultValue;
		}
		return style[ name ];
	};

	const getCurrentValue = ( key ) => {
		const current = getProperty( buttons, currentButtonIndex );
		return getProperty( current, key );
	};

	const updateButtonsOption = ( value ) => {
		setButtons( {
			...buttons,
			...{
				[ currentButtonIndex ]: {
					...getProperty( buttons, currentButtonIndex ),
					...value,
				},
			},
		} );
	};

	const updateButtonsStyle = ( value, device = 'style' ) => {
		const currentStyle = getCurrentValue( device );
		updateButtonsOption( {
			[ device ]: {
				...currentStyle,
				...value,
			},
		} );
	};

	const resetOption = () => {
		const newValue = {
			...buttons,
			...{
				[ currentButtonIndex ]: {
					...schema.inlineStyle.buttons[ currentButtonIndex ],
				},
			},
		};
		setButtons( newValue );
		return newValue;
	};

	const getMarkerStyle = ( markerColor = undefined ) => {
		const style = getCurrentValue( 'style' );
		let weight = getProperty( style, '@markerWeight', 30 );
		weight = weight ? 100 - weight : '';
		let opacity = getProperty( style, '@markerOpacity', 60 );
		opacity = opacity ? opacity / 100 : '';
		let color = markerColor ?? getProperty( style, '@markerColor' );
		color = color ? hex2rgb( color ) : '';
		if ( ! weight || ! opacity || ! color ) {
			return { background: undefined };
		}
		const rgb = `${ color[ 0 ] },${ color[ 1 ] },${ color[ 2 ] }`;
		return {
			background: `linear-gradient(transparent ${ weight }%, rgba(${ rgb }, ${ opacity }) ${ weight }%)`,
		};
	};

	const previewStyle = getCurrentValue( 'enable' )
		? {
				...getCurrentValue( 'style' ),
				...getMarkerStyle(),
		  }
		: {};
	const previewClassName = `ystdb-inline--${ currentButtonIndex + 1 }`;

	return (
		<>
			<div className="ystdb-menu-toolbar-buttons__select">
				<div className="ystdb__horizon-buttons">
					{ options.buttons.map( ( item, index ) => {
						return (
							<Button
								key={ index }
								isSecondary={ currentButtonIndex !== index }
								isPrimary={ currentButtonIndex === index }
								onClick={ () => {
									setCurrentButtonIndex( index );
								} }
							>
								{ `ボタン ${ index + 1 }` }
							</Button>
						);
					} ) }
				</div>
				<div className="ystdb-components-section">
					<div className="ystdb-menu-component-columns is-reverse">
						<div className="ystdb-menu-component-columns__item">
							<PanelBody title={ '基本設定' }>
								<BaseControl
									id={ 'enable' }
									label={ 'ボタンの有効化' }
								>
									<ToggleControl
										label={ 'ボタンを有効にする' }
										checked={ getCurrentValue( 'enable' ) }
										onChange={ ( value ) => {
											updateButtonsOption( {
												enable: value,
											} );
										} }
									/>
								</BaseControl>
							</PanelBody>
							{ getCurrentValue( 'enable' ) && (
								<>
									<PanelBody title={ '大きさ・スタイル' }>
										<BaseControl
											id={ 'font-size' }
											label={ 'サイズ' }
										>
											<div className="ystdb-component-responsive__container">
												<div className="ystdb-component-responsive__item">
													<Icon icon={ desktop } />
													<UnitControl
														value={ getStyle(
															getCurrentValue(
																'style'
															),
															'font-size',
															getDefaultStyle(
																'font-size'
															)
														) }
														onChange={ (
															value
														) => {
															updateButtonsStyle(
																{
																	'font-size':
																		value,
																}
															);
														} }
														units={ fontUnit }
													/>
												</div>
												<div className="ystdb-component-responsive__item">
													<Icon icon={ tablet } />
													<UnitControl
														value={ getStyle(
															getCurrentValue(
																'tabletStyle'
															),
															'font-size',
															getDefaultStyle(
																'font-size',
																undefined,
																'tabletStyle'
															)
														) }
														onChange={ (
															value
														) => {
															updateButtonsStyle(
																{
																	'font-size':
																		value,
																},
																'tabletStyle'
															);
														} }
														units={ fontUnit }
													/>
												</div>
												<div className="ystdb-component-responsive__item">
													<Icon icon={ mobile } />
													<UnitControl
														value={ getStyle(
															getCurrentValue(
																'mobileStyle'
															),
															'font-size',
															getDefaultStyle(
																'font-size',
																undefined,
																'mobileStyle'
															)
														) }
														onChange={ (
															value
														) => {
															updateButtonsStyle(
																{
																	'font-size':
																		value,
																},
																'mobileStyle'
															);
														} }
														units={ fontUnit }
													/>
												</div>
											</div>
										</BaseControl>
										<BaseControl
											id={ 'font-weight' }
											label={ '太さ' }
										>
											<SelectControl
												value={ getStyle(
													getCurrentValue( 'style' ),
													'font-weight',
													getDefaultStyle(
														'font-weight'
													)
												) }
												options={ getComponentConfig(
													'fontWeight'
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( {
														'font-weight': value,
													} );
												} }
											/>
										</BaseControl>
										<BaseControl
											id={ 'font-style' }
											label={ 'スタイル' }
										>
											<SelectControl
												value={ getStyle(
													getCurrentValue( 'style' ),
													'font-style',
													getDefaultStyle(
														'font-style'
													)
												) }
												options={ getComponentConfig(
													'fontStyle'
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( {
														'font-style': value,
													} );
												} }
											/>
										</BaseControl>
									</PanelBody>
									<PanelBody title={ '色' }>
										<BaseControl
											id={ 'font-color' }
											label={ '文字色' }
										>
											<ColorPalette
												onChange={ ( color ) => {
													updateButtonsStyle( {
														color,
													} );
												} }
												value={ getStyle(
													getCurrentValue( 'style' ),
													'color',
													getDefaultStyle( 'color' )
												) }
											/>
										</BaseControl>
									</PanelBody>
									<PanelBody title={ 'マーカー' }>
										<BaseControl
											id={ 'marker-color' }
											label={ '色' }
										>
											<ColorPalette
												onChange={ ( color ) => {
													updateButtonsStyle( {
														'@markerColor': color,
														...getMarkerStyle(
															color
														),
													} );
												} }
												value={ getStyle(
													getCurrentValue( 'style' ),
													'@markerColor',
													getDefaultStyle(
														'@markerColor'
													)
												) }
											/>
										</BaseControl>
										<BaseControl
											id={ 'marker-opacity' }
											label={ '濃さ(%)' }
										>
											<RangeControl
												value={ getStyle(
													getCurrentValue( 'style' ),
													'@markerOpacity',
													getDefaultStyle(
														'@markerOpacity'
													)
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( {
														'@markerOpacity': value,
														...getMarkerStyle(),
													} );
												} }
												min={ 10 }
												max={ 100 }
											/>
										</BaseControl>
										<BaseControl
											id={ 'marker-weight' }
											label={ '太さ(%)' }
										>
											<RangeControl
												value={ getStyle(
													getCurrentValue( 'style' ),
													'@markerWeight',
													getDefaultStyle(
														'@markerWeight'
													)
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( {
														'@markerWeight': value,
														...getMarkerStyle(),
													} );
												} }
												min={ 5 }
												max={ 95 }
											/>
										</BaseControl>
									</PanelBody>
									<PanelBody
										title={ '上級者向け設定' }
										initialOpen={ false }
									>
										<BaseControl
											id={ 'font-family' }
											label={ 'フォント(font-family)' }
										>
											<TextControl
												placeholder={ 'sans-serif' }
												value={ getStyle(
													getCurrentValue( 'style' ),
													'font-family',
													getDefaultStyle(
														'font-family'
													)
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( {
														'font-family': value,
													} );
												} }
											/>
										</BaseControl>
									</PanelBody>
								</>
							) }
							<div className="ystdb-components-section">
								<UpdateButton
									key={ 'update' }
									onClick={ () => {
										updateOption();
									} }
									disabled={ isUpdating }
								>
									<Save
										className={ 'ystdb-button-icon' }
										style={ { fill: 'none' } }
									/>{ ' ' }
									設定を保存
								</UpdateButton>
							</div>
							<div className="ystdb-components-section">
								<DeleteButton
									isSmall
									onClick={ () => {
										openDeleteModal();
									} }
									disabled={ isUpdating }
								>
									設定を初期化
								</DeleteButton>
							</div>
							{ isDeleteModalOpen && (
								<Modal
									title="確認"
									onRequestClose={ closeDeleteModal }
									shouldCloseOnClickOutside={ false }
									isDismissible={ false }
								>
									<p>{ `ボタン ${
										currentButtonIndex + 1
									} を初期化しますか？` }</p>
									<div className="ystdb-components-section">
										<div className="ystdb-menu-component-columns">
											<div className="ystdb-menu-component-columns__item">
												<DeleteButton
													isPrimary
													onClick={ () => {
														updateOption(
															{
																buttons:
																	resetOption(),
															},
															'設定を初期化しました。'
														);
														closeDeleteModal();
													} }
													disabled={ isUpdating }
												>
													初期化
												</DeleteButton>
											</div>
											<div className="ystdb-menu-component-columns__item">
												<CancelButton
													isSecondary
													onClick={ closeDeleteModal }
												>
													キャンセル
												</CancelButton>
											</div>
										</div>
									</div>
								</Modal>
							) }
						</div>
						<div className="ystdb-menu-component-columns__item">
							<Preview>
								<span
									className={ previewClassName }
									style={ previewStyle }
									contentEditable="true"
								>
									{ previewText }
								</span>
							</Preview>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ToolbarButtons;
