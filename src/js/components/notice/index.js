import classnames from 'classnames';

const Notice = ( { children, type, className, ...props } ) => {
	const noticeType = type || 'info';
	const wrapProps = {
		className: classnames(
			'ystd-component-notice',
			className,
			`is-${ noticeType }`
		),
		...props,
	};

	return <div { ...wrapProps }>{ children }</div>;
};

export default Notice;
