export function migrateRemoveMargin(attributes) {
	let newAttributes = attributes;
	if (!!newAttributes?.removeMargin) {
		newAttributes = {
			...newAttributes,
			...{
				gap: {
					desktop: {
						top: '0px',
						right: '0px',
						bottom: '0px',
						left: '0px',
					},
				},
			},
		};
		delete newAttributes.removeMargin;
	}
	if (newAttributes?.className) {
		newAttributes = {
			...newAttributes,
			...{
				className: newAttributes.className.replace('is-no-margin', ''),
			},
		};
	}

	return newAttributes;
}
