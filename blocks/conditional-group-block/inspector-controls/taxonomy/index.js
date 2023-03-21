/**
 * WordPress.
 */
import { __ } from '@wordpress/i18n';
/**
 * yStandard
 */
import Panel from '@aktk/components/panel';
/**
 * Block
 */
import FilterType from './filter-type';
import Taxonomy from './taxonomy';
import Terms from './terms';

const PanelTaxonomy = (props) => {
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
		</Panel>
	);
};
export default PanelTaxonomy;
