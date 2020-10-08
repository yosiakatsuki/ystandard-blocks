import { __ } from '@wordpress/i18n';
import getNum from '../../src/js/util/_getNum';
import { margin } from './attributes/margin';
import { padding } from './attributes/padding';
import { overlay } from './attributes/overlay';
import { background } from './attributes/background';
import { text } from './attributes/text';
import { divider } from './attributes/divider';
import { innerWidth } from './attributes/inner-width';
import { screenHeight } from './attributes/screen-height';
import { animation } from './attributes/animation';
import { wrapper } from './attributes/wrapper';

/**
 * attributes
 */
export const attributes = {
	...margin,
	...padding,
	...overlay,
	...background,
	...text,
	...divider,
	...innerWidth,
	...innerWidth,
	...screenHeight,
	...animation,
	...wrapper,
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
 * 背景パターン画像
 */
export const backgroundPatternOptions = [
	{
		name: 'sprinkle-dark',
		image: 'sprinkle-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'sprinkle-light',
		image: 'sprinkle-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 50,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-up-down-dark',
		image: 'meteor-up-down-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-up-down-light',
		image: 'meteor-up-down-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 20,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-left-right-dark',
		image: 'meteor-left-right-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-left-right-light',
		image: 'meteor-left-right-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 20,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-topleft-bottomright-dark',
		image: 'meteor-topleft-bottomright-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-topleft-bottomright-light',
		image: 'meteor-topleft-bottomright-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 20,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-topright-bottomleft-dark',
		image: 'meteor-topright-bottomleft-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'meteor-topright-bottomleft-light',
		image: 'meteor-topright-bottomleft-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 20,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-topleft-dark',
		image: 'curve-line-topleft-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-topleft-light',
		image: 'curve-line-topleft-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 30,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-topright-dark',
		image: 'curve-line-topright-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-topright-light',
		image: 'curve-line-topright-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 30,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-bottomleft-dark',
		image: 'curve-line-bottomleft-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-bottomleft-light',
		image: 'curve-line-bottomleft-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 30,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-bottomright-dark',
		image: 'curve-line-bottomright-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'curve-line-bottomright-light',
		image: 'curve-line-bottomright-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 30,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'circuit-board-dark',
		image: 'circuit-board-dark.svg',
		useDarkPreview: false,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: false,
			backgroundImageOnOverlayOpacity: 80,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
	{
		name: 'circuit-board-light',
		image: 'circuit-board-light.svg',
		useDarkPreview: true,
		value: {
			backgroundType: 'image',
			backgroundImageID: -1,
			focalPoint: undefined,
			backgroundImageParallax: false,
			backgroundImageSize: 'cover',
			backgroundImageRepeat: 'no-repeat',
			backgroundImageOnOverlay: true,
			backgroundImageOnOverlayOpacity: 15,
		},
		style: {
			backgroundPosition: '50% 50%',
			backgroundSize: '360px 140px',
			backgroundRepeat: 'repeat',
		},
	},
];

export const PATTERN_IMAGE_LIGHT_COLOR = '255, 255, 255, 0.8';
export const PATTERN_IMAGE_DARK_COLOR = '19, 19, 19, 0.6';

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
