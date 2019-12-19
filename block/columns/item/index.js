import { ystdbConfig } from '../../../src/js/config/config';
import edit from './edit';
import save from './save';
import icon from './icons';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/column', {
	title: __( 'カラム', 'ystandard-blocks' ),
	description: __( 'yStandard Blocks カラムブロック', 'ystandard-blocks' ),
	icon,
	category: ystdbConfig.category.common,
	attributes,
	supports,
	parent: [ 'ystdb/columns' ],
	edit,
	save,
} );
