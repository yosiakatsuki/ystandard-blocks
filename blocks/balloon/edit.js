import classnames from 'classnames';
import {
	alignmentsControls,
	balloonTypes,
	balloonPositions,
	avatarSizes,
	defaultAvatar,
} from './config';

import {
	RichText,
	PlainText,
	BlockControls,
	InspectorControls,
	withColors,
	FontSizePicker,
	withFontSizes,
	ContrastChecker,
	MediaUpload,
} from '@wordpress/block-editor';
import { select } from '@wordpress/data';

import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	BaseControl,
	Button,
	RangeControl,
	Toolbar,
	ColorPalette,
} from '@wordpress/components';

import { compose } from '@wordpress/compose';

import { __, _x } from '@wordpress/i18n';

function ysBalloon( props ) {
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
		balloonPosition,
		balloonType,
		verticalAlign,
	} = attributes;

	const ALLOWED_MEDIA_TYPES = [ 'image' ];
	const DEFAULT_CONTROLS = [ 'top', 'center', 'bottom' ];
	const DEFAULT_CONTROL = 'top';

	const activeAlignment = alignmentsControls[ verticalAlign ];
	const defaultAlignmentControl = alignmentsControls[ DEFAULT_CONTROL ];

	const { colors } = select( 'core/block-editor' ).getSettings();

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
		[ balloonBorderColor.class ]: balloonBorderColor.class,
		'has-background': backgroundColor.color,
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
		backgroundColor: backgroundColor.color,
		borderColor: balloonBorderColor.color,
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
		fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
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
				<Toolbar
					isCollapsed={ true }
					icon={
						activeAlignment
							? activeAlignment.icon
							: defaultAlignmentControl.icon
					}
					label={ _x(
						'Change vertical alignment',
						'Block vertical alignment setting label'
					) }
					controls={ DEFAULT_CONTROLS.map( ( control ) => {
						return {
							...alignmentsControls[ control ],
							isActive: verticalAlign === control,
							onClick: () =>
								setAttributes( {
									verticalAlign:
										verticalAlign === control
											? undefined
											: control,
								} ),
						};
					} ) }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( '吹き出し設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{ __( '吹き出しの位置', 'ystandard-blocks' ) }
						</div>
						<div className={ 'ystdb-balloon-selector' }>
							{ balloonPositions.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
										isPrimary={
											balloonPosition === item.value
										}
										onClick={ () => {
											setAttributes( {
												balloonPosition: item.value,
											} );
										} }
									>
										<span
											className={ `ystdb-balloon-selector__container is-${ item.value } is-${ balloonType }` }
										>
											<span
												className={
													'ystdb-balloon-selector__image'
												}
											>
												{ ' ' }
											</span>
											<span
												className={
													'ystdb-balloon-selector__body'
												}
											>
												{ item.label }
											</span>
										</span>
									</Button>
								);
							} ) }
						</div>
					</BaseControl>
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{ __( '吹き出しタイプ', 'ystandard-blocks' ) }
						</div>
						<div className={ 'ystdb-balloon-selector' }>
							{ balloonTypes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
										isPrimary={ balloonType === item.value }
										onClick={ () => {
											setAttributes( {
												balloonType: item.value,
											} );
										} }
									>
										<span
											className={ `ystdb-balloon-selector__container is-${ item.value } is-${ balloonPosition }` }
										>
											<span
												className={
													'ystdb-balloon-selector__image'
												}
											>
												{ ' ' }
											</span>
											<span
												className={
													'ystdb-balloon-selector__body'
												}
											>
												{ item.label }
											</span>
										</span>
									</Button>
								);
							} ) }
						</div>
					</BaseControl>
				</PanelBody>
				{ '1' === ystdb.yStandard && (
					<PanelBody
						title={ __(
							'登録済みアバター画像',
							'ystandard-blocks'
						) }
					>
						<BaseControl>
							{ 0 >= ystdb.balloonImages.length ? (
								<div>
									<p>登録済みのアバター画像はありません。</p>
									<p>
										カスタマイザーの「[ys]拡張機能設定」→「[ys
										blocks]吹き出しブロック画像設定」から登録してください。
									</p>
								</div>
							) : (
								<div className={ 'ystdb-avatar-list' }>
									{ ystdb.balloonImages.map( ( item ) => {
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
				) }
				<PanelBody title={ __( 'アバター設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{ __( 'アバターサイズ', 'ystandard-blocks' ) }
						</div>
						<div
							className={
								'ystdb-btn-selector components-base-control'
							}
						>
							{ avatarSizes.map( ( item ) => {
								return (
									<Button
										key={ item.value }
										isDefault
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
						</div>
					</BaseControl>
					<BaseControl>
						<RangeControl
							value={ avatarBorderRadius }
							label={ __(
								'アバター画像の角丸',
								'ystandard-blocks'
							) }
							min={ 0 }
							max={ 40 }
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
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{ __( 'アバター画像枠色', 'ystandard-blocks' ) }
						</div>
						<ColorPalette
							colors={ colors }
							disableCustomColors={ false }
							onChange={ ( color ) => {
								setAvatarBorderColor( color );
							} }
							value={ avatarBorderColor.color }
						/>
					</BaseControl>
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{ __( 'アバター名文字色', 'ystandard-blocks' ) }
						</div>
						<ColorPalette
							colors={ colors }
							disableCustomColors={ false }
							onChange={ ( color ) => {
								setAvatarNameColor( color );
							} }
							value={ avatarNameColor.color }
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={ __( 'テキスト設定', 'ystandard-blocks' ) }>
					<BaseControl>
						<FontSizePicker
							label={ __( '文字サイズ', 'ystandard-blocks' ) }
							value={ fontSize.size }
							onChange={ ( font ) => {
								setFontSize( font );
							} }
						/>
					</BaseControl>
					<BaseControl>
						<div className="ystdb-inspector-controls__label">
							{ __( '吹き出し背景色', 'ystandard-blocks' ) }
						</div>
						<ColorPalette
							colors={ colors }
							disableCustomColors={ false }
							onChange={ ( color ) => {
								setBackgroundColor( color );
								setBalloonBorderColor( color );
							} }
							value={ backgroundColor.color }
						/>
						<div className="ystdb-inspector-controls__label">
							{ __( '吹き出し文字色', 'ystandard-blocks' ) }
						</div>
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
							<PlainText
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
						withoutInteractiveFormatting
						className={ textClasses }
						style={ textStyles }
					/>
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
] )( ysBalloon );
