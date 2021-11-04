import { BaseControl, ColorPalette } from '@wordpress/components';
import { select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const BorderColor = (props) => {
	const { borderColor, setBorderColor } = props;
	const { colors } = select('core/block-editor').getSettings();

	return (
		<BaseControl
			id={'border-color'}
			label={__('枠線色', 'ystandard-blocks')}
		>
			<ColorPalette
				colors={colors}
				disableCustomColors={false}
				onChange={(color) => {
					setBorderColor(color);
				}}
				value={borderColor.color}
			/>
		</BaseControl>
	);
};

export default BorderColor;
