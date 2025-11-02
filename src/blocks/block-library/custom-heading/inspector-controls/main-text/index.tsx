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
import { FontSize } from './font-size';

// @ts-ignore.
export function MainTextPanel( props ) {
	return (
		<Panel title={ __( 'メインテキスト', 'ystandard-blocks' ) }>
			<FontSize { ...props } />
		</Panel>
	);
}
