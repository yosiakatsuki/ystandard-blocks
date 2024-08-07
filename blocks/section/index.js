import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { Layers } from 'react-feather';
import { attributes, supports } from './config';
import { deprecated } from './deprecated/index';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/section', {
	apiVersion: 2,
	title: __( 'セクション', 'ystandard-blocks' ),
	description: __(
		'yStandard Blocks汎用セクションブロック',
		'ystandard-blocks'
	),
	icon: (
		<Layers
			stroke={ ystdbConfig.color.iconForeground }
			style={ { fill: 'none' } }
		/>
	),
	keywords: [ __( 'section' ), __( 'セクション' ), 'section' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	deprecated,
	example: {},
} );
