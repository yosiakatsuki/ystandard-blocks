import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function ({ attributes }) {
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		reverse,
		removeMargin,
	} = attributes;

	const classes = classnames('ystdb-columns', {
		[`has-${colMobile}-columns`]: colMobile,
		[`has-${colTablet}-columns--tablet`]: colTablet,
		[`has-${colPc}-columns--pc`]: colPc,
		[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
		[`is-horizontally-aligned-${horizonAlignment}`]: horizonAlignment,
		'is-reverse': reverse,
		'is-no-margin': removeMargin,
	});

	const blockProps = useBlockProps.save({
		className: 'ystdb-columns-wrap',
	});

	return (
		<div {...blockProps}>
			<div className={classes}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
