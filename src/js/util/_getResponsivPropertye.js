export default function getDataProperty(props) {
	for (const key in props) {
		if (undefined === props[key] || null === props[key]) {
			delete props[key];
		}
	}

	return !Object.keys(props).length
		? undefined
		: { 'data-ys-responsive-property': `${JSON.stringify(props)}` };
}
