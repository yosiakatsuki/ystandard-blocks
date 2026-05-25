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
	type ResponsiveSpacingSelectOnChangeProps,
} from '@aktk/block-components/components/custom-spacing-select';
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

	const handleOnChange = (
		newValue: ResponsiveSpacingSelectOnChangeProps
	) => {
		setAttributes( {
			padding: newValue?.spacing,
			responsivePadding: newValue?.responsiveSpacing,
		} );
	};

	return (
		<>
			<BaseControl
				id={ 'padding' }
				label={ __( '内側余白(Padding)', 'ystandard-blocks' ) }
			>
				<ResponsiveSpacingSelect
					value={ padding }
					responsiveValue={ responsivePadding }
					onChange={ handleOnChange }
				/>
			</BaseControl>
		</>
	);
}
