import {
	__experimentalToggleGroupControl as WPToggleGroupControl,
	__experimentalToggleGroupControlOption as WPToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as WPToggleGroupControlOptionIcon,
} from '@wordpress/components';

interface ToggleGroupControlProps {
	label?: string;
	onChange: ( value?: string | number ) => void;
	value: string | number;
	isBlock?: boolean;
	isDeselectable?: boolean;
	hideLabelFromVision?: boolean;
	isAdaptiveWidth?: boolean;
	children: React.ReactNode;
	className?: string;
}

export function ToggleGroupControl( props: ToggleGroupControlProps ) {
	return (
		<>
			{ /* @ts-ignore */ }
			<WPToggleGroupControl
				{ ...props }
				__nextHasNoMarginBottom
				__next40pxDefaultSize
			/>
		</>
	);
}

interface ToggleGroupControlOptionProps {
	label: string;
	value?: string | number;
}

export function ToggleGroupControlOption(
	props: ToggleGroupControlOptionProps
) {
	// @ts-ignore
	return <WPToggleGroupControlOption { ...props } />;
}

interface ToggleGroupControlOptionIconProps {
	label: string;
	value?: string | number;
	icon: JSX.Element;
}

export function ToggleGroupControlOptionIcon(
	props: ToggleGroupControlOptionIconProps
) {
	// @ts-ignore
	return <WPToggleGroupControlOptionIcon { ...props } />;
}
