import { toNumber } from '@ystdb/helper/number';

export const getBorderProperty = ( attributes ) => {
	const { borderSize, borderStyle, customBorderColor } = attributes;

	const borderSizeNum = toNumber( parseInt( borderSize ), undefined );
	const style = borderStyle ?? 'solid';

	if ( ! borderSizeNum ) {
		return undefined;
	}
	if ( ! customBorderColor ) {
		return {
			borderWidth: borderSize,
			borderStyle: style,
		};
	}

	return {
		border: `${ borderSize } ${ style } ${ customBorderColor }`.trim(),
	};
};
