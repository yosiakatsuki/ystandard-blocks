import classnames from 'classnames';
/**
 * WorPress.
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
/**
 * yStandard.
 */
import {
	getResponsiveGapStyle,
	getResponsiveMarginStyle,
} from '@aktk/blocks/deprecated/components/responsive-spacing';
import { getColumnGapCustomProperty } from './functions/gap';

// @ts-ignore
export default function ( { attributes } ) {
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		reverse,
		gap,
		margin,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'ystdb-columns-wrap',
		style: {
			...getResponsiveMarginStyle( margin ),
		},
	} );

	const columnBlocksProps = {
		className: classnames( 'ystdb-columns', {
			[ `has-${ colMobile }-columns` ]: colMobile,
			[ `has-${ colTablet }-columns--tablet` ]: colTablet,
			[ `has-${ colPc }-columns--pc` ]: colPc,
			[ `is-vertically-aligned-${ verticalAlignment }` ]:
				verticalAlignment,
			[ `is-horizontally-aligned-${ horizonAlignment }` ]:
				horizonAlignment,
			'is-reverse': reverse,
		} ),
		style: {
			...getColumnGapCustomProperty( gap ),
			...getResponsiveGapStyle( gap ),
		},
	};

	const innerBlocksProps = useInnerBlocksProps.save( columnBlocksProps );

	return (
		<div { ...blockProps }>
			<div { ...innerBlocksProps } />
		</div>
	);
}
