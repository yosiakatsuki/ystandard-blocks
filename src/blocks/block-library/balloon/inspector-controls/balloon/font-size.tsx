/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import FontSizePicker from '@aktk/block-components/wp-controls/font-size-picker';

// @ts-ignore
export default function BalloonFontSize( props ) {
	const { fontSize, setFontSize } = props;
	return (
		<BaseControl
			id={ 'balloon-font-size' }
			label={ __( '文字サイズ', 'ystandard-blocks' ) }
		>
			<FontSizePicker
				value={ fontSize.size }
				// @ts-ignore
				onChange={ ( font ) => {
					setFontSize( font );
				} }
			/>
		</BaseControl>
	);
}
