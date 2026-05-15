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
 * Block.
 */
import edit from './edit';
import transforms from './transforms';
// @ts-ignore
import metadata from './block.json';
import './style.scss';

// @ts-ignore
registerBlockType( metadata.name, {
	icon: (
		<CreditCard
			stroke={ COLORS.iconForeground }
			style={ { fill: 'none' } }
		/>
	),
	edit,
	save: () => null,
	transforms,
	example: {
		attributes: {
			url: 'https://wp-ystandard.com/',
		},
	},
} );
