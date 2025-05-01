/**
 * WordPress dependencies
 */
import { FontSizePicker as WPFontSizePicker } from '@wordpress/components';
// @ts-expect-error
import type { FontSizePickerProps as WPFontSizePickerProps } from '@wordpress/components';

export default function FontSizePicker( props: WPFontSizePickerProps ) {
	// @ts-ignore
	return (
		<WPFontSizePicker
			{ ...props }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	);
}
