import classnames from 'classnames';

import { InnerBlocks, getColorClassName } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { shadow, backgroundColor, customBackgroundColor } = attributes;

	const backgroundClass = getColorClassName( 'background-color', backgroundColor );

	const wrapperClasses = classnames(
		'ystdb-column',
		{
			'has-background': backgroundClass || customBackgroundColor,
			[ backgroundClass ]: backgroundClass,
			'has-shadow': shadow,
		}
	);
	const wrapperStyle = {
		backgroundColor: customBackgroundColor ? customBackgroundColor : undefined,
	};

	return (
		<div className={ wrapperClasses } style={ wrapperStyle }>
			<div className="ystdb-column-block-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
