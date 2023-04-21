import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	// @ts-expect-error
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';
/**
 * Block.
 */
import GroupInspectorControls from './inspector-controls';
import './index.scss';

export default function ConditionalGroupEdit(
	props: BlockEditProps<BlockAttributes>
) {
	const { clientId } = props;
	const { hasInnerBlocks } = useCallback(
		// @ts-expect-error
		useSelect((select) => {
			// @ts-expect-error
			const { getBlock } = select(blockEditorStore);

			const block = getBlock(clientId);
			return {
				hasInnerBlocks: block && block.innerBlocks.length,
			};
		}),
		[clientId]
	);
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
