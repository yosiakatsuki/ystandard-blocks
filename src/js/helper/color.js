import { select } from '@wordpress/data';

export const getColorSetting = () => {
	const { colors } = select( 'core/block-editor' ).getSettings();
	return colors;
};

export const getColorSlug = ( color, colors = undefined ) => {
	const _colors = colors ? colors : getColorSetting();
	const selected = _colors.filter( ( data ) => data.color === color );
	if ( 0 < selected.length ) {
		return selected[ 0 ].slug;
	}
	return undefined;
};

export const hex2rgb = ( hex ) => {
	if ( hex.slice( 0, 1 ) === '#' ) hex = hex.slice( 1 );
	if ( hex.length === 3 )
		hex =
			hex.slice( 0, 1 ) +
			hex.slice( 0, 1 ) +
			hex.slice( 1, 2 ) +
			hex.slice( 1, 2 ) +
			hex.slice( 2, 3 ) +
			hex.slice( 2, 3 );

	return [ hex.slice( 0, 2 ), hex.slice( 2, 4 ), hex.slice( 4, 6 ) ].map(
		( str ) => {
			return parseInt( str, 16 );
		}
	);
};

export const getBackGroundStyle = ( backgroundColor, gradient = undefined ) => {
	if ( gradient ) {
		return gradient;
	}
	if ( backgroundColor?.color ) {
		return backgroundColor.color;
	}
	if ( 'object' !== typeof backgroundColor && backgroundColor ) {
		return backgroundColor;
	}
	return undefined;
};
