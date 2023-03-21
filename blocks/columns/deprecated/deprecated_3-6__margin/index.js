/* eslint-disable camelcase */
import classnames from 'classnames';
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';
import {
	getResponsiveGapStyle,
	getResponsiveMarginStyle,
} from '@aktk/components/responsive-spacing';
import { getColumnGapCustomProperty } from '../../functions/gap';
import metadata from './block.deprecated.json';

export const deprecated_3_6__margin = [
	{
		attributes: metadata.attributes,
		supports: metadata.supports,
		save({ attributes }) {
			const {
				colPc,
				colTablet,
				colMobile,
				verticalAlignment,
				horizonAlignment,
				reverse,
				gap,
				margin,
			} = attributes;

			const blockProps = useBlockProps.save({
				className: 'ystdb-columns-wrap',
			});

			const columnBlocksProps = {
				className: classnames('ystdb-columns', {
					[`has-${colMobile}-columns`]: colMobile,
					[`has-${colTablet}-columns--tablet`]: colTablet,
					[`has-${colPc}-columns--pc`]: colPc,
					[`is-vertically-aligned-${verticalAlignment}`]:
						verticalAlignment,
					[`is-horizontally-aligned-${horizonAlignment}`]:
						horizonAlignment,
					'is-reverse': reverse,
				}),
				style: {
					...getColumnGapCustomProperty(gap),
					...getResponsiveGapStyle(gap),
					...getResponsiveMarginStyle(margin),
				},
			};

			const innerBlocksProps =
				useInnerBlocksProps.save(columnBlocksProps);

			return (
				<div {...blockProps}>
					<div {...innerBlocksProps} />
				</div>
			);
		},
	},
];
