import { ColorPalette } from '@wordpress/components';
import '@wordpress/block-editor';
import { getColorSetting } from '@aktk/helper/color';
import ColorDropdown from '@aktk/components/color-dropdown';

const ColorPaletteControl = ( {
	value,
	onChange,
	colors,
	label,
	key,
	position = 'bottom left',
	...props
} ) => {
	const _colors = colors ?? getColorSetting();

	const handleOnChange = ( color ) => {
		onChange( color );
	};

	return (
		<>
			<ColorDropdown
				key={ key }
				label={ label }
				value={ value }
				position={ position }
				renderContent={ () => (
					<ColorPalette
						colors={ _colors }
						onChange={ handleOnChange }
						value={ value }
						{ ...props }
					/>
				) }
			/>
		</>
	);
};
export default ColorPaletteControl;
