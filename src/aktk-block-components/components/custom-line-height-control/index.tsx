/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const DEFAULT_PLACEHOLDER = '1.5';
const RESET_VALUE = '';
const STEP = 0.01;
const SPIN_FACTOR = 10;

interface CustomLineHeightControlProps {
	label?: string;
	value?: string | number;
	onChange: ( value: string | undefined ) => void;
	placeholder?: string;
	min?: number;
	step?: number;
	spinFactor?: number;
}

export function CustomLineHeightControl( props: CustomLineHeightControlProps ) {
	const {
		label = __( 'Line height', 'ystandard-blocks' ),
		value,
		onChange,
		placeholder = DEFAULT_PLACEHOLDER,
		min = 0,
		step = STEP,
		spinFactor = SPIN_FACTOR,
	} = props;

	const handleOnChange = ( newValue?: string | number ) => {
		if ( undefined === newValue || RESET_VALUE === newValue ) {
			onChange( undefined );
			return;
		}

		onChange( `${ newValue }` );
	};

	return (
		<div className="aktk-component__custom-line-height-control max-w-[150px] [&_.components-input-control__input]:!h-[40px] [&_div]:w-auto">
			<NumberControl
				label={ label }
				value={ value ?? RESET_VALUE }
				onChange={ handleOnChange }
				placeholder={ placeholder }
				min={ min }
				step={ step }
				spinFactor={ spinFactor }
				spinControls="custom"
				__next40pxDefaultSize
			/>
		</div>
	);
}
