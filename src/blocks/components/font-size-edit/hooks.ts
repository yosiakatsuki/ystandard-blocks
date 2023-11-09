/**
 * WordPress dependencies.
 */
import {
	// @ts-expect-error
	useSetting,
} from '@wordpress/block-editor';

export function useFontSizes() {
	return useSetting('typography.fontSizes');
}
