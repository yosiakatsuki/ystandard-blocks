import classnames from 'classnames';

import {
	getColorClassName,
	getFontSizeClass,
	RichText,
} from '@wordpress/block-editor';

import {
	Path,
	SVG
} from '@wordpress/components';

export default function save( { attributes } ) {
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
	} = attributes;
	const TagName = 'h' + level;

	const textClass = getColorClassName( 'color', textColor );
	const fontSizeClass = getFontSizeClass( fontSize );
	const subTextSizeClass = getFontSizeClass( subTextSize );
	const subTextColorClass = getColorClassName( 'color', subTextColor );
	const dividerColorClass = getColorClassName( 'fill', dividerColor );

	const classes = classnames(
		'ystdb-heading',
		{
			'is-clear-style': clearStyle,
			[ `has-text-align-${ align }` ]: align,
			'has-divider': subTextBorderHeight && subTextBorderWidth,
			'has-sub-text': subText,
			[ `has-subtext--${ subTextPosition }` ]: subText || ( subTextBorderHeight && subTextBorderWidth ),
		}
	);

	const textClasses = classnames(
		'ystdb-heading__text',
		{
			[ textClass ]: textClass,
			'has-text-color': textColor || customTextColor,
			[ fontSizeClass ]: fontSizeClass,
		}
	);

	const textStyles = {
		color: textClass ? undefined : customTextColor,
		fontSize: ! fontSizeClass && customFontSize ? customFontSize + 'px' : undefined,
	};

	/**
	 * 線
	 */
	const divider = () => {
		if ( 0 === subTextBorderHeight || 0 === subTextBorderWidth ) {
			return null;
		}
		const borderColor = customDividerColor ? customDividerColor : '#222';
		const lineStyle = {
			fill: dividerColorClass ? undefined : borderColor,
			marginTop: 0 !== dividerMarginTop ? dividerMarginTop : undefined,
			marginBottom: 0 !== dividerMarginBottom ? dividerMarginBottom : undefined,
		};
		const lineClass = classnames(
			'ystdb-heading__line',
			{
				[ dividerColorClass ]: dividerColorClass,
			}
		);
		return (
			<SVG
				className={ lineClass }
				width={ subTextBorderWidth }
				height={ subTextBorderHeight }
				viewBox={ `0 0 ${ subTextBorderWidth } ${ subTextBorderHeight }` }
				xmlns="http://www.w3.org/2000/svg"
				style={ lineStyle }
			>
				<Path d={ `m0 0 h ${ subTextBorderWidth } v ${ subTextBorderHeight } h -${ subTextBorderWidth } z` }/>
			</SVG>
		);
	};
	/**
	 * サブテキスト
	 *
	 * @returns {null|*}
	 */
	const showSubText = () => {
		if ( ! subText ) {
			return null;
		}
		console.log(`subTextSizeClass: ${subTextSizeClass}`);
		console.log(`customSubTextSize: ${customSubTextSize}`);
		console.log(`subTextSize: ${subTextSize}`);
		const classes = classnames(
			'ystdb-heading__subtext',
			{
				'has-font-size': subTextSizeClass || customSubTextSize,
				'has-color': subTextColorClass || customSubTextColor,
				[ subTextColorClass ]: subTextColorClass,
				[ subTextSizeClass ]: subTextSizeClass,
			}
		);
		const styles = {
			color: subTextColorClass ? undefined : customSubTextColor,
			fontSize: customSubTextSize ? customSubTextSize + 'px' : undefined,
		};
		return (
			<span className={ classes } style={ styles }>{ subText }</span>
		);
	};

	return (
		<TagName className={ classes }>
			{ ( 'top' === subTextPosition && showSubText() ) }
			{ ( 'top' === subTextPosition && divider() ) }
			<RichText.Content
				tagName={ 'span' }
				className={ textClasses }
				style={ textStyles }
				value={ content }
			/>
			{ ( 'bottom' === subTextPosition && divider() ) }
			{ ( 'bottom' === subTextPosition && showSubText() ) }
		</TagName>
	);
}
