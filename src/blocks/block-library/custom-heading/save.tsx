/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

// @ts-expect-error
function Save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'ystdb-custom-heading',
	} );
	return (
		<div { ...blockProps }>
			<p>新カスタムブロック保存画面</p>
		</div>
	);
}
export default Save;
