export type TextAlign = 'left' | 'center' | 'right';

export type ResponsiveTextAlignDevice = 'desktop' | 'tablet' | 'mobile';

export type ResponsiveTextAlign = Partial<
	Record< ResponsiveTextAlignDevice, TextAlign >
>;

export interface ResponsiveTextAlignControlProps {
	id?: string;
	label: string;
	onChange: ( value?: ResponsiveTextAlign ) => void;
	value?: ResponsiveTextAlign;
}
