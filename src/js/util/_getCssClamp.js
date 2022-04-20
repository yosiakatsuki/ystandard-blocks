export default function getCssClamp( attribute ) {
	const { desktop, mobile, unit, preferredValue, preferredUnit } = attribute;

	if ( desktop === mobile ) {
		return `${ desktop }px`;
	}

	const min = mobile < desktop ? mobile : desktop;
	const max = mobile < desktop ? desktop : mobile;
	const clampUnit = undefined === unit ? 'px' : unit;

	let a = ( desktop - mobile ) / 825;
	let b = mobile - ( 375 * ( desktop - mobile ) ) / 825;
	const calc = 0 > b ? '-' : '+';

	const aUnit = undefined === preferredUnit ? 'vw' : preferredUnit;
	const bUnit = 'px';

	if ( 'vw' === aUnit || 'vh' === aUnit ) {
		a = a * 100;
		a = Math.round( a * 100 ) / 100;
	}
	if ( 0 > mobile ) {
		b = Math.ceil( b );
	} else {
		b = Math.floor( b );
	}

	const minValue = `${ min }${ clampUnit }`;
	const maxValue = `${ max }${ clampUnit }`;
	const preferred =
		undefined === preferredValue
			? `${ a }${ aUnit } ${ calc } ${ Math.abs( b ) }${ bUnit }`
			: `${ preferredValue }${ aUnit }`;

	return `clamp( ${ minValue }, ${ preferred }, ${ maxValue } )`;
}
