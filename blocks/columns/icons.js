import { G, Path, SVG } from '@wordpress/components';
import { ystdbConfig } from '../../src/js/config/config';

export const blockIcon = (
	<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<G>
			<Path
				fill={ ystdbConfig.color.iconForeground }
				d="M4,4H20a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4ZM4 6V18H8V6Zm6 0V18h4V6Zm6 0V18h4V6Z"
			/>
		</G>
	</SVG>
);

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

export const alignLastBlockBottom = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
	>
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v1h16v-1H4zM4 21v1h16v-1H4z" />
	</SVG>
);
