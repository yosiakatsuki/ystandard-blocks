export function getPaddingResponsiveClass( props ) {
	const isResponsive = props.isResponsive || false;
	const desktop = props.desktop || 0;
	const tablet = props.tablet || 0;
	const mobile = props.mobile || 0;
	const prefix = props.prefix ? `-${ props.prefix }` : '';

	let addClass = true;
	if ( ! isResponsive ) {
		addClass = false;
	}
	if ( 0 === desktop && 0 === tablet && 0 === mobile ) {
		addClass = false;
	}

	return { [ `is${ prefix }-padding-responsive` ]: addClass };
}

export function getPaddingResponsiveStyle( props ) {
	const isResponsive = props.isResponsive || false;
	const desktop = props.desktop || 0;
	const desktopUnit = props.desktopUnit || 'px';
	const tablet = props.tablet || 0;
	const tabletUnit = props.tabletUnit || 'px';
	const mobile = props.mobile || 0;
	const mobileUnit = props.mobileUnit || 'px';
	const prefix = props.prefix ? `-${ props.prefix }` : '';

	if ( ! isResponsive ) {
		return undefined;
	}
	if ( 0 === desktop && 0 === tablet && 0 === mobile ) {
		return undefined;
	}

	return {
		[ `--ys-padding${ prefix }-desktop` ]:
			0 === desktop ? undefined : `${ desktop }${ desktopUnit }`,
		[ `--ys-padding${ prefix }-tablet` ]:
			0 === tablet ? undefined : `${ tablet }${ tabletUnit }`,
		[ `--ys-padding${ prefix }-mobile` ]:
			0 === mobile ? undefined : `${ mobile }${ mobileUnit }`,
	};
}
