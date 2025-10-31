/**
 * WordPress dependencies.
 */
import { useBlockProps, RichText, withColors } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

// @ts-expect-error
function Edit( props ) {
	const blockProps = useBlockProps( {
		className: 'ystdb-custom-heading',
	} );
	return (
		<>
			<div { ...blockProps }>
				<p>新カスタムブロック編集画面</p>
			</div>
		</>
	);
}

// @ts-expect-error
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
