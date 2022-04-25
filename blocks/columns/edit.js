import classnames from 'classnames';
/**
 * WordPress.
 */
import { withDispatch } from '@wordpress/data';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
/**
 * yStandard.
 */

/**
 * Block.
 */
import { default as BlockControls } from './block-controls';
import { default as InspectorControls } from './inspector-controls';

const ALLOWED_BLOCKS = [ 'ystdb/column' ];
const TEMPLATE = [
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ],
];

function Columns( props ) {
	const { attributes, className } = props;
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		removeMargin,
	} = attributes;

	const blockProps = useBlockProps( {
		className: classnames( className, 'ystdb-columns-wrap' ),
	} );

	const columnsProps = {
		className: classnames( 'ystdb-columns', {
			[ `has-${ colMobile }-columns` ]: colMobile,
			[ `has-${ colTablet }-columns--tablet` ]: colTablet,
			[ `has-${ colPc }-columns--pc` ]: colPc,
			[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
			[ `is-horizontally-aligned-${ horizonAlignment }` ]: horizonAlignment,
			'is-no-margin': removeMargin,
		} ),
	};

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<div { ...columnsProps }>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
						templateLock={ false }
					/>
				</div>
			</div>
		</>
	);
}

const columnsEdit = withDispatch( ( dispatch, ownProps, registry ) => ( {
	updatePadding( paddingType ) {
		const { clientId } = ownProps;
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );
		const { getBlockOrder } = registry.select( 'core/block-editor' );
		const innerBlockClientIds = getBlockOrder( clientId );
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, paddingType );
		} );
	},
	updateBoxShadow( shadow ) {
		const { clientId } = ownProps;
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );
		const { getBlockOrder } = registry.select( 'core/block-editor' );
		const innerBlockClientIds = getBlockOrder( clientId );
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, { shadow } );
		} );
	},
} ) )( Columns );

export default columnsEdit;
