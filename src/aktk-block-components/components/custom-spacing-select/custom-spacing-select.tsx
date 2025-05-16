/**
 * Aktk Dependencies.
 */
import SpacingSizesControl, {
	getCustomValueFromPreset,
	type SpacingSizeControlProps,
	type SpacingSizeValues,
} from '@aktk/block-components/wp-controls/spacing-size-control';
import { isObject } from '@aktk/block-components/utils/object';

export function CustomSpacingSelectControl( props: SpacingSizeControlProps ) {
	const { values, onChange, label, sides, minimumCustomValue = 0 } = props;
	const handleOnChange = ( newValue: SpacingSizeValues ) => {
		onChange( newValue );
	};
	return (
		<>
			<SpacingSizesControl
				values={ values }
				onChange={ handleOnChange }
				label={ label }
				sides={ sides }
				minimumCustomValue={ minimumCustomValue }
			/>
		</>
	);
}

interface CustomSpacingSelectControlWithCustomValueProps
	extends SpacingSizeControlProps {
	spacingSizes: object[];
}

export function CustomSpacingSelectControlWithCustomValue(
	props: CustomSpacingSelectControlWithCustomValueProps
) {
	const {
		values,
		onChange,
		label,
		sides,
		spacingSizes,
		minimumCustomValue = 0,
	} = props;

	const handleOnChange = ( newValue: SpacingSizeValues ) => {
		// プリセットから値を取得して返す.
		if ( !! newValue && isObject( newValue ) ) {
			Object.keys( newValue ).forEach( ( key ) => {
				// @ts-expect-error
				newValue[ key ] = getCustomValueFromPreset(
					// @ts-expect-error
					newValue[ key ],
					spacingSizes
				) as unknown as string;
			} );
			onChange( newValue );
		} else {
			onChange( newValue );
		}
	};
	return (
		<>
			<SpacingSizesControl
				values={ values }
				onChange={ handleOnChange }
				label={ label }
				sides={ sides }
				minimumCustomValue={ minimumCustomValue }
			/>
		</>
	);
}

CustomSpacingSelectControl.CustomValue =
	CustomSpacingSelectControlWithCustomValue;
