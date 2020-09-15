import feather from 'feather-icons';

export const getFeatherIcon = (name) => {
	if (!feather.icons[name]) {
		return '';
	}
	return feather.icons[name].toSvg();
};
