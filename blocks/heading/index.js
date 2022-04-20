import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { Bookmark } from 'react-feather';
import transforms from './transforms';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { deprecated } from './deprecated/index';

registerBlockType( 'ystdb/heading', {
	title: __( 'カスタム見出し', 'ystandard-blocks' ),
	description: __( 'カスタム見出しブロック', 'ystandard-blocks' ),
	icon: (
		<Bookmark
			stroke={ ystdbConfig.color.iconForeground }
			style={ { fill: 'none' } }
		/>
	),
	keywords: [ __( 'heading' ), __( '見出し' ), 'head' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	transforms,
	deprecated,
	example: {},
} );
