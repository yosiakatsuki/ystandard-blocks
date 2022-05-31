import { ystdbConfig } from '@aktk/config/config';
import edit from './edit';
import save from './save';
import { Info } from 'react-feather';
import transforms from './transforms';
import { attributes, supports } from './config';
import { deprecated } from './deprecated/index';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/svg-icon', {
	title: __( 'アイコン', 'ystandard-blocks' ),
	description: __( 'アイコン表示ブロック', 'ystandard-blocks' ),
	icon: (
		<Info
			stroke={ ystdbConfig.color.iconForeground }
			style={ { fill: 'none' } }
		/>
	),
	keywords: [ __( 'icon' ), __( 'アイコン' ), 'icon', 'fa' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	deprecated,
	transforms,
	example: {},
} );
