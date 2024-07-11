import { store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export function useColorPalette() {
	// @ts-ignore
	return useSelect( ( select ) => {
		// @ts-ignore
		const { colors } = select( blockEditorStore ).getSettings();

		return colors;
	} );
}
