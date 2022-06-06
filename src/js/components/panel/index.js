/**
 * WordPress
 */
import { PanelBody } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

const Panel = ( { title, initialOpen, children } ) => {
	const _initialOpen = useMemo( () => {
		if ( 'function' === typeof initialOpen ) {
			return initialOpen();
		}
		return initialOpen;
	}, [] );
	return (
		<PanelBody title={ title } initialOpen={ _initialOpen }>
			{ children }
		</PanelBody>
	);
};
export default Panel;
