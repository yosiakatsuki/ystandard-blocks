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
import { MainTextHeadingLevel } from './heading-level';

// @ts-ignore.
export function MainTextPanel( props ) {
	return (
		<Panel title={ __( 'メインテキスト', 'ystandard-blocks' ) }>
			<MainTextHeadingLevel { ...props } />
		</Panel>
	);
}
