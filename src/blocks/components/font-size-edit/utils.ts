/**
 * WordPress dependencies.
 */
import { getFontSizeClass } from '@wordpress/block-editor';

/**
 * @deprecated
 * @param size
 * @param slug
 */
export function getFontSize( size?: string, slug?: string | undefined ) {
	return {
		size: !! slug ? undefined : size,
		className: !! slug ? getFontSizeClass( slug ) : undefined,
	};
}
