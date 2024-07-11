import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
/**
 * Block Dependencies.
 */
import Balloon from './balloon';

// @ts-ignore
export default function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<Balloon { ...props } />
		</WPInspectorControls>
	);
}
