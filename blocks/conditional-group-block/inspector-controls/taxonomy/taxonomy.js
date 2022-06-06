/**
 * WordPress
 */
import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import TaxonomySelect from '@aktk/components/taxonomy-select';

const Taxonomy = ( { attributes, setAttributes } ) => {
	const { taxonomy } = attributes;
	const handleOnChange = ( newValue ) => {
		setAttributes( {
			taxonomy: newValue,
			terms: undefined,
		} );
	};
	return (
		<BaseControl>
			<TaxonomySelect
				label={ __( 'タクソノミー', 'ystandard-blocks' ) }
				value={ taxonomy }
				onChange={ handleOnChange }
				allTaxonomies={ true }
			/>
		</BaseControl>
	);
};
export default Taxonomy;
