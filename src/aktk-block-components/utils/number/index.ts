export function toNumber(
	value: string | number,
	option:
		| undefined
		| { min?: number; max?: number; default?: number } = undefined
) {
	const number = Number( value );
	const { min, max, default: defaultValue } = option || {};

	if ( isNaN( number ) ) {
		return defaultValue;
	}
	if ( min && number < min ) {
		return min;
	}
	if ( max && number > max ) {
		return max;
	}

	return number;
}

export function parseIntWithUnit(
	value: string | number | undefined | null,
	defaultNumber: number | undefined = undefined
) {
	if ( undefined === value || null === value ) {
		return defaultNumber;
	}
	const number: number = parseInt( `${ value }` );
	if ( isNaN( number ) ) {
		return defaultNumber;
	}
	return number;
}

export function parseFloatWithUnit(
	value: string | number | undefined | null,
	defaultNumber: number | undefined = undefined
) {
	if ( undefined === value || null === value ) {
		return defaultNumber;
	}
	const number: number = parseFloat( `${ value }` );
	if ( isNaN( number ) ) {
		return defaultNumber;
	}
	return number;
}

/**
 * CSSで0として扱う値かどうかを判定する
 * @param val 判定する値
 * @returns 0として扱う値ならtrue、そうでなければfalse
 */
export function isZeroValue( val: unknown ): boolean {
	// 0, '0', '0px', '0em', '0rem', '0%' など、0で始まるCSS値を0として判定
	if ( val === 0 ) return true;
	if ( typeof val === 'string' ) {
		const v = val.trim();
		if ( v === '0' ) return true;
		// 0で始まり、後ろに単位が続く場合（例: 0px, 0em, 0rem, 0%, 0vw, 0vh, 0pt, 0ex, 0ch, 0cm, 0mm, 0in, 0pc, 0q, 0fr, 0s, 0deg, 0rad, 0turn, 0grad, 0dpi, 0dppx, 0dpcm など）
		if ( /^0[a-zA-Z%]+$/.test( v ) ) return true;
	}
	return false;
}

/**
 * CSSで0として扱う値なら'0'を返し、それ以外はそのまま返す
 * @param val 判定する値
 * @returns CSSで0として扱う値なら0、そうでなければそのままの値を返す
 */
export function toCssZeroOrRaw( val: unknown ): string | number | undefined {
	// 0として扱う値なら0を返す
	if ( isZeroValue( val ) ) return 0;
	// nullならundefinedを返す
	if ( val === null ) return undefined;
	// それ以外はそのままの値を返す
	return val as string | number | undefined;
}
