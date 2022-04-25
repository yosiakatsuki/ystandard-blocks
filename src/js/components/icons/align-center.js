import { Path, SVG } from '@wordpress/components';

export const AlignCenter = () => {
	return (
		<SVG
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
		>
			<Path fill="none" d="M0 0h24v24H0V0z"/>
			<Path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/>
		</SVG>
	);
};
