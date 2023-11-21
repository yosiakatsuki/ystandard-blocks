import { PanelColorSettings } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

// @ts-ignore
const PanelBackground = (props) => {
	const { backgroundColor, setBackgroundColor } = props;
	return (
		<PanelColorSettings
			title={__('背景設定', 'ystandard-blocks')}
			colorSettings={[
				{
					value: backgroundColor.color,
					// @ts-ignore
					onChange: (color) => {
						setBackgroundColor(color);
					},
					label: __('背景色', 'ystandard-blocks'),
				},
			]}
		/>
	);
};

export default PanelBackground;
