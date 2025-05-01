import { RadioControl as WPRadioControl } from '@wordpress/components';

interface RadioControlProps {
	label: string;
	help?: string;
	selected: string;
	options: Array< {
		label: string;
		value: string;
	} >;
	onChange: ( value: string ) => void;
}

export default function RadioControl( props: RadioControlProps ) {
	return <WPRadioControl { ...props } />;
}
