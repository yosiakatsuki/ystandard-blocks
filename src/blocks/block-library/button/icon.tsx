import { SvgIcon } from '@aktk/block-components/components/svg-icon';

interface IconProps {
	hasIcon?: boolean;
	icon?: string;
	size?: string;
}

export function Icon( props: IconProps ) {
	const { hasIcon = false, icon, size } = props;
	return (
		<>
			<SvgIcon
				name={ icon }
				style={ {
					fontSize: size,
				} }
				fallback={ hasIcon ? <FallBackIcon /> : undefined }
			/>
		</>
	);
}

Icon.Content = IconContent;
function IconContent( props: IconProps ) {
	const { hasIcon = false, icon, size } = props;
	return (
		<>
			<SvgIcon.Content
				name={ icon }
				style={ {
					fontSize: size,
				} }
				fallback={
					hasIcon ? <FallBackIcon size={ size } /> : undefined
				}
			/>
		</>
	);
}

function FallBackIcon( props: IconProps ) {
	const { size } = props;
	return (
		<span
			aria-hidden={ true }
			className={ 'ys-icon ys-icon--fallback' }
			style={ {
				fontSize: size,
			} }
		>
			<svg xmlns="http://www.w3.org/2000/svg" />
		</span>
	);
}
