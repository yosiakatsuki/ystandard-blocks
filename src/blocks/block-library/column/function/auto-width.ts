import { getResponsiveValue } from '@aktk/blocks/deprecated/utils/responsive';

// @ts-ignore
export const getAutoWidthClasses = ( isAutoWidth ) => {
	const desktop = getResponsiveValue( isAutoWidth, 'desktop' );
	const tablet = getResponsiveValue( isAutoWidth, 'tablet' );
	const mobile = getResponsiveValue( isAutoWidth, 'mobile' );

	return {
		'is-auto-width-desktop': desktop && ( tablet || mobile ),
		'is-auto-width-tablet': tablet,
		'is-auto-width-mobile': mobile,
		'is-auto-width': desktop && ! tablet && ! mobile,
	};
};
