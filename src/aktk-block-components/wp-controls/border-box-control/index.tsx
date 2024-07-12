/**
 * Aktk Dependencies
 */
import { __experimentalBorderBoxControl as WPBorderBoxControl } from '@wordpress/components';
import useThemeColors from '@aktk/block-components/hooks/useThemeColors';

export interface BorderBoxControlProps {
	onChange: ( newValue: object ) => void;
	value?: object;
	label?: string;
	colors?: object;
	disableCustomColors?: boolean;
	enableAlpha?: boolean;
	enableStyle?: boolean;
}

export default function BorderBoxControl( props: BorderBoxControlProps ) {
	const {
		onChange,
		value,
		label = '',
		colors,
		disableCustomColors = false,
		enableAlpha = false,
		enableStyle = true,
	} = props;

	const themeColors = useThemeColors();
	const paletteColors = colors || themeColors;

	return (
		<>
			{ /* @ts-ignore */ }
			<WPBorderBoxControl
				onChange={ onChange }
				value={ value }
				label={ label }
				colors={ paletteColors }
				disableCustomColors={ disableCustomColors }
				enableAlpha={ enableAlpha }
				enableStyle={ enableStyle }
			/>
		</>
	);
}
