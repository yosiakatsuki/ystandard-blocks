export type ResponsiveFontSize = {
	[ key: string ]: string;
};

export interface Attributes {
	icon?: string;
	iconSize?: string;
	align?: string;
	textColor?: string;
	customTextColor?: string;
	fontSize?: string;
	customFontSize?: string;
	// 3.19.0 add.
	responsiveFontSize?: ResponsiveFontSize;
	// 3.19.0 add.
	backgroundColor?: string;
	// 3.19.0 add.
	customBackgroundColor?: string;
	url?: string;
	linkTarget?: string;
	rel?: string;
	className?: string;
}
