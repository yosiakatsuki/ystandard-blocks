/**
 * WordPress dependencies.
 */
import { TextControl as WPTextControl } from '@wordpress/components';

interface TextControlProps {
	className?: string;
	label?: string;
	value: string;
	onChange: ( value: string ) => void;
}

export default function TextControl( props: TextControlProps ) {
	const { className, label, value, onChange } = props;

	return (
		<WPTextControl
			className={ className }
			label={ label }
			value={ value }
			onChange={ onChange }
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		/>
	);
}
