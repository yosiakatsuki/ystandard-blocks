import classnames from 'classnames';

import {
	getColorClassName,
	getFontSizeClass,
	RichText,
} from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		className,
		textColor,
		customTextColor,
		backgroundColor,
		customBackgroundColor,
		balloonBorderColor,
		customBalloonBorderColor,
		avatarNameColor,
		customAvatarNameColor,
		avatarBorderColor,
		customAvatarBorderColor,
		fontSize,
		customFontSize,
		avatarName,
		avatarURL,
		avatarAlt,
		avatarSize,
		avatarBorderWidth,
		avatarBorderRadius,
		text,
		balloonPosition,
		balloonType,
		verticalAlign,
	} = attributes;

	const avatarNameColorClass = getColorClassName('color', avatarNameColor);
	const avatarBorderColorClass = getColorClassName(
		'border-color',
		avatarBorderColor
	);

	const textClass = getColorClassName('color', textColor);
	const fontSizeClass = getFontSizeClass(fontSize);
	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const balloonBorderColorClass = getColorClassName(
		'border-color',
		balloonBorderColor
	);

	/**
	 * 大枠
	 *
	 * @type {string}
	 */
	const wrapClasses = classnames(className, 'ystdb-balloon', {
		[`is-vertically-aligned-${verticalAlign}`]: verticalAlign,
		[`is-balloon-position-${balloonPosition}`]: balloonPosition,
	});

	/**
	 * アバター画像カラムクラス
	 *
	 * @type {string}
	 */
	const avatarWrapClasses = classnames('ystdb-balloon__avatar', {
		[`is-size-${avatarSize}`]: avatarSize,
	});

	/**
	 * アバター画像クラス
	 *
	 * @type {string}
	 */
	const avatarClasses = classnames('ystdb-balloon__avatar-image', {
		'has-border-color': avatarBorderColorClass || customAvatarBorderColor,
		[avatarBorderColorClass]: avatarBorderColorClass,
		'has-border': 0 < avatarBorderWidth,
	});

	/**
	 * アバター画像スタイル
	 *
	 * @type {{borderColor: *}}
	 */
	const avatarStyle = {
		borderColor: customAvatarBorderColor,
		borderWidth: 0 < avatarBorderWidth ? avatarBorderWidth : undefined,
		borderRadius: avatarBorderRadius,
	};

	/**
	 * アバター画像ALT
	 */
	const avatarAltText = avatarAlt ? avatarAlt : avatarName;
	/**
	 * アバター名クラス
	 *
	 * @type {string}
	 */
	const avatarNameClass = classnames('ystdb-balloon__name', {
		[avatarNameColorClass]: avatarNameColorClass,
		'has-text-color': customAvatarNameColor || avatarNameColorClass,
	});
	/**
	 * アバター名スタイル
	 *
	 * @type {{color: *}}
	 */
	const avatarNameStyles = {
		color: customAvatarNameColor,
	};

	/**
	 * 吹き出しクラス
	 *
	 * @type {string}
	 */
	const balloonBodyClass = classnames('ystdb-balloon__body', {
		[backgroundColorClass]: backgroundColorClass,
		'has-background': backgroundColorClass || customBackgroundColor,
		[balloonBorderColorClass]: balloonBorderColorClass,
		'has-border-color': balloonBorderColorClass || customBalloonBorderColor,
		[`is-${verticalAlign}`]: verticalAlign,
		[`is-${balloonPosition}`]: balloonPosition,
		[`is-${balloonType}`]: balloonType,
	});

	/**
	 * 吹き出しスタイル
	 *
	 * @type {{backgroundColor: *}}
	 */
	const balloonBodyStyles = {
		backgroundColor: customBackgroundColor,
		borderColor: customBalloonBorderColor,
	};

	/**
	 * 吹き出しテキストクラス
	 *
	 * @type {string}
	 */
	const textClasses = classnames('ystdb-balloon__text', {
		[textClass]: textClass,
		'has-text-color': textColor || customTextColor,
		[fontSizeClass]: fontSizeClass,
	});

	/**
	 * 吹き出しテキストスタイル
	 *
	 * @type {{color: (*), fontSize: (string|*)}}
	 */
	const textStyles = {
		color: textClass ? undefined : customTextColor,
		fontSize:
			!fontSizeClass && customFontSize
				? customFontSize + 'px'
				: undefined,
	};

	return (
		<div className={wrapClasses}>
			<figure className={avatarWrapClasses}>
				<img
					className={avatarClasses}
					style={avatarStyle}
					src={avatarURL}
					alt={avatarAltText}
				/>
				{avatarName && (
					<figcaption
						className={avatarNameClass}
						style={avatarNameStyles}
					>
						{avatarName}
					</figcaption>
				)}
			</figure>
			<div className={balloonBodyClass} style={balloonBodyStyles}>
				<RichText.Content
					tagName={'p'}
					className={textClasses}
					style={textStyles}
					value={text}
				/>
			</div>
		</div>
	);
}
