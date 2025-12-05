import { InlineStyleContext } from './index';
import { useContext, useState } from '@wordpress/element';
import {
	desktop,
	Icon,
	mobile,
	plusCircle,
	tablet,
	download,
} from '@wordpress/icons';
import {
	__experimentalUnitControl as UnitControl,
	BaseControl,
	Button,
	Modal,
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

import { getComponentConfig } from '@aktk/helper/config';
import Preview from '../components/preview/index';
import ColorPalette from '../components/color-palette/color-palette';
import {
	CancelButton,
	UpdateButton,
	DeleteButton,
} from '../components/button/button';
import { getStyle } from './function';
import schema from './schema.json';
import { ErrorMessage } from '../components/message';
import { getProperty, hasKey, object2Array } from '@aktk/helper/object';
import { Save } from 'react-feather';

const ButtonItems = () => {
	const {
		items,
		setItems,
		selectedItem,
		setSelectedItem,
		isUpdating,
		updateOption,
	} = useContext( InlineStyleContext );

	const fontUnit = getComponentConfig( 'fontUnit' );

	const [ isAddStyleModalOpen, setIsAddStyleModalOpen ] = useState( false );
	const [ isDeleteModalOpen, setIsDeleteModalOpen ] = useState( false );
	const [ newStyleSlugErrorMessage, setNewStyleSlugErrorMessage ] =
		useState( '' );
	const [ newStyleLabelErrorMessage, setNewStyleLabelErrorMessage ] =
		useState( '' );
	const [ disableAddStyle, setDisableAddStyle ] = useState( false );
	const [ newStyleSlug, setNewStyleSlug ] = useState( '' );
	const [ newStyleLabel, setNewStyleLabel ] = useState( '' );

	const openAddStyleModal = () => setIsAddStyleModalOpen( true );
	const closeAddStyleModal = () => setIsAddStyleModalOpen( false );
	const openDeleteModal = () => setIsDeleteModalOpen( true );
	const closeDeleteModal = () => setIsDeleteModalOpen( false );

	const isNothingItems = 0 >= object2Array( items ).length;

	const getItemList = () => {
		const _items = Object.entries( { ...items } ).map( ( value ) => {
			return {
				...value[ 1 ],
				key: value[ 0 ],
			};
		} );
		const newItemList = _items.map( ( value ) => {
			return {
				...value,
				...{
					value: value.key,
				},
			};
		} );
		return [
			...[
				{
					label: '-- 選択してください --',
					value: '',
					name: '',
				},
			],
			...newItemList,
		];
	};

	const searchItem = ( search ) => {
		if ( '' === search ) {
			return undefined;
		}
		return getProperty( items, search );
	};

	const checkSlug = ( text, allowEmpty = false ) => {
		if ( allowEmpty && ! text ) {
			setNewStyleSlugErrorMessage( '' );
			setDisableAddStyle( false );
			return true;
		}
		const match = text.match( /^[A-Za-z0-9\-]+$/ );
		const hyphenLength = ( text.match( /\-/g ) || [] ).length;
		const deleteHyphen = text.replace( /\-/g, '' );
		const check = match && hyphenLength <= 1 && deleteHyphen;
		let message = '';
		if ( ! check ) {
			message = 'IDは英数字のみ、ハイフンは1つまでで入力してください。';
		}
		const search = text ? searchItem( text ) : undefined;
		if ( !! search ) {
			message = 'すでに登録されているIDです。';
		}
		setNewStyleSlugErrorMessage( message );
		setDisableAddStyle( ! check || !! search );

		return check && ! search;
	};

	const getCurrentOption = ( name, defaultValue = undefined ) => {
		const currentOption = getProperty( items, selectedItem );
		return getProperty( currentOption, name, defaultValue );
	};

	const addInlineItem = ( slug, label ) => {
		const newValue = {
			...items,
			[ slug ]: {
				...schema.inlineStyle.items.schema,
				...{
					name: slug,
					label,
				},
			},
		};
		setItems( newValue );
	};

	const deleteItem = ( name ) => {
		const newValue = { ...items };
		delete newValue[ name ];
		setItems( newValue );
		return newValue;
	};

	const updateInlineItem = ( value ) => {
		const newValue = { ...items };
		if ( hasKey( newValue, selectedItem ) ) {
			newValue[ selectedItem ] = {
				...getProperty( items, selectedItem ),
				...value,
			};
		}
		setItems( newValue );
	};
	const updateInlineItemStyle = ( value, device = 'style' ) => {
		const currentStyle = getProperty(
			getProperty( items, selectedItem ),
			device
		);
		updateInlineItem( {
			[ device ]: {
				...currentStyle,
				...value,
			},
		} );
	};

	const importInitialItems = () => {
		const newValue = schema.inlineStyle.items;
		delete newValue.schema;
		setItems( newValue );
		updateOption( { items: newValue }, '初期設定をインポートしました。' );
	};
	const previewStyle = {
		...getCurrentOption( 'style', {} ),
	};
	const previewClassName = `ystdb-inline--${ selectedItem }`;
	const previewText = `インラインスタイル${ selectedItem }`;

	return (
		<>
			<div className="ystdb-components-section">
				<div className="ystdb-menu-component-columns is-reverse">
					<div className="ystdb-menu-component-columns__item">
						<PanelBody title={ 'スタイル選択' }>
							<BaseControl
								__nextHasNoMarginBottom
							>
								{ isNothingItems && (
									<>
										<p>スタイル設定がありません。</p>
										<p>
											初期設定をインポートするか、「スタイル追加」からスタイルを追加してください。
										</p>
									</>
								) }
								<div className="ystdb-menu-inline-items__header">
									<div>
										{ isNothingItems && (
											<div className="ystdb-menu-inline-items__no-items">
												<Button
													isPrimary
													disabled={ isUpdating }
													onClick={
														importInitialItems
													}
												>
													<Icon
														className={
															'ystdb-button-icon'
														}
														icon={ download }
													/>{ ' ' }
													初期設定をインポート
												</Button>
											</div>
										) }
										{ ! isNothingItems && (
											<SelectControl
												label="スタイル"
												value={ selectedItem }
												options={ getItemList() }
												onChange={ ( value ) => {
													setSelectedItem( value );
												} }
												__next40pxDefaultSize
												__nextHasNoMarginBottom
											/>
										) }
									</div>
									<div>
										<Button
											isPrimary
											disabled={
												!! selectedItem || isUpdating
											}
											onClick={ openAddStyleModal }
										>
											<Icon
												className={
													'ystdb-button-icon'
												}
												icon={ plusCircle }
											/>{ ' ' }
											スタイル追加
										</Button>
									</div>
								</div>
							</BaseControl>
						</PanelBody>
						{ selectedItem && (
							<PanelBody title={ '基本設定' }>
								<BaseControl
									id={ 'button-name' }
									label={ 'ボタン名' }
									__nextHasNoMarginBottom
								>
									<TextControl
										label={ `表示名 (ID:${ getCurrentOption(
											'name',
											''
										) })` }
										value={ getCurrentOption(
											'label',
											''
										) }
										onChange={ ( value ) => {
											updateInlineItem( {
												label: value,
											} );
										} }
										__next40pxDefaultSize
										__nextHasNoMarginBottom
									/>
								</BaseControl>
								<BaseControl
									id={ 'enable' }
									label={ 'ボタンの有効化' }
									__nextHasNoMarginBottom
								>
									<ToggleControl
										label={ 'ボタンを有効にする' }
										checked={ getCurrentOption(
											'enable',
											true
										) }
										onChange={ ( value ) => {
											updateInlineItem( {
												enable: value,
											} );
										} }
										__nextHasNoMarginBottom
									/>
								</BaseControl>
							</PanelBody>
						) }
						{ selectedItem &&
							getCurrentOption( 'enable', true ) && (
								<>
									<PanelBody title={ '大きさ・スタイル' }>
										<BaseControl
											id={ 'column-font-size' }
											label={ 'サイズ' }
											__nextHasNoMarginBottom
										>
											<div className="ystdb-component-responsive__container">
												<div className="ystdb-component-responsive__item">
													<Icon icon={ desktop } />
													<UnitControl
														value={ getStyle(
															getCurrentOption(
																'style',
																{}
															),
															'font-size'
														) }
														onChange={ (
															value
														) => {
															updateInlineItemStyle(
																{
																	'font-size':
																		value,
																}
															);
														} }
														units={ fontUnit }
														__next40pxDefaultSize
													/>
												</div>
												<div className="ystdb-component-responsive__item">
													<Icon icon={ tablet } />
													<UnitControl
														value={ getStyle(
															getCurrentOption(
																'tabletStyle',
																{}
															),
															'font-size'
														) }
														onChange={ (
															value
														) => {
															updateInlineItemStyle(
																{
																	'font-size':
																		value,
																},
																'tabletStyle'
															);
														} }
														units={ fontUnit }
														__next40pxDefaultSize
													/>
												</div>
												<div className="ystdb-component-responsive__item">
													<Icon icon={ mobile } />
													<UnitControl
														value={ getStyle(
															getCurrentOption(
																'mobileStyle',
																{}
															),
															'font-size'
														) }
														onChange={ (
															value
														) => {
															updateInlineItemStyle(
																{
																	'font-size':
																		value,
																},
																'mobileStyle'
															);
														} }
														units={ fontUnit }
														__next40pxDefaultSize
													/>
												</div>
											</div>
										</BaseControl>
										<BaseControl
											id={ 'font-weight' }
											label={ '太さ' }
											__nextHasNoMarginBottom
										>
											<SelectControl
												value={ getStyle(
													getCurrentOption(
														'style',
														{}
													),
													'font-weight'
												) }
												options={ getComponentConfig(
													'fontWeight'
												) }
												onChange={ ( value ) => {
													updateInlineItemStyle( {
														'font-weight': value,
													} );
												} }
												__next40pxDefaultSize
												__nextHasNoMarginBottom
											/>
										</BaseControl>
										<BaseControl
											id={ 'font-style' }
											label={ 'スタイル' }
											__nextHasNoMarginBottom
										>
											<SelectControl
												value={ getStyle(
													getCurrentOption(
														'style',
														{}
													),
													'font-style'
												) }
												options={ getComponentConfig(
													'fontStyle'
												) }
												onChange={ ( value ) => {
													updateInlineItemStyle( {
														'font-style': value,
													} );
												} }
												__next40pxDefaultSize
												__nextHasNoMarginBottom
											/>
										</BaseControl>
										<BaseControl
											id={ 'white-space' }
											label={ '改行しない' }
											__nextHasNoMarginBottom
										>
											<ToggleControl
												label={ '改行しない' }
												checked={
													'nowrap' ===
													getStyle(
														getCurrentOption(
															'style',
															{}
														),
														'white-space'
													)
												}
												onChange={ ( value ) => {
													updateInlineItemStyle( {
														'white-space': value
															? 'nowrap'
															: undefined,
													} );
												} }
												__nextHasNoMarginBottom
											/>
										</BaseControl>
									</PanelBody>
									<PanelBody title={ '色' }>
										<BaseControl
											id={ 'font-color' }
											label={ '文字色' }
											__nextHasNoMarginBottom
										>
											<ColorPalette
												onChange={ ( color ) => {
													updateInlineItemStyle( {
														color,
													} );
												} }
												value={ getStyle(
													getCurrentOption(
														'style',
														{}
													),
													'color'
												) }
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
											__nextHasNoMarginBottom
										>
											<TextControl
												placeholder={ 'sans-serif' }
												value={ getStyle(
													getCurrentOption(
														'style',
														{}
													),
													'font-family'
												) }
												onChange={ ( value ) =>
													updateInlineItemStyle( {
														'font-family': value,
													} )
												}
												__next40pxDefaultSize
												__nextHasNoMarginBottom
											/>
										</BaseControl>
									</PanelBody>
								</>
							) }
						{ selectedItem && (
							<div className="ystdb-components-section">
								<UpdateButton
									key={ 'update' }
									onClick={ () => {
										updateOption( { items } );
									} }
									disabled={ isUpdating }
								>
									<Save
										className={ 'ystdb-button-icon' }
										style={ { fill: 'none' } }
									/>{ ' ' }
									設定を保存
								</UpdateButton>
								<div className="ystdb-components-section">
									<DeleteButton
										isSmall
										onClick={ () => {
											openDeleteModal();
										} }
										disabled={ isUpdating }
									>
										設定を削除
									</DeleteButton>
								</div>
							</div>
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
					{ isAddStyleModalOpen && (
						<Modal
							title="スタイルの追加"
							onRequestClose={ closeAddStyleModal }
							shouldCloseOnClickOutside={ false }
							isDismissible={ false }
							focusOnMount
						>
							<BaseControl __nextHasNoMarginBottom>
								<TextControl
									label="ID (英数字)"
									value={ newStyleSlug }
									onChange={ ( value ) => {
										checkSlug( value, true );
										setNewStyleSlug( value );
									} }
									__next40pxDefaultSize
									__nextHasNoMarginBottom
								/>
								<ErrorMessage
									isShow={ !! newStyleSlugErrorMessage }
								>
									{ newStyleSlugErrorMessage }
								</ErrorMessage>
								<TextControl
									label="表示名"
									value={ newStyleLabel }
									onChange={ ( value ) => {
										setNewStyleLabel( value );
										setNewStyleLabelErrorMessage( '' );
									} }
									__next40pxDefaultSize
									__nextHasNoMarginBottom
								/>
								<ErrorMessage
									isShow={ !! newStyleLabelErrorMessage }
								>
									{ newStyleLabelErrorMessage }
								</ErrorMessage>
							</BaseControl>
							<div className="ystdb-components-section">
								<div className="ystdb-menu-component-columns">
									<div className="ystdb-menu-component-columns__item">
										<UpdateButton
											isPrimary
											onClick={ () => {
												const check =
													checkSlug( newStyleSlug );
												if ( ! newStyleLabel ) {
													setNewStyleLabelErrorMessage(
														'表示名を入力してください。'
													);
												}
												if (
													! check ||
													! newStyleLabel
												) {
													return;
												}
												addInlineItem(
													newStyleSlug,
													newStyleLabel
												);
												setNewStyleSlug( '' );
												setNewStyleLabel( '' );
												setNewStyleSlugErrorMessage(
													''
												);
												setNewStyleLabelErrorMessage(
													''
												);
												setSelectedItem( newStyleSlug );
												closeAddStyleModal();
											} }
											disabled={ disableAddStyle }
										>
											追加
										</UpdateButton>
									</div>
									<div className="ystdb-menu-component-columns__item">
										<CancelButton
											isSecondary
											onClick={ closeAddStyleModal }
										>
											キャンセル
										</CancelButton>
									</div>
								</div>
							</div>
						</Modal>
					) }
					{ isDeleteModalOpen && (
						<Modal
							title="確認"
							onRequestClose={ closeDeleteModal }
							shouldCloseOnClickOutside={ false }
							isDismissible={ false }
						>
							<p>
								{ searchItem( selectedItem )?.label }{ ' ' }
								を削除してもよろしいですか？
							</p>
							<div className="ystdb-components-section">
								<div className="ystdb-menu-component-columns">
									<div className="ystdb-menu-component-columns__item">
										<DeleteButton
											isPrimary
											onClick={ () => {
												updateOption(
													{
														items: deleteItem(
															selectedItem
														),
													},
													'設定を削除しました。'
												);
												setSelectedItem( '' );
												closeDeleteModal();
											} }
											disabled={ isUpdating }
										>
											削除
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
			</div>
		</>
	);
};

export default ButtonItems;
