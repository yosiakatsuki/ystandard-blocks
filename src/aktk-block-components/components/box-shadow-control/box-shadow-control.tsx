/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies
 */
import {
	DestructiveButton,
	HorizonButtonSelect,
} from '@aktk/block-components/components/buttons';
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';
import UnitControl from '@aktk/block-components/wp-controls/unit-control';
import NumberControl from '@aktk/block-components/wp-controls/number-control';

/**
 * Component Imports
 */
import type { BoxShadowControlProps, BoxShadowPreset } from './types';

const BOX_SHADOW_PRESETS: BoxShadowPreset[] = [
	{
		label: __( '小', 'aktk-block-components' ),
		value: {
			offsetX: '0',
			offsetY: '2px',
			blurRadius: '8px',
			color: '#bdc3c7',
			opacity: 0.7,
		},
	},
	{
		label: __( '中', 'aktk-block-components' ),
		value: {
			offsetX: '0',
			offsetY: '4px',
			blurRadius: '16px',
			color: '#bdc3c7',
			opacity: 0.7,
		},
	},
	{
		label: __( '大', 'aktk-block-components' ),
		value: {
			offsetX: '0',
			offsetY: '8px',
			blurRadius: '24px',
			color: '#bdc3c7',
			opacity: 0.7,
		},
	},
];

const UNITS = [ { value: 'px', label: 'px' } ];

export function BoxShadowControl( props: BoxShadowControlProps ) {
	const { value, onChange, label } = props;

	const setNewValue = ( newValue: Partial< typeof value > ) => {
		onChange( {
			...value,
			...newValue,
		} );
	};

	const handleResetOnClick = () => {
		onChange( undefined );
	};

	const handlePresetOnChange = ( preset: BoxShadowPreset[ 'value' ] ) => {
		onChange( preset );
	};

	const handleColorOnChange = ( color: string ) => {
		setNewValue( { color } );
	};

	const handleOpacityOnChange = ( newValue: number | string | undefined ) => {
		setNewValue( { opacity: Number( newValue ) } );
	};

	const handleOffsetXOnChange = ( newValue: string | undefined ) => {
		setNewValue( { offsetX: newValue } );
	};

	const handleOffsetYOnChange = ( newValue: string | undefined ) => {
		setNewValue( { offsetY: newValue } );
	};

	const handleBlurRadiusOnChange = ( newValue: string | undefined ) => {
		setNewValue( { blurRadius: newValue } );
	};

	return (
		<div className="flex flex-col gap-4">
			{ label && <div className="text-sm font-medium">{ label }</div> }

			<div className="flex flex-col gap-2">
				<div className="text-fz-label-component font-medium">
					{ __( 'プリセット', 'aktk-block-components' ) }
				</div>
				<HorizonButtonSelect
					options={ BOX_SHADOW_PRESETS }
					onChange={ handlePresetOnChange }
					buttonSize="small"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-fz-label-component font-medium">
					{ __( '影の色', 'aktk-block-components' ) }
				</div>
				<ColorPalette
					onChange={ handleColorOnChange }
					value={ value?.color }
					label={ __( '影の色', 'aktk-block-components' ) }
				/>
			</div>

			<NumberControl
				label={ __( '不透明度', 'aktk-block-components' ) }
				value={ value?.opacity }
				onChange={ handleOpacityOnChange }
				max={ 1 }
				min={ 0 }
				step={ 0.1 }
			/>

			{ /* 位置・ぼかし設定 */ }
			<div className="grid grid-cols-3 gap-2">
				<UnitControl
					label={ __( 'X方向', 'aktk-block-components' ) }
					value={ value?.offsetX }
					onChange={ handleOffsetXOnChange }
					units={ UNITS }
				/>
				<UnitControl
					label={ __( 'Y方向', 'aktk-block-components' ) }
					value={ value?.offsetY }
					onChange={ handleOffsetYOnChange }
					units={ UNITS }
				/>
				<UnitControl
					label={ __( 'ぼかし', 'aktk-block-components' ) }
					value={ value?.blurRadius }
					onChange={ handleBlurRadiusOnChange }
					units={ UNITS }
				/>
			</div>

			<DestructiveButton
				onClick={ handleResetOnClick }
				isSmall
				className="justify-center text-center"
			>
				{ __( 'クリア', 'aktk-block-components' ) }
			</DestructiveButton>
		</div>
	);
}
