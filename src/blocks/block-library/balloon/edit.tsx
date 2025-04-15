import classnames from 'classnames';
/**
 * WordPress Dependencies
 */
import {
	useBlockProps,
	withColors,
	withFontSizes,
	RichText,
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import {
	MediaUpload,
	type MediaObject,
} from '@aktk/block-components/components/media-upload';

/**
 * Block.
 */
import {
	getBalloonBackground,
	isTypeOutline,
} from '@aktk/blocks/block-library/balloon/utils';
import InspectorControls from './inspector-controls';
import BlockControls from './block-controls';
import './editor.scss';

// @ts-ignore
function AvatarEdit( props ) {
	const {
		avatarBorderColor,
		avatarNameColor,
		attributes,
		setAttributes,
		isSelected,
	} = props;
	const {
		avatarID,
		avatarURL,
		avatarAlt,
		avatarSize,
		avatarBorderWidth,
		avatarBorderRadius,
		avatarName,
	} = attributes;
	// アバターfigureクラス.
	const avatarWrapClasses = classnames( 'ystdb-balloon__avatar', 'relative', {
		[ `is-size-${ avatarSize }` ]: avatarSize,
		'has-avatar': avatarID,
	} );
	// アバター画像スタイル・クラス.
	const avatarStyle = {
		borderColor: avatarBorderColor.color,
		borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
		borderRadius: avatarBorderRadius,
	};
	const avatarClasses = classnames( 'ystdb-balloon__avatar-image', {
		'has-border-color': avatarBorderColor.color,
		[ avatarBorderColor.class ]: avatarBorderColor.class,
		'has-border': 0 < avatarBorderWidth,
	} );

	// アバター画像変更時.
	const handleOnSelect = ( newValue: MediaObject | undefined ) => {
		setAttributes( {
			avatarID: newValue ? newValue.id : undefined,
			avatarURL: newValue ? newValue.url : undefined,
			avatarAlt: newValue ? newValue.alt : undefined,
		} );
	};

	// 画像オブジェクト.
	const media =
		avatarID || avatarURL
			? { id: avatarID, url: avatarURL, alt: avatarAlt }
			: undefined;

	// // アバター名figcaption.
	// const AvatarNameWrap = ( { children }: { children: React.ReactNode } ) => {
	// 	return (
	// 		<figcaption className={ avatarNameClass }>{ children }</figcaption>
	// 	);
	// };
	//
	// // アバター名編集.
	// const AvatarNameEdit = () => {
	// 	return (
	// 		<AvatarNameWrap>
	// 			<TextControl
	// 				value={ avatarName }
	// 				className={ 'ystdb-balloon__name--edit' }
	// 				onChange={ ( value ) => {
	// 					setAttributes( {
	// 						avatarName: value,
	// 					} );
	// 				} }
	// 				style={ avatarNameStyles }
	// 				placeholder={ __( '名前…', 'ystandard-blocks' ) }
	// 				aria-label={ __( 'Name' ) }
	// 				data-1p-ignore
	// 				data-lpignore
	// 				__next40pxDefaultSize
	// 				__nextHasNoMarginBottom
	// 			/>
	// 		</AvatarNameWrap>
	// 	);
	// };

	return (
		<>
			<figure className={ avatarWrapClasses }>
				{ isSelected ? (
					<div className={ avatarClasses } style={ avatarStyle }>
						<MediaUpload
							media={ media as unknown as MediaObject }
							onSelect={ handleOnSelect }
							onClear={ () => {
								setAttributes( {
									avatarID: undefined,
									avatarURL: undefined,
									avatarAlt: undefined,
								} );
							} }
							clearLabel={ __(
								'画像をクリア',
								'ystandard-blocks'
							) }
						/>
					</div>
				) : (
					<img
						className={ avatarClasses }
						src={ avatarURL }
						alt={ avatarAlt }
						style={ avatarStyle }
					/>
				) }
				{
					<AvatarNameEdit
						isSelected={ isSelected }
						avatarName={ avatarName }
						setAttributes={ setAttributes }
						avatarNameColor={ avatarNameColor }
					/>
				}
				{ /*{ isSelected ? <AvatarNameEdit /> : <AvatarNamePreview /> }*/ }
			</figure>
		</>
	);
}

type AvatarNameEditProps = {
	isSelected: boolean;
	avatarName: string;
	setAttributes: ( attributes: { avatarName: string } ) => void;
	avatarNameColor:
		| {
				color: string;
				class?: string;
		  }
		| undefined;
};

function AvatarNameEdit( props: AvatarNameEditProps ) {
	const { isSelected, avatarName, setAttributes, avatarNameColor } = props;
	// アバター名スタイル・クラス.
	const avatarNameStyles = {
		color: avatarNameColor?.color,
		padding: '0.1em 0.25em',
		height: 'auto',
	};
	const avatarNameClass = classnames( 'ystdb-balloon__name', {
		'has-text-color': avatarNameColor?.color,
		[ avatarNameColor?.class || '' ]: avatarNameColor?.class,
	} );
	// アバター名プレビュー.
	const AvatarNamePreview = () => {
		if ( ! avatarName ) {
			return <></>;
		}
		return <>{ avatarName }</>;
	};
	return (
		<figcaption className={ avatarNameClass }>
			{ isSelected ? (
				<TextControl
					value={ avatarName }
					className={ 'ystdb-balloon__name--edit' }
					onChange={ ( value ) => {
						setAttributes( {
							avatarName: value,
						} );
					} }
					style={ avatarNameStyles }
					placeholder={ __( '名前…', 'ystandard-blocks' ) }
					aria-label={ __( 'Name' ) }
					data-1p-ignore
					data-lpignore
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			) : (
				<AvatarNamePreview />
			) }
		</figcaption>
	);
}

// @ts-ignore
function BalloonEdit( props ) {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		balloonBorderColor,
		textColor,
		fontSize,
	} = props;
	const {
		verticalAlign,
		balloonPosition,
		balloonType,
		balloonBorderWidth,
		text,
	} = attributes;

	const isOutline = isTypeOutline( balloonType );

	// 吹き出しスタイル・クラス
	const balloonBodyStyles = {
		backgroundColor: getBalloonBackground(
			balloonType,
			backgroundColor.color
		),
		borderColor: balloonBorderColor.color,
		borderWidth: isOutline ? balloonBorderWidth : undefined,
	};

	const balloonBodyClass = classnames( 'ystdb-balloon__body', {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': backgroundColor.color,
		[ balloonBorderColor.class ]: balloonBorderColor.class,
		'has-border-color': balloonBorderColor.color,
		[ `is-${ verticalAlign }` ]: verticalAlign,
		[ `is-${ balloonPosition }` ]: balloonPosition,
		[ `is-${ balloonType }` ]: balloonType,
	} );

	// 吹き出しテキストスタイル・クラス.
	const textStyles = {
		color: textColor.color,
		fontSize: fontSize.size ? fontSize.size : undefined,
	};

	const textClasses = classnames( 'ystdb-ystdb-balloon__text', {
		[ textColor.class ]: textColor.class,
		'has-text-color': textColor.color,
		[ fontSize.class ]: fontSize.class,
	} );

	// アウトラインタイプの三角スタイル・クラス
	const serifTrianglePosition = 6 - parseInt( balloonBorderWidth ?? 1, 10 );
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
	const serifTriangleClass = classnames( 'ystdb-balloon__serif-triangle', {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': backgroundColor.color,
		[ balloonBorderColor.class ]: balloonBorderColor.class,
		'has-border-color': balloonBorderColor.color,
	} );

	return (
		<div className={ balloonBodyClass } style={ balloonBodyStyles }>
			<RichText
				tagName={ 'p' }
				placeholder={ __( 'Add text…' ) }
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				className={ textClasses }
				style={ textStyles }
			/>
			{ isOutline && (
				<div
					className={ serifTriangleClass }
					style={ serifTriangleStyle }
					aria-hidden
				/>
			) }
		</div>
	);
}

// @ts-ignore
function Edit( props ) {
	const { attributes, className } = props;
	const { verticalAlign, balloonPosition } = attributes;
	const blockProps = useBlockProps( {
		className: classnames(
			'ystdb-balloon',
			'ystdb-balloon-edit',
			className,
			{
				[ `is-vertically-aligned-${ verticalAlign }` ]: verticalAlign,
				[ `is-balloon-position-${ balloonPosition }` ]: balloonPosition,
			}
		),
	} );
	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<AvatarEdit { ...props } />
				<BalloonEdit { ...props } />
			</div>
		</>
	);
}

// @ts-ignore
export default compose( [
	withColors( 'backgroundColor', {
		textColor: 'color',
		avatarNameColor: 'color',
		avatarBorderColor: 'borderColor',
		balloonBorderColor: 'borderColor',
	} ),
	withFontSizes( 'fontSize' ),
] )( Edit );
