/**
 * WordPress dependencies
 */
import { AlignmentToolbar } from '@wordpress/block-editor';

// @ts-ignore
export function Align( { attributes, setAttributes } ) {
	const { align } = attributes;
	return (
		<AlignmentToolbar
			value={ align }
			onChange={ ( nextAlign ) => {
				setAttributes( { align: nextAlign } );
			} }
		/>
	);
}
