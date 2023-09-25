// @ts-ignore
import { __experimentalSpacingSizesControl as WPSpacingSizeControl } from '@wordpress/block-editor';

type SpacingValue = {
	top: string | undefined;
	right: string | undefined;
	bottom: string | undefined;
	left: string | undefined;
};

interface SpacingSizeProps {
	inputProps?: object;
	label?: string;
	minimumCustomValue?: number;
	onChange: (value: string | undefined) => void;
	onMouseOut?: () => void;
	onMouseOver?: () => void;
	showSideInLabel?: boolean;
	sides?: string[];
	values?: SpacingValue;
}

export function SpacingSize(props: SpacingSizeProps) {
	return <WPSpacingSizeControl {...props} />;
}
