import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ColumnPadding from './column-padding';
import ColumnShadow from './column-shadow';

// @ts-ignore
const PanelBulkAction = ( props ) => {
	return (
		<PanelBody title={ __( '一括設定', 'ystandard-blocks' ) }>
			<ColumnPadding { ...props } />
			<ColumnShadow { ...props } />
		</PanelBody>
	);
};
export default PanelBulkAction;
