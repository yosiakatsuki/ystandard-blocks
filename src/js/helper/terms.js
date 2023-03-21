import { groupBy } from 'lodash';

export function buildTermsTree(flatTerms) {
	if (!flatTerms) {
		return undefined;
	}
	const flatTermsWithParentAndChildren = flatTerms.map((term) => {
		return {
			children: [],
			parent: null,
			...term,
		};
	});

	const termsByParent = groupBy(flatTermsWithParentAndChildren, 'parent');
	if (termsByParent.null && termsByParent.null.length) {
		return flatTermsWithParentAndChildren;
	}
	const fillWithChildren = (terms) => {
		return terms.map((term) => {
			const children = termsByParent[term.id];
			return {
				...term,
				children:
					children && children.length
						? fillWithChildren(children)
						: [],
			};
		});
	};

	return fillWithChildren(termsByParent['0'] || []);
}

export function sortBySelected(termsTree, terms) {
	if (!termsTree) {
		return undefined;
	}
	const treeHasSelection = (termTree) => {
		if (terms.indexOf(termTree.id) !== -1) {
			return true;
		}
		if (undefined === termTree.children) {
			return false;
		}
		return (
			termTree.children.map(treeHasSelection).filter((child) => child)
				.length > 0
		);
	};
	const termOrChildIsSelected = (termA, termB) => {
		const termASelected = treeHasSelection(termA);
		const termBSelected = treeHasSelection(termB);

		if (termASelected === termBSelected) {
			return 0;
		}

		if (termASelected && !termBSelected) {
			return -1;
		}

		if (!termASelected && termBSelected) {
			return 1;
		}

		return 0;
	};
	const newTermTree = [...termsTree];
	newTermTree.sort(termOrChildIsSelected);
	return newTermTree;
}
