import { __experimentalUnitControl as WPUnitControl } from '@wordpress/components';

/**
 * @param root0
 * @param root0.label
 * @param root0.value
 * @param root0.onChange
 * @param root0.units
 * @deprecated
 */
// @ts-ignore
const UnitControl = ({ label, value, onChange, units, ...props }) => {
	return (
		<WPUnitControl
			label={label}
			value={value}
			onChange={onChange}
			units={units}
			{...props}
		/>
	);
};

export default UnitControl;
