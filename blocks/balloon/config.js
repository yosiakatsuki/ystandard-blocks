import { __, _x } from '@wordpress/i18n';
import { Path, SVG } from '@wordpress/components';

export const defaultAvatar =
	'https://www.gravatar.com/avatar/000000000000000000000000000000?s=128&r=g&d=mp';

/**
 * attributes
 */
export const attributes = {
	avatarName: {
		type: 'string',
		source: 'html',
		selector: '.ystdb-balloon__name',
	},
	avatarNameColor: {
		type: 'string',
	},
	customAvatarNameColor: {
		type: 'string',
	},
	avatarURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ystdb-balloon__avatar-image',
		attribute: 'src',
		default: defaultAvatar,
	},
	avatarAlt: {
		type: 'string',
		source: 'attribute',
		selector: '.ystdb-balloon__avatar-image',
		attribute: 'alt',
	},
	avatarID: {
		type: 'integer',
		default: 0,
	},
	avatarSize: {
		type: 'string',
		default: 'large',
	},
	avatarBorderColor: {
		type: 'string',
	},
	customAvatarBorderColor: {
		type: 'string',
	},
	avatarBorderWidth: {
		type: 'integer',
		default: 0,
	},
	avatarBorderRadius: {
		type: 'integer',
	},
	text: {
		type: 'string',
		source: 'html',
		selector: '.ystdb-balloon__text',
	},
	balloonPosition: {
		type: 'string',
		default: 'right',
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	balloonBorderColor: {
		type: 'string',
	},
	customBalloonBorderColor: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	fontSize: {
		type: 'string',
	},
	customFontSize: {
		type: 'string',
	},
	balloonType: {
		type: 'string',
		default: 'serif',
	},
	verticalAlign: {
		type: 'string',
		default: 'top',
	},
};

export const supports = {
	align: false,
	className: false,
};

export const balloonTypes = [
	{
		label: __('会話', 'ystandard-blocks'),
		value: 'serif',
	},
	{
		label: __('考え中', 'ystandard-blocks'),
		value: 'think',
	},
];

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
