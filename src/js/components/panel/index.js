/**
 * WordPress
 */
import { PanelBody } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

/**
 * @param {Object}             props
 * @param {string}             props.title
 * @param {boolean | Function} props.initialOpen
 * @param {JSX.Element}        props.children
 * @return {JSX.Element}
 * @class
 * @deprecated
 */
const Panel = ({ title, initialOpen, children }) => {
	const _initialOpen = useMemo(() => {
		if ('function' === typeof initialOpen) {
			return initialOpen();
		}
		return initialOpen;
	}, []);
	return (
		<PanelBody title={title} initialOpen={_initialOpen}>
			{children}
		</PanelBody>
	);
};
export default Panel;
