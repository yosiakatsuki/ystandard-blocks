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
}

export function SvgIcon(props: SvgIconProps) {
	const { name = '' } = props;

	const svg = useMemo(() => {
		return getIconSvg(name);
	}, [name]);

	return <IconHTML svg={svg} name={name} />;
}

SvgIcon.Content = IconHTML;

function IconHTML(props: SvgIconProps) {
	const { name = '', svg = '' } = props;
	const iconSvg = svg || getIconSvg(name);
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
		</>
	);
}
