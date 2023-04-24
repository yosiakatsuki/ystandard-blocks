/**
 * WordPress.
 */
import { BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';
// @ts-expect-error
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

const DEFAULT_LABEL = __('カテゴリー', 'ystandard-blocks');

export default function ApplyChildren(props: BlockEditProps<BlockAttributes>) {
	const { attributes, setAttributes } = props;
	const { taxonomy, applyChildren } = attributes;
	// @ts-expect-error
	const { hierarchical, taxonomyLabel } = useSelect((select) => {
		// @ts-expect-error
		const { getTaxonomy } = select(coreStore);
		const selectedTaxonomy = getTaxonomy(taxonomy);

		if (!selectedTaxonomy) {
			return { hierarchical: false, taxonomyLabel: DEFAULT_LABEL };
		}
		return {
			hierarchical: selectedTaxonomy?.hierarchical ?? false,
			taxonomyLabel: selectedTaxonomy?.name || DEFAULT_LABEL,
		};
	});
	return (
		<>
			{hierarchical && (
				<BaseControl id={'apply-children'}>
					<ToggleControl
						label={`${taxonomyLabel}${__(
							'にも表示・非表示条件を適用する',
							'ystandard-blocks'
						)}`}
						checked={applyChildren}
						onChange={(value) => {
							setAttributes({ applyChildren: value });
						}}
					/>
				</BaseControl>
			)}
		</>
	);
}
