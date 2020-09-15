import { __ } from '@wordpress/i18n';
import getNum from '../../src/js/util/_getNum';

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
		default: 0,
	},
	marginBottom: {
		type: 'number',
		default: 0,
	},
	paddingTop: {
		type: 'number',
		default: 80,
	},
	paddingBottom: {
		type: 'number',
		default: 80,
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
		default: 0,
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
		default: 100,
	},
	backgroundImageParallax: {
		type: 'bool',
		default: false,
	},
	screenHeightMode: {
		type: 'bool',
		default: false,
	},
	sectionMinHeight: {
		type: 'number',
		default: 0,
	},
	dividerTypeTop: {
		type: 'string',
		default: 'skew',
	},
	dividerLevelTop: {
		type: 'number',
		default: 0,
	},
	dividerColorTop: {
		type: 'string',
	},
	customDividerColorTop: {
		type: 'string',
	},
	dividerTypeBottom: {
		type: 'string',
		default: 'skew',
	},
	dividerLevelBottom: {
		type: 'number',
		default: 0,
	},
	dividerColorBottom: {
		type: 'string',
	},
	customDividerColorBottom: {
		type: 'string',
	},
	animationType: {
		type: 'string',
		default: 'none',
	},
	animationSpeed: {
		type: 'number',
		default: 2,
	},
};

export const supports = {
	align: ['wide', 'full'],
	anchor: true,
	className: false,
	lightBlockWrapper: true,
};

/**
 * マージン種類
 */
export const marginType = {
	margin: [
		{
			value: 'normal',
			label: __('リセット', 'ystandard-blocks'),
			num: 0,
		},
		{
			value: 'wide',
			label: __('大', 'ystandard-blocks'),
			num: 80,
		},
		{
			value: 'narrow',
			label: __('小', 'ystandard-blocks'),
			num: 40,
		},
		{
			value: 'none',
			label: __('なし', 'ystandard-blocks'),
			num: 0,
		},
	],
	padding: [
		{
			value: 'normal',
			label: __('リセット', 'ystandard-blocks'),
			num: 80,
		},
		{
			value: 'wide',
			label: __('大', 'ystandard-blocks'),
			num: 120,
		},
		{
			value: 'narrow',
			label: __('小', 'ystandard-blocks'),
			num: 40,
		},
		{
			value: 'none',
			label: __('なし', 'ystandard-blocks'),
			num: 0,
		},
	],
	innerWidth: [
		{
			value: 'wide',
			label: __('ワイド', 'ystandard-blocks'),
			num: 800,
		},
		{
			value: 'narrow',
			label: __('スリム', 'ystandard-blocks'),
			num: 560,
		},
		{
			value: 'none',
			label: __('なし', 'ystandard-blocks'),
			num: 0,
		},
	],
};
/**
 * HTMLタグ
 */
export const wrapperTagNames = [
	{
		tag: 'div',
	},
	{
		tag: 'section',
	},
	{
		tag: 'aside',
	},
];

export const dividerTypes = [
	{
		value: 'skew',
		label: __('斜め', 'ystandard-blocks'),
	},
	{
		value: 'wave',
		label: __('波線', 'ystandard-blocks'),
	},
	{
		value: 'triangle',
		label: __('三角形', 'ystandard-blocks'),
	},
];

export const animationTypes = [
	{ label: 'なし', value: 'none' },
	{ label: 'フェードイン', value: 'fadein' },
	{ label: '下からフェードイン', value: 'fadein-up' },
	{ label: '縮小しながらフェードイン', value: 'fadein-shrink' },
];

export const dividerPath = (type, level) => {
	let level1 = level;
	let level2 = level;
	let level3 = level;
	/**
	 * 波線
	 */
	level1 =
		0 > level
			? getNum(`${90 + level / 2}`, 50, 90)
			: getNum(`${90 - level / 2}`, 50, 90);
	level2 = (level * 3) / 4;
	if ('wave' === type) {
		return `m0,${level1} q20,${level2} 40,0 t50,0 t50,0 t50,0 t50,0 V100 L0,100 z`;
	}
	/**
	 * 三角形
	 */
	level1 = 10 + Math.abs(level) * 0.4;
	level2 = 10 + Math.abs(level) * 0.9;
	level3 = 50 - level1;
	if ('triangle' === type) {
		return `m${level3},100 l${level1},-${level2} l${level1},${level2} z`;
	}
	/**
	 * 斜め
	 */
	level1 = 0 > level ? 100 : 0;
	level2 = 0 > level ? 100 + level : 100 - level;
	return `m${level1},${level2} L100,100 L0,100 z`;
};
