import classnames from 'classnames';
/**
 * WordPress.
 */
import { withDispatch } from '@wordpress/data';
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
/**
 * yStandard.
 */
import { getResponsiveGapStyle } from '@ystd/components/responsive-spacing';
/**
 * Block.
 */
import { default as BlockControls } from './block-controls';
import { default as InspectorControls } from './inspector-controls';
import { getColumnGapCustomProperty } from './functions/gap';

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
		gap,
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
		} ),
		style: {
			...getColumnGapCustomProperty( gap ),
			...getResponsiveGapStyle( gap ),
		},
	};

	const innerBlocksProps = useInnerBlocksProps( columnsProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
		templateLock: false,
		orientation: 'horizontal',
	} );

	return (
		<>
			<BlockControls { ...props } />
			<InspectorControls { ...props } />

			<div { ...blockProps }>
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
}

const columnsEdit = withDispatch( ( dispatch, ownProps, registry ) => ( {
	updateColumnAttributes( attributes ) {
		const { clientId } = ownProps;
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );
		const { getBlockOrder } = registry.select( 'core/block-editor' );
		const innerBlockClientIds = getBlockOrder( clientId );
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, attributes );
		} );
	},
} ) )( Columns );

export default columnsEdit;
