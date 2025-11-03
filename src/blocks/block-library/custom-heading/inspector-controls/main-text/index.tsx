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
import { MainTextFontSize } from './font-size';
import { MainTextTextColor } from './text-color';

// @ts-ignore.
export function MainTextPanel( props ) {
	return (
		<Panel title={ __( 'メインテキスト', 'ystandard-blocks' ) }>
			<MainTextFontSize { ...props } />
			<MainTextTextColor { ...props } />
		</Panel>
	);
}
