/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { DividerWidth } from './divider-width';
import { DividerHeight } from './divider-height';
import { DividerColor } from './divider-color';
import { DividerImage } from './divider-image';

// @ts-ignore
export function Divider( props ) {
	return (
		<PanelBody
			title={ __( '区切り線', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<DividerWidth { ...props } />
			<DividerHeight { ...props } />
			<DividerColor { ...props } />
			<DividerImage { ...props } />
		</PanelBody>
	);
}
