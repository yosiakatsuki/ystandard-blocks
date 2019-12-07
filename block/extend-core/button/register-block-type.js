import deprecated from './_deprecated';
import {
	allowedBlocks,
	AttributesCoreBtn,
} from './config';
import { addFilter } from '@wordpress/hooks';
/**
 * Attribute追加
 *
 * @param settings
 */
function addCoreBtnAttribute( settings ) {
	if ( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ) {
		/**
		 * attributes
		 */
		settings.attributes = Object.assign( settings.attributes, AttributesCoreBtn );
		/**
		 * deprecated
		 */
		settings.deprecated = settings.deprecated.concat( deprecated );
	}
	return settings;
}

/**
 * 設定追加
 */
addFilter(
	'blocks.registerBlockType',
	'ystdb/ex-btn-attr',
	addCoreBtnAttribute
);
