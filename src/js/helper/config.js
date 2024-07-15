// @ts-ignore
import { ystdbConfig } from '@aktk/config/config';

// @ts-ignore
export const getConfig = ( name ) => {
	return ystdbConfig[ name ];
};

// @ts-ignore
export const getComponentConfig = ( name ) => {
	return ystdbConfig.component[ name ];
};

/**
 * ブロックエディター設定取得
 *
 * @param {string} name
 * @param {any}    defaultValue
 * @return {any}
 * @deprecated
 * @see src/blocks/utils/config
 */
export const getBlockEditorConfig = ( name, defaultValue = undefined ) => {
	if ( ! window.ystdb || 'object' !== typeof window.ystdb ) {
		return defaultValue;
	}
	if ( ! window.ystdb.hasOwnProperty( name ) ) {
		return defaultValue;
	}
	return window.ystdb[ name ];
};
