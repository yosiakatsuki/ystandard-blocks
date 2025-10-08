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
	responsiveFontSize?: ResponsiveFontSize;
	url?: string;
	linkTarget?: string;
	rel?: string;
}
