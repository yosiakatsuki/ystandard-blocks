import { InlineStyleContext } from './index';
import { useContext, useEffect, useState } from '@wordpress/element';
import { Icon, desktop, tablet, mobile } from '@wordpress/icons';
import {
	PanelBody,
	ToggleControl,
	BaseControl,
	Button,
	SelectControl,
	RangeControl,
	TextControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import { getComponentConfig } from "@ystdb/helper/config";
import { hex2rgb } from "@ystdb/helper/color";

import Preview from '../components/preview/index';
import ColorPalette from "../components/color-palette/color-palette";
import { UpdateButton } from "../components/button/button";

import schema from './schema.json';
import { getStyle } from "./function";


const ToolbarButtons = () => {
	const {
		options,
		buttons,
		setButtons,
		isUpdating,
		currentButtonIndex,
		setCurrentButtonIndex,
		optionUpdate,
	} = useContext( InlineStyleContext );

	const fontUnit = getComponentConfig( 'fontUnit' );


	const [ customPreviewText, setCustomPreviewText ] = useState( '' );
	const [ currentOption, setCurrentOption ] = useState( {} );
	const previewText = customPreviewText ? customPreviewText : `インラインスタイル${ currentButtonIndex + 1 }`;

	const getDefaultStyle = ( name, defaultValue = undefined, device = 'style' ) => {

		const style = schema.inlineStyle.buttons[ currentButtonIndex ][ device ];
		if ( ! style || ! style.hasOwnProperty( name ) ) {
			return defaultValue;
		}
		return style[ name ];
	};

	useEffect( () => {
		setCurrentOption( buttons[ currentButtonIndex ] );
	}, [ currentButtonIndex ] );

	const updateButtonsOption = ( value ) => {
		let option = {
			...currentOption,
			...value
		};
		setCurrentOption( option );
		let newButtons = buttons;
		newButtons[ currentButtonIndex ] = {
			...newButtons[ currentButtonIndex ],
			...option
		};
		setButtons( newButtons );
	};

	const updateButtonsStyle = ( value, device = 'style' ) => {
		let newOption = {};
		newOption[ device ] = {
			...currentOption[ device ],
			...value
		};
		updateButtonsOption( newOption );
	};

	const getMarkerStyle = () => {
		let weight = currentOption.style[ '@markerWeight' ];
		weight = weight ? 100 - weight : '';
		let opacity = currentOption.style[ '@markerOpacity' ];
		opacity = opacity ? opacity / 100 : '';
		let color = currentOption.style[ '@markerColor' ];
		color = color ? hex2rgb( color ) : '';
		if ( ! weight || ! opacity || ! color ) {
			return { background: undefined };
		}
		const rgb = `${ color[ 0 ] },${ color[ 1 ] },${ color[ 2 ] }`;
		return {
			background: `linear-gradient(transparent ${ weight }%, rgba(${ rgb }, ${ opacity }) ${ weight }%)`
		};
	};

	const previewStyle = currentOption.enable ? {
		...currentOption.style,
		...getMarkerStyle(),
	} : {};
	const previewClassName = `ystdb-inline--${ currentButtonIndex + 1 }`;

	return (
		<>
			<div className="ystdb-menu-toolbar-buttons__select">
				<div className="ystdb__horizon-buttons">
					{ options.buttons.map( ( item, index ) => {
						return (
							<Button
								key={ index }
								isSecondary={
									currentButtonIndex !== index
								}
								isPrimary={
									currentButtonIndex === index
								}
								onClick={ () => {
									setCurrentButtonIndex( index );
								} }
							>
								{ `スタイル${ index + 1 }` }
							</Button>
						);
					} ) }
				</div>
				<div className="ystdb-components-section">
					<div className="ystdb-menu-component-columns">
						<div className="ystdb-menu-component-columns__item">
							<PanelBody title={ '基本設定' }>
								<BaseControl
									id={ 'enable' }
									label={ 'ボタンの有効化' }
								>
									<ToggleControl
										label={ 'ボタンを有効にする' }
										checked={ currentOption.enable }
										onChange={ ( value ) => {
											updateButtonsOption( { enable: value } );
										} }
									/>
								</BaseControl>
							</PanelBody>
							{ ( currentOption.enable &&
								<>
									<PanelBody title={ '大きさ・スタイル' }>
										<BaseControl
											id={ 'font-size' }
											label={ 'サイズ' }
										>
											<div className="ystdb-component-responsive__container">
												<div className="ystdb-component-responsive__item">
													<Icon icon={ desktop }/>
													<UnitControl
														value={
															getStyle(
																currentOption.style,
																'font-size',
																getDefaultStyle( 'font-size' )
															)
														}
														onChange={ ( value ) => {
															updateButtonsStyle( { 'font-size': value } );
														} }
														units={ fontUnit }
													/>
												</div>
												<div className="ystdb-component-responsive__item">
													<Icon icon={ tablet }/>
													<UnitControl
														value={
															getStyle(
																currentOption.tabletStyle,
																'--ys-font-size-tablet',
																getDefaultStyle( '--ys-font-size-tablet', undefined, 'tabletStyle' )
															)
														}
														onChange={ ( value ) => {
															updateButtonsStyle( { '--ys-font-size-tablet': value }, 'tabletStyle' );
														} }
														units={ fontUnit }
													/>
												</div>
												<div className="ystdb-component-responsive__item">
													<Icon icon={ mobile }/>
													<UnitControl
														value={
															getStyle(
																currentOption.mobileStyle,
																'--ys-font-size-mobile',
																getDefaultStyle( '--ys-font-size-mobile', undefined, 'mobileStyle' )
															)
														}
														onChange={ ( value ) => {
															updateButtonsStyle( { '--ys-font-size-mobile': value }, 'mobileStyle' );
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
													currentOption.style,
													'font-weight',
													getDefaultStyle( 'font-weight' )
												) }
												options={ getComponentConfig( 'fontWeight' ) }
												onChange={ ( value ) => {
													updateButtonsStyle( { 'font-weight': value } );
												} }
											/>
										</BaseControl>
										<BaseControl
											id={ 'font-style' }
											label={ 'スタイル' }
										>
											<SelectControl
												value={ getStyle(
													currentOption.style,
													'font-style',
													getDefaultStyle( 'font-style' )
												) }
												options={ getComponentConfig( 'fontStyle' ) }
												onChange={ ( value ) => {
													updateButtonsStyle( { 'font-style': value } );
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
													updateButtonsStyle( { 'color': color } );
												} }
												value={ getStyle(
													currentOption.style,
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
														...getMarkerStyle()
													} );
												} }
												value={ getStyle(
													currentOption.style,
													'@markerColor',
													getDefaultStyle( '@markerColor' )
												) }
											/>
										</BaseControl>
										<BaseControl
											id={ 'marker-opacity' }
											label={ '濃さ(%)' }
										>
											<RangeControl
												value={ getStyle(
													currentOption.style,
													'@markerOpacity',
													getDefaultStyle( '@markerOpacity' )
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( {
														'@markerOpacity': value,
														...getMarkerStyle()
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
													currentOption.style,
													'@markerWeight',
													getDefaultStyle( '@markerWeight' )
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( {
														'@markerWeight': value,
														...getMarkerStyle(),
													} );
												} }
												min={ 10 }
												max={ 100 }
											/>
										</BaseControl>
									</PanelBody>
									<PanelBody title={ '上級者向け' } initialOpen={ false }>
										<BaseControl
											id={ 'font-family' }
											label={ 'フォント' }
										>
											<TextControl
												value={ getStyle(
													currentOption.style,
													'font-family',
													getDefaultStyle( 'font-family' )
												) }
												onChange={ ( value ) => {
													updateButtonsStyle( { 'font-family': value } );
												} }
											/>
										</BaseControl>
									</PanelBody>
								</> ) }
							<div className="ystdb-components-section">
								<UpdateButton
									key={ 'update' }
									onClick={ () => {
										optionUpdate();
									} }
									disabled={ isUpdating }
								>
									設定を保存
								</UpdateButton>
							</div>
						</div>
						<div className="ystdb-menu-component-columns__item">
							<Preview>
								<span className={ previewClassName } style={ previewStyle }
									  contenteditable="true">{ previewText }</span>
							</Preview>
						</div>
					</div>
				</div>
			</div>

		</>
	)
		;
};

export default ToolbarButtons;
