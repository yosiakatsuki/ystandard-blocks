/**
 * WordPress.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * yStandard
 */
import ResponsiveSpacing from '@aktk/blocks/deprecated/components/responsive-spacing';
import { getResponsiveValues } from '@aktk/blocks-old/helper/responsive';

/**
 *
 * @param  label.label
 * @param  label
 * @param  values
 * @param  onChange
 * @param  min
 * @param  props
 * @param  label.values
 * @param  label.onChange
 * @param  label.min
 * @return {JSX.Element}
 * @class
 * @deprecated Old
 */
const ResponsiveMarginControl = ( {
	// @ts-ignore
	label,
	// @ts-ignore
	values,
	// @ts-ignore
	onChange,
	min = -9999,
	...props
} ) => {
	// @ts-ignores
	const handleOnChange = ( newValue ) => {
		onChange( getResponsiveValues( newValue ) );
	};

	return (
		<BaseControl>
			<ResponsiveSpacing
				{ ...props }
				label={
					label ? label : __( '外側余白(margin)', 'ystandard-blocks' )
				}
				values={ values }
				onChange={ handleOnChange }
				inputProps={ {
					min,
				} }
			/>
		</BaseControl>
	);
};

export default ResponsiveMarginControl;
