/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { TextAlignButtons } from '@aktk/block-components/components/alignment-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Block dependencies.
 */
import type { Attributes } from '../../types';

// @ts-ignore.
export function LayoutTextAlign( props ) {
	const { attributes, setAttributes } = props;
	const { hasSubText, textAlign } = attributes as Attributes;

	if ( hasSubText ) {
		return null;
	}

	const handleOnChange = ( value: string | undefined ) => {
		setAttributes( {
			textAlign: value as Attributes[ 'textAlign' ],
		} );
	};

	return (
		<BaseControl
			id={ 'text-align' }
			label={ __( '文字揃え', 'ystandard-blocks' ) }
		>
			<TextAlignButtons value={ textAlign } onChange={ handleOnChange } />
		</BaseControl>
	);
}
