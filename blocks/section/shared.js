export const getBackgroundPosition = (showFocalPointPicker, focalPoint) => {
	if (!focalPoint || !showFocalPointPicker) {
		return undefined;
	}
	return `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
};

export const getBackgroundSize = (size, sizeX, sizeY, unitX, unitY) => {
	if ('custom' !== size) {
		return 'cover' === size ? undefined : size;
	}
	const x = isFinite(sizeX) ? `${sizeX}${unitX}` : 'auto';
	const y = isFinite(sizeY) ? `${sizeY}${unitY}` : 'auto';

	return `${x} ${y}`;
};
