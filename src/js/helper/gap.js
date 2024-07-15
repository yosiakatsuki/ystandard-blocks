export function getGapProperty( value ) {
	if ( ! value || 'object' !== typeof value ) {
		return undefined;
	}
	const top = value?.top;
	const right = value?.right;
	if ( ! top || ! right ) {
		return undefined;
	}

	if ( top === right ) {
		return { gap: top };
	}

	return {
		'row-gap': top,
		'column-gap': right,
	};
}
