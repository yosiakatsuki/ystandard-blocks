import { __, _x } from '@wordpress/i18n';

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
				label: __( '小', 'ystandard-blocks' ),
			},
			{
				value: '',
				label: __( '中', 'ystandard-blocks' ),
			},
			{
				value: 'is-large',
				label: __( '大', 'ystandard-blocks' ),
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
				label: __( '小', 'ystandard-blocks' ),
			},
			{
				value: '',
				label: __( '中', 'ystandard-blocks' ),
			},
			{
				value: 'is-large',
				label: __( '大', 'ystandard-blocks' ),
			},
		],
	},
	component: {
		defaultAvatar: {
			url: 'https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp',
		},
		fontWeight: [
			{
				value: '',
				label: _x( '指定無し', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: 'normal',
				label: _x( '通常(normal)', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: 'bold',
				label: _x( '太字(bold)', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '100',
				label: _x( '100', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '200',
				label: _x( '200', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '300',
				label: _x( '300', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '400',
				label: _x( '400', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '500',
				label: _x( '500', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '600',
				label: _x( '600', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '700',
				label: _x( '700', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '800',
				label: _x( '800', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: '900',
				label: _x( '900', 'component-config', 'ystandard-blocks' ),
			},
		],
		fontUnit: [
			{ value: 'px', label: 'px' },
			{ value: 'em', label: 'em' },
			{ value: 'rem', label: 'rem' },
			{ value: '%', label: '%' },
		],
		fontStyle: [
			{
				value: '',
				label: _x( '指定無し', 'component-config', 'ystandard-blocks' ),
			},
			{
				value: 'italic',
				label: _x(
					'イタリック体',
					'component-config',
					'ystandard-blocks'
				),
			},
		],
	},
};
