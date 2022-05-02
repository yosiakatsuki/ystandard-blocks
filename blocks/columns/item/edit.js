import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks,
	withColors,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
/**
 * yStandard.
 */
import { getResponsivePaddingStyle } from '@ystd/components/responsive-spacing';
import {
	getResponsiveValueStyle,
	getResponsiveWidthStyle,
} from '@ystd/components/responsive-values';
/**
 * Block.
 */
import { default as InspectorControls } from './inspector-controls';

function ColumnEdit( props ) {
	const { attributes, backgroundColor, className } = props;
	const { shadow, padding, width } = attributes;

	const blockProps = useBlockProps( {
		className: classnames( 'ystdb-column', className, {
			'has-background': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			'has-shadow': shadow,
		} ),
		style: {
			backgroundColor: backgroundColor.color,
			...getResponsivePaddingStyle( padding ),
			...getResponsiveWidthStyle( width ),
			...getResponsiveValueStyle( 'flex-basis', width ),
		},
	} );

	const containerProps = { className: 'ystdb-column-block-container' };

	const innerBlocksProps = useInnerBlocksProps( containerProps, {
		templateLock: false,
		renderAppender: () => <InnerBlocks.ButtonBlockAppender />,
	} );

	return (
		<>
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
}

export default compose( [ withColors( 'backgroundColor' ) ] )( ColumnEdit );
