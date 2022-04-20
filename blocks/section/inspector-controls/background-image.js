import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import MediaUploadControl from '@ystd/components/media-upload-control';
import { BACKGROUND_TYPE_IMAGE, BACKGROUND_TYPE_VIDEO } from '../config';

const BackgroundImage = ( props ) => {
	const { attributes, setAttributes, setState } = props;
	const {
		backgroundImageURL,
		backgroundImageID,
		backgroundImageAlt,
		backgroundType,
		backgroundImageOpacity,
	} = attributes;
	const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

	return (
		<BaseControl
			id={ 'background-image' }
			label={ __( '背景画像・動画', 'ystandard-blocks' ) }
		>
			<MediaUploadControl
				media={ {
					url: backgroundImageURL,
					id: backgroundImageID,
					alt: backgroundImageAlt,
					type: backgroundType,
				} }
				mediaTypes={ ALLOWED_MEDIA_TYPES }
				onSelect={ ( media ) => {
					let mediaType;
					if ( media.media_type ) {
						if ( media.media_type === BACKGROUND_TYPE_IMAGE ) {
							mediaType = BACKGROUND_TYPE_IMAGE;
						} else {
							mediaType = BACKGROUND_TYPE_VIDEO;
						}
					} else {
						if (
							media.type !== BACKGROUND_TYPE_IMAGE &&
							media.type !== BACKGROUND_TYPE_VIDEO
						) {
							return;
						}
						mediaType = media.type;
					}
					setAttributes( {
						backgroundImageURL: media.url,
						backgroundImageID: media.id,
						backgroundImageAlt: media.alt,
						backgroundType: mediaType,
					} );
					if ( mediaType === BACKGROUND_TYPE_VIDEO ) {
						setAttributes( {
							backgroundImageOnOverlay: false,
							backgroundImageOnOverlayOpacity: 80,
						} );
						setState( {
							useDarkImagePreview: false,
						} );
					}
					if ( 100 === backgroundImageOpacity ) {
						setAttributes( {
							backgroundImageOpacity: 50,
						} );
					}
				} }
				onClear={ () => {
					setAttributes( {
						backgroundImageURL: '',
						backgroundImageID: 0,
						focalPoint: undefined,
						backgroundType: undefined,
						backgroundImageParallax: undefined,
						backgroundImageSize: undefined,
						backgroundImageSizeX: undefined,
						backgroundImageSizeUnitX: undefined,
						backgroundImageSizeY: undefined,
						backgroundImageSizeUnitY: undefined,
						backgroundImageRepeat: undefined,
						backgroundImageOnOverlay: undefined,
						backgroundImageOnOverlayOpacity: undefined,
					} );
					setState( { useDarkImagePreview: false } );
				} }
				value={ backgroundImageID }
			/>
		</BaseControl>
	);
};

export default BackgroundImage;
