/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
/**
 * Plugin dependencies.
 */
import { TextColor } from './text-color';
import { FontSize } from './font-size';

// @ts-expect-error
export function Typography( props ) {
	return (
		<>
			<Panel title={ __( 'テキスト', 'ystandard-blocks' ) }>
				<TextColor { ...props } />
				<FontSize { ...props } />
			</Panel>
		</>
	);
}
