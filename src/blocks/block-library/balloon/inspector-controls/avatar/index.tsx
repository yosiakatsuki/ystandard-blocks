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
import AvatarBorderRadius from './border-radius';
import AvatarBorderWidth from './border-width';
import AvatarBorderColor from './border-color';
import AvatarNameColor from './name-color';
import AvatarNameFontSize from './font-size';

// @ts-ignore
export default function Avatar( props ) {
	return (
		<Panel title={ __( 'アバター設定', 'ystandard-blocks' ) }>
			<AvatarSize { ...props } />
			<AvatarBorderRadius { ...props } />
			<AvatarBorderWidth { ...props } />
			<AvatarBorderColor { ...props } />
			<AvatarNameFontSize { ...props } />
			<AvatarNameColor { ...props } />
		</Panel>
	);
}
