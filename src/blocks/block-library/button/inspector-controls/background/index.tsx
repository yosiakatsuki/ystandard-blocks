/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { Panel } from '@aktk/block-components/components/panel';
import { ColorGradientPalette } from '@aktk/block-components/components/color-pallet-control';

// @ts-expect-error
export function Background( props ) {
	const { backgroundColor, setBackgroundColor, gradientValue, setGradient } =
		props;

	return (
		<Panel title={ __( '背景色', 'ystandard-blocks' ) }>
			<BaseControl
				id={ 'background-color' }
				label={ __( '背景色', 'ystandard-blocks' ) }
			>
				<ColorGradientPalette
					label={ __( '背景色', 'ystandard-blocks' ) }
					colorValue={ backgroundColor.color }
					onColorChange={ setBackgroundColor }
					gradientValue={ gradientValue }
					onGradientChange={ setGradient }
					enableCurrentColor={ true }
					enableTransparent={ true }
				/>
			</BaseControl>
		</Panel>
	);
}
