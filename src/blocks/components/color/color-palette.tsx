import { ColorPalette as WPColorPalette } from '@wordpress/components';
import { select } from '@wordpress/data';

export interface ColorPaletteProps {
	value: string;
	onChange: ( value?: string ) => void;
}

export function ColorPalette( props: ColorPaletteProps ) {
	const { value, onChange } = props;
	const { colors } = select( 'core/block-editor' ).getSettings();
	return (
		<>
			<WPColorPalette
				colors={ colors }
				disableCustomColors={ false }
				onChange={ ( color?: string ) => {
					onChange( color );
				} }
				value={ value }
			/>
		</>
	);
}
