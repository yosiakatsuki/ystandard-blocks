/**
 * WordPress dependencies.
 */
import { getFontSizeClass } from '@wordpress/block-editor';

export function getFontSize(size: string, slug?: string | undefined) {
	return {
		size: !!slug ? undefined : size,
		className: !!slug ? getFontSizeClass(slug) : undefined,
	};
}
