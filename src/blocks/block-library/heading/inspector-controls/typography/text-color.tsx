/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies.
 */
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
export function TextColor( props ) {
	const { textColor, setTextColor } = props;

	// @ts-ignore
	const handleOnChange = ( value ) => {
		setTextColor( value );
	};

	return (
		<BaseControl
			id={ 'text-color' }
			label={ __( '文字色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( '文字色', 'ystandard-blocks' ) }
				value={ textColor.color }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
