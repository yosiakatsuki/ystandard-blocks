import { Path, SVG } from '@wordpress/components';

export const AlignBottom = () => {
	return (
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
};
