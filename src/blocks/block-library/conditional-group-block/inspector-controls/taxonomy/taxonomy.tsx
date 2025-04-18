/**
 * WordPress
 */
import { __ } from '@wordpress/i18n';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
/**
 * Plugin.
 */
import TaxonomySelect from '@aktk/blocks/components/taxonomy-select';

const Taxonomy = ( props: BlockEditProps< BlockAttributes > ) => {
	const { attributes, setAttributes } = props;
	const { taxonomy } = attributes;
	const handleOnChange = ( newValue: string ) => {
		setAttributes( {
			taxonomy: newValue,
			terms: undefined,
		} );
	};
	return (
		<BaseControl id={ 'taxonomy' }>
			<TaxonomySelect
				label={ __( '分類', 'ystandard-blocks' ) }
				value={ taxonomy }
				onChange={ handleOnChange }
				allTaxonomies={ true }
			/>
		</BaseControl>
	);
};
export default Taxonomy;
