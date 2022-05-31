import { getResponsiveValue } from '@aktk/helper/responsive';

export const getAutoWidthClasses = ( isAutoWidth ) => {
	const desktop = getResponsiveValue( isAutoWidth, 'desktop' );
	const tablet = getResponsiveValue( isAutoWidth, 'tablet' );
	const mobile = getResponsiveValue( isAutoWidth, 'mobile' );

	return {
		'is-auto-width-desktop': desktop,
		'is-auto-width-tablet': tablet,
		'is-auto-width-mobile': mobile,
	};
};
