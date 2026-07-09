/**
 * WordPress dependencies.
 */
import { AlignmentToolbar } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import type { Attributes } from '../types';

// @ts-ignore
export function TextAlign( props ) {
	const { attributes, setAttributes } = props;
	const { hasSubText, textAlign } = attributes as Attributes;

	if ( hasSubText ) {
		return null;
	}

	return (
		<AlignmentToolbar
			value={ textAlign }
			onChange={ ( nextAlign ) => {
				setAttributes( {
					textAlign: nextAlign as Attributes[ 'textAlign' ],
				} );
			} }
		/>
	);
}
