import classnames from 'classnames';

interface LabelProps {
	children: React.ReactNode;
	className?: string;
}

export function ComponentLabel(props: LabelProps) {
	const _className = classnames(props?.className, 'font-bold mb-2');
	return <div className={_className}>{props.children}</div>;
}
