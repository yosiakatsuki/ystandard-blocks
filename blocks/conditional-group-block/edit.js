import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
/**
 * Block.
 */
import GroupInspectorControls from './inspector-controls';

const ConditionalGroupEdit = (props) => {
	const { hasInnerBlocks } = useSelect((select) => {
		const { getBlock } = select('core/block-editor');

		const block = getBlock(props?.clientId);
		return {
			hasInnerBlocks: block && block.innerBlocks.length,
		};
	});
	const blockProps = useBlockProps({
		className: classnames('ystdb-conditional-group'),
	});
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: classnames('ystdb-conditional-group__inner'),
		},
		{
			renderAppender: hasInnerBlocks
				? undefined
				: () => <InnerBlocks.ButtonBlockAppender />,
		}
	);

	return (
		<>
			<GroupInspectorControls {...props} />

			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</>
	);
};

export default ConditionalGroupEdit;
