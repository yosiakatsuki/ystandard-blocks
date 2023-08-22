import { SvgIcon } from '@aktk/blocks/components/svg-icon';

interface IconProps {
	hasIcon?: boolean;
	icon?: string;
	size?: string;
}

export function Icon(props: IconProps) {
	const { hasIcon = false, icon, size } = props;
	return (
		<>
			<SvgIcon
				name={icon}
				style={{
					fontSize: size,
				}}
				fallback={hasIcon ? <FallBackIcon /> : undefined}
			/>
		</>
	);
}

Icon.Content = IconContent;
function IconContent(props: IconProps) {
	const { hasIcon = false, icon, size } = props;
	return (
		<>
			<SvgIcon.Content
				name={icon}
				style={{
					fontSize: size,
				}}
				fallback={hasIcon ? <FallBackIcon /> : undefined}
			/>
		</>
	);
}

function FallBackIcon() {
	return <span aria-hidden={true} />;
}
