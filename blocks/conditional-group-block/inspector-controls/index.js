import { InspectorControls } from '@wordpress/block-editor';
import PanelDevice from './device';
import PanelAmp from './amp';

const GroupInspectorControls = ( props ) => {
	return (
		<InspectorControls>
			<PanelDevice { ...props } />
			<PanelAmp { ...props } />
		</InspectorControls>
	);
};

export default GroupInspectorControls;
