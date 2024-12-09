/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { SubTextContent } from './sub-text-content';

// @ts-ignore
export function SubText( props ) {
	return (
		<PanelBody
			title={ __( 'サブテキスト', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<SubTextContent { ...props } />
		</PanelBody>
	);
}
