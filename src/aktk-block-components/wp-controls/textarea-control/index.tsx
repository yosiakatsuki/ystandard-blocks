import { TextareaControl as WPTextareaControl } from '@wordpress/components';

interface TextareaControlProps {
	label?: string;
	value: string;
	onChange: ( value: string ) => void;
	help?: React.ReactNode;
}

export default function TextareaControl( props: TextareaControlProps ) {
	const { label, value, onChange, help } = props;
	return (
		<WPTextareaControl
			label={ label }
			value={ value }
			onChange={ onChange }
			help={ help }
			__nextHasNoMarginBottom
		/>
	);
}
