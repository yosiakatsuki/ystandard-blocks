/**
 * WordPress dependencies.
 */
import { RangeControl as WPRangeControl } from '@wordpress/components';

interface RangeControlProps {
	label?: string;
	value: number;
	min: number;
	max: number;
	step?: number;
	initialPosition?: number;
	allowReset?: boolean;
	onChange: ( value?: number ) => void;
}

export default function RangeControl( props: RangeControlProps ) {
	const {
		label,
		value,
		min,
		max,
		step,
		initialPosition,
		allowReset,
		onChange,
	} = props;
	return (
		<WPRangeControl
			label={ label }
			value={ value }
			min={ min }
			max={ max }
			step={ step }
			initialPosition={ initialPosition }
			allowReset={ allowReset }
			onChange={ ( newValue?: number ) => {
				onChange( newValue );
			} }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	);
}
