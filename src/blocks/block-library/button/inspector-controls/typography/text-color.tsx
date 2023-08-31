/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import { ColorGradientSettingsDropdown } from '@aktk/blocks/components/color';

// @ts-expect-error
export function TextColor(props) {
	const { textColor, setTextColor } = props;
	return (
		<>
			<ColorGradientSettingsDropdown
				colorValue={textColor.color}
				onChange={setTextColor}
				label={__('文字色', 'ystandard-blocks')}
				disableGradient={true}
			/>
		</>
	);
}
