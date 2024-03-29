import { Path, SVG } from '@wordpress/components';

export const AlignTop = () => {
	return (
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
};
