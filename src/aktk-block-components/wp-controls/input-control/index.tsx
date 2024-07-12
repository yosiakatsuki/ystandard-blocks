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
}

export default function InputControl( props: InputControlProps ) {
	const {
		label,
		onChange,
		value,
		labelPosition = 'top',
		disabled = false,
	} = props;

	return (
		<WPInputControl
			label={ label }
			onChange={ onChange }
			value={ value }
			labelPosition={ labelPosition }
			disabled={ disabled }
		/>
	);
}
