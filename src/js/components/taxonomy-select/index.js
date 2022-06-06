/**
 * WordPress.
 */
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
/**
 * yStandard
 */
import { addDefaultSelect } from '@aktk/helper/select-control';

const TaxonomySelect = ( {
	label,
	value,
	postType,
	onChange,
	allTaxonomies,
} ) => {
	const { selectedPostType, taxonomy } = useSelect( ( select ) => {
		const { getPostType, getTaxonomies } = select( coreStore );
		const _taxonomies = getTaxonomies( { per_page: -1 } ) || [];
		return {
			selectedPostType: getPostType( postType ),
			taxonomy: _taxonomies.filter( ( item ) => {
				return item?.visibility?.show_ui;
			} ),
		};
	} );
	const getTaxonomyNames = ( taxonomies ) => {
		return taxonomies.map( ( item ) => {
			return item?.slug;
		} );
	};
	const taxonomies =
		true === allTaxonomies
			? getTaxonomyNames( taxonomy ) || []
			: selectedPostType?.taxonomies || [];
	const options = addDefaultSelect( [
		...taxonomies.map( ( item ) => {
			const _taxonomy = taxonomy.filter( ( filterItem ) => {
				return item === filterItem?.slug;
			} );
			if ( _taxonomy ) {
				return {
					value: _taxonomy[ 0 ].slug,
					label: _taxonomy[ 0 ].name,
				};
			}
			return {};
		} ),
	] );
	const handleOnChange = ( newValue ) => {
		onChange( newValue );
	};
	return (
		<SelectControl
			label={ label }
			value={ value }
			options={ options }
			onChange={ handleOnChange }
		/>
	);
};
export default TaxonomySelect;
