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
import { IconSelect } from './icon';
import { FontSize } from './font-size';

// @ts-ignore
export function Icon( props ) {
	return (
		<Panel title={ __( 'アイコン設定', 'ystandard-blocks' ) }>
			<IconSelect { ...props } />
			<FontSize { ...props } />
		</Panel>
	);
}
