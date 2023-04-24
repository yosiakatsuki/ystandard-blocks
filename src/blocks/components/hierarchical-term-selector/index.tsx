import { unescape as unescapeString, without } from 'lodash';

/**
 * WordPress
 */
import { CheckboxControl, Spinner } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
// @ts-expect-error
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
/**
 * Plugin
 */
import Notice from '@aktk/blocks/components/notice';
import {
	sortBySelected,
	buildTermsTree,
	isEmptyArray,
} from '@aktk/blocks/util';

export interface HierarchicalTermSelectorProps {
	taxonomy: string;
	selectedTerms: string[];
	onChange: (value: string[]) => void;
}

export default function HierarchicalTermSelector({
	taxonomy,
	selectedTerms,
	onChange,
}: HierarchicalTermSelectorProps) {
	const _selectedTerms = useMemo(() => selectedTerms || [], [selectedTerms]);
	// @ts-expect-error
	const { availableTerms, hasResolved } = useSelect((select) => {
		// @ts-expect-error
		const { getEntityRecords } = select(coreStore);
		const _terms =
			getEntityRecords('taxonomy', taxonomy, {
				per_page: -1,
			}) || [];
		return {
			availableTerms: _terms || [],
			hasResolved:
				// @ts-expect-error
				select(coreStore).hasFinishedResolution('getEntityRecords', [
					'taxonomy',
					taxonomy,
					{ per_page: -1 },
				]) || false,
		};
	});
	const termsTree = useMemo(
		() => sortBySelected(buildTermsTree(availableTerms), _selectedTerms),
		[availableTerms, _selectedTerms]
	);
	// @ts-expect-error
	const onChangeCheckbox = (termId) => {
		const hasTerm = _selectedTerms.includes(termId);
		const newTerms = hasTerm
			? without(_selectedTerms, termId)
			: [..._selectedTerms, termId];
		onChange(newTerms);
	};
	// @ts-expect-error
	const renderTerms = (renderedTerms) => {
		// @ts-expect-error
		return renderedTerms.map((term) => {
			return (
				<div
					key={term.id}
					className="aktk-hierarchical-terms-list__choice"
				>
					<CheckboxControl
						checked={_selectedTerms.indexOf(term.id) !== -1}
						onChange={() => {
							const termId = parseInt(term.id, 10);
							onChangeCheckbox(termId);
						}}
						label={unescapeString(term.name)}
					/>
					{!!term.children.length && (
						<div className="aktk-hierarchical-terms-list__subchoices">
							{renderTerms(term.children)}
						</div>
					)}
				</div>
			);
		});
	};
	return (
		<>
			{!!taxonomy && (
				<div
					className="aktk-hierarchical-terms-list"
					tabIndex={0}
					role="group"
					aria-label={'Terms'}
				>
					{isEmptyArray(termsTree) ? (
						<>
							{hasResolved ? (
								<Notice type={'help'}>
									{__(
										'選択できる項目がありません。',
										'ystandard-blocks'
									)}
								</Notice>
							) : (
								<Spinner />
							)}
						</>
					) : (
						<>{renderTerms(termsTree)}</>
					)}
				</div>
			)}
		</>
	);
}
