const { jest: jestGlobals } = require( '@jest/globals' );

const presetTokenToCssVar = ( value ) =>
	'string' === typeof value && value.startsWith( 'var:preset|' )
		? `var(--wp--preset--${ value
				.replace( 'var:preset|', '' )
				.replaceAll( '|', '--' ) })`
		: value;

module.exports = {
	RichText: {
		Content: ( props ) => {
			const { tagName, value, ...rest } = props;
			const Tag = tagName || 'span';
			return <Tag { ...rest }>{ value }</Tag>;
		},
	},
	useBlockProps: {
		save: ( props = {} ) => ( {
			className: props?.className || '',
			style: props?.style || {},
		} ),
	},
	__experimentalGetGradientClass: () => '',
	getColorClassName: ( colorType, colorValue ) => {
		return `${ colorType }-${ colorValue }`;
	},
	getFontSizeClass: ( fontSize ) => {
		return fontSize ? `font-size-${ fontSize }` : '';
	},
	getComputedFluidTypographyValue: jestGlobals.fn( () => null ),
	getTypographyClassesAndStyles: ( attributes ) => {
		const typography = attributes?.style?.typography || {};
		const { textAlign, ...styleValues } = typography;
		const style = Object.fromEntries(
			Object.entries( styleValues ).map( ( [ key, value ] ) => [
				key,
				presetTokenToCssVar( value ),
			] )
		);
		return {
			className: [
				attributes?.fontFamily
					? `has-${ attributes.fontFamily }-font-family`
					: '',
				textAlign ? `has-text-align-${ textAlign }` : '',
				attributes?.fontSize
					? `has-${ attributes.fontSize }-font-size`
					: '',
			]
				.filter( Boolean )
				.join( ' ' ),
			style,
		};
	},
	__experimentalGetColorClassesAndStyles: ( attributes ) => {
		const color = attributes?.style?.color || {};
		const hasBackground =
			attributes?.backgroundColor ||
			attributes?.gradient ||
			color.background ||
			color.gradient;
		return {
			className: [
				attributes?.textColor
					? `has-${ attributes.textColor }-color`
					: '',
				attributes?.textColor || color.text ? 'has-text-color' : '',
				hasBackground ? 'has-background' : '',
				attributes?.style?.elements?.link?.color
					? 'has-link-color'
					: '',
			]
				.filter( Boolean )
				.join( ' ' ),
			style: {
				...( color.text
					? { color: presetTokenToCssVar( color.text ) }
					: {} ),
				...( color.background
					? {
							backgroundColor: presetTokenToCssVar(
								color.background
							),
					  }
					: {} ),
				...( color.gradient
					? { background: presetTokenToCssVar( color.gradient ) }
					: {} ),
			},
		};
	},
	__experimentalGetSpacingClassesAndStyles: ( attributes ) => {
		const spacing = attributes?.style?.spacing || {};
		const style = {};
		[ 'margin', 'padding' ].forEach( ( spacingType ) => {
			Object.entries( spacing[ spacingType ] || {} ).forEach(
				( [ side, value ] ) => {
					style[
						`${ spacingType }${
							side.charAt( 0 ).toUpperCase() + side.slice( 1 )
						}`
					] = presetTokenToCssVar( value );
				}
			);
		} );
		return { style };
	},
	__experimentalGetBorderClassesAndStyles: ( attributes ) => {
		const border = attributes?.style?.border || {};
		const style = {};
		[ 'color', 'style', 'width' ].forEach( ( property ) => {
			// 一括指定された枠線だけを単一CSSプロパティへ変換する.
			if ( border[ property ] ) {
				style[
					`border${
						property.charAt( 0 ).toUpperCase() + property.slice( 1 )
					}`
				] = presetTokenToCssVar( border[ property ] );
			}
		} );
		// 角丸の一括指定はborder-radiusへ変換する.
		if ( 'string' === typeof border.radius ) {
			style.borderRadius = presetTokenToCssVar( border.radius );
		}
		return {
			className: border.color ? 'has-border-color' : '',
			style,
		};
	},
	__experimentalSpacingSizesControl: ( {
		label,
		sides = [],
		values,
		onChange,
	} ) => (
		<button
			aria-label={ label || 'spacing' }
			data-sides={ sides.join( ',' ) }
			onClick={ () => onChange( values ) }
		>
			spacing
		</button>
	),
	__experimentalBorderRadiusControl: ( { onChange, values } ) => (
		<button onClick={ () => onChange( values ) }>change</button>
	),
};
