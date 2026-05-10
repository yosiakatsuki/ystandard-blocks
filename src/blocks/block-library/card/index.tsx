import { CreditCard } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * aktk
 */
import { COLORS } from '@aktk/block-components/config';

/**
 * Plugin.
 */
import { mergeDefaultAttributes } from '@aktk/blocks/utils';
/**
 * Block.
 */
import edit from './edit';
import transforms from './transforms';
// @ts-ignore
import metadata from './block.json';
import './style.scss';

const attributes = mergeDefaultAttributes( metadata.name, metadata.attributes );

// @ts-ignore
registerBlockType( metadata.name, {
	...metadata,
	icon: (
		<CreditCard
			stroke={ COLORS.iconForeground }
			style={ { fill: 'none' } }
		/>
	),
	attributes,
	edit,
	save: () => null,
	transforms,
	example: {
		attributes: {
			url: 'https://wp-ystandard.com/',
		},
	},
} );
