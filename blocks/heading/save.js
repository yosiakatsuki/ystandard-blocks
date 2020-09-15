import classnames from 'classnames';

import {
	getColorClassName,
	getFontSizeClass,
	RichText,
} from '@wordpress/block-editor';

import { Path, SVG } from '@wordpress/components';

export default function save({ attributes }) {
	const {
		align,
		content,
		level,
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
		subText,
		subTextSize,
		customSubTextSize,
		subTextColor,
		customSubTextColor,
		subTextBorderHeight,
		subTextBorderWidth,
		dividerColor,
		customDividerColor,
		dividerMarginTop,
		dividerMarginBottom,
		clearStyle,
		subTextPosition,
		dividerImageURL,
		dividerImageAlt,
		marginTop,
		marginTopUnit,
		marginRight,
		marginRightUnit,
		marginBottom,
		marginBottomUnit,
		marginLeft,
		marginLeftUnit,
	} = attributes;
	const TagName = 'h' + level;

	const textClass = getColorClassName('color', textColor);
	const fontSizeClass = getFontSizeClass(fontSize);
	const subTextSizeClass = getFontSizeClass(subTextSize);
	const subTextColorClass = getColorClassName('color', subTextColor);
	const dividerColorClass = getColorClassName('fill', dividerColor);

	const classes = classnames('ystdb-heading', {
		[`has-text-align-${align}`]: align,
		'has-divider': subTextBorderHeight && subTextBorderWidth,
		'has-sub-text': subText,
		[`has-subtext--${subTextPosition}`]:
			subText || (subTextBorderHeight && subTextBorderWidth),
	});

	const headingStyles = {
		marginTop: '' !== marginTop ? marginTop + marginTopUnit : undefined,
		marginRight:
			'' !== marginRight ? marginRight + marginRightUnit : undefined,
		marginBottom:
			'' !== marginBottom ? marginBottom + marginBottomUnit : undefined,
		marginLeft: '' !== marginLeft ? marginLeft + marginLeftUnit : undefined,
	};

	const textClasses = classnames('ystdb-heading__text', {
		'is-clear-style': clearStyle,
		[textClass]: textClass,
		'has-text-color': textColor || customTextColor,
		[fontSizeClass]: fontSizeClass,
	});

	const textStyles = {
		color: textClass ? undefined : customTextColor,
		fontSize:
			!fontSizeClass && customFontSize
				? customFontSize + 'px'
				: undefined,
	};

	/**
	 * 線
	 */
	const divider = () => {
		if (0 === subTextBorderHeight || 0 === subTextBorderWidth) {
			return null;
		}
		const lineClass = classnames('ystdb-heading__line', {
			[dividerColorClass]: dividerColorClass,
		});
		const svg = () => {
			const borderColor = customDividerColor
				? customDividerColor
				: '#222';
			const lineStyle = {
				fill: dividerColorClass ? undefined : borderColor,
				marginTop:
					0 !== dividerMarginTop ? dividerMarginTop : undefined,
				marginBottom:
					0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
			};
			return (
				<SVG
					className={lineClass}
					width={subTextBorderWidth}
					height={subTextBorderHeight}
					viewBox={`0 0 ${subTextBorderWidth} ${subTextBorderHeight}`}
					xmlns="http://www.w3.org/2000/svg"
					style={lineStyle}
				>
					<Path
						d={`m0 0 h ${subTextBorderWidth} v ${subTextBorderHeight} h -${subTextBorderWidth} z`}
					/>
				</SVG>
			);
		};
		const image = () => {
			const lineStyle = {
				display: 'block',
				width: subTextBorderWidth,
				height: subTextBorderHeight,
				marginTop:
					0 !== dividerMarginTop ? dividerMarginTop : undefined,
				marginBottom:
					0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
				marginRight:
					'left' === align || 'center' === align ? 'auto' : undefined,
				marginLeft:
					'right' === align || 'center' === align
						? 'auto'
						: undefined,
			};
			return (
				<img
					className={lineClass}
					src={dividerImageURL}
					width={subTextBorderWidth}
					height={subTextBorderHeight}
					alt={dividerImageAlt}
					style={lineStyle}
				/>
			);
		};
		return !!dividerImageURL ? image() : svg();
	};
	/**
	 * サブテキスト
	 *
	 * @return {null|*} サブテキスト.
	 */
	const showSubText = () => {
		if (!subText) {
			return null;
		}
		const subTextClasses = classnames('ystdb-heading__subtext', {
			'has-font-size': subTextSizeClass || customSubTextSize,
			'has-color': subTextColorClass || customSubTextColor,
			[subTextColorClass]: subTextColorClass,
			[subTextSizeClass]: subTextSizeClass,
		});
		const styles = {
			color: subTextColorClass ? undefined : customSubTextColor,
			fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined,
		};
		return (
			<div
				className={subTextClasses}
				aria-hidden={'true'}
				style={styles}
				data-text={subText}
			></div>
		);
	};

	return (
		<div className={classes} style={headingStyles}>
			<div className={`ystdb-heading__container`}>
				{'top' === subTextPosition && showSubText()}
				{'top' === subTextPosition && divider()}
				<RichText.Content
					tagName={TagName}
					className={textClasses}
					style={textStyles}
					value={content}
				/>
				{'bottom' === subTextPosition && divider()}
				{'bottom' === subTextPosition && showSubText()}
			</div>
		</div>
	);
}
