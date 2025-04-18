import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

import ColorPaletteControl from '@aktk/components/color-palette-control';

const BorderColor = ( props ) => {
	const { borderColor, setBorderColor } = props;

	return (
		<BaseControl
			id={ 'border-color' }
			label={ __( '枠線色', 'ystandard-blocks' ) }
		>
			<ColorPaletteControl
				label={ __( '枠線色', 'ystandard-blocks' ) }
				value={ borderColor.color }
				onChange={ ( color ) => {
					setBorderColor( color );
				} }
			/>
		</BaseControl>
	);
};

export default BorderColor;
