import { InspectorControls } from '@wordpress/block-editor';
import PanelBackground from './background';
import PanelPadding from './padding';
import PanelShadow from './shadow';
import PanelWidth from './width';

const ColumnInspectorControls = ( props ) => {
	return (
		<InspectorControls>
			<PanelBackground { ...props } />
			<PanelWidth { ...props } />
			<PanelPadding { ...props } />
			<PanelShadow { ...props } />
		</InspectorControls>
	);
};

export default ColumnInspectorControls;
