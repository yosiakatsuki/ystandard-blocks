import { isResponsive } from '@aktk/helper/responsive.js';
import { getGapProperty } from '@aktk/helper/gap.js';

export function getColumnGapCustomProperty(gap) {
	if (isResponsive(gap) || !gap?.desktop) {
		return undefined;
	}
	const _gap = getGapProperty(gap.desktop);
	if (!_gap) {
		return undefined;
	}
	return {
		'--ystdb-column-row-gap': _gap?.gap ? _gap.gap : _gap?.['row-gap'],
		'--ystdb-column-column-gap': _gap?.gap
			? _gap.gap
			: _gap?.['column-gap'],
	};
}
