/**
 * WordPress dependencies
 */
import { ToggleControl as WPToggleControl } from '@wordpress/components';

interface ToggleControlProps {
	className?: string;
	label?: string;
	onChange: ( value: boolean ) => void;
	checked: boolean;
}

export default function ToggleControl( props: ToggleControlProps ) {
	const { className, label, onChange, checked } = props;
	return (
		<WPToggleControl
			className={ className }
			label={ label }
			onChange={ onChange }
			checked={ checked }
			__nextHasNoMarginBottom
		/>
	);
}
