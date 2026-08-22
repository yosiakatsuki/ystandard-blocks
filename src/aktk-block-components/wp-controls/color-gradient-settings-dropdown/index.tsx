// @ts-ignore
import { __experimentalColorGradientSettingsDropdown as WPColorGradientSettingsDropdown } from '@wordpress/block-editor';

export interface ColorGradientSettingsDropdownProps {
	colors?: object;
	disableCustomColors?: boolean;
	disableCustomGradients?: boolean;
	enableAlpha?: boolean;
	gradients?: object;
	settings: Array< {
		label: string;
		colorValue?: string;
		gradientValue?: string;
		onColorChange: ( value?: string ) => void;
		onGradientChange: ( value?: string ) => void;
		isShownByDefault?: boolean;
		clearable?: boolean;
		colors?: object;
		gradients?: object;
		disableCustomColors?: boolean;
		disableCustomGradients?: boolean;
	} >;
	__experimentalIsRenderedInSidebar?: boolean;
	panelId?: string;
}

export default function ColorGradientSettingsDropdown(
	props: ColorGradientSettingsDropdownProps
) {
	return <WPColorGradientSettingsDropdown { ...props } />;
}
