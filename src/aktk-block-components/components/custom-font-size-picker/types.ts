export interface CustomFontSize {
	desktop?: string;
	tablet?: string;
	mobile?: string;
	fontSize?: {
		size?: number | string;
		slug?: string;
		className?: string;
	};
}

export interface CustomFontSizePickerProps {
	fontSize: CustomFontSize | undefined;
	onChange: ( value: CustomFontSize ) => void;
	useResponsive?: boolean;
}
