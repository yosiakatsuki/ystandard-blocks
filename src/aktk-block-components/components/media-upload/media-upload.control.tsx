/**
 * WordPress.
 */
import { MediaUpload } from '@wordpress/block-editor';
// @ts-expect-error
import { MediaUpload as MediaUploadUtils } from '@wordpress/media-utils';

export type MediaTypes = 'image' | 'video' | 'audio' | 'file';

export type MediaObject = {
	type?: MediaTypes;
	id?: number;
	url?: string;
	alt?: string;
};

export interface MediaUploadRenderProps {
	obj: { open: () => void };
	media?: MediaObject;
}
export interface MediaUploadControlProps {
	onSelect: ( newValue: MediaObject | { [ key: string ]: any } ) => void;
	value?: number;
	render: ( props: MediaUploadRenderProps ) => JSX.Element;
	useMediaUtils?: boolean;
	mediaTypes?: MediaTypes[];
}

const DEFAULT_MEDIA_TYPES = [ 'image' ];

/**
 * メディアアップロードコントロール
 * @param props
 * @class
 */
export function MediaUploadControl( props: MediaUploadControlProps ) {
	const { onSelect, value, render, useMediaUtils, mediaTypes } = props;
	const MediaControl = !! useMediaUtils ? MediaUploadUtils : MediaUpload;

	/**
	 * コントロールの中身
	 *
	 * @param obj
	 * @param obj.open
	 */
	const mediaControlRender = ( obj: { open: () => void } ) => {
		return render( { obj, media: { id: value } } );
	};

	return (
		<MediaControl
			onSelect={ onSelect }
			value={ value }
			render={ mediaControlRender }
			allowedTypes={ mediaTypes || DEFAULT_MEDIA_TYPES }
			multiple={ false }
			gallery={ false }
		/>
	);
}
