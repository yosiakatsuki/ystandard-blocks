import { Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/media-utils';
import { getComponentConfig } from '@ystd/helper/config';
import './_avatar-media-upload.scss';

const AvatarMediaUpload = ( props ) => {
	const {
		onSelect,
		onClickAvatarDelete,
		type,
		imageId,
		imageUrl,
		name,
	} = props;

	const defaultAvatar = getComponentConfig( 'defaultAvatar' ).url;

	const handleMediaUpload = ( { open } ) => {
		if ( ! imageUrl || defaultAvatar === imageUrl ) {
			return (
				<Button
					className="ystdb-menu-balloon__avatar-media-upload-select"
					onClick={ open }
				>
					<img src={ defaultAvatar } alt="" />
					<span className="ystdb-menu-balloon__avatar-media-upload-select-hover">
						画像を選択
					</span>
				</Button>
			);
		}
		return (
			<Button
				className="ystdb-menu-balloon__avatar-media-upload-select"
				onClick={ onClickAvatarDelete }
			>
				<img src={ imageUrl } alt={ name } />
				<span className="ystdb-menu-balloon__avatar-media-upload-select-hover">
					画像を削除
				</span>
			</Button>
		);
	};

	return (
		<figure className="ystdb-menu-balloon__avatar-media-upload">
			<MediaUpload
				onSelect={ ( media ) => {
					onSelect( media );
				} }
				type={ type }
				value={ imageId }
				render={ handleMediaUpload }
			/>
		</figure>
	);
};

export default AvatarMediaUpload;
