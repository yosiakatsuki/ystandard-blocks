/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import {
	ResponsiveFontSizeSelect,
	ResponsiveFontSize,
} from '@aktk/blocks/components/responsive-font-size';
import { parseObjectAttributes } from '@aktk/blocks/utils';

/**
 * Internal dependencies.
 */
import type { ButtonStyle } from '../../types';

// @ts-expect-error
export function FontSize(props) {
	const { attributes, setAttributes } = props;
	const { style = {} as ButtonStyle, fontSize, customFontSize } = attributes;
	const handleOnResponsiveChange = (
		value: ResponsiveFontSize | undefined
	) => {
		const newStyle = {
			...style,
			...{
				fontSize: value || undefined,
			},
		};
		setAttributes({ style: parseObjectAttributes(newStyle) });
		if (value) {
			setAttributes({
				customFontSize: undefined,
				fontSize: undefined,
			});
		}
	};
	return (
		<>
			<ResponsiveFontSizeSelect
				label={__('文字サイズ', 'ystandard-blocks')}
				value={customFontSize || fontSize}
				onPickerChange={(size, slug) => {
					setAttributes({
						customFontSize: size,
						fontSize: slug,
					});
				}}
				responsiveValue={style?.fontSize}
				onResponsiveChange={handleOnResponsiveChange}
			/>
		</>
	);
}
