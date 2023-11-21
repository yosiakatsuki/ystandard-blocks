/**
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const getSpacingProps = (type, value) => {
	if (!value || 'object' !== typeof value) {
		return undefined;
	}
	const top = value?.top || '';
	const right = value?.right || '';
	const bottom = value?.bottom || '';
	const left = value?.left || '';
	// 全部共通.
	if (!!top && [right, bottom, left].every((x) => x === top)) {
		return {
			[`${type}`]: top,
		};
	}
	// 上下・左右.
	if (!!top && top === bottom && !!right && right === left) {
		return {
			[`${type}`]: `${top} ${right}`,
		};
	}
	// 上・左右・下
	if (!!top && !!right && right === left && !!bottom) {
		return {
			[`${type}`]: `${top} ${right} ${bottom}`,
		};
	}
	// 全部あるけどバラバラ.
	if (!!top && !!right && !!left && !!bottom) {
		return {
			[`${type}`]: `${top} ${right} ${bottom} ${left}`,
		};
	}
	let result = {};
	if (top) {
		result = {
			...result,
			[`${type}-top`]: top,
		};
	}
	if (right) {
		result = {
			...result,
			[`${type}-right`]: right,
		};
	}
	if (bottom) {
		result = {
			...result,
			[`${type}-bottom`]: bottom,
		};
	}
	if (left) {
		result = {
			...result,
			[`${type}-left`]: left,
		};
	}
	return result;
};

/**
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const parseSpacing = (spacing) => {
	if (!spacing || 'object' !== typeof spacing) {
		return undefined;
	}
	if (
		!spacing?.top &&
		!spacing?.right &&
		!spacing?.bottom &&
		!spacing?.left
	) {
		return undefined;
	}
	return spacing;
};

/**
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const getSpacingInfo = (spacing) => {
	if (!spacing || 'object' !== typeof spacing) {
		return undefined;
	}
	const top = spacing?.top || '-';
	const right = spacing?.right || '-';
	const bottom = spacing?.bottom || '-';
	const left = spacing?.left || '-';

	if ([right, bottom, left].every((x) => x === top)) {
		return `${top}`;
	}
	if (top === bottom && left === right) {
		return `${top} ${right}`;
	}
	if (top && left === right && bottom) {
		return `${top} ${right} ${bottom}`;
	}

	return `${top} ${right} ${bottom} ${left}`;
};
