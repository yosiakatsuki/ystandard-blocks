/**
 * WordPress dependencies.
 */
import {
	__experimentalUnitControl as WPUnitControl,
	Button,
	BaseControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import { UNITS_SIZE } from '@aktk/blocks/config';

export type ValueInputOnChange = (
	value: string | undefined,
	extra?: { event: React.SyntheticEvent }
) => void;

export interface ValueInputProps {
	label?: string;
	value: string;
	onChange: ValueInputOnChange;
	units?: Array<{ value: string; label: string; default?: number }>;
	hasClearButton?: boolean;
}

export function ValueInput(props: ValueInputProps) {
	const { label, value, onChange, units = UNITS_SIZE } = props;

	const handleOnChange: ValueInputOnChange = (newValue, extra) => {
		const _value = !newValue ? undefined : newValue;
		onChange(_value, extra);
	};

	return (
		<BaseControl id={'value-input'} label={label}>
			<div className="flex gap-2 items-center">
				<WPUnitControl
					value={value}
					onChange={handleOnChange}
					units={units}
					className={'m-0'}
				/>
				<Button
					variant={'tertiary'}
					onClick={() => handleOnChange(undefined)}
					className={'text-[10px] h-auto'}
				>
					{__('クリア', 'ystandard-blocks')}
				</Button>
			</div>
		</BaseControl>
	);
}
