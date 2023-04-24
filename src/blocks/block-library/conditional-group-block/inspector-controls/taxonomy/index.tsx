/**
 * WordPress.
 */
import { __ } from '@wordpress/i18n';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';

/**
 * Plugin.
 */
import Panel from '@aktk/blocks/components/panel';
/**
 * Block
 */
import FilterType from './filter-type';
import Taxonomy from './taxonomy';
import Terms from './terms';
import ApplyChildren from './apply-children';

const PanelTaxonomy = (props: BlockEditProps<BlockAttributes>) => {
	const { attributes } = props;
	const { taxonomy } = attributes;
	return (
		<Panel
			title={__('カテゴリー・タグ別非表示設定', 'ystandard-blocks')}
			initialOpen={!!taxonomy}
		>
			<FilterType {...props} />
			<Taxonomy {...props} />
			<Terms {...props} />
			<ApplyChildren {...props} />
		</Panel>
	);
};
export default PanelTaxonomy;
