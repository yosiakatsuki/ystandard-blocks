// @ts-ignore
import { __experimentalColorGradientSettingsDropdown as WPColorGradientSettingsDropdown } from '@wordpress/block-editor';

export interface ColorGradientSettingsDropdownProps {
	colors: object;
	disableCustomColors?: boolean;
	disableCustomGradients?: boolean;
	enableAlpha?: boolean;
	gradients?: object;
	settings?: object[];
	__experimentalIsRenderedInSidebar?: boolean;
	value: string;
	onChange: ( value: string ) => void;
}

export default function ColorGradientSettingsDropdown(
	props: ColorGradientSettingsDropdownProps
) {
	return <WPColorGradientSettingsDropdown { ...props } />;
}
