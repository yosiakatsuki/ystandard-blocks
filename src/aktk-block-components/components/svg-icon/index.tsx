import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { useMemo } from '@wordpress/element';

/**
 * Plugin.
 */
import { getIconSvg } from '@aktk/block-components/utils/icon';

export interface SvgIconProps {
	name?: string;
	svg?: string;
	fallback?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export function SvgIcon(props: SvgIconProps) {
	const { name = '', fallback, className, style } = props;

	const Content = useMemo(() => {
		const svg = getIconSvg(name);
		return (
			<IconHTML
				svg={svg}
				name={name}
				fallback={fallback}
				className={className}
				style={style}
			/>
		);
	}, [name, fallback]);

	return <>{Content}</>;
}

function IconHTML(props: SvgIconProps) {
	const { name = '', svg = '', fallback, className, style } = props;
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
					className={classnames('ys-icon', className, {
						'sns-icon': -1 !== name.indexOf('sns-'),
					})}
					style={style}
					dangerouslySetInnerHTML={{ __html: iconSvg }}
				/>
			)}
			<FallBack />
		</>
	);
}

SvgIcon.Content = IconHTML;
