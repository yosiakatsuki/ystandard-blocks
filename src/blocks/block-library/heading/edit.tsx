/**
 * WordPress dependencies.
 */
import { compose } from '@wordpress/compose';
import {
	useBlockProps,
	RichText,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';

// @ts-ignore
function Edit( props ) {
	const blockProps = useBlockProps( {} );

	return (
		<div { ...blockProps }>
			<div>カスタム見出し2</div>
		</div>
	);
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
