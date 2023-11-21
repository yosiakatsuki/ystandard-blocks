import { InspectorControls } from '@wordpress/block-editor';
import PanelColumns from './columns';
import PanelGap from './gap';
import PanelLayout from './layout';
import PanelBulkAction from './bulk-action';
import PanelMargin from './margin';

const ColumnsInspectorControls = (props) => {
	return (
		<InspectorControls>
			<PanelColumns {...props} />
			<PanelGap {...props} />
			<PanelLayout {...props} />
			<PanelMargin {...props} />
			<PanelBulkAction {...props} />
		</InspectorControls>
	);
};

export default ColumnsInspectorControls;
