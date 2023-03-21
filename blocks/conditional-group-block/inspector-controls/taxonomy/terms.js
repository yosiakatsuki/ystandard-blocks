import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
/**
 * yStandard.
 */
import HierarchicalTermSelector from '@aktk/components/hierarchical-term-selector';

const DEFAULT_LABEL = __('カテゴリー・タグ', 'ystandard-blocks');

const Terms = ({ attributes, setAttributes }) => {
	const { taxonomy, terms } = attributes;
	const { taxonomyLabel } = useSelect((select) => {
		const { getTaxonomy } = select(coreStore);
		const selectedTaxonomy = getTaxonomy(taxonomy);
		if (!selectedTaxonomy || !selectedTaxonomy.hasOwnProperty(taxonomy)) {
			return { taxonomyLabel: DEFAULT_LABEL };
		}
		return {
			taxonomyLabel: selectedTaxonomy[taxonomy]?.label || DEFAULT_LABEL,
		};
	});
	const handleOnChange = (newValue) => {
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
};
export default Terms;
