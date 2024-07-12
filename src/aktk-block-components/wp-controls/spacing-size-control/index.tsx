/**
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/block-editor/src/components/spacing-sizes-control
 */
// @ts-expect-error
import { __experimentalSpacingSizesControl as WPSpacingSizesControl } from '@wordpress/block-editor';

export type SpacingSizeValues = {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
};

export interface SpacingSizeControlProps {
	values: SpacingSizeValues;
	onChange: ( newValue: SpacingSizeValues ) => void;
	label?: string;
	sides?: 'top' | 'right' | 'bottom' | 'left';
}

export default function SpacingSizesControl( props: SpacingSizeControlProps ) {
	const { values, onChange, label, sides } = props;
	const controlLabel = label || '';
	return (
		<WPSpacingSizesControl
			values={ values }
			onChange={ onChange }
			label={ controlLabel }
			sides={ sides }
		/>
	);
}
