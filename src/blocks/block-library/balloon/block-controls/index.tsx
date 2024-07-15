import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';

/**
 * Block.
 */
import AlignmentControl from './alignment-control';

// @ts-ignore
export default function BlockControls( props ) {
	return (
		<WPBlockControls>
			<ToolbarGroup>
				<AlignmentControl { ...props } />
			</ToolbarGroup>
		</WPBlockControls>
	);
}
