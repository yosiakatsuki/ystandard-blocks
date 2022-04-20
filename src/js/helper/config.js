import { ystdbConfig } from '@ystdb/config/config';

export const getConfig = ( name ) => {
	return ystdbConfig[ name ];
};

export const getComponentConfig = ( name ) => {
	return ystdbConfig.component[ name ];
};

export const getBlockEditorConfig = ( name, defaultValue = undefined ) => {
	if ( ! window.ystdb || 'object' !== typeof window.ystdb ) {
		return defaultValue;
	}
	if ( ! window.ystdb.hasOwnProperty( name ) ) {
		return defaultValue;
	}
	return window.ystdb[ name ];
};
