import classnames from 'classnames';
import './index.scss';

interface NoticeProps {
	className?: string;
	type?: 'help' | 'error' | 'warning' | 'info';
	children: React.ReactNode;
}

export default function Notice( {
	className,
	type = 'info',
	children,
	...props
}: NoticeProps ) {
	const wrapProps = {
		className: classnames(
			'ystd-component-notice',
			className,
			`is-${ type }`
		),
		...props,
	};

	return <div { ...wrapProps }>{ children }</div>;
}
