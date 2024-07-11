import type {
	Border,
	Borders,
} from '@aktk/blocks/components/border-box-control/index';
import { isObject } from 'lodash';

export function getBorderStyles(
	value: Border | Borders | undefined,
	borderStyle: string = 'solid'
) {
	if ( ! value || ! isObject( value ) ) {
		return;
	}
	if ( isBorder( value ) ) {
		return getCSSBorderStyle( value as Border, borderStyle );
	}
	const borders = value as Borders;
	return {
		...getCSSBorderStyle( borders?.top as Border, borderStyle, 'top' ),
		...getCSSBorderStyle( borders?.right as Border, borderStyle, 'right' ),
		...getCSSBorderStyle(
			borders?.bottom as Border,
			borderStyle,
			'bottom'
		),
		...getCSSBorderStyle( borders?.left as Border, borderStyle, 'left' ),
	};
}

function isBorder( value: Border | Borders ) {
	return (
		value.hasOwnProperty( 'width' ) ||
		value.hasOwnProperty( 'style' ) ||
		value.hasOwnProperty( 'color' )
	);
}

function getCSSBorderStyle(
	value: Border,
	borderStyle: string = 'solid',
	position: string = ''
) {
	const _position = position ? `-${ position }` : '';
	const _style = value?.style || borderStyle;
	const _color = value?.color || 'transparent';
	const _width = value?.width || 0;

	if ( ! value ) {
		return;
	}

	return {
		[ `border${ _position }` ]: `${ _width } ${ _style } ${ _color }`,
	};
}
