/**
 * WordPress dependencies.
 */
import {
	AlignmentToolbar,
	BlockControls as WPBlockControls,
} from '@wordpress/block-editor';

// @ts-ignore
export function BlockControls( props ) {
	const { attributes, setAttributes } = props;
	const { align } = attributes;
	return (
		<>
			{ /* @ts-ignore */ }
			<WPBlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) => {
						setAttributes( { align: nextAlign } );
					} }
				/>
			</WPBlockControls>
		</>
	);
}
