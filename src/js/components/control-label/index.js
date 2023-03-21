import classnames from 'classnames';

const ControlLabel = ({ children, isSmall, isBold, ...props }) => {
	const controlProps = {
		className: classnames('ystd-control-label', {
			'is-small': isSmall,
			'is-bold': isBold,
		}),
		...props,
	};
	return <div {...controlProps}>{children}</div>;
};
export default ControlLabel;
