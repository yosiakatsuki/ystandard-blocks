import classnames from 'classnames';
/**
 * Block dependencies.
 */
import type { Attributes } from './types';

export function getHeadingClasses( attributes: Attributes ) {
	const { clearStyle } = attributes;
	return classnames( 'ystdb-custom-heading', {
		'is-clear-style': clearStyle,
	} );
}
