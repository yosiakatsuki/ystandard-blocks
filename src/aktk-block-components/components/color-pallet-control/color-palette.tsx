import { ColorPalette as WPColorPalette } from '@wordpress/components';
import {
	ColorObject,
	PaletteObject,
} from '@wordpress/components/src/color-palette/types';
/**
 * Aktk Dependencies
 */
import ColorDropdownWrapper from '@aktk/block-components/components/color-pallet-control/color-dropdown-wrapper';
import useThemeColors from '@aktk/block-components/hooks/useThemeColors';

import './editor-color-palette.scss';

interface ColorPaletteProps {
	label: string;
	value: string;
	onChange: ( newColor?: string, index?: number ) => void;
	colors?: PaletteObject[] | ColorObject[];
	enableCurrentColor?: boolean;
	enableTransparent?: boolean;
}

/**
 * カラーパレット（設定画面用。エディター側はWP提供のコントロールを使おう）
 * @param props
 */
export function ColorPalette( props: ColorPaletteProps ) {
	const {
		label,
		value,
		onChange,
		colors,
		enableCurrentColor,
		enableTransparent,
	} = props;
	const handleOnChange = ( newColor?: string, index?: number ) => {
		onChange( newColor, index );
	};
	const themeColors = useThemeColors( {
		enableCurrentColor,
		enableTransparent,
	} );
	return (
		<>
			<ColorDropdownWrapper colorValue={ value } label={ label }>
				<WPColorPalette
					className="aktk-components__color-palette-control"
					value={ value }
					onChange={ handleOnChange }
					disableCustomColors={ false }
					colors={ colors || themeColors }
				/>
			</ColorDropdownWrapper>
		</>
	);
}
