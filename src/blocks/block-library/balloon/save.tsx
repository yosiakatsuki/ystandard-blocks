import classnames from 'classnames';
/**
 * WordPress.
 */
import { getColorClassName, useBlockProps } from '@wordpress/block-editor';
export default function Save({ attributes }) {
	const {
		className,
		textColor,
		customTextColor,
		backgroundColor,
		customBackgroundColor,
		balloonBorderColor,
		customBalloonBorderColor,
		balloonBorderWidth,
		avatarNameColor,
		customAvatarNameColor,
		avatarBorderColor,
		customAvatarBorderColor,
		fontSize,
		customFontSize,
		avatarName,
		avatarURL,
		avatarAlt,
		avatarSize,
		avatarBorderWidth,
		avatarBorderRadius,
		text,
		balloonPosition,
		balloonType,
		verticalAlign,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classnames('ystdb-balloon', className),
	});
	return (
		<div {...blockProps}>
			<span>バルーン作成中</span>
		</div>
	);
}
