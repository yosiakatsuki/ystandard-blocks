import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
/**
 * Block Dependencies.
 */
import Balloon from './balloon';
import AvatarList from './avatar-list';
import Avatar from './avatar';

// @ts-ignore
export default function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<AvatarList { ...props } />
			<Balloon { ...props } />
			<Avatar { ...props } />
		</WPInspectorControls>
	);
}
