import { _x, __ } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';
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
	horizonAlignment: {
		type: 'string',
		default: undefined,
	},
	reverse: {
		type: 'bool',
		default: false,
	},
};

export const supports = {
	align: ['wide', 'full'],
	className: false,
	lightBlockWrapper: true,
};

export const allowedBlocks = ['ystdb/column'];

export const template = [
	['ystdb/column', {}],
	['ystdb/column', {}],
	['ystdb/column', {}],
];

export const alignmentsControls = {
	top: {
		icon: alignTop,
		title: _x('Vertically Align Top', 'Block vertical alignment setting'),
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
		title: _x('最後のブロックを下に揃える', 'ystandard-blocks'),
	},
};

export const horizonAlignmentsControls = {
	left: {
		icon: <Dashicon icon={'align-left'} />,
		title: __('左寄せ', 'ystandard-blocks'),
	},
	center: {
		icon: <Dashicon icon={'align-center'} />,
		title: __('中央', 'ystandard-blocks'),
	},
	right: {
		icon: <Dashicon icon={'align-right'} />,
		title: __('右寄せ', 'ystandard-blocks'),
	},
	between: {
		icon: <Dashicon icon={'align-wide'} />,
		title: __('両端に揃える', 'ystandard-blocks'),
	},
};
