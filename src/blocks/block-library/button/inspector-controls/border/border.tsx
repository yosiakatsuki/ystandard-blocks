/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { CustomBorderSelect } from '@aktk/block-components/components/custom-border-select';

// @ts-expect-error
export function Border( props ) {
	const { attributes, setAttributes } = props;
	const { border } = attributes;
	// @ts-expect-error
	const handleOnChange = ( value ) => {
		setAttributes( { border: value || undefined } );
	};
	return (
		<BaseControl id={ 'border' } label={ __( '枠線', 'ystandard-blocks' ) }>
			<CustomBorderSelect value={ border } onChange={ handleOnChange } />
		</BaseControl>
	);
}
