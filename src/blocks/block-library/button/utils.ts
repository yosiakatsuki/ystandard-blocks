import classnames from 'classnames';

export function getWrapClasses(classes: object) {
	return classnames('ystdb-custom-button', { ...classes });
}

export function getLinkClasses(classes: object) {
	return classnames('ystdb-custom-button__link', {
		...classes,
	});
}
