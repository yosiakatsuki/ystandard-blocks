/**
 * External dependencies
 */
import clsx from 'clsx';

type BlockClassesProps = {
	className?: string;
};

// @ts-ignore
export function getBlockClasses( attributes: BlockClassesProps ) {
	const { className } = attributes;
	return clsx( 'ystdb-heading', className, {} );
}

type BlockTextClassesProps = {
	clearStyle?: boolean;
};

export function getBlockTextClasses( attributes: BlockTextClassesProps ) {
	const { clearStyle = true } = attributes;
	return clsx( 'ystdb-heading__text', { 'is-clear-style': clearStyle } );
}
