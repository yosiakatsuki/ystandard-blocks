import { InspectorControls } from '@wordpress/block-editor';
import PanelBackground from './background';
import PanelPadding from './padding';
import PanelShadow from './shadow';
import PanelSize from './size';

const ColumnInspectorControls = ( props ) => {
	return (
		<InspectorControls>
			<PanelBackground { ...props } />
			<PanelSize { ...props } />
			<PanelPadding { ...props } />
			<PanelShadow { ...props } />
		</InspectorControls>
	);
};

export default ColumnInspectorControls;
