import classnames from 'classnames';
/**
 * WordPress.
 */
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import {
	useInnerBlocksProps,
	useBlockProps,
	store as blockEditorStore
} from '@wordpress/block-editor';
import {
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore
} from '@wordpress/blocks';
/**
 * yStandard.
 */
import {
	getResponsiveGapStyle,
	getResponsiveMarginStyle
} from '@aktk/blocks-old/components/responsive-spacing';
import BlockVariationPicker from '@aktk/block-components/block-variation-picker';
/**
 * Block.
 */
import { default as BlockControls } from './block-controls';
import { default as InspectorControls } from './inspector-controls';
import { getColumnGapCustomProperty } from './functions/gap';
import './editor.scss';

const ALLOWED_BLOCKS = [ 'ystdb/column' ];
const TEMPLATE = [
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ],
	[ 'ystdb/column', {} ]
];

// @ts-ignore
function ColumnsEditContainer( props ) {
	const { attributes, className } = props;
	const {
		colPc,
		colTablet,
		colMobile,
		verticalAlignment,
		horizonAlignment,
		gap,
		margin
	} = attributes;

	const blockProps = useBlockProps( {
		className: classnames( className, 'ystdb-columns-wrap' ),
		style: {
			...getResponsiveMarginStyle( margin )
		}
	} );

	const columnsProps = {
		className: classnames( 'ystdb-columns', {
			[ `has-${ colMobile }-columns` ]: colMobile,
			[ `has-${ colTablet }-columns--tablet` ]: colTablet,
			[ `has-${ colPc }-columns--pc` ]: colPc,
			[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
			[ `is-horizontally-aligned-${ horizonAlignment }` ]: horizonAlignment
		} ),
		style: {
			...getColumnGapCustomProperty( gap ),
			...getResponsiveGapStyle( gap )
		}
	};

	const innerBlocksProps = useInnerBlocksProps( columnsProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		// @ts-ignore
		template: TEMPLATE,
		templateLock: false,
		orientation: 'horizontal'
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

// @ts-ignore
const ColumnsEditContainerWrapper = withDispatch(
	// @ts-ignore
	( dispatch, ownProps, registry ) => ({
		// @ts-ignore
		updateColumnAttributes( attributes ) {
			const { clientId } = ownProps;
			const { updateBlockAttributes } = dispatch( 'core/block-editor' );
			const { getBlockOrder } = registry.select( 'core/block-editor' );
			const innerBlockClientIds = getBlockOrder( clientId );
			// @ts-ignore
			innerBlockClientIds.forEach( ( innerBlockClientId ) => {
				updateBlockAttributes( innerBlockClientId, attributes );
			} );
		}
	})
)( ColumnsEditContainer );

// @ts-ignore
function Placeholder( { clientId, name, setAttributes } ) {
	const { blockType, defaultVariation, variations } = useSelect(
		( select ) => {
			const {
				// @ts-ignore
				getBlockVariations,
				// @ts-ignore
				getBlockType,
				// @ts-ignore
				getDefaultBlockVariation
			} = select( blocksStore );

			return {
				blockType: getBlockType( name ),
				defaultVariation: getDefaultBlockVariation( name, 'block' ),
				variations: getBlockVariations( name, 'block' )
			};
		},
		[ name ]
	);
	const { replaceInnerBlocks } = useDispatch( blockEditorStore );
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<BlockVariationPicker
				icon={ blockType?.icon?.src }
				label={ blockType?.title }
				variations={ variations }
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
					if ( nextVariation.innerBlocks ) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(
								nextVariation.innerBlocks
							),
							true
						);
					}
				} }
				allowSkip
			/>
		</div>
	);
}

// @ts-ignore
const ColumnsEdit = ( props ) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		// @ts-ignore
		( select ) => select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	const Component = hasInnerBlocks
		? ColumnsEditContainerWrapper
		: Placeholder;

	return <Component { ...props } />;
};

export default ColumnsEdit;
