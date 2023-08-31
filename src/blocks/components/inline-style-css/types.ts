export type InlineStyles = {
	desktop?: object;
	tablet?: object;
	mobile?: object;
};

export interface InlineStyleCssProps {
	styles?: object;
	clientId: string;
	selector?: string;
}
