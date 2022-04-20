import classnames from 'classnames';
import {
	RichText,
	getColorClassName,
	getFontSizeClass,
} from '@wordpress/block-editor';
import { Path, SVG } from '@wordpress/components';

const defaultAttributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: '.ystdb-heading__text',
		default: '',
	},
	level: {
		type: 'number',
		default: 2,
	},
	align: {
		type: 'string',
		default: 'left',
	},
	subText: {
		type: 'string',
		default: '',
	},
	subTextPosition: {
		type: 'string',
		default: 'bottom',
	},
	subTextSize: {
		type: 'string',
	},
	customSubTextSize: {
		type: 'number',
	},
	subTextColor: {
		type: 'string',
	},
	customSubTextColor: {
		type: 'string',
	},
	subTextBorderWidth: {
		type: 'number',
		default: 50,
	},
	subTextBorderHeight: {
		type: 'number',
		default: 0,
	},
	dividerColor: {
		type: 'string',
	},
	customDividerColor: {
		type: 'string',
	},
	dividerMarginTop: {
		type: 'number',
		default: 0,
	},
	dividerMarginBottom: {
		type: 'number',
		default: 0,
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	fontSize: {
		type: 'string',
	},
	customFontSize: {
		type: 'number',
	},
	clearStyle: {
		type: 'bool',
		default: true,
	},
};
const attributes25 = {
	dividerImageURL: {
		type: 'string',
	},
	dividerImageAlt: {
		type: 'string',
	},
	dividerImageID: {
		type: 'integer',
		default: 0,
	},
};
const attributes26 = {
	marginTop: {
		type: 'string',
		default: '',
	},
	marginTopUnit: {
		type: 'string',
		default: 'px',
	},
	marginRight: {
		type: 'string',
		default: '',
	},
	marginRightUnit: {
		type: 'string',
		default: 'px',
	},
	marginBottom: {
		type: 'string',
		default: '',
	},
	marginBottomUnit: {
		type: 'string',
		default: 'px',
	},
	marginLeft: {
		type: 'string',
		default: '',
	},
	marginLeftUnit: {
		type: 'string',
		default: 'px',
	},
};
export const __deprecated = [
	{
		attributes: {
			...defaultAttributes,
			...attributes25,
			...attributes26,
		},
		supports: {
			className: false,
			anchor: true,
			__unstablePasteTextInline: true,
		},
		save( { attributes } ) {
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

			const textClass = getColorClassName( 'color', textColor );
			const fontSizeClass = getFontSizeClass( fontSize );
			const subTextSizeClass = getFontSizeClass( subTextSize );
			const subTextColorClass = getColorClassName(
				'color',
				subTextColor
			);
			const dividerColorClass = getColorClassName( 'fill', dividerColor );

			const classes = classnames( 'ystdb-heading', {
				[ `has-text-align-${ align }` ]: align,
				'has-divider': subTextBorderHeight && subTextBorderWidth,
				'has-sub-text': subText,
				[ `has-subtext--${ subTextPosition }` ]:
					subText || ( subTextBorderHeight && subTextBorderWidth ),
			} );

			const headingStyles = {
				marginTop:
					'' !== marginTop ? marginTop + marginTopUnit : undefined,
				marginRight:
					'' !== marginRight
						? marginRight + marginRightUnit
						: undefined,
				marginBottom:
					'' !== marginBottom
						? marginBottom + marginBottomUnit
						: undefined,
				marginLeft:
					'' !== marginLeft ? marginLeft + marginLeftUnit : undefined,
			};

			const textClasses = classnames( 'ystdb-heading__text', {
				'is-clear-style': clearStyle,
				[ textClass ]: textClass,
				'has-text-color': textColor || customTextColor,
				[ fontSizeClass ]: fontSizeClass,
			} );

			const textStyles = {
				color: textClass ? undefined : customTextColor,
				fontSize:
					! fontSizeClass && customFontSize
						? customFontSize + 'px'
						: undefined,
			};

			/**
			 * 線
			 */
			const divider = () => {
				if ( 0 === subTextBorderHeight || 0 === subTextBorderWidth ) {
					return null;
				}
				const lineClass = classnames( 'ystdb-heading__line', {
					[ dividerColorClass ]: dividerColorClass,
				} );
				const svg = () => {
					const borderColor = customDividerColor
						? customDividerColor
						: '#222';
					const lineStyle = {
						fill: dividerColorClass ? undefined : borderColor,
						marginTop:
							0 !== dividerMarginTop
								? dividerMarginTop
								: undefined,
						marginBottom:
							0 !== dividerMarginBottom
								? dividerMarginBottom
								: undefined,
					};
					return (
						<SVG
							className={ lineClass }
							width={ subTextBorderWidth }
							height={ subTextBorderHeight }
							viewBox={ `0 0 ${ subTextBorderWidth } ${ subTextBorderHeight }` }
							xmlns="http://www.w3.org/2000/svg"
							style={ lineStyle }
						>
							<Path
								d={ `m0 0 h ${ subTextBorderWidth } v ${ subTextBorderHeight } h -${ subTextBorderWidth } z` }
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
							0 !== dividerMarginTop
								? dividerMarginTop
								: undefined,
						marginBottom:
							0 !== dividerMarginBottom
								? dividerMarginBottom
								: undefined,
						marginRight:
							'left' === align || 'center' === align
								? 'auto'
								: undefined,
						marginLeft:
							'right' === align || 'center' === align
								? 'auto'
								: undefined,
					};
					return (
						<img
							className={ lineClass }
							src={ dividerImageURL }
							width={ subTextBorderWidth }
							height={ subTextBorderHeight }
							alt={ dividerImageAlt }
							style={ lineStyle }
						/>
					);
				};
				return !! dividerImageURL ? image() : svg();
			};
			/**
			 * サブテキスト
			 *
			 * @return {null|*} サブテキスト.
			 */
			const showSubText = () => {
				if ( ! subText ) {
					return null;
				}
				const subTextClasses = classnames( 'ystdb-heading__subtext', {
					'has-font-size': subTextSizeClass || customSubTextSize,
					'has-color': subTextColorClass || customSubTextColor,
					[ subTextColorClass ]: subTextColorClass,
					[ subTextSizeClass ]: subTextSizeClass,
				} );
				const styles = {
					color: subTextColorClass ? undefined : customSubTextColor,
					fontSize: customSubTextSize
						? customSubTextSize + 'px'
						: undefined,
				};
				return (
					<div
						className={ subTextClasses }
						aria-hidden={ 'true' }
						style={ styles }
						data-text={ subText }
					></div>
				);
			};

			return (
				<div className={ classes } style={ headingStyles }>
					<div className={ `ystdb-heading__container` }>
						{ 'top' === subTextPosition && showSubText() }
						{ 'top' === subTextPosition && divider() }
						<RichText.Content
							tagName={ TagName }
							className={ textClasses }
							style={ textStyles }
							value={ content }
						/>
						{ 'bottom' === subTextPosition && divider() }
						{ 'bottom' === subTextPosition && showSubText() }
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...defaultAttributes,
			...attributes25,
		},
		supports: {
			className: false,
			anchor: true,
			__unstablePasteTextInline: true,
		},
		save( { attributes } ) {
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
			} = attributes;
			const TagName = 'h' + level;

			const textClass = getColorClassName( 'color', textColor );
			const fontSizeClass = getFontSizeClass( fontSize );
			const subTextSizeClass = getFontSizeClass( subTextSize );
			const subTextColorClass = getColorClassName(
				'color',
				subTextColor
			);
			const dividerColorClass = getColorClassName( 'fill', dividerColor );

			const classes = classnames( 'ystdb-heading', {
				[ `has-text-align-${ align }` ]: align,
				'has-divider': subTextBorderHeight && subTextBorderWidth,
				'has-sub-text': subText,
				[ `has-subtext--${ subTextPosition }` ]:
					subText || ( subTextBorderHeight && subTextBorderWidth ),
			} );

			const textClasses = classnames( 'ystdb-heading__text', {
				'is-clear-style': clearStyle,
				[ textClass ]: textClass,
				'has-text-color': textColor || customTextColor,
				[ fontSizeClass ]: fontSizeClass,
			} );

			const textStyles = {
				color: textClass ? undefined : customTextColor,
				fontSize:
					! fontSizeClass && customFontSize
						? customFontSize + 'px'
						: undefined,
			};

			/**
			 * 線
			 */
			const divider = () => {
				if ( 0 === subTextBorderHeight || 0 === subTextBorderWidth ) {
					return null;
				}
				const lineClass = classnames( 'ystdb-heading__line', {
					[ dividerColorClass ]: dividerColorClass,
				} );
				const svg = () => {
					const borderColor = customDividerColor
						? customDividerColor
						: '#222';
					const lineStyle = {
						fill: dividerColorClass ? undefined : borderColor,
						marginTop:
							0 !== dividerMarginTop
								? dividerMarginTop
								: undefined,
						marginBottom:
							0 !== dividerMarginBottom
								? dividerMarginBottom
								: undefined,
					};
					return (
						<SVG
							className={ lineClass }
							width={ subTextBorderWidth }
							height={ subTextBorderHeight }
							viewBox={ `0 0 ${ subTextBorderWidth } ${ subTextBorderHeight }` }
							xmlns="http://www.w3.org/2000/svg"
							style={ lineStyle }
						>
							<Path
								d={ `m0 0 h ${ subTextBorderWidth } v ${ subTextBorderHeight } h -${ subTextBorderWidth } z` }
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
							0 !== dividerMarginTop
								? dividerMarginTop
								: undefined,
						marginBottom:
							0 !== dividerMarginBottom
								? dividerMarginBottom
								: undefined,
						marginRight:
							'left' === align || 'center' === align
								? 'auto'
								: undefined,
						marginLeft:
							'right' === align || 'center' === align
								? 'auto'
								: undefined,
					};
					return (
						<img
							className={ lineClass }
							src={ dividerImageURL }
							width={ subTextBorderWidth }
							height={ subTextBorderHeight }
							alt={ dividerImageAlt }
							style={ lineStyle }
						/>
					);
				};
				return !! dividerImageURL ? image() : svg();
			};
			/**
			 * サブテキスト
			 *
			 * @return {null|*} サブテキスト.
			 */
			const showSubText = () => {
				if ( ! subText ) {
					return null;
				}
				const subTextClasses = classnames( 'ystdb-heading__subtext', {
					'has-font-size': subTextSizeClass || customSubTextSize,
					'has-color': subTextColorClass || customSubTextColor,
					[ subTextColorClass ]: subTextColorClass,
					[ subTextSizeClass ]: subTextSizeClass,
				} );
				const styles = {
					color: subTextColorClass ? undefined : customSubTextColor,
					fontSize: customSubTextSize
						? customSubTextSize + 'px'
						: undefined,
				};
				return (
					<div
						className={ subTextClasses }
						aria-hidden={ 'true' }
						style={ styles }
						data-text={ subText }
					></div>
				);
			};

			return (
				<div className={ classes }>
					{ 'top' === subTextPosition && showSubText() }
					{ 'top' === subTextPosition && divider() }
					<RichText.Content
						tagName={ TagName }
						className={ textClasses }
						style={ textStyles }
						value={ content }
					/>
					{ 'bottom' === subTextPosition && divider() }
					{ 'bottom' === subTextPosition && showSubText() }
				</div>
			);
		},
	},
	{
		attributes: {
			...defaultAttributes,
		},
		supports: {
			className: false,
			anchor: true,
			__unstablePasteTextInline: true,
		},
		save( { attributes } ) {
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
			const subTextColorClass = getColorClassName(
				'color',
				subTextColor
			);
			const dividerColorClass = getColorClassName( 'fill', dividerColor );

			const classes = classnames( 'ystdb-heading', {
				'is-clear-style': clearStyle,
				[ `has-text-align-${ align }` ]: align,
				'has-divider': subTextBorderHeight && subTextBorderWidth,
				'has-sub-text': subText,
				[ `has-subtext--${ subTextPosition }` ]:
					subText || ( subTextBorderHeight && subTextBorderWidth ),
			} );

			const textClasses = classnames( 'ystdb-heading__text', {
				[ textClass ]: textClass,
				'has-text-color': textColor || customTextColor,
				[ fontSizeClass ]: fontSizeClass,
			} );

			const textStyles = {
				color: textClass ? undefined : customTextColor,
				fontSize:
					! fontSizeClass && customFontSize
						? customFontSize + 'px'
						: undefined,
			};

			/**
			 * 線
			 */
			const divider = () => {
				if ( 0 === subTextBorderHeight || 0 === subTextBorderWidth ) {
					return null;
				}
				const borderColor = customDividerColor
					? customDividerColor
					: '#222';
				const lineStyle = {
					fill: dividerColorClass ? undefined : borderColor,
					marginTop:
						0 !== dividerMarginTop ? dividerMarginTop : undefined,
					marginBottom:
						0 !== dividerMarginBottom
							? dividerMarginBottom
							: undefined,
				};
				const lineClass = classnames( 'ystdb-heading__line', {
					[ dividerColorClass ]: dividerColorClass,
				} );
				return (
					<SVG
						className={ lineClass }
						width={ subTextBorderWidth }
						height={ subTextBorderHeight }
						viewBox={ `0 0 ${ subTextBorderWidth } ${ subTextBorderHeight }` }
						xmlns="http://www.w3.org/2000/svg"
						style={ lineStyle }
					>
						<Path
							d={ `m0 0 h ${ subTextBorderWidth } v ${ subTextBorderHeight } h -${ subTextBorderWidth } z` }
						/>
					</SVG>
				);
			};
			/**
			 * サブテキスト
			 *
			 * @return {null|*} サブテキスト.
			 */
			const showSubText = () => {
				if ( ! subText ) {
					return null;
				}
				const subTextClasses = classnames( 'ystdb-heading__subtext', {
					'has-font-size': subTextSizeClass || customSubTextSize,
					'has-color': subTextColorClass || customSubTextColor,
					[ subTextColorClass ]: subTextColorClass,
					[ subTextSizeClass ]: subTextSizeClass,
				} );
				const styles = {
					color: subTextColorClass ? undefined : customSubTextColor,
					fontSize: customSubTextSize
						? customSubTextSize + 'px'
						: undefined,
				};
				return (
					<span className={ subTextClasses } style={ styles }>
						{ subText }
					</span>
				);
			};

			return (
				<TagName className={ classes }>
					{ 'top' === subTextPosition && showSubText() }
					{ 'top' === subTextPosition && divider() }
					<RichText.Content
						tagName={ 'span' }
						className={ textClasses }
						style={ textStyles }
						value={ content }
					/>
					{ 'bottom' === subTextPosition && divider() }
					{ 'bottom' === subTextPosition && showSubText() }
				</TagName>
			);
		},
	},
	{
		attributes: {
			...defaultAttributes,
		},
		supports: {
			className: false,
			anchor: true,
			__unstablePasteTextInline: true,
		},
		save( { attributes } ) {
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
			const subTextColorClass = getColorClassName(
				'color',
				subTextColor
			);
			const dividerColorClass = getColorClassName( 'fill', dividerColor );

			const classes = classnames( 'ystdb-heading', {
				'is-clear-style': clearStyle,
				[ `has-text-align-${ align }` ]: align,
				'has-divider': subTextBorderHeight && subTextBorderWidth,
				'has-sub-text': subText,
				[ `has-subtext--${ subTextPosition }` ]:
					subText || ( subTextBorderHeight && subTextBorderWidth ),
			} );

			const textClasses = classnames( 'ystdb-heading__text', {
				[ textClass ]: textClass,
				'has-text-color': textColor || customTextColor,
				[ fontSizeClass ]: fontSizeClass,
			} );

			const textStyles = {
				color: textClass ? undefined : customTextColor,
				fontSize:
					! fontSizeClass && customFontSize
						? customFontSize + 'px'
						: undefined,
			};

			/**
			 * 線
			 */
			const divider = () => {
				if ( 0 === subTextBorderHeight || 0 === subTextBorderWidth ) {
					return null;
				}
				const borderColor = customDividerColor
					? customDividerColor
					: '#222';
				const lineStyle = {
					fill: dividerColorClass ? undefined : borderColor,
					marginTop:
						0 !== dividerMarginTop ? dividerMarginTop : undefined,
					marginBottom:
						0 !== dividerMarginBottom
							? dividerMarginBottom
							: undefined,
				};
				const lineClass = classnames( 'ystdb-heading__line', {
					[ dividerColorClass ]: dividerColorClass,
				} );
				return (
					<svg
						className={ lineClass }
						width={ subTextBorderWidth }
						height={ subTextBorderHeight }
						viewbox={ `0 0 ${ subTextBorderWidth } ${ subTextBorderHeight }` }
						xmlns="http://www.w3.org/2000/svg"
						style={ lineStyle }
					>
						<path
							d={ `m0 0 h ${ subTextBorderWidth } v ${ subTextBorderHeight } h -${ subTextBorderWidth } z` }
						/>
					</svg>
				);
			};
			/**
			 * サブテキスト
			 *
			 * @return {null|*} サブテキスト.
			 */
			const showSubText = () => {
				if ( ! subText ) {
					return null;
				}
				const subTextClasses = classnames( 'ystdb-heading__subtext', {
					'has-font-size': subTextSizeClass || customSubTextSize,
					'has-color': subTextColorClass || customSubTextColor,
					[ subTextColorClass ]: subTextColorClass,
					[ subTextSizeClass ]: subTextSizeClass,
				} );
				const styles = {
					color: subTextColorClass ? undefined : customSubTextColor,
					fontSize: customSubTextSize
						? customSubTextSize + 'px'
						: undefined,
				};
				return (
					<span className={ subTextClasses } style={ styles }>
						{ subText }
					</span>
				);
			};

			return (
				<TagName className={ classes }>
					{ 'top' === subTextPosition && showSubText() }
					{ 'top' === subTextPosition && divider() }
					<RichText.Content
						tagName={ 'span' }
						className={ textClasses }
						style={ textStyles }
						value={ content }
					/>
					{ 'bottom' === subTextPosition && divider() }
					{ 'bottom' === subTextPosition && showSubText() }
				</TagName>
			);
		},
	},
	{
		attributes: {
			...defaultAttributes,
		},
		save( { attributes } ) {
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
			const subTextColorClass = getColorClassName(
				'color',
				subTextColor
			);
			const dividerColorClass = getColorClassName( 'fill', dividerColor );

			const classes = classnames( 'ystdb-heading', {
				'is-clear-style': clearStyle,
				[ `has-text-align-${ align }` ]: align,
				'has-divider': subTextBorderHeight && subTextBorderWidth,
				'has-sub-text': subText,
				[ `has-subtext--${ subTextPosition }` ]:
					subText || ( subTextBorderHeight && subTextBorderWidth ),
			} );

			const textClasses = classnames( 'ystdb-heading__text', {
				[ textClass ]: textClass,
				'has-text-color': textColor || customTextColor,
				[ fontSizeClass ]: fontSizeClass,
			} );

			const textStyles = {
				color: textClass ? undefined : customTextColor,
				fontSize:
					! fontSizeClass && customFontSize
						? customFontSize + 'px'
						: undefined,
			};

			/**
			 * 線
			 */
			const divider = () => {
				if ( 0 === subTextBorderHeight || 0 === subTextBorderWidth ) {
					return null;
				}
				const borderColor = customDividerColor
					? customDividerColor
					: '#222';
				const lineStyle = {
					fill: dividerColorClass ? undefined : borderColor,
					marginTop:
						0 !== dividerMarginTop ? dividerMarginTop : undefined,
					marginBottom:
						0 !== dividerMarginBottom
							? dividerMarginBottom
							: undefined,
				};
				const lineClass = classnames( 'ystdb-heading__line', {
					[ dividerColorClass ]: dividerColorClass,
				} );
				return (
					<SVG
						className={ lineClass }
						width={ subTextBorderWidth }
						height={ subTextBorderHeight }
						viewBox={ `0 0 ${ subTextBorderWidth } ${ subTextBorderHeight }` }
						xmlns="http://www.w3.org/2000/svg"
						style={ lineStyle }
					>
						<Path
							d={ `m0 0 h ${ subTextBorderWidth } v ${ subTextBorderHeight } h -${ subTextBorderWidth } z` }
						/>
					</SVG>
				);
			};
			/**
			 * サブテキスト
			 *
			 * @return {null|*} サブテキスト.
			 */
			const showSubText = () => {
				if ( ! subText ) {
					return null;
				}
				const subTextClasses = classnames( 'ystdb-heading__subtext', {
					'has-font-size': subTextSizeClass || customSubTextSize,
					'has-color': subTextColorClass || customSubTextColor,
					[ subTextColorClass ]: subTextColorClass,
					[ subTextSizeClass ]: subTextSizeClass,
				} );
				const styles = {
					color: subTextColorClass ? undefined : customSubTextColor,
					fontSize: customSubTextSize
						? customSubTextSize + 'px'
						: undefined,
				};
				return (
					<span className={ subTextClasses } style={ styles }>
						{ subText }
					</span>
				);
			};

			return (
				<TagName className={ classes }>
					{ 'top' === subTextPosition && showSubText() }
					{ 'top' === subTextPosition && divider() }
					<RichText.Content
						tagName={ 'span' }
						className={ textClasses }
						style={ textStyles }
						value={ content }
					/>
					{ 'bottom' === subTextPosition && divider() }
					{ 'bottom' === subTextPosition && showSubText() }
				</TagName>
			);
		},
	},
];

export default __deprecated;
