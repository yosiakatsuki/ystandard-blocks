export const schema = {
	image: '',
	imageId: 0,
	name: '',
	enable: true,
	index: 0,
};

export const initOption = ( option ) => {
	return sortOption(
		option.map( ( value, index ) => {
			if ( ! value ) {
				return value;
			}
			if ( ! value.hasOwnProperty( 'index' ) ) {
				value.index = index;
			}
			if ( ! value.hasOwnProperty( 'imageId' ) ) {
				value.imageId = 0;
			}
			if ( ! value.hasOwnProperty( 'enable' ) ) {
				value.enable = true;
			}
			return value;
		} )
	);
};

export const sortOption = ( option ) => {
	const newOption = [ ...option ];
	return newOption.sort( ( a, b ) => {
		return a.index - b.index;
	} );
};
