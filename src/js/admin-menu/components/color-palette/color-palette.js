import { ColorPalette as WPColorPalette } from '@wordpress/components';
import { select } from '@wordpress/data';
import '@wordpress/block-editor';
import { getConfig } from '@ystd/helper/admin-menu';

const ColorPalette = ( props ) => {
	const editorColors = getConfig( 'editorColors' );
	const { colors } = select( 'core/block-editor' ).getSettings();

	const paletteColor = editorColors ?? colors;
	return <WPColorPalette colors={ paletteColor } { ...props } />;
};

export default ColorPalette;
