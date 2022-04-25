import classnames from 'classnames';
/**
 * WordPress.
 */
import {
	InnerBlocks,
	useBlockProps,
	withColors,
} from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
/**
 * yStandard.
 */
import { default as InspectorControls } from './inspector-controls';

function ColumnEdit( props ) {
	const { attributes, backgroundColor, hasChildBlocks, className } = props;
	const { shadow, paddingType } = attributes;

	const blockProps = useBlockProps( {
		className: classnames( 'ystdb-column', className, {
			'has-background': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			'has-shadow': shadow,
			[ paddingType ]: paddingType,
		} ),
		style: {
			backgroundColor: backgroundColor.color,
		},
	} );

	return (
		<>
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<div className="ystdb-column-block-container">
					<InnerBlocks
						templateLock={ false }
						renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</div>
		</>
	);
}

export default compose( [
	withColors( 'backgroundColor' ),
	withSelect( ( select, ownProps ) => {
		const { clientId } = ownProps;
		const { getBlockOrder } = select( 'core/block-editor' );

		return {
			hasChildBlocks: getBlockOrder( clientId ).length > 0,
		};
	} ),
] )( ColumnEdit );
