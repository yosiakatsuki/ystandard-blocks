import metadata from './block.json';
import { save } from './save';

export const deprecated = [
	{
		attributes: {
			...metadata.attributes,
		},
		supports: {
			...metadata.supports,
		},
		// @ts-ignore
		migrate( attributes ) {
			return attributes;
		},
		save,
	},
];
