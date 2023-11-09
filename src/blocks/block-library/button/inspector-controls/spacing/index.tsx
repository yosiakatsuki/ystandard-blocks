/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';
import { Padding } from './padding';

//@ts-expect-error
export function SpacingPanel(props) {
	return (
		<>
			<Panel title={__('余白', 'ystandard-blocks')}>
				<Padding {...props} />
			</Panel>
		</>
	);
}
