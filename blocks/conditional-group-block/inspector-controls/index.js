import { InspectorControls } from '@wordpress/block-editor';
import PanelDevice from './device';
import PanelAmp from './amp';
import PanelTaxonomy from './taxonomy';

const GroupInspectorControls = (props) => {
	return (
		<InspectorControls>
			<PanelDevice {...props} />
			<PanelTaxonomy {...props} />
			<PanelAmp {...props} />
		</InspectorControls>
	);
};

export default GroupInspectorControls;
