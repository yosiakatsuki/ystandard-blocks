import { __experimentalNumberControl as WPNumberControl } from '@wordpress/components';

interface NumberControlProps {
	label?: string;
	value: number | string;
	min?: number;
	max?: number;
	step?: number;
	onChange: ( value?: number | string ) => void;
	allowReset?: boolean;
	shiftStep?: number;
}

export default function NumberControl( props: NumberControlProps ) {
	return <WPNumberControl { ...props } __next40pxDefaultSize />;
}
