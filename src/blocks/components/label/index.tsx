import classnames from 'classnames';

interface LabelProps {
	children: React.ReactNode;
	className?: string;
}

export function ComponentLabel( props: LabelProps ) {
	const _className = classnames( props?.className, 'mb-2 font-bold' );
	return <div className={ _className }>{ props.children }</div>;
}
