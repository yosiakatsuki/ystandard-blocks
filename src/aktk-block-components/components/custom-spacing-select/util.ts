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
		[ `${ type }-top` ]: presetTokenToCssVar( spacing?.top ) || undefined,
		[ `${ type }-right` ]:
			presetTokenToCssVar( spacing?.right ) || undefined,
		[ `${ type }-bottom` ]:
			presetTokenToCssVar( spacing?.bottom ) || undefined,
		[ `${ type }-left` ]: presetTokenToCssVar( spacing?.left ) || undefined,
	};
	return stripUndefined( value );
}
