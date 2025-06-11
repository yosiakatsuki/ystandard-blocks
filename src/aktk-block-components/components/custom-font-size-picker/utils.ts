/**
 * WordPress dependencies
 */
import type { FontSize } from '@wordpress/components/src/font-size-picker/types';
import { getFontSizeClass } from '@wordpress/block-editor';

export function getCustomFontSizeClass( fontSize: FontSize | undefined ) {
	return getFontSizeClass( fontSize?.slug || '' );
}

export function getCustomFontSizeStyle(
	fontSize?: FontSize,
	customFontSize?: string
) {
	if ( fontSize?.slug ) {
		return undefined;
	}
	return customFontSize;
}
