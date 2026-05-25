/**
 * WordPress
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies
 */
import UnitControl, {
	useCustomUnits,
} from '@aktk/block-components/wp-controls/unit-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Block Dependencies.
 */
import type { Attributes } from '../../types';

// @ts-ignore.
export function MainTextLetterSpacing( props ) {
	const { attributes, setAttributes } = props;
	const { letterSpacing } = attributes as Attributes;

	const handleOnChange = ( newValue: string ) => {
		setAttributes( {
			letterSpacing: newValue || undefined,
		} );
	};

	// 設定できる単位を制限する.
	const useLetterSpacingCustomUnits = () => {
		const em =
			useCustomUnits( {
				availableUnits: [ 'em' ],
			} ) || [];
		const px =
			useCustomUnits( {
				availableUnits: [ 'px' ],
			} ) || [];
		return [ ...em, ...px ];
	};

	return (
		<BaseControl
			id={ 'letter-spacing' }
			label={ __( '文字間隔', 'ystandard-toolbox' ) }
		>
			<UnitControl
				value={ letterSpacing || '' }
				units={ useLetterSpacingCustomUnits() }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
