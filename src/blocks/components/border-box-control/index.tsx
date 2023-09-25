/**
 * WordPress dependencies.
 */
import { __experimentalBorderBoxControl as WPBorderBoxControl } from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import { useColorPalette } from '@aktk/blocks/hooks';

export type Border = {
	color?: string;
	style?: string;
	width?: string;
};

export type Borders = {
	top?: Border;
	right?: Border;
	bottom?: Border;
	left?: Border;
};

export interface BorderBoxControlProps {
	label?: string;
	onChange?: (value: Border | Borders | undefined) => void;
	value?: Border | Borders;
	colors?: { name: string; color: string }[];
}

import './style-editor.scss';

export function BorderBoxControl(props: BorderBoxControlProps) {
	const { colors = useColorPalette(), label, onChange, value } = props;

	return (
		<WPBorderBoxControl
			label={label}
			value={value}
			// @ts-expect-error
			onChange={onChange}
			colors={colors}
		/>
	);
}

export { getBorderStyles } from './utils';
