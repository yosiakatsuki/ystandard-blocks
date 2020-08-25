import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function ( { attributes } ) {
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		columnDirection,
	} = attributes;

	const classes = classnames( 'ystdb-columns', {
		[ `has-${ colMobile }-columns` ]: colMobile,
		[ `has-${ colTablet }-columns--tablet` ]: colTablet,
		[ `has-${ colPc }-columns--pc` ]: colPc,
		[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
		[ `is-horizontally-aligned-${ horizonAlignment }` ]: horizonAlignment,
	} );

	const style = {
		flexDirection: '' !== columnDirection ? columnDirection : undefined,
	};
	return (
		<div className="ystdb-columns-wrap">
			<div className={ classes } style={ style }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
