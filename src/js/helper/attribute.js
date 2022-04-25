export const getDefaultAttributes = () => {
	if (
		! window.ystdtbBlockEditor ||
		'object' !== typeof window.ystdtbBlockEditor
	) {
		return {};
	}
	if ( ! window.ystdtbBlockEditor.hasOwnProperty( 'defaultAttributes' ) ) {
		return {};
	}
	return window.ystdtbBlockEditor.defaultAttributes;
};

export const mergeDefaultAttributes = ( name, attributes ) => {
	const defaultAttributes = getDefaultAttributes();
	if ( ! defaultAttributes ) {
		return attributes;
	}
	if ( ! defaultAttributes.hasOwnProperty( name ) ) {
		return attributes;
	}
	const blockDefaultAttr = defaultAttributes[ name ];
	Object.keys( blockDefaultAttr ).map( ( key ) => {
		if ( attributes.hasOwnProperty( key ) ) {
			attributes[ key ].default = blockDefaultAttr[ key ];
		}
		return blockDefaultAttr;
	} );
	return attributes;
};
