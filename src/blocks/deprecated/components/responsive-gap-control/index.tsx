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
 * ResponsiveGapControl
 * @param label
 * @param values
 * @param onChange
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @deprecated ResponsiveGapControl
 */
// @ts-ignore
const ResponsiveGapControl = ({ label, values, onChange, ...props }) => {
	// @ts-ignore
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
