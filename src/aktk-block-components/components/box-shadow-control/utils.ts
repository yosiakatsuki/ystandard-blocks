import type { BoxShadowValue } from './types';
import { hex2rgb } from '@aktk/block-components/utils/color';

/**
 * BoxShadowValueからCSSスタイルを生成
 */
export function getBoxShadowStyle( value?: BoxShadowValue ) {
	if (
		! value?.offsetX ||
		! value?.offsetY ||
		! value?.blurRadius
	) {
		return undefined;
	}

	const color = hex2rgb( value.color ?? '#000' );
	const opacity = value.opacity ?? 0.7;

	return {
		boxShadow: `${ value.offsetX } ${ value.offsetY } ${ value.blurRadius } rgba(${ color[ 0 ] },${ color[ 1 ] },${ color[ 2 ] },${ opacity })`,
	};
}