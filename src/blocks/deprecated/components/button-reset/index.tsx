import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * @param      root0
 * @param      root0.onClick
 * @param      root0.label
 * @param      root0.isDisable
 * @deprecated 置き換え予定
 */
// @ts-ignore
const ButtonReset = ({ onClick, label, isDisable, ...props }) => {
	const _label = label ?? __('リセット', 'ystandard-blocks');
	return (
		<>
			<Button
				variant={'secondary'}
				isSmall
				disabled={!!isDisable}
				onClick={onClick}
				{...props}
			>
				{_label}
			</Button>
		</>
	);
};
export default ButtonReset;
