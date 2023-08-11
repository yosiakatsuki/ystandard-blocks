export type InlineStyles = {
	desktop?: object;
	tablet?: object;
	mobile?: object;
};

export interface InlineStyleCssProps {
	styles?: InlineStyles;
	clientId: string;
	selector?: string;
}
