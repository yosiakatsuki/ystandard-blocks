/**
 * WordPress.
 */
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Width from './width';
import AutoWidth from './auto-width';

const PanelSize = ( props ) => {
	return (
		<PanelBody title={ __( 'カラムサイズ設定', 'ystandard-blocks' ) }>
			<Width { ...props } />
			<AutoWidth { ...props } />
		</PanelBody>
	);
};

export default PanelSize;
