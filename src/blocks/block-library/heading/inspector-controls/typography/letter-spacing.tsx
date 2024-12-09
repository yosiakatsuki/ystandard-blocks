/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

/**
 * Aktk dependencies.
 */
import UnitControl, {
	useCustomUnits,
} from '@aktk/block-components/wp-controls/unit-control';
import { parseFloatWithUnit } from '@aktk/block-components/utils/number';

// @ts-ignore
export function LetterSpacing( props ) {
	const { attributes, setAttributes } = props;
	const { letterSpacing } = attributes;

	// 更新.
	const handleOnChange = ( newValue: string ) => {
		setAttributes( {
			letterSpacing: parseFloatWithUnit( newValue ),
		} );
	};

	// 値を取得.
	const getValue = () => {
		if ( parseFloatWithUnit( letterSpacing ) === letterSpacing ) {
			return `${ letterSpacing }em`;
		}
		return letterSpacing;
	};

	/**
	 * 設定できる単位を制限する
	 */
	const useLetterSpacingCustomUnits = () => {
		const em =
			useCustomUnits( {
				availableUnits: [ 'em' ],
			} ) || [];
		return [ ...em ];
	};

	return (
		<BaseControl
			id={ 'letter-spacing' }
			label={ __( 'Letter Spacing', 'ystandard-blocks' ) }
		>
			<UnitControl
				value={ getValue() }
				units={ useLetterSpacingCustomUnits() }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
