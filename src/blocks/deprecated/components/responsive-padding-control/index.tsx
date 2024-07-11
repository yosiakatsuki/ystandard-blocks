import { BaseControl } from '@wordpress/components';
import ResponsiveSpacing from '@aktk/blocks/deprecated/components/responsive-spacing';
import { __ } from '@wordpress/i18n';

import { getResponsiveValues } from '@aktk/blocks/deprecated/utils/responsive';

/**
 *
 * @param      label.label
 * @param      label
 * @param      values
 * @param      onChange
 * @param      props
 * @param      label.values
 * @param      label.onChange
 * @class
 * @deprecated 置き換え予定
 */
// @ts-ignore
const ResponsivePaddingControl = ({ label, values, onChange, ...props }) => {
	// @ts-ignore
	const handleOnChange = (newValue) => {
		onChange(getResponsiveValues(newValue));
	};

	return (
		<BaseControl>
			<ResponsiveSpacing
				label={
					label ? label : __('内側余白(padding)', 'ystandard-blocks')
				}
				values={values}
				onChange={handleOnChange}
				{...props}
			/>
		</BaseControl>
	);
};

export default ResponsivePaddingControl;
