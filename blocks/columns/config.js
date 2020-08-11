import { _x } from '@wordpress/i18n';
import {
	alignBottom,
	alignCenter,
	alignLastBlockBottom,
	alignTop,
} from './icons';

/**
 * attributes
 */
export const attributes = {
	colPc: {
		type: 'number',
		default: 3,
	},
	colTablet: {
		type: 'number',
		default: 3,
	},
	colMobile: {
		type: 'number',
		default: 1,
	},
	verticalAlignment: {
		type: 'string',
		default: undefined,
	},
};

export const supports = {
	align: [ 'wide', 'full' ],
	className: false,
	lightBlockWrapper: true,
};

export const allowedBlocks = [ 'ystdb/column' ];

export const template = [
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ],
];

export const alignmentsControls = {
	top: {
		icon: alignTop,
		title: _x( 'Vertically Align Top', 'Block vertical alignment setting' ),
	},
	center: {
		icon: alignCenter,
		title: _x(
			'Vertically Align Middle',
			'Block vertical alignment setting'
		),
	},
	bottom: {
		icon: alignBottom,
		title: _x(
			'Vertically Align Bottom',
			'Block vertical alignment setting'
		),
	},
	last: {
		icon: alignLastBlockBottom,
		title: _x( '最後のブロックを下に揃える', 'ystandard-blocks' ),
	},
};
