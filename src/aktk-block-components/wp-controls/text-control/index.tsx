/**
 * WordPress dependencies.
 */
import { TextControl as WPTextControl } from '@wordpress/components';

interface TextControlProps {
	className?: string;
	label?: string;
	value: string;
	onChange: ( value: string ) => void;
	ref?: React.RefObject< HTMLElement >;
	placeholder?: string;
}

export default function TextControl( props: TextControlProps ) {
	return (
		<>
			{ /* @ts-expect-error */ }
			<WPTextControl
				{ ...props }
				__nextHasNoMarginBottom
				__next40pxDefaultSize
			/>
		</>
	);
}
