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
import { getResponsivePaddingStyle } from '@aktk/components/responsive-spacing';
import {
	getResponsiveValueStyle,
	getResponsiveWidthStyle,
} from '@aktk/components/responsive-values';
/**
 * Block.
 */
import { default as InspectorControls } from './inspector-controls';
import { getAutoWidthClasses } from './function/auto-width';

function ColumnEdit( props ) {
	const { attributes, backgroundColor, className } = props;
	const { shadow, padding, width, isAutoWidth } = attributes;

	const blockProps = useBlockProps( {
		className: classnames( 'ystdb-column', className, {
			'has-background': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			'has-shadow': shadow,
			'has-column-width': !! width,
			...getAutoWidthClasses( isAutoWidth ),
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
