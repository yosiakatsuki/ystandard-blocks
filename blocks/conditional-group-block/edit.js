import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
/**
 * Block.
 */
import GroupInspectorControls from './inspector-controls';

const ConditionalGroupEdit = ( props ) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	const blockProps = useBlockProps( {
		className: classnames( 'ystdb-conditional-group' ),
	} );
	const innerBlocksProps = useInnerBlocksProps( {
		className: classnames( 'ystdb-conditional-group__inner' ),
		renderAppender: hasInnerBlocks
			? undefined
			: () => <InnerBlocks.ButtonBlockAppender />,
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
