import classnames from 'classnames';

const Notice = ( props ) => {
	const { children, type, className } = props;

	const noticeType = type || 'info';
	const wrapClass = classnames(
		'ystdb-component-notice',
		className,
		`is-${ noticeType }`
	);
	return <div className={ wrapClass }>{ children }</div>;
};

export default Notice;
