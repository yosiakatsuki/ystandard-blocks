/**
 * WordPress.
 */
import { useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Spinner } from '@wordpress/components';
// @ts-expect-error
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';
/**
 * Plugin.
 */
import Notice from '@aktk/blocks/components/notice';
import CustomSelectControl, {
	CustomSelectControlOption,
} from '@aktk/blocks/components/custom-select-control';

export interface TaxonomySelectProps {
	label: string;
	value: string;
	onChange: ( value: string ) => void;
	postType?: string | undefined;
	allTaxonomies?: boolean;
}

export default function TaxonomySelect( {
	label,
	value,
	postType,
	onChange,
	allTaxonomies,
}: TaxonomySelectProps ) {
	// @ts-expect-error
	const { selectedPostType, taxonomy, hasResolved } = useSelect(
		( select ) => {
			const { getPostType, getTaxonomies } = select( coreStore );
			const _taxonomies = getTaxonomies( { per_page: -1 } ) || [];
			const hasResolvedPostType = select(
				coreStore
			).hasFinishedResolution( 'getPostType', [ postType ] );
			const hasResolvedTaxonomies = select(
				coreStore
			).hasFinishedResolution( 'getTaxonomies', [ { per_page: -1 } ] );
			return {
				selectedPostType: getPostType( postType ),
				// @ts-expect-error
				taxonomy: _taxonomies.filter( ( item ) => {
					return item?.visibility?.show_ui;
				} ),
				hasResolved: hasResolvedPostType && hasResolvedTaxonomies,
			};
		}
	);
	// @ts-expect-error
	const getTaxonomyNames = ( taxonomies ) => {
		// @ts-expect-error
		return taxonomies.map( ( item ) => {
			return item?.slug;
		} );
	};

	const taxonomies = useMemo( () => {
		return true === allTaxonomies
			? getTaxonomyNames( taxonomy ) || []
			: selectedPostType?.taxonomies || [];
	}, [ selectedPostType, taxonomy, allTaxonomies ] );

	const options = useMemo( () => {
		// @ts-expect-error
		return taxonomies.map( ( item ) => {
			// @ts-expect-error
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
		} );
	}, [ taxonomy, taxonomies ] ) as CustomSelectControlOption[];

	const handleOnChange = ( newValue: string ) => {
		onChange( newValue );
	};

	return (
		<>
			{ hasResolved ? (
				<>
					{ 1 <= options.length ? (
						<CustomSelectControl
							className={ 'aktk-taxonomy-select' }
							label={ label }
							value={ value }
							options={ options }
							onChange={ handleOnChange }
							// @ts-ignore
							__nextUnconstrainedWidth
						/>
					) : (
						<Notice type={ 'help' }>
							{ __(
								'選択できる項目がありません。',
								'ystandard-blocks'
							) }
						</Notice>
					) }
				</>
			) : (
				<Spinner />
			) }
		</>
	);
}
