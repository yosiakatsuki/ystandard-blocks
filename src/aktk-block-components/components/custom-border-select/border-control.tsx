/**
 * Aktk Dependencies.
 */
import BorderBoxControl from '@aktk/block-components/wp-controls/border-box-control';
import useThemeColors from '@aktk/block-components/hooks/useThemeColors';
import { stripUndefined } from '@aktk/block-components/utils/object';

/**
 * Component Dependencies.
 */
import type { BorderControlProps, FlatBorder, SplitBorders } from './types';

/**
 * 枠線コントロール
 *
 * @param props
 * @class
 */
export function CustomBorderSelect( props: BorderControlProps ) {
	const {
		label,
		value,
		onChange,
		colors,
		enableAlpha = false,
		enableStyle = true,
		disableCustomColors = false,
	} = props;
	const themeColors = useThemeColors();

	const handleOnChange = ( newValue: SplitBorders | FlatBorder ) => {
		onChange( stripUndefined( newValue || undefined ) );
	};

	const paletteColors = colors || themeColors;
	return (
		<BorderBoxControl
			label={ label }
			value={ value }
			onChange={ handleOnChange }
			colors={ paletteColors }
			enableAlpha={ enableAlpha }
			enableStyle={ enableStyle }
			disableCustomColors={ disableCustomColors }
		/>
	);
}
