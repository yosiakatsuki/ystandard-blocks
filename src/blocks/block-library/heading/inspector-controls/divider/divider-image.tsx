/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import {
	MediaUpload,
	type MediaObject,
} from '@aktk/block-components/components/media-upload';
import { NoticeSecondaryText } from '@aktk/block-components/components/notice';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
export function DividerImage( props ) {
	const { attributes, setAttributes } = props;
	const { dividerImageURL, dividerImageAlt, dividerImageID } = attributes;

	// 画像オブジェクト.
	const media =
		dividerImageID || dividerImageURL
			? { id: dividerImageID, url: dividerImageURL, alt: dividerImageAlt }
			: undefined;

	// 更新.
	const handleOnSelect = ( newValue: MediaObject | undefined ) => {
		setAttributes( {
			dividerImageID: newValue ? newValue.id : undefined,
			dividerImageURL: newValue ? newValue.url : undefined,
			dividerImageAlt: newValue ? newValue.alt : undefined,
		} );
	};

	return (
		<BaseControl
			id={ 'divider-image' }
			label={ __( '区切り線画像', 'ystandard-blocks' ) }
		>
			<MediaUpload
				media={ media as unknown as MediaObject }
				onSelect={ handleOnSelect }
				onClear={ () => {
					handleOnSelect( undefined );
				} }
				clearLabel={ __( '画像をクリア', 'ystandard-blocks' ) }
				controlSize={ 'small' }
			/>
			<NoticeSecondaryText>
				{ __(
					'※画像を指定した場合、区切り線の色設定は無視されます。',
					'ystandard-blocks'
				) }
			</NoticeSecondaryText>
		</BaseControl>
	);
}
