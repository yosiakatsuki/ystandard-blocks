/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { FontSizePicker } from '@wordpress/block-editor';

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
				onChange={ ( font ) => {
					setFontSize( font );
				} }
			/>
		</BaseControl>
	);
}
