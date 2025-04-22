import clsx from 'clsx';

import { Monitor, Tablet, Smartphone } from 'react-feather';

const ICON_SIZE = 20;

interface IconUnitControlWrapProps {
	children: React.ReactNode;
	className?: string;
}

// @ts-ignore
function IconUnitControlWrap( props: IconUnitControlWrapProps ) {
	const { children, className = '' } = props;

	const classes = clsx(
		'flex items-center gap-1 [&>*:not(svg)]:grow [&>svg]:shrink-0 [&>svg]:text-gray-500 [&_label:empty]:hidden',
		className
	);

	return <div className={ classes }>{ children }</div>;
}

interface WithIconControlProps {
	children: React.ReactNode;
	size?: number;
	className?: string;
}

export function DesktopControl( props: WithIconControlProps ) {
	const { children, size, className = '' } = props;
	return (
		<IconUnitControlWrap className={ className }>
			<Monitor size={ size || ICON_SIZE } />
			{ children }
		</IconUnitControlWrap>
	);
}

export function TabletControl( props: WithIconControlProps ) {
	const { children, size, className = '' } = props;
	return (
		<IconUnitControlWrap className={ className }>
			<Tablet size={ size || ICON_SIZE } />
			{ children }
		</IconUnitControlWrap>
	);
}

export function MobileControl( props: WithIconControlProps ) {
	const { children, size, className = '' } = props;
	return (
		<IconUnitControlWrap className={ className }>
			<Smartphone size={ size || ICON_SIZE } />
			{ children }
		</IconUnitControlWrap>
	);
}
