/**
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/spacing-sizes-control
 */

import {
	// @ts-expect-error
	__experimentalSpacingSizesControl as WPSpacingSizesControl,
} from '@wordpress/block-editor';

export {
	// @ts-expect-error
	getCustomValueFromPreset,
} from '@wordpress/block-editor';

export type SpacingSizeValues = {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
};

export interface SpacingSizeControlProps {
	values: SpacingSizeValues | undefined;
	onChange: ( newValue: SpacingSizeValues ) => void;
	label?: string;
	sides?: (
		| 'top'
		| 'right'
		| 'bottom'
		| 'left'
		| 'horizontal'
		| 'vertical'
	)[];
	minimumCustomValue?: number;
}

export default function SpacingSizesControl( props: SpacingSizeControlProps ) {
	const {
		values,
		onChange,
		label,
		sides = [ 'top', 'right', 'bottom', 'left' ],
		minimumCustomValue = 0,
	} = props;
	const controlLabel = label || '';
	return (
		<WPSpacingSizesControl
			values={ values }
			onChange={ onChange }
			label={ controlLabel }
			sides={ sides }
			minimumCustomValue={ minimumCustomValue }
		/>
	);
}
