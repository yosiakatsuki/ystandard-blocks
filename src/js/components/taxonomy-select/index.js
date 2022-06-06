/**
 * WordPress.
 */
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
/**
 * yStandard
 */
import CustomSelectControl from '@aktk/components/custom-select-control';
import { addDefaultCustomSelect } from '@aktk/helper/select-control';

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
	const options = addDefaultCustomSelect( [
		...taxonomies.map( ( item ) => {
			const _taxonomy = taxonomy.filter( ( filterItem ) => {
				return item === filterItem?.slug;
			} );
			if ( _taxonomy ) {
				return {
					key: _taxonomy[ 0 ].slug,
					name: _taxonomy[ 0 ].name,
				};
			}
			return {};
		} ),
	] );
	const handleOnChange = ( newValue ) => {
		onChange( newValue );
	};
	return (
		<CustomSelectControl
			label={ label }
			value={ value }
			options={ options }
			onChange={ handleOnChange }
		/>
	);
};
export default TaxonomySelect;
