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
export function GroupSpacingMarginControl( props ) {
	const { attributes, setAttributes } = props;

	const { margin, responsiveMargin } = attributes as Attributes;

	// margin変更.
	const handleOnMarginChange = (
		newValue: ResponsiveSpacingSelectOnChangeProps
	) => {
		setAttributes( {
			margin: newValue?.spacing,
			responsiveMargin: newValue?.responsiveSpacing,
		} );
	};

	return (
		<BaseControl
			id={ 'custom-heading-group-spacing__margin' }
			label={ __( '外側余白', 'ystandard-blocks' ) }
		>
			<ResponsiveSpacingSelect
				value={ margin }
				responsiveValue={ responsiveMargin }
				onChange={ handleOnMarginChange }
				minimumCustomValue={ -9999 }
			/>
		</BaseControl>
	);
}
