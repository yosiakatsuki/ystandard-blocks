export function getFontResponsiveClass(isResponsive, desktop, tablet, mobile) {
	let addClass = true;
	if (!isResponsive) {
		addClass = false;
	}
	desktop = !desktop ? 0 : desktop;
	tablet = !tablet ? 0 : tablet;
	mobile = !mobile ? 0 : mobile;
	if (0 === desktop && 0 === tablet && 0 === mobile) {
		addClass = false;
	}

	return { 'ys-is-font-responsive': addClass };
}

export function getFontResponsiveStyle(props) {
	if (!props.isResponsive) {
		return undefined;
	}
	const desktop = !props.desktop ? 0 : props.desktop;
	const tablet = !props.tablet ? 0 : props.tablet;
	const mobile = !props.mobile ? 0 : props.mobile;
	if (0 === desktop && 0 === tablet && 0 === mobile) {
		return undefined;
	}
	const desktopUnit = !props.desktopUnit ? 'px' : props.desktopUnit;
	const tabletUnit = !props.tabletUnit ? 'px' : props.tabletUnit;
	const mobileUnit = !props.mobileUnit ? 'px' : props.mobileUnit;

	return {
		'--ys-font-desktop':
			0 === desktop ? undefined : `${desktop}${desktopUnit}`,
		'--ys-font-tablet': 0 === tablet ? undefined : `${tablet}${tabletUnit}`,
		'--ys-font-mobile': 0 === mobile ? undefined : `${mobile}${mobileUnit}`,
	};
}
