import { __ } from '@wordpress/i18n';

/**
 * attributes
 */
export const attributes = {
	wrapperTag: {
		type: 'string',
		default: 'div',
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	marginTop: {
		type: 'number',
		default: 2,
	},
	marginBottom: {
		type: 'number',
		default: 2,
	},
	paddingTop: {
		type: 'number',
		default: 3,
	},
	paddingBottom: {
		type: 'number',
		default: 3,
	},
	paddingLeft: {
		type: 'number',
		default: 0,
	},
	paddingRight: {
		type: 'number',
		default: 0,
	},
	innerCustomWidth: {
		type: 'integer',
		default: 960,
	},
	backgroundImageURL: {
		type: 'string',
	},
	backgroundImageAlt: {
		type: 'string',
	},
	backgroundImageID: {
		type: 'integer',
		default: 0,
	},
	backgroundImageOpacity: {
		type: 'integer',
		default: 50,
	},
	backgroundSkew: {
		type: 'number',
		default: 0,
	},
	backgroundSkewWidth: {
		type: 'number',
		default: 90,
	},
};

export const supports = {
	align: [ 'wide', 'full' ],
	anchor: true,
	className: false,
};

/**
 * マージン種類
 */
export const marginType = {
	margin: [
		{
			value: 'normal',
			label: __( 'リセット' ),
			num: 2,
		},
		{
			value: 'wide',
			label: __( '大' ),
			num: 4,
		},
		{
			value: 'narrow',
			label: __( '小' ),
			num: 1,
		},
		{
			value: 'none',
			label: __( 'なし' ),
			num: 0,
		},
	],
	padding: [
		{
			value: 'normal',
			label: __( 'リセット' ),
			num: 3,
		},
		{
			value: 'wide',
			label: __( '大' ),
			num: 5,
		},
		{
			value: 'narrow',
			label: __( '小' ),
			num: 1,
		},
		{
			value: 'none',
			label: __( 'なし' ),
			num: 0,
		},
	],
	innerWidth: [
		{
			value: 'wide',
			label: __( 'ワイド' ),
			num: 1232,
		},
		{
			value: 'narrow',
			label: __( 'スリム' ),
			num: 560,
		},
		{
			value: 'none',
			label: __( 'なし' ),
			num: 0,
		},
	],
};
