import { InspectorControls } from '@wordpress/block-editor';
import PanelDevice from './device';
import PanelAmp from './amp';
import PanelTaxonomy from './taxonomy';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';

const GroupInspectorControls = (props: object) => {
	return (
		<InspectorControls>
			<PanelDevice {...(props as BlockEditProps<BlockAttributes>)} />
			<PanelTaxonomy {...(props as BlockEditProps<BlockAttributes>)} />
			<PanelAmp {...(props as BlockEditProps<BlockAttributes>)} />
		</InspectorControls>
	);
};

export default GroupInspectorControls;
