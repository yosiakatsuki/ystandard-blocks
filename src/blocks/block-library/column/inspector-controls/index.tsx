import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
import PanelBackground from './background';
import PanelPadding from './padding';
import PanelShadow from './shadow';
import PanelSize from './size';
import PanelLink from './link';

// @ts-ignore
const InspectorControls = (props) => {
	return (
		<WPInspectorControls>
			<PanelBackground {...props} />
			<PanelSize {...props} />
			<PanelPadding {...props} />
			<PanelShadow {...props} />
			<PanelLink {...props} />
		</WPInspectorControls>
	);
};

export default InspectorControls;
