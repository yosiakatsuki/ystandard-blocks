/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import {
	ResponsiveSpacingSelect,
	type ResponsiveSpacing,
} from '@aktk/block-components/components/custom-spacing-select';
import { isResponsive } from '@aktk/block-components/utils/object';
/**
 * Plugin dependencies.
 */

/**
 * Internal dependencies
 */
import type { Attributes } from '../../types';

// @ts-expect-error
export function Padding( props ) {
	const { attributes, setAttributes } = props;
	const { padding, responsivePadding } = attributes as unknown as Attributes;

	const handleOnChange = ( newValue: ResponsiveSpacing | undefined ) => {
		if ( isResponsive( newValue ) ) {
			setAttributes( {
				padding: undefined,
				responsivePadding: newValue,
			} );
		} else {
			setAttributes( {
				padding: newValue?.desktop,
				responsivePadding: undefined,
			} );
		}
	};

	const value = isResponsive( responsivePadding )
		? responsivePadding
		: {
				desktop: padding,
		  };

	return (
		<>
			<BaseControl
				id={ 'padding' }
				label={ __( '内側余白(Padding)', 'ystandard-blocks' ) }
			>
				<ResponsiveSpacingSelect
					value={ value }
					onChange={ handleOnChange }
				/>
			</BaseControl>
		</>
	);
}
