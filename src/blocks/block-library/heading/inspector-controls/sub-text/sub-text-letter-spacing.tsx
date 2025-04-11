/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import UnitControl, {
	useCustomUnits,
} from '@aktk/block-components/wp-controls/unit-control';
import { parseFloatWithUnit } from '@aktk/block-components/utils/number';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
export function SubTextLetterSpacing( props ) {
	const { attributes, setAttributes } = props;
	const { subTextLetterSpacing } = attributes;

	// 更新.
	const handleOnChange = ( newValue: string ) => {
		setAttributes( {
			subTextLetterSpacing: parseFloatWithUnit( newValue ),
		} );
	};

	// 値を取得.
	const getValue = () => {
		if (
			parseFloatWithUnit( subTextLetterSpacing ) === subTextLetterSpacing
		) {
			return `${ subTextLetterSpacing }em`;
		}
		return subTextLetterSpacing;
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
			id={ 'sub-text-letter-spacing' }
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
