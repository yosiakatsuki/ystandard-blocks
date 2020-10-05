import { __ } from '@wordpress/i18n';
import getNum from '../../src/js/util/_getNum';

/**
 * attributes
 */
export const attributes = {
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
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	gradient: {
		type: 'string',
	},
	customGradient: {
		type: 'string',
	},
	useCustomOverlaySize: {
		type: 'bool',
		default: false,
	},
	overlaySizeX: {
		type: 'string',
		default: '100',
	},
	overlaySizeUnitX: {
		type: 'string',
		default: '%',
	},
	overlaySizeY: {
		type: 'string',
		default: '100',
	},
	overlaySizeUnitY: {
		type: 'string',
		default: '%',
	},
	overlayPositionX: {
		type: 'string',
		default: 'top',
	},
	overlayPositionValueX: {
		type: 'string',
		default: '0',
	},
	overlayPositionUnitX: {
		type: 'string',
		default: '%',
	},
	overlayPositionY: {
		type: 'string',
		default: 'left',
	},
	overlayPositionValueY: {
		type: 'string',
		default: '0',
	},
	overlayPositionUnitY: {
		type: 'string',
		default: '%',
	},
	backgroundType: {
		type: 'string',
		default: 'image',
	},
	focalPoint: {
		type: 'object',
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
	backgroundImageSize: {
		type: 'string',
	},
	backgroundImageSizeX: {
		type: 'string',
	},
	backgroundImageSizeUnitX: {
		type: 'string',
		default: 'px',
	},
	backgroundImageSizeY: {
		type: 'string',
	},
	backgroundImageSizeUnitY: {
		type: 'string',
		default: 'px',
	},
	backgroundImageRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
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
	innerCustomWidth: {
		type: 'integer',
		default: 0,
	},
	screenHeightMode: {
		type: 'bool',
		default: false,
	},
	sectionMinHeight: {
		type: 'number',
		default: 0,
	},
	animationType: {
		type: 'string',
		default: 'none',
	},
	animationSpeed: {
		type: 'number',
		default: 2,
	},
	wrapperTag: {
		type: 'string',
		default: 'div',
	},
};

export const supports = {
	align: ['wide', 'full'],
	anchor: true,
	className: false,
	lightBlockWrapper: true,
};

export const IMAGE_BACKGROUND_TYPE = 'image';
export const VIDEO_BACKGROUND_TYPE = 'video';

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
 * オーバーレイサイズ・位置
 */
export const overlaySizeUnitOption = [
	{ value: 'px', label: __('px', 'ystandard-blocks') },
	{ value: '%', label: __('%', 'ystandard-blocks') },
];
/**
 * オーバーレイ位置-縦
 */
export const overlayPositionXOption = [
	{ value: 'top', label: __('上', 'ystandard-blocks') },
	{ value: 'bottom', label: __('下', 'ystandard-blocks') },
];
/**
 * オーバーレイ位置-横
 */
export const overlayPositionYOption = [
	{ value: 'left', label: __('左', 'ystandard-blocks') },
	{ value: 'right', label: __('右', 'ystandard-blocks') },
];
/**
 * 背景画像サイズ
 */
export const backgroundImageSizeOption = [
	{ value: 'cover', label: __('cover', 'ystandard-blocks') },
	{ value: 'contain', label: __('contain', 'ystandard-blocks') },
	{ value: 'custom', label: __('カスタム', 'ystandard-blocks') },
];
/**
 * 背景画像サイズ単位
 */
export const backgroundImageSizeUnitOption = [
	{ value: 'px', label: __('px', 'ystandard-blocks') },
	{ value: 'em', label: __('em', 'ystandard-blocks') },
	{ value: 'rem', label: __('rem', 'ystandard-blocks') },
	{ value: '%', label: __('%', 'ystandard-blocks') },
	{ value: 'vw', label: __('vw', 'ystandard-blocks') },
	{ value: 'vh', label: __('vh', 'ystandard-blocks') },
];

/**
 * 背景画像リピート
 */
export const backgroundImageRepeatOption = [
	{ value: 'no-repeat', label: __('なし', 'ystandard-blocks') },
	{ value: 'repeat', label: __('あり', 'ystandard-blocks') },
	{ value: 'repeat-x', label: __('あり（横）', 'ystandard-blocks') },
	{ value: 'repeat-y', label: __('あり（縦）', 'ystandard-blocks') },
];
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
