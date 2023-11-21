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

/**
 * ResponsiveGapControl
 * @param  label.label
 * @param  label
 * @param  values
 * @param  onChange
 * @param  props
 * @param  label.values
 * @param  label.onChange
 * @return {JSX.Element}
 * @class
 * @deprecated ResponsiveGapControl
 */
const ResponsiveGapControl = ({ label, values, onChange, ...props }) => {
	const handleOnChange = (newValue) => {
		onChange(getResponsiveValues(newValue));
	};

	return (
		<BaseControl>
			<ResponsiveSpacing
				label={label ? label : __('余白(gap)', 'ystandard-toolbox')}
				values={values}
				onChange={handleOnChange}
				splitOnAxis={true}
				{...props}
			/>
		</BaseControl>
	);
};

export default ResponsiveGapControl;
