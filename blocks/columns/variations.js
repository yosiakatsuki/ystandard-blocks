import { __ } from '@wordpress/i18n';
import { Grid } from 'react-feather';
import { ystdbConfig } from '@aktk/config';

const icon = (
	<Grid
		stroke={ ystdbConfig.color.iconForeground }
		strokeWidth={ '1px' }
		style={ { fill: 'none' } }
	/>
);

const variations = [
	{
		name: 'column-2',
		title: __( '2列', 'ystandard-toolbox' ),
		description: __( '2列', 'ystandard-toolbox' ),
		icon,
		attributes: {
			colPc: 2,
			colTablet: 2,
			colMobile: 1,
		},
		innerBlocks: [ [ 'ystdb/column' ], [ 'ystdb/column' ] ],
		scope: [ 'block' ],
	},
	{
		name: 'column-3',
		title: __( '3列', 'ystandard-toolbox' ),
		description: __( '3列', 'ystandard-toolbox' ),
		isDefault: true,
		icon,
		attributes: {
			colPc: 3,
			colTablet: 3,
			colMobile: 1,
		},
		innerBlocks: [
			[ 'ystdb/column' ],
			[ 'ystdb/column' ],
			[ 'ystdb/column' ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'column-4',
		title: __( '4列', 'ystandard-toolbox' ),
		description: __( '4列', 'ystandard-toolbox' ),
		icon,
		attributes: {
			colPc: 4,
			colTablet: 2,
			colMobile: 1,
		},
		innerBlocks: [
			[ 'ystdb/column' ],
			[ 'ystdb/column' ],
			[ 'ystdb/column' ],
			[ 'ystdb/column' ],
		],
		scope: [ 'block' ],
	},
];
export default variations;
