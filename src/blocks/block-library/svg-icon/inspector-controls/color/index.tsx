/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';

/**
 * Block dependencies.
 */
import { TextColor } from './text-color';
import { BackgroundColor } from './background-color';

// @ts-expect-error
export function Color( props ) {
	return (
		<Panel
			title={ __( '色設定', 'ystandard-blocks' ) }
			initialOpen={ true }
		>
			<TextColor { ...props } />
			<BackgroundColor { ...props } />
		</Panel>
	);
}
