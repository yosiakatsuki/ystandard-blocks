import { Button as WPButton } from '@wordpress/components';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
	size?: 'default' | 'compact' | 'small';
	style?: React.CSSProperties;
	isDestructive?: boolean;
	onClick: () => void;
	disabled?: boolean;
}

export default function Button( props: ButtonProps ) {
	return <WPButton { ...props } __next40pxDefaultSize />;
}
