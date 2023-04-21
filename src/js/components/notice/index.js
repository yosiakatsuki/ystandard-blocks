import classnames from 'classnames';

/**
 * 通知タイプ
 * @type {{help: string, warning: string, error: string, info: string}}
 * @deprecated
 */
export const noticeType = {
	info: 'info',
	warning: 'warning',
	error: 'error',
	help: 'help',
};

/**
 * 通知コンポーネント
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {string} props.type
 * @param {string} props.className
 * @returns {JSX.Element}
 * @constructor
 * @deprecated
 */
const Notice = ({ children, type, className, ...props }) => {
	const _noticeType = type || 'info';
	const wrapProps = {
		className: classnames(
			'ystd-component-notice',
			className,
			`is-${_noticeType}`
		),
		...props,
	};

	return <div {...wrapProps}>{children}</div>;
};

export default Notice;
