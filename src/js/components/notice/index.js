import classnames from 'classnames';

export const noticeType = {
	info: 'info',
	warning: 'warning',
	error: 'error',
	help: 'help',
};

const Notice = ( { children, type, className, ...props } ) => {
	const _noticeType = type || 'info';
	const wrapProps = {
		className: classnames(
			'ystd-component-notice',
			className,
			`is-${ _noticeType }`
		),
		...props,
	};

	return <div { ...wrapProps }>{ children }</div>;
};

export default Notice;
