import { unescape as unescapeString, without } from 'lodash';

/**
 * WordPress
 */
import { CheckboxControl } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
/**
 * yStandard
 */
import Notice from '@aktk/components/notice';
import { sortBySelected, buildTermsTree } from '@aktk/helper/terms';
import { isEmptyArray } from '@aktk/helper/array.js';

const HierarchicalTermSelector = ( { taxonomy, selectedTerms, onChange } ) => {
	const _selectedTerms = selectedTerms || [];
	const { availableTerms } = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const _terms =
			getEntityRecords( 'taxonomy', taxonomy, {
				per_page: -1,
			} ) || [];
		return {
			availableTerms: _terms || [],
		};
	} );
	const termsTree = useMemo(
		() =>
			sortBySelected( buildTermsTree( availableTerms ), _selectedTerms ),
		[ availableTerms ]
	);
	const onChangeCheckbox = ( termId ) => {
		const hasTerm = _selectedTerms.includes( termId );
		const newTerms = hasTerm
			? without( _selectedTerms, termId )
			: [ ..._selectedTerms, termId ];
		onChange( newTerms );
	};
	const renderTerms = ( renderedTerms ) => {
		return renderedTerms.map( ( term ) => {
			return (
				<div
					key={ term.id }
					className="aktk-hierarchical-terms-list__choice"
				>
					<CheckboxControl
						checked={ _selectedTerms.indexOf( term.id ) !== -1 }
						onChange={ () => {
							const termId = parseInt( term.id, 10 );
							onChangeCheckbox( termId );
						} }
						label={ unescapeString( term.name ) }
					/>
					{ !! term.children.length && (
						<div className="aktk-hierarchical-terms-list__subchoices">
							{ renderTerms( term.children ) }
						</div>
					) }
				</div>
			);
		} );
	};
	const renderTermsTree = termsTree;
	return (
		<>
			{ !! taxonomy && (
				<div
					className="aktk-hierarchical-terms-list"
					tabIndex="0"
					role="group"
					aria-label={ 'Terms' }
				>
					{ ! isEmptyArray( renderTermsTree ) &&
						renderTerms( renderTermsTree ) }
					{ isEmptyArray( renderTermsTree ) && (
						<Notice type={ 'help' }>
							{ __(
								'選択できる項目がありません。',
								'ystandard-blocks'
							) }
						</Notice>
					) }
				</div>
			) }
		</>
	);
};

export default HierarchicalTermSelector;
