/**
 * WordPress dependencies.
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
// @ts-expect-error
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';
/**
 * yStandard.
 */
import HierarchicalTermSelector from '@aktk/blocks/components/hierarchical-term-selector';

const DEFAULT_LABEL = __('カテゴリー・タグ', 'ystandard-blocks');

export default function Terms(props: BlockEditProps<BlockAttributes>) {
	const { attributes, setAttributes } = props;
	const { taxonomy, terms } = attributes;
	// @ts-expect-error
	const { taxonomyLabel } = useSelect((select) => {
		const { getTaxonomy } = select(coreStore);
		const selectedTaxonomy = getTaxonomy(taxonomy);

		if (!selectedTaxonomy || !selectedTaxonomy.hasOwnProperty('name')) {
			return { taxonomyLabel: DEFAULT_LABEL };
		}
		return {
			taxonomyLabel: selectedTaxonomy?.name || DEFAULT_LABEL,
		};
	});
	const handleOnChange = (newValue: string[]) => {
		setAttributes({ terms: newValue });
	};
	return (
		<>
			{!!taxonomy && (
				<BaseControl
					id={'hierarchical-term-selector'}
					label={taxonomyLabel}
				>
					<HierarchicalTermSelector
						taxonomy={taxonomy}
						selectedTerms={terms}
						onChange={handleOnChange}
					/>
				</BaseControl>
			)}
		</>
	);
}
