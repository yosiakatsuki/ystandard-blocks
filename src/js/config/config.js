import { __ } from '@wordpress/i18n';

/**
 * 設定
 */
export const ystdbConfig = {
	category: {
		common: 'ystdb',
		beta: 'ystdb_beta',
		deprecated: 'ystdb_deprecated',
	},
	color: {
		iconForeground: '#4190be',
		iconDeprecatedForeground: '#be4141',
	},
	button: {
		newTabRel: 'noreferrer noopener',
		borderRadiusMin: 0,
		borderRadiusMax: 50,
		borderRadiusInitialPosition: 4,
		paddingTypes: [
			{
				value: 'is-small',
				label: __( '小' ),
			},
			{
				value: '',
				label: __( '中' ),
			},
			{
				value: 'is-large',
				label: __( '大' ),
			},
		],
		animationTypes: [
			{ label: __( 'なし', 'ystandard-blocks' ), value: 'none' },
			{ label: __( 'キラキラ', 'ystandard-blocks' ), value: 'shine' },
		],
	},
	icon: {
		size: [
			{
				value: 'is-small',
				label: __( '小' ),
			},
			{
				value: '',
				label: __( '中' ),
			},
			{
				value: 'is-large',
				label: __( '大' ),
			},
		],
	},
};
