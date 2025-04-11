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
export function DividerSpacing( props ) {
	const { attributes, setAttributes } = props;
	const { dividerMarginTop, dividerMarginBottom } = attributes;

	/**
	 * 設定できる単位を制限する
	 */
	const customUnits = useCustomUnits( { availableUnits: [ 'px' ] } ) || [];

	// 値を取得.
	const getMarginTop = () => {
		if ( parseIntWithUnit( dividerMarginTop ) === dividerMarginTop ) {
			return `${ dividerMarginTop }px`;
		}
		return dividerMarginTop;
	};
	const getMarginBottom = () => {
		if ( parseIntWithUnit( dividerMarginBottom ) === dividerMarginBottom ) {
			return `${ dividerMarginBottom }px`;
		}
		return dividerMarginBottom;
	};

	// 更新.
	const handleOnChangeTop = ( newValue: string ) => {
		setAttributes( {
			dividerMarginTop: parseIntWithUnit( newValue ),
		} );
	};
	const handleOnChangeBottom = ( newValue: string ) => {
		setAttributes( {
			dividerMarginBottom: parseIntWithUnit( newValue ),
		} );
	};

	return (
		<BaseControl
			id={ 'divider-spacing' }
			label={ __( '区切り線の上下余白', 'ystandard-blocks' ) }
		>
			<UnitControl
				label={ __( '上側の余白', 'ystandard-blocks' ) }
				value={ getMarginTop() }
				units={ customUnits }
				onChange={ handleOnChangeTop }
			/>
			<UnitControl
				label={ __( '下側の余白', 'ystandard-blocks' ) }
				value={ getMarginBottom() }
				units={ customUnits }
				onChange={ handleOnChangeBottom }
			/>
		</BaseControl>
	);
}
