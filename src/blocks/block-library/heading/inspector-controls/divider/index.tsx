/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { DividerWidth } from './divider-width';

// @ts-ignore
export function Divider( props ) {
	return (
		<PanelBody
			title={ __( '区切り線', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<DividerWidth { ...props } />
		</PanelBody>
	);
}
