/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';

// @ts-expect-error
export function TextColor( props ) {
	const { textColor, setTextColor } = props;
	return (
		<>
			<BaseControl
				id={ 'text-color' }
				label={ __( '文字色', 'ystandard-blocks' ) }
			>
				<ColorPalette
					label={ __( '文字色', 'ystandard-blocks' ) }
					value={ textColor.color }
					onChange={ setTextColor }
				/>
			</BaseControl>
		</>
	);
}
