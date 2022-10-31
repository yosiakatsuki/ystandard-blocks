import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	RichText,
	BlockControls,
	InspectorControls,
	withColors,
	FontSizePicker,
	withFontSizes,
	ContrastChecker,
	MediaUpload,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import {
	PanelBody,
	BaseControl,
	Button,
	TextControl,
	RangeControl,
	ToolbarGroup,
	ToolbarItem,
	DropdownMenu,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __, _x } from '@wordpress/i18n';
/**
 * Plugin.
 */
import ManualLink from '../../src/js/admin-menu/components/manual-link';
import { getBlockEditorConfig, getComponentConfig } from '@aktk/helper/config';
import HorizonButtons from '@aktk/components/horizon-buttons';
import ColorPaletteControl from '@aktk/components/color-palette-control';
/**
 * Block.
 */
import {
	alignmentsControls,
	balloonTypes,
	balloonPositions,
	avatarSizes,
} from './config';
import { getBalloonBackground } from './save';

function Balloon( props ) {
	const {
		textColor,
		backgroundColor,
		balloonBorderColor,
		avatarNameColor,
		avatarBorderColor,
		setTextColor,
		setBackgroundColor,
		setBalloonBorderColor,
		setAvatarNameColor,
		setAvatarBorderColor,
		attributes,
		setAttributes,
		fontSize,
		setFontSize,
		className,
		isSelected,
	} = props;
	const {
		avatarName,
		avatarURL,
		avatarAlt,
		avatarID,
		avatarSize,
		avatarBorderWidth,
		avatarBorderRadius,
		text,
		balloonBorderWidth,
		balloonPosition,
		balloonType,
		verticalAlign,
	} = attributes;

	const ALLOWED_MEDIA_TYPES = [ 'image' ];
	const DEFAULT_CONTROLS = [ 'top', 'center', 'bottom' ];
	const DEFAULT_CONTROL = 'top';

	const defaultAvatar = getComponentConfig( 'defaultAvatar' ).url;
	const balloonImages = getBlockEditorConfig( 'balloonImages', [] );
	const isSerifBorder = 'serif-border' === balloonType;

	const activeAlignment = alignmentsControls[ verticalAlign ];
	const defaultAlignmentControl = alignmentsControls[ DEFAULT_CONTROL ];

	const wrapClasses = classnames( className, 'ystdb-balloon', {
		[ `is-vertically-aligned-${ verticalAlign }` ]: verticalAlign,
		[ `is-balloon-position-${ balloonPosition }` ]: balloonPosition,
	} );

	/**
	 * アバター画像カラムクラス
	 *
	 * @type {string}
	 */
	const avatarWrapClasses = classnames( 'ystdb-balloon__avatar', {
		[ `is-size-${ avatarSize }` ]: avatarSize,
	} );

	/**
	 * アバター名クラス
	 *
	 * @type {string}
	 */
	const avatarNameClass = classnames( 'ystdb-balloon__name', {
		'has-text-color': avatarNameColor.color,
		[ avatarNameColor.class ]: avatarNameColor.class,
	} );
	/**
	 * アバター名スタイル
	 *
	 * @type {{color: *}}
	 */
	const avatarNameStyles = {
		color: avatarNameColor.color,
	};

	/**
	 * アバター画像クラス
	 *
	 * @type {string}
	 */
	const avatarClasses = classnames( 'ystdb-balloon__avatar-image', {
		'has-border-color': avatarBorderColor.color,
		[ avatarBorderColor.class ]: avatarBorderColor.class,
		'has-border': 0 < avatarBorderWidth,
	} );

	/**
	 * アバター画像スタイル
	 *
	 * @type {{borderColor: *}}
	 */
	const avatarStyle = {
		borderColor: avatarBorderColor.color,
		borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
		borderRadius: avatarBorderRadius,
	};

	/**
	 * 吹き出しクラス
	 *
	 * @type {string}
	 */
	const balloonBodyClass = classnames( 'ystdb-balloon__body', {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': backgroundColor.color,
		[ balloonBorderColor.class ]: balloonBorderColor.class,
		'has-border-color': balloonBorderColor.color,
		[ `is-${ verticalAlign }` ]: verticalAlign,
		[ `is-${ balloonPosition }` ]: balloonPosition,
		[ `is-${ balloonType }` ]: balloonType,
	} );

	/**
	 * 吹き出しスタイル
	 *
	 * @type {{backgroundColor: *}}
	 */
	const balloonBodyStyles = {
		backgroundColor: getBalloonBackground(
			balloonType,
			backgroundColor.color
		),
		borderColor: balloonBorderColor.color,
		borderWidth: isSerifBorder ? balloonBorderWidth : undefined,
	};

	/**
	 * 吹き出しテキストクラス
	 *
	 * @type {string}
	 */
	const textClasses = classnames( 'ystdb-ystdb-balloon__text', {
		[ textColor.class ]: textColor.class,
		'has-text-color': textColor.color,
		[ fontSize.class ]: fontSize.class,
	} );

	/**
	 * 吹き出しテキストスタイル
	 *
	 * @type {{color: (*), fontSize: (string|*)}}
	 */
	const textStyles = {
		color: textColor.color,
		fontSize: fontSize.size ? fontSize.size : undefined,
	};

	const serifTriangleClass = classnames( 'ystdb-balloon__serif-triangle', {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': backgroundColor.color,
		[ balloonBorderColor.class ]: balloonBorderColor.class,
		'has-border-color': balloonBorderColor.color,
	} );

	const serifTrianglePosition = 6 - balloonBorderWidth;
	const serifTriangleStyle = {
		backgroundColor: getBalloonBackground(
			balloonType,
			backgroundColor.color
		),
		borderColor: balloonBorderColor.color,
		borderWidth: balloonBorderWidth,
		right:
			'right' === balloonPosition
				? `calc(100% - ${ serifTrianglePosition }px)`
				: undefined,
		left:
			'left' === balloonPosition
				? `calc(100% - ${ serifTrianglePosition }px)`
				: undefined,
	};

	/**
	 * 画像設定コントロール
	 *
	 * @param {Object} obj
	 */
	const mediaUploadRender = ( obj ) => {
		if ( ! avatarURL || defaultAvatar === avatarURL ) {
			return (
				<div className={ avatarClasses } style={ avatarStyle }>
					<Button
						onClick={ obj.open }
						className={ 'ystdb-mediaupload__preview is-no-image' }
					>
						<img src={ defaultAvatar } alt={ '' } />
					</Button>
				</div>
			);
		}
		return (
			<div className={ avatarClasses } style={ avatarStyle }>
				<Button
					onClick={ () => {
						setAttributes( {
							avatarID: 0,
							avatarURL: '',
							avatarAlt: '',
						} );
					} }
					className={ 'ystdb-mediaupload__preview is-show-text' }
					style={ { padding: 0 } }
				>
					<img src={ avatarURL } alt={ avatarAlt } />
				</Button>
			</div>
		);
	};

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarItem
						label={ _x( '縦位置の変更', 'ystandard-blocks' ) }
					>
						{ ( toolbarItemHTMLProps ) => (
							<DropdownMenu
								toggleProps={ toolbarItemHTMLProps }
								isCollapsed={ true }
								icon={
									activeAlignment
										? activeAlignment.icon
										: defaultAlignmentControl.icon
								}
								controls={ DEFAULT_CONTROLS.map(
									( control ) => {
										return {
											...alignmentsControls[ control ],
											isActive: verticalAlign === control,
											onClick: () =>
												setAttributes( {
													verticalAlign:
														verticalAlign ===
														control
															? undefined
															: control,
												} ),
										};
									}
								) }
							/>
						) }
					</ToolbarItem>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( '吹き出し設定', 'ystandard-blocks' ) }>
					<BaseControl
						id={ 'balloon-position' }
						label={ __( '吹き出しの向き', 'ystandard-blocks' ) }
					>
						<HorizonButtons>
							{ balloonPositions.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isSecondary={
											balloonPosition !== item.value
										}
										isPrimary={
											balloonPosition === item.value
										}
										onClick={ () => {
											setAttributes( {
												balloonPosition: item.value,
											} );
										} }
									>
										{ item.label }
									</Button>
								);
							} ) }
						</HorizonButtons>
					</BaseControl>
					<BaseControl
						id={ 'balloon-type' }
						label={ __( '吹き出しタイプ', 'ystandard-blocks' ) }
					>
						<HorizonButtons>
							{ balloonTypes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isSecondary={
											balloonType !== item.value
										}
										isPrimary={ balloonType === item.value }
										onClick={ () => {
											// if (
											// 	'serif-border' === item.value &&
											// 	'serif-border' !== balloonType
											// ) {
											// 	setBackgroundColor(
											// 		balloonOption.contentBackground
											// 	);
											// }
											// if (
											// 	'serif-border' !== item.value
											// ) {
											// 	setBalloonBorderColor(
											// 		backgroundColor.color
											// 	);
											// }
											setAttributes( {
												balloonType: item.value,
											} );
										} }
									>
										{ item.label }
									</Button>
								);
							} ) }
						</HorizonButtons>
					</BaseControl>
					<BaseControl
						id={ 'balloon-font-size' }
						label={ __( '文字サイズ', 'ystandard-blocks' ) }
					>
						<FontSizePicker
							__nextHasNoMarginBottom
							value={ fontSize.size }
							onChange={ ( font ) => {
								setFontSize( font );
							} }
						/>
					</BaseControl>
					<BaseControl
						id={ 'balloon-background' }
						label={ __( '吹き出し背景色', 'ystandard-blocks' ) }
					>
						<ColorPaletteControl
							label={ __( '吹き出し背景色', 'ystandard-blocks' ) }
							value={ backgroundColor.color }
							onChange={ ( color ) => {
								setBackgroundColor( color );
								if ( ! isSerifBorder ) {
									setBalloonBorderColor( color );
								}
							} }
						/>
					</BaseControl>
					<BaseControl
						id={ 'balloon-text-color' }
						label={ __( '吹き出し文字色', 'ystandard-blocks' ) }
					>
						<ColorPaletteControl
							label={ __( '吹き出し文字色', 'ystandard-blocks' ) }
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
					{ isSerifBorder && (
						<>
							<BaseControl
								id={ 'serif-border-color' }
								label={ __(
									'吹き出し枠線色',
									'ystandard-blocks'
								) }
							>
								<ColorPaletteControl
									label={ __(
										'吹き出し枠線色',
										'ystandard-blocks'
									) }
									value={ balloonBorderColor.color }
									onChange={ ( color ) => {
										setBalloonBorderColor( color );
									} }
								/>
							</BaseControl>
							<BaseControl>
								<RangeControl
									value={ balloonBorderWidth }
									label={ __(
										'吹き出し枠線太さ',
										'ystandard-blocks'
									) }
									min={ 1 }
									max={ 4 }
									initialPosition={ 1 }
									allowReset
									onChange={ ( value ) => {
										setAttributes( {
											balloonBorderWidth: value,
										} );
									} }
								/>
							</BaseControl>
						</>
					) }
				</PanelBody>
				<PanelBody
					title={ __( '登録済みアバター画像', 'ystandard-blocks' ) }
				>
					<BaseControl>
						{ 0 >= balloonImages.length ? (
							<div>
								<p>登録済みのアバター画像はありません。</p>
								<p>
									「yStandard
									Blocks」設定画面の「吹き出し登録」からよく使うアバター画像を登録できます。
								</p>
								<ManualLink
									url={
										'https://wp-ystandard.com/manual/ystdb-balloon-avatar-setting/'
									}
								/>
							</div>
						) : (
							<div className={ 'ystdb-avatar-list' }>
								{ balloonImages.map( ( item ) => {
									return (
										<Button
											key={ item.id }
											isPrimary={
												avatarID === item.id &&
												avatarName === item.name
											}
											onClick={ () => {
												setAttributes( {
													avatarID: item.id,
													avatarName: item.name,
													avatarURL: item.url,
													avatarAlt: item.name,
												} );
											} }
										>
											<span>
												<img
													className={
														'ystdb-avatar-list__image'
													}
													src={ item.url }
													alt={ item.name }
												/>
												{ !! item.name && (
													<span
														className={
															'ystdb-avatar-list__name'
														}
													>
														{ item.name }
													</span>
												) }
											</span>
										</Button>
									);
								} ) }
							</div>
						) }
					</BaseControl>
				</PanelBody>
				<PanelBody title={ __( 'アバター設定', 'ystandard-blocks' ) }>
					<BaseControl
						id={ 'avatar-size' }
						label={ __( 'アバターサイズ', 'ystandard-blocks' ) }
					>
						<HorizonButtons>
							{ avatarSizes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isSecondary={
											avatarSize !== item.value
										}
										isPrimary={ avatarSize === item.value }
										onClick={ () => {
											setAttributes( {
												avatarSize: item.value,
											} );
										} }
									>
										<span>{ item.label }</span>
									</Button>
								);
							} ) }
						</HorizonButtons>
					</BaseControl>
					<BaseControl>
						<RangeControl
							value={ avatarBorderRadius }
							label={ __(
								'アバター画像の角丸',
								'ystandard-blocks'
							) }
							min={ 0 }
							max={ 100 }
							initialPosition={ 40 }
							allowReset
							onChange={ ( value ) => {
								setAttributes( {
									avatarBorderRadius: value,
								} );
							} }
						/>
					</BaseControl>
					<BaseControl>
						<RangeControl
							value={ avatarBorderWidth }
							label={ __(
								'アバター画像の枠線太さ',
								'ystandard-blocks'
							) }
							min={ 0 }
							max={ 10 }
							initialPosition={ 0 }
							allowReset
							onChange={ ( value ) => {
								setAttributes( {
									avatarBorderWidth: value,
								} );
							} }
						/>
					</BaseControl>
					<BaseControl
						id={ 'avatar-border-color' }
						label={ __( 'アバター画像枠色', 'ystandard-blocks' ) }
					>
						<ColorPaletteControl
							label={ __(
								'アバター画像枠色',
								'ystandard-blocks'
							) }
							value={ avatarBorderColor.color }
							onChange={ ( color ) => {
								setAvatarBorderColor( color );
							} }
						/>
					</BaseControl>
					<BaseControl
						id={ 'avatar-text-color' }
						label={ __( 'アバター名文字色', 'ystandard-blocks' ) }
					>
						<ColorPaletteControl
							label={ __(
								'アバター名文字色',
								'ystandard-blocks'
							) }
							value={ avatarNameColor.color }
							onChange={ ( color ) => {
								setAvatarNameColor( color );
							} }
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

			<div className={ wrapClasses }>
				<figure className={ avatarWrapClasses }>
					<MediaUpload
						onSelect={ ( media ) => {
							setAttributes( {
								avatarURL: media.url,
								avatarID: media.id,
								avatarAlt: media.alt,
							} );
						} }
						type={ ALLOWED_MEDIA_TYPES }
						value={ avatarID }
						render={ mediaUploadRender }
					/>
					{ ( isSelected || avatarName ) && (
						<figcaption className={ avatarNameClass }>
							<TextControl
								value={ avatarName }
								className={ 'ystdb-balloon__name--edit' }
								onChange={ ( value ) => {
									setAttributes( {
										avatarName: value,
									} );
								} }
								style={ avatarNameStyles }
								placeholder={ '名前...' }
								aria-label={ __( 'Name' ) }
							/>
						</figcaption>
					) }
				</figure>
				<div className={ balloonBodyClass } style={ balloonBodyStyles }>
					<RichText
						tagName={ 'p' }
						placeholder={ __( 'Add text…' ) }
						value={ text }
						onChange={ ( value ) =>
							setAttributes( { text: value } )
						}
						className={ textClasses }
						style={ textStyles }
					/>
					{ isSerifBorder && (
						<div
							className={ serifTriangleClass }
							style={ serifTriangleStyle }
							aria-hidden
						/>
					) }
				</div>
			</div>
		</Fragment>
	);
}

export default compose( [
	withColors( 'backgroundColor', {
		textColor: 'color',
		avatarNameColor: 'color',
		avatarBorderColor: 'borderColor',
		balloonBorderColor: 'borderColor',
	} ),
	withFontSizes( 'fontSize' ),
] )( Balloon );
