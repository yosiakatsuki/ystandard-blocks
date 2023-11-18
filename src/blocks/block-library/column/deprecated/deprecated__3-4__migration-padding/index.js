/* eslint-disable camelcase */
import classnames from 'classnames';
import metadata from './block.json';
import {
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { migratePadding } from './util';

export const deprecated__34__migrationPadding = [
	{
		...metadata,
		migrate(attributes) {
			return migratePadding(attributes);
		},
		save({ attributes }) {
			const {
				shadow,
				backgroundColor,
				customBackgroundColor,
				paddingType,
			} = attributes;

			const backgroundClass = getColorClassName(
				'background-color',
				backgroundColor
			);

			const blockProps = useBlockProps.save({
				className: classnames('ystdb-column', {
					'has-background': backgroundClass || customBackgroundColor,
					[backgroundClass]: backgroundClass,
					'has-shadow': shadow,
					[paddingType]: paddingType,
				}),
				style: {
					backgroundColor: customBackgroundColor
						? customBackgroundColor
						: undefined,
				},
			});

			const containerProps = {
				className: 'ystdb-column-block-container',
			};

			const innerBlocksProps = useInnerBlocksProps.save(containerProps);

			return (
				<div {...blockProps}>
					<div {...innerBlocksProps} />
				</div>
			);
		},
	},
];
