/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
/**
 * Component.
 */
import {
	type MediaObject,
	type MediaTypes,
	MediaUploadControl,
	type MediaUploadRenderProps,
} from './media-upload.control';

export interface MediaUploadProps {
	media: MediaObject | string | undefined;
	mediaTypes?: MediaTypes[];
	onSelect: ( newValue: MediaObject | undefined ) => void;
	onClear: () => void;
	useMediaUtils?: boolean;
	selectLabel?: string;
	clearLabel?: string;
}

export default function MediaUpload( props: MediaUploadProps ) {
	const { media, mediaTypes, onSelect, onClear, useMediaUtils } = props;

	// メディア指定が文字列の場合はオブジェクトに変換
	const _media = typeof media === 'string' ? { url: media } : media;

	return (
		<MediaUploadControl
			value={ _media?.id || 0 }
			mediaTypes={ mediaTypes }
			onSelect={ onSelect }
			useMediaUtils={ useMediaUtils }
			render={ ( { obj } ) => (
				<MediaUploadRender
					obj={ obj }
					media={ _media }
					onClear={ onClear }
					selectLabel={ props.selectLabel }
					clearLabel={ props.clearLabel }
				/>
			) }
		/>
	);
}

interface MediaUploadRenderComponentProps {
	onClear: () => void;
	selectLabel?: string;
	clearLabel?: string;
}

const DEFAULT_SELECT_LABEL = '画像を選択';
const DEFAULT_CLEAR_LABEL = '画像をクリア';

function MediaUploadRender(
	props: MediaUploadRenderProps & MediaUploadRenderComponentProps
) {
	const { obj, media, onClear, selectLabel, clearLabel } = props;
	// Propsの展開.
	const open = obj.open;
	const type = media?.type || 'image';
	const id = media?.id || 0;
	const url = media?.url || '';
	const alt = media?.alt || '';

	const _selectLabel = selectLabel || DEFAULT_SELECT_LABEL;
	const _clearLabel = clearLabel || DEFAULT_CLEAR_LABEL;

	// 画像が設定されていない場合
	if ( ! id && ! url ) {
		return (
			<Button
				className={
					'flex !h-auto min-h-[100px] w-full items-center justify-center border border-solid border-gray-400 !bg-gray-300 !text-black [&:not(:focus,:hover)]:!shadow-none'
				}
				variant="secondary"
				onClick={ open }
				data-selectLabel={ _selectLabel }
				data-clearLabel={ _clearLabel }
			>
				{ selectLabel || DEFAULT_SELECT_LABEL }
			</Button>
		);
	}

	// 画像が設定されている場合.
	return (
		<div className={ 'relative flex flex-col' }>
			<Button
				onClick={ open }
				className={
					'aktk-components__media-upload-select-button !h-auto !p-0'
				}
				data-selectLabel={ _selectLabel }
				data-clearLabel={ _clearLabel }
			>
				<MediaPreview type={ type } url={ url } alt={ alt } />
			</Button>
			<div
				className={
					'aktk-components__media-upload-clear-button flex justify-center'
				}
			>
				<Button
					onClick={ onClear }
					className={ '!text-fz-xs' }
					isDestructive
					data-selectLabel={ _selectLabel }
					data-clearLabel={ _clearLabel }
				>
					{ clearLabel || DEFAULT_CLEAR_LABEL }
				</Button>
			</div>
		</div>
	);
}

function MediaPreview( props: MediaObject ) {
	const { type, url, alt } = props;
	return (
		<>
			{ type === 'image' && (
				<img
					className={ 'block h-auto max-w-full' }
					src={ url }
					alt={ alt }
				/>
			) }
			{ type === 'video' && (
				<video
					className={ 'block h-auto max-w-full' }
					muted
					controls={ true }
					src={ url }
				/>
			) }
		</>
	);
}
