export function calcClamp({ size, desktop, mobile, preferred }) {
	if (!isFinite(desktop) || !isFinite(mobile)) {
		return '';
	}
	if (desktop === mobile) {
		return desktop;
	}
	if (undefined !== preferred) {
		return Math.round(size * preferred);
	}
	const a = (desktop - mobile) / 825;
	const b = mobile - (375 * (desktop - mobile)) / 825;

	const min = mobile < desktop ? mobile : desktop;
	const max = mobile < desktop ? desktop : mobile;

	let value = Math.round(a * size + b);

	if (value < min) {
		value = min;
	}
	if (value > max) {
		value = max;
	}

	return value;
}
