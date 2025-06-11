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
	__experimentalBorderRadiusControl: ( { onChange, values } ) => (
		<button onClick={ () => onChange( values ) }>change</button>
	),
};
