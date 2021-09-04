export const getStyle = ( styles, name, defaultStyle = undefined ) => {
	if ( ! styles ) {
		return defaultStyle;
	}
	if ( ! styles.hasOwnProperty( name ) ) {
		return defaultStyle;
	}
	return styles[ name ];
};
