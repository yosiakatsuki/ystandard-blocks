/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';

/**
 * Block.
 */
import AvatarSize from './size';

// @ts-ignore
export default function Avatar( props ) {
	return (
		<Panel title={ __( 'アバター設定', 'ystandard-blocks' ) }>
			<AvatarSize { ...props } />
		</Panel>
	);
}
