import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
import AlignmentControl from './alignment-control';

// @ts-ignore
export default function BlockControls( props ) {
	return (
		<WPBlockControls>
			<AlignmentControl { ...props } />
		</WPBlockControls>
	);
}
