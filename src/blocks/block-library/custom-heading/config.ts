import type { ElementLayoutDefaultValues } from '@aktk/block-components/components/element-style-controls';

export const CUSTOM_HEADING_LAYOUT_DEFAULT_VALUES: ElementLayoutDefaultValues =
	{
		orientation: 'vertical',
		alignItems: {
			vertical: 'flex-start',
			horizontal: 'baseline',
		},
		justifyContent: {
			vertical: 'flex-start',
			horizontal: 'flex-start',
		},
	};
