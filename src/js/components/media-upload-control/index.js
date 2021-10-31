import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MediaUploadControl = ( props ) => {
	const MEDIA_TYPES = [ 'image' ];
	const {
		media,
		mediaTypes,
		onSelect,
		onClear,
		value,
		clearLabel,
		selectLabel,
	} = props;

	const _mediaTypes = mediaTypes || MEDIA_TYPES;

	const _clearLabel = clearLabel || __( '画像をクリア', 'ystandard-blocks' );
	const _selectLabel = selectLabel || __( '画像を選択', 'ystandard-blocks' );

	const _render = ( obj ) => {
		const mediaType = media?.type || 'image';
		const mediaId = media?.id || 0;
		console.log({
			MediaUploadControl:obj
		});
		if ( ! mediaId || 0 === mediaId ) {
			return (
				<Button
					className={ 'ystdb-media-upload-control__select' }
					isSecondary
					onClick={ obj.open }
				>
					{ _selectLabel }
				</Button>
			);
		}


		return (
			<div className="ystdb-media-upload-control__render">
				<Button
					onClick={ obj.open }
					className={ 'ystdb-media-upload-control__preview' }
				>
					{ 'image' === mediaType && (
						<img src={ media?.url } alt={ media?.alt } />
					) }
					{ 'video' === mediaType && (
						<video
							autoPlay
							muted
							loop
							playsInline
							src={ media?.url }
						/>
					) }
				</Button>
				<Button
					className={ 'ystdb-media-upload-control__clear' }
					isDestructive
					onClick={ onClear }
				>
					{ _clearLabel }
				</Button>
			</div>
		);
	};

	return (
		<div className="ystdb-media-upload-control">
			<MediaUpload
				onSelect={ onSelect }
				type={ _mediaTypes }
				value={ value }
				render={ _render }
			/>
		</div>
	);
};

export default MediaUploadControl;
