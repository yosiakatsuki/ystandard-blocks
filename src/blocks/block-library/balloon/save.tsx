import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	getColorClassName,
	getFontSizeClass,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
/**
 * Block.
 */
import {
	isTypeOutline,
	getBalloonBackground,
} from '@aktk/blocks/block-library/balloon/utils';

// @ts-ignore
function Avatar( attributes ) {
	const {
		avatarSize,
		avatarURL,
		avatarAlt,
		avatarName,
		avatarBorderColor,
		customAvatarBorderColor,
		avatarBorderWidth,
		avatarBorderRadius,
		avatarNameColor,
		customAvatarNameColor,
	} = attributes;

	// アバターfigureクラス.
	const avatarWrapClasses = classnames( 'ystdb-balloon__avatar', {
		[ `is-size-${ avatarSize }` ]: avatarSize,
	} );

	// アバター画像スタイル・クラス.
	const avatarBorderColorClass = getColorClassName(
		'border-color',
		avatarBorderColor
	);

	const avatarStyle = {
		borderColor: customAvatarBorderColor,
		borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
		borderRadius: avatarBorderRadius,
	};

	const avatarClasses = classnames( 'ystdb-balloon__avatar-image', {
		'has-border-color': avatarBorderColorClass || customAvatarBorderColor,
		[ avatarBorderColorClass ]: avatarBorderColorClass,
		'has-border': 0 < avatarBorderWidth,
	} );

	// アバター名スタイル・クラス.
	const avatarNameColorClass = getColorClassName( 'color', avatarNameColor );

	const avatarNameClass = classnames( 'ystdb-balloon__name', {
		[ avatarNameColorClass ]: avatarNameColorClass,
		'has-text-color': customAvatarNameColor || avatarNameColorClass,
	} );

	const avatarNameStyles = {
		color: customAvatarNameColor,
	};

	return (
		<figure className={ avatarWrapClasses }>
			<img
				className={ avatarClasses }
				style={ avatarStyle }
				src={ avatarURL }
				alt={ avatarAlt ? avatarAlt : avatarName }
			/>
			{ avatarName && (
				<figcaption
					className={ avatarNameClass }
					style={ avatarNameStyles }
				>
					{ avatarName }
				</figcaption>
			) }
		</figure>
	);
}

// @ts-ignore
function Balloon( attributes ) {
	const {
		text,
		verticalAlign,
		balloonType,
		balloonPosition,
		balloonBorderWidth,
		backgroundColor,
		customBackgroundColor,
		balloonBorderColor,
		customBalloonBorderColor,
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
	} = attributes;
	const isOutline = isTypeOutline( balloonType );

	// 吹き出しスタイル・クラス.
	const balloonBodyStyles = {
		backgroundColor: getBalloonBackground(
			balloonType,
			customBackgroundColor
		),
		borderColor: customBalloonBorderColor,
		borderWidth: isOutline ? balloonBorderWidth ?? '1px' : undefined,
	};

	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const balloonBorderColorClass = getColorClassName(
		'border-color',
		balloonBorderColor
	);

	const balloonBodyClass = classnames( 'ystdb-balloon__body', {
		[ backgroundColorClass ]: backgroundColorClass,
		'has-background': backgroundColorClass || customBackgroundColor,
		[ balloonBorderColorClass ]: balloonBorderColorClass,
		'has-border-color': balloonBorderColorClass || customBalloonBorderColor,
		[ `is-${ verticalAlign }` ]: verticalAlign,
		[ `is-${ balloonPosition }` ]: balloonPosition,
		[ `is-${ balloonType }` ]: balloonType,
	} );

	// 吹き出しテキストスタイル・クラス.
	const textClass = getColorClassName( 'color', textColor );
	const fontSizeClass = getFontSizeClass( fontSize );
	const textStyles = {
		color: textClass ? undefined : customTextColor,
		fontSize:
			! fontSizeClass && customFontSize ? customFontSize : undefined,
	};

	const textClasses = classnames( 'ystdb-balloon__text', {
		[ textClass ]: textClass,
		'has-text-color': textColor || customTextColor,
		[ fontSizeClass ]: fontSizeClass,
	} );

	// アウトラインタイプの三角スタイル・クラス
	const serifTrianglePosition = 7 - parseInt( balloonBorderWidth ?? 1, 10 );
	const serifTriangleStyle = {
		backgroundColor: getBalloonBackground(
			balloonType,
			customBackgroundColor
		),
		borderColor: customBalloonBorderColor,
		borderWidth: balloonBorderWidth ?? '1px',
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
		[ backgroundColorClass ]: backgroundColorClass,
		'has-background': backgroundColorClass || customBackgroundColor,
		[ balloonBorderColorClass ]: balloonBorderColorClass,
		'has-border-color': balloonBorderColorClass || customBalloonBorderColor,
	} );

	return (
		<div className={ balloonBodyClass } style={ balloonBodyStyles }>
			<RichText.Content
				tagName={ 'p' }
				className={ textClasses }
				style={ textStyles }
				value={ text }
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
export default function Save( { attributes } ) {
	const { className, balloonPosition, verticalAlign } = attributes;

	// ブロック外側クラス.
	const blockProps = useBlockProps.save( {
		className: classnames( 'ystdb-balloon', className, {
			[ `is-vertically-aligned-${ verticalAlign }` ]: verticalAlign,
			[ `is-balloon-position-${ balloonPosition }` ]: balloonPosition,
		} ),
	} );

	return (
		<div { ...blockProps }>
			<Avatar { ...attributes } />
			<Balloon { ...attributes } />
		</div>
	);
}
