/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';
import { TextColor } from './text-color';

// @ts-expect-error
export function Typography(props) {
	return (
		<>
			<Panel title={__('テキスト', 'ystandard-blocks')}>
				<TextColor {...props} />
			</Panel>
		</>
	);
}
