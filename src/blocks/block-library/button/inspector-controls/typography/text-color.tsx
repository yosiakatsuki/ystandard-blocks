/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Plugin dependencies.
 */
import { ColorGradientSettingsDropdown } from '@aktk/blocks/components/color';

// @ts-expect-error
export function TextColor( props ) {
	const { textColor, setTextColor } = props;
	return (
		<>
			<BaseControl>
				<ColorGradientSettingsDropdown
					controlLabel={ __( '文字色', 'ystandard-blocks' ) }
					colorValue={ textColor.color }
					onChange={ setTextColor }
					label={ __( '文字色', 'ystandard-blocks' ) }
					disableGradient={ true }
				/>
			</BaseControl>
		</>
	);
}
