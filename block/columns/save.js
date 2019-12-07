import {
	InnerBlocks,
} from '@wordpress/block-editor';
import classnames from 'classnames';

export default function( { attributes } ) {
	const {
		col_pc,
		col_tablet,
		col_mobile,
		verticalAlignment,
	} = attributes;

	const classes = classnames(
		'ystdb-columns',
		{
			[ `has-${ col_mobile }-columns` ]: col_mobile,
			[ `has-${ col_tablet }-columns--tablet` ]: col_tablet,
			[ `has-${ col_pc }-columns--pc` ]: col_pc,
			[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
		}
	);
	return (
		<div className="ystdb-columns-wrap">
			<div className={ classes }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
