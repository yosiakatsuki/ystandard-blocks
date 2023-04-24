import { __ } from '@wordpress/i18n';

/**
 * @param options
 * @deprecated
 */
export function addDefaultSelect(options) {
	const defaultSelect = [
		{
			value: '',
			label: __('--選択--', 'ystandard-toolbox'),
		},
	];
	return !options ? defaultSelect : [...defaultSelect, ...options];
}

/**
 * @param options
 * @deprecated
 */
export function addDefaultCustomSelect(options) {
	const defaultSelect = [
		{
			key: '',
			name: __('--選択--', 'ystandard-toolbox'),
			style: { fontSize: '1em' },
		},
	];
	return !options ? defaultSelect : [...defaultSelect, ...options];
}
