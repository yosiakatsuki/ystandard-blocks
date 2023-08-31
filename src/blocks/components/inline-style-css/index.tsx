import {
	addMediaQueryMobile,
	addMediaQueryTablet,
	getCSS,
	parseInlineStyleProps,
} from './util';
import type { InlineStyleCssProps } from './types';

export function InlineStyleCss(props: InlineStyleCssProps) {
	const { styles = {}, clientId, selector = '' } = props;
	const { desktop, tablet, mobile } = parseInlineStyleProps(styles);
	let style = '';
	console.log({ styles: parseInlineStyleProps(styles) });

	if (desktop) {
		style += getCSS(desktop, clientId, selector);
	}
	if (tablet) {
		style += addMediaQueryTablet(getCSS(tablet, clientId, selector));
	}
	if (mobile) {
		style += addMediaQueryMobile(getCSS(mobile, clientId, selector));
	}

	return <>{style && <style>{style}</style>}</>;
}
