import classnames from 'classnames';
/**
 * WordPress.
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
/**
 * Block.
 */
import GroupInspectorControls from './inspector-controls';

const ConditionalGroupEdit = ( props ) => {
	const blockProps = useBlockProps( {
		className: classnames( 'ystdb-conditional-group' ),
	} );
	const innerBlocksProps = useInnerBlocksProps( {
		className: classnames( 'ystdb-conditional-group__inner' ),
	} );

	return (
		<>
			<GroupInspectorControls { ...props } />

			<div { ...blockProps }>
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
};

export default ConditionalGroupEdit;
