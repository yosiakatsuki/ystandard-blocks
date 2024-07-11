import { alignCenter, alignLeft, alignRight } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

export const TEXT_ALIGNMENT_OPTIONS = [
	{
		icon: alignLeft,
		title: __( '左揃え', 'ystandard-toolbox' ),
		align: 'left',
	},
	{
		icon: alignCenter,
		title: __( '中央揃え', 'ystandard-toolbox' ),
		align: 'center',
	},
	{
		icon: alignRight,
		title: __( '右揃え', 'ystandard-toolbox' ),
		align: 'right',
	},
];
