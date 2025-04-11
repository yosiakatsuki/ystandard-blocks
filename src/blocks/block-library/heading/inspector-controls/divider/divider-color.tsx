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
export function DividerColor( props ) {
	const { dividerColor, setDividerColor } = props;

	// @ts-ignore
	const handleOnChange = ( value ) => {
		setDividerColor( value );
	};

	return (
		<BaseControl
			id={ 'divider-color' }
			label={ __( '区切り線の色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( '区切り線の色', 'ystandard-blocks' ) }
				value={ dividerColor.color }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
