/**
 * Aktk dependencies.
 */
import { stripUndefined } from '@aktk/block-components/utils/object';

import type { Spacing } from './types';
import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';

export function getCustomSpacingValues(
	spacing: Spacing | undefined,
	type: string
) {
	const value = {
		[ `${ type }Top` ]: presetTokenToCssVar( spacing?.top ) || undefined,
		[ `${ type }Right` ]:
			presetTokenToCssVar( spacing?.right ) || undefined,
		[ `${ type }Bottom` ]:
			presetTokenToCssVar( spacing?.bottom ) || undefined,
		[ `${ type }Left` ]: presetTokenToCssVar( spacing?.left ) || undefined,
	};
	return stripUndefined( value );
}
