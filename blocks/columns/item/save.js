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
import { getResponsivePaddingStyle } from '@aktk/components/responsive-spacing';
import {
	getResponsiveWidthStyle,
	getResponsiveValueStyle,
} from '@aktk/components/responsive-values';
import { getAutoWidthClasses } from './function/auto-width';

export default function save( { attributes } ) {
	const {
		shadow,
		backgroundColor,
		customBackgroundColor,
		padding,
		width,
		isAutoWidth,
		linkTarget,
		rel,
		url,
		screenReaderText,
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
			'has-column-width': !! width,
			...getAutoWidthClasses( isAutoWidth ),
		} ),
		style: {
			backgroundColor: customBackgroundColor
				? customBackgroundColor
				: undefined,
			...getResponsivePaddingStyle( padding ),
			...getResponsiveWidthStyle( width ),
			...getResponsiveValueStyle( 'flex-basis', width ),
		},
	} );

	const containerProps = {
		className: 'ystdb-column-block-container',
	};

	const innerBlocksProps = useInnerBlocksProps.save( containerProps );

	return (
		<div { ...blockProps }>
			<div { ...innerBlocksProps } />
			{ !! url && (
				<a
					href={ url }
					className="ystdb-column__link"
					target={ linkTarget }
					rel={ rel }
				>
					{ screenReaderText && (
						<span className="ystdb-column__link-screen-reader-text">
							{ screenReaderText }
						</span>
					) }
				</a>
			) }
		</div>
	);
}
