/**
 * removeMargin削除 -> gapへ変更.
 */
import classnames from 'classnames';
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

export const deprecated34 = [
	{
		attributes: metadata.attributes,
		supports: metadata.supports,
		migrate( attributes ) {
			let newAttributes = attributes;
			newAttributes = migrateRemoveMargin( newAttributes );
			return newAttributes;
		},
		save( { attributes } ) {
			const {
				colPc,
				colTablet,
				colMobile,
				verticalAlignment,
				horizonAlignment,
				reverse,
				removeMargin,
			} = attributes;

			const blockProps = useBlockProps.save( {
				className: 'ystdb-columns-wrap',
			} );

			const columnBlocksProps = {
				className: classnames( 'ystdb-columns', {
					[ `has-${ colMobile }-columns` ]: colMobile,
					[ `has-${ colTablet }-columns--tablet` ]: colTablet,
					[ `has-${ colPc }-columns--pc` ]: colPc,
					[ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
					[ `is-horizontally-aligned-${ horizonAlignment }` ]: horizonAlignment,
					'is-reverse': reverse,
					'is-no-margin': removeMargin,
				} ),
			};

			const innerBlocksProps = useInnerBlocksProps.save(
				columnBlocksProps
			);

			return (
				<div { ...blockProps }>
					<div { ...innerBlocksProps } />
				</div>
			);
		},
	},
];

export function migrateRemoveMargin( attributes ) {
	let newAttributes = attributes;
	if ( !! newAttributes?.removeMargin ) {
		newAttributes = {
			...newAttributes,
			...{
				gap: {
					desktop: {
						top: '0px',
						right: '0px',
						bottom: '0px',
						left: '0px',
					},
				},
			},
		};
		delete newAttributes.removeMargin;
	}
	if ( newAttributes?.className ) {
		newAttributes = {
			...newAttributes,
			...{
				className: newAttributes.className.replace(
					'is-no-margin',
					''
				),
			},
		};
	}

	return newAttributes;
}
