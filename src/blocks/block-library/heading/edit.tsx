/**
 * WordPress dependencies.
 */
import { compose } from '@wordpress/compose';
import { withColors, withFontSizes } from '@wordpress/block-editor';

// @ts-ignore
function Edit( props ) {
	return <></>;
}

// @ts-ignore
export default compose( [
	withColors( {
		textColor: 'color',
		subTextColor: 'color',
		dividerColor: 'fill',
	} ),
	withFontSizes( 'fontSize', 'subTextSize' ),
] )( Edit );
