import clsx from 'clsx';
/**
 * WordPress dependencies.
 */
import { __experimentalInputControl as WPInputControl } from '@wordpress/components';

interface InputControlProps {
	label?: string;
	onChange: ( value: string | undefined ) => void;
	value: string;
	disabled?: boolean;
	labelPosition?: 'top' | 'side';
	readOnly?: boolean;
	placeholder?: string;
	ariaLabel?: string;
	style?: React.CSSProperties;
	className?: string;
}

export default function InputControl( props: InputControlProps ) {
	const {
		label,
		onChange,
		value,
		labelPosition = 'top',
		disabled = false,
		readOnly = false,
		placeholder,
		ariaLabel,
		style,
		className,
	} = props;

	const classes = clsx( className, {
		'[&_input]:!bg-gray-50': readOnly,
	} );

	return (
		<WPInputControl
			label={ label }
			onChange={ onChange }
			value={ value }
			labelPosition={ labelPosition }
			disabled={ disabled }
			readOnly={ readOnly }
			className={ classes }
			style={ style }
			placeholder={ placeholder }
			aria-label={ ariaLabel }
		/>
	);
}
