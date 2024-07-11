import { __, _x } from '@wordpress/i18n';
import { Path, SVG } from '@wordpress/components';

/**
 * @deprecated
 */
export const balloonTypes = [
	{
		label: __('会話', 'ystandard-blocks'),
		value: 'serif',
	},
	{
		label: __('会話(枠線)', 'ystandard-blocks'),
		value: 'serif-border',
	},
	{
		label: __('考え中', 'ystandard-blocks'),
		value: 'think',
	},
];

/**
 * @deprecated
 */
export const balloonPositions = [
	{
		label: __('右', 'ystandard-blocks'),
		value: 'right',
	},
	{
		label: __('左', 'ystandard-blocks'),
		value: 'left',
	},
];

/**
 * @deprecated
 */
export const avatarSizes = [
	{
		label: __('小', 'ystandard-blocks'),
		value: 'small',
	},
	{
		label: __('大', 'ystandard-blocks'),
		value: 'large',
	},
];

/**
 * @deprecated
 */
export const alignBottom = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
	>
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
	</SVG>
);

/**
 * @deprecated
 */
export const alignCenter = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
	>
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" />
	</SVG>
);

/**
 * @deprecated
 */
export const alignTop = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
	>
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
	</SVG>
);

/**
 * @deprecated
 */
export const alignmentsControls = {
	top: {
		icon: alignTop,
		title: _x('上揃え', 'ystandard-blocks'),
	},
	center: {
		icon: alignCenter,
		title: _x('中央揃え', 'ystandard-blocks'),
	},
	bottom: {
		icon: alignBottom,
		title: _x('下揃え', 'ystandard-blocks'),
	},
};
