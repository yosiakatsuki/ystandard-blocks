import { TextareaControl as WPTextareaControl } from '@wordpress/components';

interface TextareaControlProps {
	className?: string;
	label?: string;
	value: string;
	onChange: ( value: string ) => void;
	help?: React.ReactNode;
	style?: React.CSSProperties;
	placeholder?: string;
	ariaLabel?: string;
	rows?: number;
}

export default function TextareaControl( props: TextareaControlProps ) {
	const {
		label,
		value,
		onChange,
		help,
		className,
		style,
		placeholder,
		ariaLabel,
		rows,
	} = props;
	return (
		<WPTextareaControl
			className={ className }
			label={ label }
			value={ value }
			onChange={ onChange }
			help={ help }
			style={ style }
			placeholder={ placeholder }
			aria-label={ ariaLabel }
			rows={ rows }
			__nextHasNoMarginBottom
		/>
	);
}
