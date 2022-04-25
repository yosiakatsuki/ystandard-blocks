import { PanelColorSettings } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const PanelBackground = ( props ) => {
	const { backgroundColor, setBackgroundColor } = props;
	return (
		<PanelColorSettings
			title={ __( '背景設定', 'ystandard-blocks' ) }
			colorSettings={ [
				{
					value: backgroundColor.color,
					onChange: ( color ) => {
						setBackgroundColor( color );
					},
					label: __( '背景色', 'ystandard-blocks' ),
				},
			] }
		/>
	);
};

export default PanelBackground;
