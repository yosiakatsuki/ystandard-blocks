/**
 * WordPress dependencies.
 */
import { AlignmentToolbar } from '@wordpress/block-editor';

// @ts-ignore
export function Align( props ) {
	const { attributes, setAttributes } = props;
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
