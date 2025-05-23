/**
 * Aktk Dependencies
 */
import { __experimentalBorderBoxControl as WPBorderBoxControl } from '@wordpress/components';

export interface BorderBoxControlProps {
	onChange: ( newValue: object ) => void;
	value?: object;
	label?: string;
	colors?: object;
	disableCustomColors?: boolean;
	enableAlpha?: boolean;
	enableStyle?: boolean;
}

export default function BorderBoxControl( props: BorderBoxControlProps ) {
	return (
		<>
			{ /* @ts-ignore */ }
			<WPBorderBoxControl { ...props } />
		</>
	);
}
