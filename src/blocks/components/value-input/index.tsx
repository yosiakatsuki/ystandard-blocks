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
	onChange: (value: string | undefined) => void;
	units?: Array<{ value: string; label: string; default?: number }>;
}

export function ValueInput(props: ValueInputProps) {
	const { label, value, onChange, units = UNITS_SIZE } = props;

	const handleOnChange = (newValue: string | undefined) => {
		const _value = !newValue ? undefined : newValue;
		onChange(_value);
	};

	return (
		<>
			<WPUnitControl
				label={label}
				value={value}
				onChange={handleOnChange}
				units={units}
			/>
		</>
	);
}
