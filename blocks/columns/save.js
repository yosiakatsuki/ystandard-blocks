import classnames from 'classnames';
/**
 * WorPress.
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

export default function ( { attributes } ) {
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		reverse,
		removeMargin,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'ystdb-columns-wrap',
	} );

	const columnBlocksProps = {
		className: classnames( 'ystdb-columns', {
			[ `has-${ colMobile }-columns` ]: colMobile,
			[ `has-${ colTablet }-columns--tablet` ]: colTablet,
			[ `has-${ colPc }-columns--pc` ]: colPc,
			[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
			[ `is-horizontally-aligned-${ horizonAlignment }` ]: horizonAlignment,
			'is-reverse': reverse,
			'is-no-margin': removeMargin,
		} ),
	};

	const innerBlocksProps = useInnerBlocksProps.save( columnBlocksProps );

	return (
		<div { ...blockProps }>
			<div { ...innerBlocksProps } />
		</div>
	);
}
