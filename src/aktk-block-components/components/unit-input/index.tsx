/**
 * aktk dependencies.
 */
import UnitControl from '@aktk/block-components/wp-controls/unit-control';
import Button from '@aktk/block-components/wp-controls/button';
import { UNITS_SIZE } from '@aktk/block-components/config';

interface UnitInputProps {
	label?: string;
	value?: string | number | undefined;
	onChange: ( value: string | undefined ) => void;
	units?:
		| {
				value: string;
				label: string;
		  }[]
		| undefined;
	unit?: string | undefined;
	disableUnits?: boolean | undefined;
	isResetValueOnUnitChange?: boolean | undefined;
	hasClearButton?: boolean;
}

import './style-editor.scss';

export function UnitInput( props: UnitInputProps ) {
	const {
		label,
		value,
		onChange,
		units = UNITS_SIZE,
		unit,
		disableUnits,
		isResetValueOnUnitChange,
		hasClearButton = false,
	} = props;

	const handleOnChange = ( newValue: string | undefined ) => {
		if ( newValue && 0 === parseFloat( newValue ) ) {
			onChange( '0' );
			return;
		}

		onChange( newValue ? newValue : undefined );
	};

	return (
		<div className={ 'mb-4 flex items-center gap-2' }>
			<UnitControl
				label={ label }
				onChange={ handleOnChange }
				value={ value }
				units={ units }
				unit={ unit }
				disableUnits={ disableUnits }
				isResetValueOnUnitChange={ isResetValueOnUnitChange }
				className={ '!mb-0 grow' }
			/>
			{ hasClearButton && (
				<Button
					size={ 'small' }
					variant={ 'secondary' }
					isDestructive
					onClick={ () => {
						handleOnChange( undefined );
					} }
				>
					クリア
				</Button>
			) }
		</div>
	);
}
