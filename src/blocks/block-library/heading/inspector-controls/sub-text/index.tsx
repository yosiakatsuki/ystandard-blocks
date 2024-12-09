/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { SubTextContent } from './sub-text-content';
import { SubTextPosition } from './sub-text-position';
import { SubTextFontSize } from './sub-text-font-size';

// @ts-ignore
export function SubText( props ) {
	return (
		<PanelBody
			title={ __( 'サブテキスト', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<SubTextContent { ...props } />
			<SubTextPosition { ...props } />
			<SubTextFontSize { ...props } />
		</PanelBody>
	);
}