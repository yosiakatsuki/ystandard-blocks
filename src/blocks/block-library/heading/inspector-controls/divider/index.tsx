/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';


// @ts-ignore
export function Divider( props ) {
	return (
		<PanelBody
			title={ __( '区切り線', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<></>
		</PanelBody>
	);
}
