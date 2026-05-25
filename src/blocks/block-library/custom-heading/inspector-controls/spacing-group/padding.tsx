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
 * Block dependencies.
 */
import type { Attributes } from '../../types';

// @ts-ignore.
export function GroupSpacingPaddingControl( props ) {
	const { attributes, setAttributes } = props;

	const { padding, responsivePadding } = attributes as Attributes;

	// padding変更.
	const handleOnPaddingChange = (
		newValue: ResponsiveSpacingSelectOnChangeProps
	) => {
		setAttributes( {
			padding: newValue?.spacing,
			responsivePadding: newValue?.responsiveSpacing,
		} );
	};

	return (
		<BaseControl
			id={ 'custom-heading-group-spacing__padding' }
			label={ __( '内側余白', 'ystandard-blocks' ) }
		>
			<ResponsiveSpacingSelect
				value={ padding }
				responsiveValue={ responsivePadding }
				onChange={ handleOnPaddingChange }
			/>
		</BaseControl>
	);
}
