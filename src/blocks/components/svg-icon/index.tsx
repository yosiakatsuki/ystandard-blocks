import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { useMemo } from '@wordpress/element';

/**
 * Plugin.
 */
import { getIconSvg } from '@aktk/blocks/utils/icon';

export interface SvgIconProps {
	name?: string;
	svg?: string;
	fallback?: React.ReactNode;
}

export function SvgIcon(props: SvgIconProps) {
	const { name = '', fallback } = props;

	const Content = useMemo(() => {
		const svg = getIconSvg(name);
		return <IconHTML svg={svg} name={name} fallback={fallback} />;
	}, [name, fallback]);

	return <>{Content}</>;
}

function IconHTML(props: SvgIconProps) {
	const { name = '', svg = '', fallback } = props;
	const iconSvg = svg || getIconSvg(name);
	const FallBack = () => {
		if (iconSvg || !fallback) {
			return <></>;
		}
		return <>{fallback}</>;
	};
	return (
		<>
			{iconSvg && (
				<span
					className={classnames('ys-icon', {
						'sns-icon': -1 !== name.indexOf('sns-'),
					})}
					dangerouslySetInnerHTML={{ __html: iconSvg }}
				/>
			)}
			<FallBack />
		</>
	);
}

SvgIcon.Content = IconHTML;
