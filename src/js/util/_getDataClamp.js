export default function getDataClamp(props) {
	for (const key in props) {
		if (undefined === props[key] || null === props[key]) {
			delete props[key];
		}
	}

	return !Object.keys(props).length
		? undefined
		: { 'data-responsive-clamp': `${JSON.stringify(props)}` };
}
