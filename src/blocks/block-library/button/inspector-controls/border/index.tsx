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
import { BorderRadius } from './border-radius';
import { Border } from './border';

//@ts-expect-error
export function BorderPanel( props ) {
	return (
		<>
			<Panel title={ __( '枠線・角丸', 'ystandard-blocks' ) }>
				<BorderRadius { ...props } />
				<Border { ...props } />
			</Panel>
		</>
	);
}
