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
import { parseIntWithUnit } from '@aktk/block-components/utils/number';

// @ts-ignore
export function DividerWidth( props ) {
	const { attributes, setAttributes } = props;
	const { subTextBorderWidth } = attributes;

	// 値を取得.
	const getValue = () => {
		if ( parseIntWithUnit( subTextBorderWidth ) === subTextBorderWidth ) {
			return `${ subTextBorderWidth }px`;
		}
		return subTextBorderWidth;
	};

	// 更新.
	const handleOnChange = ( newValue: string ) => {
		setAttributes( {
			subTextBorderWidth: parseIntWithUnit( newValue ),
		} );
	};

	/**
	 * 設定できる単位を制限する
	 */
	const customUnits = useCustomUnits( { availableUnits: [ 'px' ] } ) || [];

	return (
		<BaseControl
			id={ 'divider-width' }
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
