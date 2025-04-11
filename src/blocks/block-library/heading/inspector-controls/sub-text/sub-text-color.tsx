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
export function SubTextColor( props ) {
	const { subTextColor, setSubTextColor } = props;

	// @ts-ignore
	const handleOnChange = ( value ) => {
		setSubTextColor( value );
	};

	return (
		<BaseControl
			id={ 'sub-text-color' }
			label={ __( 'サブテキスト文字色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( '文字色', 'ystandard-blocks' ) }
				value={ subTextColor.color }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
