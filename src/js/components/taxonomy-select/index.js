/**
 * WordPress.
 */
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';
/**
 * yStandard
 */
import CustomSelectControl from '@aktk/components/custom-select-control';
import { addDefaultCustomSelect } from '@aktk/helper/select-control';
import Notice from '@aktk/components/notice';

/**
 * @param root0
 * @param root0.label
 * @param root0.value
 * @param root0.postType
 * @param root0.onChange
 * @param root0.allTaxonomies
 * @deprecated
 */
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
					style: { fontSize: '1em' },
				};
			}
			return {};
		} ),
	] );
	const handleOnChange = ( newValue ) => {
		onChange( newValue );
	};
	return (
		<>
			<CustomSelectControl
				className={ 'aktk-taxonomy-select' }
				label={ label }
				value={ value }
				options={ options }
				onChange={ handleOnChange }
			/>
			{ 1 >= options.length && (
				<Notice type={ 'help' }>
					{ __(
						'分類の取得・表示には時間がかかることがあります。「選択」以外の分類が表示されない場合、この案内が消えるまで少しお待ち下さい。',
						'ystandard-blocks'
					) }
				</Notice>
			) }
		</>
	);
};
export default TaxonomySelect;
