import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	useInnerBlocksProps,
	getColorClassName,
	useBlockProps,
} from '@wordpress/block-editor';
/**
 * yStandard.
 */
import { getResponsivePaddingStyle } from '@ystd/components/responsive-spacing';

export default function save( { attributes } ) {
	const {
		shadow,
		backgroundColor,
		customBackgroundColor,
		padding,
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
		} ),
		style: {
			backgroundColor: customBackgroundColor
				? customBackgroundColor
				: undefined,
			...getResponsivePaddingStyle( padding ),
		},
	} );

	const containerProps = { className: 'ystdb-column-block-container' };

	const innerBlocksProps = useInnerBlocksProps.save( containerProps );

	return (
		<div { ...blockProps }>
			<div { ...innerBlocksProps } />
		</div>
	);
}
