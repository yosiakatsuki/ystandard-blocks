import { __ } from '@wordpress/i18n';

export function addDefaultSelect( options ) {
	const defaultSelect = [
		{
			value: '',
			label: __( '--選択--', 'ystandard-toolbox' ),
		},
	];
	return ! options ? defaultSelect : [ ...defaultSelect, ...options ];
}
