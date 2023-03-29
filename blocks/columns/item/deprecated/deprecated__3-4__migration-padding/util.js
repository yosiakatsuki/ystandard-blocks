export function migratePadding(attributes) {
	if (!attributes?.paddingType) {
		return attributes;
	}
	let newAttributes = attributes;
	const oldPadding = {
		'is-padding-small': '1rem',
		'is-padding-large': '1.5rem',
	};
	Object.keys(oldPadding).map((key) => {
		if (key === newAttributes?.paddingType) {
			newAttributes = {
				...newAttributes,
				padding: {
					desktop: {
						top: oldPadding[key],
						right: oldPadding[key],
						bottom: oldPadding[key],
						left: oldPadding[key],
					},
				},
			};
			delete newAttributes.paddingType;
			if (newAttributes?.className) {
				newAttributes.className = newAttributes.className
					.replace(key, '')
					.trim();
			}
		}
		return true;
	});
	return newAttributes;
}
