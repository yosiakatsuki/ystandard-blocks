/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
// @ts-expect-error
import { __experimentalUseGradient } from '@wordpress/block-editor';

/**
 * Plugin dependencies.
 */
import Panel from '@aktk/blocks/components/panel';
import { ColorGradientSettingsDropdown } from '@aktk/blocks/components/color';

// @ts-expect-error
export function Background( props ) {
	const { backgroundColor, setBackgroundColor, gradientValue, setGradient } =
		props;

	return (
		<Panel title={ __( '背景色', 'ystandard-blocks' ) }>
			<BaseControl id={ 'background-color' }>
				<ColorGradientSettingsDropdown
					label={ __( '背景色', 'ystandard-blocks' ) }
					colorValue={ backgroundColor.color }
					onChange={ setBackgroundColor }
					gradientValue={ gradientValue }
					setGradient={ setGradient }
				/>
			</BaseControl>
		</Panel>
	);
}
