import { CustomFontSize } from './types';
import { isEmpty } from '@aktk/block-components/utils/object';

export function sanitizeFontSize(
	fontSize: CustomFontSize
): CustomFontSize | undefined {
	// fontSize.fontSize が存在しない場合、fontSize を削除
	if ( fontSize?.fontSize ) {
		const size = fontSize.fontSize?.size;
		const slug = fontSize.fontSize?.slug;
		const className = fontSize.fontSize?.className;

		if ( ! size || ! slug || ! className ) {
			// fontSize.fontSize を削除
			delete fontSize.fontSize;
		}
	} else {
		delete fontSize.fontSize;
	}
	// desktop が存在しない場合、desktop を削除
	if ( ! fontSize?.desktop ) {
		delete fontSize.desktop;
	}
	// tablet が存在しない場合、tablet を削除
	if ( ! fontSize?.tablet ) {
		delete fontSize.tablet;
	}
	// mobile が存在しない場合、mobile を削除
	if ( ! fontSize?.mobile ) {
		delete fontSize.mobile;
	}

	return isEmpty( fontSize ) ? undefined : fontSize;
}
