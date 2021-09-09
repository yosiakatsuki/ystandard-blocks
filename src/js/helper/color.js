export const hex2rgb = (hex, defaultValue = '#ffffff') => {
	let color = hex ? hex : defaultValue;
	if (color.slice(0, 1) === '#') color = color.slice(1);
	if (color.length === 3)
		color =
			color.slice(0, 1) +
			color.slice(0, 1) +
			color.slice(1, 2) +
			color.slice(1, 2) +
			color.slice(2, 3) +
			color.slice(2, 3);

	return [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6)].map(
		function (str) {
			return parseInt(str, 16);
		}
	);
};
