import { InlineStyleContext } from './index';
import { useContext, useEffect, useState } from '@wordpress/element';
import { Icon, desktop, tablet, mobile } from '@wordpress/icons';
import {
	PanelBody,
	ToggleControl,
	BaseControl,
	Button,
	SelectControl,
	TextControl,
	Modal,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import { getComponentConfig } from "@ystdb/helper/config";
import Preview from '../components/preview/index';
import ColorPalette from "../components/color-palette/color-palette";
import { UpdateButton } from "../components/button/button";
import schema from './schema.json';
import { getStyle } from "./function";

const ButtonItems = () => {
	const {
		items,
		setItems,
		isUpdating,
		selectedItem,
		setSelectedItem,
		optionUpdate,
	} = useContext( InlineStyleContext );

	const fontUnit = getComponentConfig( 'fontUnit' );

	const getNewItemList = () => {
		let newItemList = Object.keys( items ).map( ( value ) => {
			return {
				...items[ value ],
				...{
					index: parseInt( value ),
					value: items[ value ].name,
				},
			};
		} );
		return [
			...[ {
				label: '-- 選択してください --',
				value: '',
				name: '',
			} ],
			...newItemList
		];
	};

	const [ customPreviewText, setCustomPreviewText ] = useState( '' );
	const [ itemList, setItemList ] = useState( getNewItemList() );
	const [ currentOption, setCurrentOption ] = useState( {} );
	const [ isAddStyleModalOpen, setIsAddStyleModalOpen ] = useState( false );
	const previewText = customPreviewText ? customPreviewText : `インラインスタイル${ selectedItem }`;

	const openAddStyleModal = () => setIsAddStyleModalOpen( true );
	const closeAddStyleModal = () => setIsAddStyleModalOpen( false );

	useEffect( () => {
		setItemList( getNewItemList() );
	}, [ items ] );

	useEffect( () => {
		const search = itemList.find( ( item ) => {
			return item.name === selectedItem;
		} );
		setCurrentOption( search );
	}, [ selectedItem ] );

	const getCurrentOption = ( name, defaultValue = undefined ) => {
		if ( ! currentOption || ! currentOption.hasOwnProperty( name ) ) {
			return defaultValue;
		}
		return currentOption[ name ];
	};

	const updateInlineItem = ( value ) => {
		let option = currentOption;
		option = {
			...option,
			...value
		};
		setCurrentOption( option );
		let newItems = items;
		newItems[ currentOption.index ] = {
			...newItems[ currentOption.index ],
			...option,
		};
		setItems( newItems );
	};
	const updateInlineItemStyle = ( value, device = 'style' ) => {
		let newOption = {};
		const option = currentOption.hasOwnProperty( device ) ? currentOption[ device ] : {};
		newOption[ device ] = {
			...option,
			...value
		};
		updateInlineItem( newOption );
	};

	const previewStyle = {
		...getCurrentOption( 'style', {} ),
	};
	const previewClassName = `ystdb-inline--${ selectedItem }`;

	return (
		<>
			<div className="ystdb-components-section">
				<div className="ystdb-menu-component-columns">
					<div className="ystdb-menu-component-columns__item">
						<PanelBody title={ 'スタイル選択' }>
							<BaseControl>
								<div className="ystdb-menu-inline-items__header">
									<div>
										<SelectControl
											label="スタイル"
											value={ selectedItem }
											options={ itemList }
											onChange={ ( value ) => {
												setSelectedItem( value );
											} }
										/>
									</div>
									<div>
										<Button
											isPrimary
											disabled={ !! selectedItem }
											onClick={ () => {

											} }
										>スタイル追加</Button>
									</div>
								</div>
							</BaseControl>
						</PanelBody>
						{ ( selectedItem &&
							<PanelBody title={ '基本設定' }>
								<BaseControl
									id={ 'enable' }
									label={ 'ボタンの有効化' }
								>
									<ToggleControl
										label={ 'ボタンを有効にする' }
										checked={ getCurrentOption( 'enable', true ) }
										onChange={ ( value ) => {
											updateInlineItem( { enable: value } );
										} }
									/>
								</BaseControl>
							</PanelBody>
						) }
						{ ( selectedItem && getCurrentOption( 'enable', true ) &&
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
															getCurrentOption( 'style', {} ),
															'font-size',
														)
													}
													onChange={ ( value ) => {
														updateInlineItemStyle( { 'font-size': value } );
													} }
													units={ fontUnit }
												/>
											</div>
											<div className="ystdb-component-responsive__item">
												<Icon icon={ tablet }/>
												<UnitControl
													value={
														getStyle(
															getCurrentOption( 'tabletStyle', {} ),
															'--ys-font-size-tablet',
														)
													}
													onChange={ ( value ) => {
														updateInlineItemStyle( { '--ys-font-size-tablet': value }, 'tabletStyle' );
													} }
													units={ fontUnit }
												/>
											</div>
											<div className="ystdb-component-responsive__item">
												<Icon icon={ mobile }/>
												<UnitControl
													value={
														getStyle(
															getCurrentOption( 'mobileStyle', {} ),
															'--ys-font-size-mobile'
														)
													}
													onChange={ ( value ) => {
														updateInlineItemStyle( { '--ys-font-size-mobile': value }, 'mobileStyle' );
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
												getCurrentOption( 'style', {} ),
												'font-weight'
											) }
											options={ getComponentConfig( 'fontWeight' ) }
											onChange={ ( value ) => {
												updateInlineItemStyle( { 'font-weight': value } );
											} }
										/>
									</BaseControl>
									<BaseControl
										id={ 'font-style' }
										label={ 'スタイル' }
									>
										<SelectControl
											value={ getStyle(
												getCurrentOption( 'style', {} ),
												'font-style'
											) }
											options={ getComponentConfig( 'fontStyle' ) }
											onChange={ ( value ) => {
												updateInlineItemStyle( { 'font-style': value } );
											} }
										/>
									</BaseControl>
									<BaseControl
										id={ 'white-space' }
										label={ '改行しない' }
									>
										<ToggleControl
											label={ '改行しない' }
											checked={ 'nowrap' === getStyle(
												getCurrentOption( 'style', {} ),
												'white-space'
											) }
											onChange={ ( value ) => {
												updateInlineItemStyle( {
													'white-space': value ? 'nowrap' : undefined,
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
												updateInlineItemStyle( { 'color': color } );
											} }
											value={ getStyle(
												getCurrentOption( 'style', {} ),
												'color',
											) }
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
												getCurrentOption( 'style', {} ),
												'font-family',
											) }
											onChange={ ( value ) => updateInlineItemStyle( { 'font-family': value } ) }
										/>
									</BaseControl>
								</PanelBody>
							</>
						) }
						{ ( selectedItem &&
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
						) }
					</div>
					<div className="ystdb-menu-component-columns__item">
						<Preview>
							<span className={ previewClassName } style={ previewStyle }
								  contenteditable="true">{ previewText }</span>
						</Preview>
					</div>
				</div>
			</div>
		</>
	);
};

export default ButtonItems;
