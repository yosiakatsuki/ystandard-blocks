/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';

/**
 * Internal dependencies.
 */
import { IconLeft } from './icon-left';

// @ts-expect-error
export function Icon(props) {
	return (
		<>
			<Panel title={__('アイコン', 'ystandard-blocks')}>
				<IconLeft {...props} />
			</Panel>
		</>
	);
}
