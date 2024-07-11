/**
 * WordPress dependencies.
 */
import {
	__experimentalUnitControl as WPUnitControl,
	Button,
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
	units?: Array< { value: string; label: string; default?: number } >;
	hasClearButton?: boolean;
}

export function ValueInput( props: ValueInputProps ) {
	const { label, value, onChange, units = UNITS_SIZE } = props;

	const handleOnChange: ValueInputOnChange = ( newValue, extra ) => {
		const _value = ! newValue ? undefined : newValue;
		onChange( _value, extra );
	};

	return (
		<div className={ 'm-0' }>
			{ label && (
				<span className={ 'mb-2 block text-[11px]' }>{ label }</span>
			) }
			<div className="flex items-center gap-2">
				<WPUnitControl
					value={ value }
					onChange={ handleOnChange }
					units={ units }
					className={ 'm-0' }
				/>
				<Button
					variant={ 'tertiary' }
					onClick={ () => handleOnChange( undefined ) }
					className={ 'h-auto text-fz-xxs' }
				>
					{ __( 'クリア', 'ystandard-blocks' ) }
				</Button>
			</div>
		</div>
	);
}
