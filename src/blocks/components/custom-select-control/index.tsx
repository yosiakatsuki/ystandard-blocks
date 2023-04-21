import type { CSSProperties } from 'react';
/**
 * WordPress
 */
import { CustomSelectControl as WPCustomSelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export interface CustomSelectControlOption {
	key: string;
	name: string;
	style?: CSSProperties | undefined;
	className?: string | undefined;
}

export interface CustomSelectControlProps {
	value: string;
	options: CustomSelectControlOption[];
	onChange: (value: string) => void;
	label?: string | undefined;
	useDefaultItem?: boolean | undefined;
	className?: string | undefined;
}

const DEFAULT_ITEM = [
	{
		key: '',
		name: __('--選択--', 'ystandard-toolbox'),
		style: { fontSize: '1em' },
	},
];

export default function CustomSelectControl({
	value,
	options,
	onChange,
	label = '',
	useDefaultItem = true,
	...props
}: CustomSelectControlProps) {
	// @ts-ignore
	const handleOnChange = ({ selectedItem }) => {
		onChange(selectedItem.key);
	};
	// @ts-ignore
	const currentSelection = options.find((option) => {
		return option.key === value;
	});
	const _options = useDefaultItem ? [...DEFAULT_ITEM, ...options] : options;
	return (
		<WPCustomSelectControl
			label={label}
			options={_options}
			value={currentSelection}
			// @ts-ignore
			onChange={handleOnChange}
			{...props}
		/>
	);
}
