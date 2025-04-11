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
import { parseIntWithUnit } from '@aktk/block-components/utils/number';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
export function DividerHeight( props ) {
	const { attributes, setAttributes } = props;
	const { subTextBorderHeight } = attributes;

	// 値を取得.
	const getValue = () => {
		if ( parseIntWithUnit( subTextBorderHeight ) === subTextBorderHeight ) {
			return `${ subTextBorderHeight }px`;
		}
		return subTextBorderHeight;
	};

	// 更新.
	const handleOnChange = ( newValue: string ) => {
		setAttributes( {
			subTextBorderHeight: parseIntWithUnit( newValue ),
		} );
	};

	/**
	 * 設定できる単位を制限する
	 */
	const customUnits = useCustomUnits( { availableUnits: [ 'px' ] } ) || [];

	return (
		<BaseControl
			id={ 'divider-height' }
			label={ __( '区切り線の太さ', 'ystandard-blocks' ) }
		>
			<UnitControl
				value={ getValue() }
				units={ customUnits }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
