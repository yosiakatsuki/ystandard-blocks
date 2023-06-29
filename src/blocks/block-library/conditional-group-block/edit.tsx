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
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';
/**
 * Block.
 */
import GroupInspectorControls from './inspector-controls';
import './editor.scss';

export default function ConditionalGroupEdit(
	props: BlockEditProps<BlockAttributes>
) {
	const { clientId } = props;
	// @ts-expect-error
	const { hasInnerBlocks } = useSelect((select) => {
		// @ts-expect-error
		const { getBlock } = select(blockEditorStore);

		const block = getBlock(clientId);
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
}
