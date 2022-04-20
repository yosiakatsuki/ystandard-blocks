import { __ } from '@wordpress/i18n';
import getNum from '../../src/js/util/_getNum';

/**
 * attributes
 */
export { default as attributes } from './attributes/attributes';

export const supports = {
	align: [ 'wide', 'full' ],
	anchor: true,
	className: false,
	lightBlockWrapper: true,
};

export const BACKGROUND_TYPE_IMAGE = 'image';
export const BACKGROUND_TYPE_VIDEO = 'video';

/**
 * マージン種類
 */
export const marginType = {
	margin: [
		{
			value: 'normal',
			label: __( 'リセット', 'ystandard-blocks' ),
			num: 0,
		},
		{
			value: 'wide',
			label: __( '大', 'ystandard-blocks' ),
			num: 80,
		},
		{
			value: 'narrow',
			label: __( '小', 'ystandard-blocks' ),
			num: 40,
		},
		{
			value: 'none',
			label: __( 'なし', 'ystandard-blocks' ),
			num: 0,
		},
	],
	padding: [
		{
			value: 'normal',
			label: __( 'リセット', 'ystandard-blocks' ),
			num: 80,
		},
		{
			value: 'wide',
			label: __( '大', 'ystandard-blocks' ),
			num: 120,
		},
		{
			value: 'narrow',
			label: __( '小', 'ystandard-blocks' ),
			num: 40,
		},
		{
			value: 'none',
			label: __( 'なし', 'ystandard-blocks' ),
			num: 0,
		},
	],
	innerWidth: [
		{
			value: 'wide',
			label: __( 'ワイド', 'ystandard-blocks' ),
			num: 800,
		},
		{
			value: 'narrow',
			label: __( 'スリム', 'ystandard-blocks' ),
			num: 560,
		},
		{
			value: 'none',
			label: __( 'なし', 'ystandard-blocks' ),
			num: 0,
		},
	],
};
/**
 * オーバーレイサイズ・位置
 */
export const overlaySizeUnitOption = [
	{ value: 'px', label: __( 'px', 'ystandard-blocks' ) },
	{ value: '%', label: __( '%', 'ystandard-blocks' ) },
];
/**
 * オーバーレイ位置-縦
 */
export const overlayPositionXOption = [
	{ value: 'top', label: __( '上', 'ystandard-blocks' ) },
	{ value: 'bottom', label: __( '下', 'ystandard-blocks' ) },
];
/**
 * オーバーレイ位置-横
 */
export const overlayPositionYOption = [
	{ value: 'left', label: __( '左', 'ystandard-blocks' ) },
	{ value: 'right', label: __( '右', 'ystandard-blocks' ) },
];
/**
 * 背景画像サイズ
 */
export const backgroundImageSizeOption = [
	{ value: 'cover', label: __( 'cover', 'ystandard-blocks' ) },
	{ value: 'contain', label: __( 'contain', 'ystandard-blocks' ) },
	{ value: 'custom', label: __( 'カスタム', 'ystandard-blocks' ) },
];
/**
 * 背景画像サイズ単位
 */
export const backgroundImageSizeUnitOption = [
	{ value: 'px', label: __( 'px', 'ystandard-blocks' ) },
	{ value: 'em', label: __( 'em', 'ystandard-blocks' ) },
	{ value: 'rem', label: __( 'rem', 'ystandard-blocks' ) },
	{ value: '%', label: __( '%', 'ystandard-blocks' ) },
	{ value: 'vw', label: __( 'vw', 'ystandard-blocks' ) },
	{ value: 'vh', label: __( 'vh', 'ystandard-blocks' ) },
];

/**
 * 背景画像リピート
 */
export const backgroundImageRepeatOption = [
	{ value: 'no-repeat', label: __( 'なし', 'ystandard-blocks' ) },
	{ value: 'repeat', label: __( 'あり', 'ystandard-blocks' ) },
	{ value: 'repeat-x', label: __( 'あり（横）', 'ystandard-blocks' ) },
	{ value: 'repeat-y', label: __( 'あり（縦）', 'ystandard-blocks' ) },
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
		label: __( '斜め', 'ystandard-blocks' ),
	},
	{
		value: 'wave',
		label: __( '波線', 'ystandard-blocks' ),
	},
	{
		value: 'triangle',
		label: __( '三角形', 'ystandard-blocks' ),
	},
];

export const animationTypes = [
	{ label: 'なし', value: 'none' },
	{ label: 'フェードイン', value: 'fadein' },
	{ label: '上からフェードイン', value: 'fadein-down' },
	{ label: '下からフェードイン', value: 'fadein-up' },
	{ label: '左からフェードイン', value: 'fadein-left' },
	{ label: '右からフェードイン', value: 'fadein-right' },
	{ label: '縮小しながらフェードイン', value: 'fadein-shrink' },
	{ label: '拡大しながらフェードイン', value: 'fadein-grow' },
];

export const dividerPath = ( type, level ) => {
	let level1 = level;
	let level2 = level;
	let level3 = level;
	/**
	 * 波線
	 */
	level1 =
		0 > level
			? getNum( `${ 90 + level / 2 }`, 50, 90 )
			: getNum( `${ 90 - level / 2 }`, 50, 90 );
	level2 = ( level * 3 ) / 4;
	if ( 'wave' === type ) {
		return `m0,${ level1 } q20,${ level2 } 40,0 t50,0 t50,0 t50,0 t50,0 V100 L0,100 z`;
	}
	/**
	 * 三角形
	 */
	level1 = 10 + Math.abs( level ) * 0.4;
	level2 = 10 + Math.abs( level ) * 0.9;
	level3 = 50 - level1;
	if ( 'triangle' === type ) {
		return `m${ level3 },100 l${ level1 },-${ level2 } l${ level1 },${ level2 } z`;
	}
	/**
	 * 斜め
	 */
	level1 = 0 > level ? 100 : 0;
	level2 = 0 > level ? 100 + level : 100 - level;
	return `m${ level1 },${ level2 } L100,100 L0,100 z`;
};
