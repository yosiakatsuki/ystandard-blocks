import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { blockIcon } from './icons';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/columns', {
	title: __( '[ys]カスタムカラム', 'ystandard-blocks' ),
	description: __( 'yStandard Blocks カラムブロック', 'ystandard-blocks' ),
	icon: blockIcon,
	keywords: [ __( 'column' ), __( 'カラム' ), 'column', 'col' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
} );