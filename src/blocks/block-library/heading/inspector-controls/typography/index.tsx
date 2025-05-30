/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { TextColor } from '@aktk/blocks/block-library/heading/inspector-controls/typography/text-color';
import { FontSize } from '@aktk/blocks/block-library/heading/inspector-controls/typography/font-size';
import { FontWeight } from '@aktk/blocks/block-library/heading/inspector-controls/typography/font-weight';
import { LetterSpacing } from '@aktk/blocks/block-library/heading/inspector-controls/typography/letter-spacing';

// @ts-ignore
export function Typography( props ) {
	return (
		<PanelBody title={ __( '文字設定', 'ystandard-blocks' ) }>
			<TextColor { ...props } />
			<FontSize { ...props } />
			<FontWeight { ...props } />
			<LetterSpacing { ...props } />
		</PanelBody>
	);
}
