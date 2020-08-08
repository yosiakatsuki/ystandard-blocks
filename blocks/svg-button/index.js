import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { Link2 } from 'react-feather';
import transforms from './transforms';
import deprecated from './deprecated';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/svg-button', {
	title: __( 'カスタムボタン', 'ystandard-blocks' ),
	description: __( 'yStandard Blocks カスタムボタン', 'ystandard-blocks' ),
	icon: (
		<Link2
			stroke={ ystdbConfig.color.iconForeground }
			style={ { fill: 'none' } }
		/>
	),
	keywords: [ __( 'button' ), __( 'ボタン' ), 'btn', 'button' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	styles: [
		{ name: 'fill', label: __( '塗りつぶし' ), isDefault: true },
		{ name: 'outline', label: __( 'アウトライン' ) },
	],
	edit,
	save,
	transforms,
	deprecated,
} );
