/**
 * WordPress dependencies.
 */
import { __experimentalUnitControl as WPUnitControl } from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import { UNITS_SIZE } from '@aktk/blocks/config';

export interface ValueInputProps {
	label?: string;
	value: string;
	onChange: (value: string) => void;
	units?: Array<{ value: string; label: string; default?: number }>;
}

// @ts-expect-error
export function ValueInput(props) {
	const { label, value, onChange, units = UNITS_SIZE } = props;

	return (
		<>
			<WPUnitControl
				label={label}
				value={value}
				onChange={onChange}
				units={units}
			/>
		</>
	);
}
