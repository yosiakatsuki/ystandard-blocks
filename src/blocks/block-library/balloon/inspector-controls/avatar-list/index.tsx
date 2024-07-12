/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';

/**
 * Plugin.
 */
import { getBlockEditorConfig } from '@aktk/blocks/utils';

/**
 * Block.
 */
import AvatarListInfo from './info';
import AvatarSelect from './avatar-select';

// @ts-ignore
export default function AvatarList( props ) {
	const avatarImages = getAvatarImages();
	return (
		<Panel
			title={ __( '登録済みアバター画像', 'ystandard-blocks' ) }
			initialOpen={ true }
		>
			{ avatarImages.length ? (
				<AvatarSelect { ...props } images={ avatarImages } />
			) : (
				<AvatarListInfo />
			) }
		</Panel>
	);
}

/**
 * アバター画像一覧取得
 */
export function getAvatarImages() {
	return getBlockEditorConfig( 'balloonImages' );
}
