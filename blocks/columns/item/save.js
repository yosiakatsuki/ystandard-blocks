import classnames from 'classnames';

import {
	InnerBlocks,
	getColorClassName,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		shadow,
		backgroundColor,
		customBackgroundColor,
		paddingType,
	} = attributes;

	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const blockProps = useBlockProps.save( {
		className: classnames( 'ystdb-column', {
			'has-background': backgroundClass || customBackgroundColor,
			[ backgroundClass ]: backgroundClass,
			'has-shadow': shadow,
			[ paddingType ]: paddingType,
		} ),
		style: {
			backgroundColor: customBackgroundColor
				? customBackgroundColor
				: undefined,
		},
	} );

	return (
		<div { ...blockProps }>
			<div className="ystdb-column-block-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
