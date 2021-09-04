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

	return [ hex.slice( 0, 2 ), hex.slice( 2, 4 ), hex.slice( 4, 6 ) ].map( function (
		str
	) {
		return parseInt( str, 16 );
	} );
};
