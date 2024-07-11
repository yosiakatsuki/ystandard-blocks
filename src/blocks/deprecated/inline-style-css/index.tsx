import {
	addMediaQueryMobile,
	addMediaQueryTablet,
	addMediaQueryDesktop,
	getCSS,
	parseInlineStyleProps,
} from './util';
import type { InlineStyleCssProps } from './types';

export function InlineStyleCss( props: InlineStyleCssProps ) {
	const { styles = {}, clientId, selector = '' } = props;
	const { desktop, tablet, mobile } = parseInlineStyleProps( styles );
	let style = '';

	if ( desktop ) {
		style += addMediaQueryDesktop( getCSS( desktop, clientId, selector ) );
	}
	if ( tablet ) {
		style += addMediaQueryTablet( getCSS( tablet, clientId, selector ) );
	}
	if ( mobile ) {
		style += addMediaQueryMobile( getCSS( mobile, clientId, selector ) );
	}

	return <>{ style && <style>{ style }</style> }</>;
}
