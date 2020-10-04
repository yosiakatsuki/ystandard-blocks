export const getBackgroundPosition = ( showFocalPointPicker, focalPoint ) => {
	if ( ! focalPoint || ! showFocalPointPicker ) {
		return undefined;
	}
	return `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`;
};

export const getBackgroundSize = (size,sizeX,sizeY,unitX,unitY) => {
	if ( 'custom' !== size ) {
		return 'cover' === size ? undefined : size;
	}
	let x = isFinite( sizeX ) ? sizeX : 'auto';
	let y = isFinite( sizeY ) ? sizeY : 'auto';

	return `${ x }${ unitX } ${ y }${ unitY }`;
};
