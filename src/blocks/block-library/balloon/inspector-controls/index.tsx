import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
/**
 * Block Dependencies.
 */
import Balloon from './balloon';
import AvatarList from './avatar-list';

// @ts-ignore
export default function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<AvatarList { ...props } />
			<Balloon { ...props } />
		</WPInspectorControls>
	);
}
