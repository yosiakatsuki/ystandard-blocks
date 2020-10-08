export default function getCssClamp(attribute) {
	const {
		min,
		max,
		unit,
		minUnit,
		maxUnit,
		preferred,
		preferredUnit,
	} = attribute;

	let clampMinUnit = undefined !== minUnit ? minUnit : unit;
	if (undefined === clampMinUnit) {
		clampMinUnit = 'px';
	}
	let clampMaxUnit = undefined !== maxUnit ? maxUnit : unit;
	if (undefined === clampMaxUnit) {
		clampMaxUnit = 'px';
	}
	const clampPreferredUnit =
		undefined !== preferredUnit ? preferredUnit : 'vw';
	const minValue = `${min}${clampMinUnit}`;
	const maxValue = `${max}${clampMaxUnit}`;

	return `clamp( ${minValue}, ${preferred}${clampPreferredUnit}, ${maxValue} )`;
}
