/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';

/**
 * Internal dependencies.
 */
import { LayoutTextAlign } from './text-align';

// @ts-ignore.
export function LayoutPanel( props ) {
	return (
		<Panel title={ __( 'レイアウト', 'ystandard-blocks' ) }>
			<LayoutTextAlign { ...props } />
		</Panel>
	);
}
