import { __ } from '@wordpress/i18n';

/**
 * attributes
 */
export const attributes = {
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	shadow: {
		type: 'bool',
	},
	paddingType: {
		type: 'string',
		default: '',
	},
};

export const supports = {
	align: false,
	className: false,
};

export const paddingTypes = [
	{
		value: '',
		label: __( '内側余白なし' ),
	},
	{
		value: 'is-padding-small',
		label: __( '小' ),
	},
	{
		value: 'is-padding-large',
		label: __( '大' ),
	},
];
