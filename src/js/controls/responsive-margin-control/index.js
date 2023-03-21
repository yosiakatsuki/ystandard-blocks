/**
 * WordPress.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * yStandard
 */
import ResponsiveSpacing from '@aktk/components/responsive-spacing';
import { getResponsiveValues } from '@aktk/helper/responsive';

const ResponsiveMarginControl = ({
	label,
	values,
	onChange,
	min = -9999,
	...props
}) => {
	const handleOnChange = (newValue) => {
		onChange(getResponsiveValues(newValue));
	};

	return (
		<BaseControl>
			<ResponsiveSpacing
				{...props}
				label={
					label ? label : __('外側余白(margin)', 'ystandard-toolbox')
				}
				values={values}
				onChange={handleOnChange}
				inputProps={{
					min,
				}}
			/>
		</BaseControl>
	);
};

export default ResponsiveMarginControl;
