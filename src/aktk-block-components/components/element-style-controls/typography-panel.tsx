/**
 * WordPress dependencies.
 */
import {
	// @ts-expect-error 型定義が同梱されていないWordPress公開API.
	__experimentalLetterSpacingControl as LetterSpacingControl,
	// @ts-expect-error 型定義が同梱されていないWordPress公開API.
	__experimentalTextTransformControl as TextTransformControl,
	useSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { CustomLineHeightControl } from '@aktk/block-components/components/custom-line-height-control';
import { useFontFamilies } from '@aktk/block-components/components/font-family-select';
import type {
	FontSizeCalculationSettings,
	FontSizePreset,
	FontSizeValue,
} from '@aktk/block-components/components/responsive-font-size-control';
import {
	fontSizeCssValueToPickerValue,
	fontSizeValueToCssValue,
} from '@aktk/block-components/components/responsive-font-size-control';
import useThemeColors from '@aktk/block-components/hooks/useThemeColors';
import ColorGradientSettingsDropdown from '@aktk/block-components/wp-controls/color-gradient-settings-dropdown';
import { FontAppearanceControl } from '@aktk/block-components/wp-controls/font-appearance-control';
import FontFamilyControl from '@aktk/block-components/wp-controls/font-family-control';
import FontSizePicker from '@aktk/block-components/wp-controls/font-size-picker';
import TextDecorationControl from '@aktk/block-components/wp-controls/text-decoration-control';
import {
	ToolsPanel,
	ToolsPanelItem,
} from '@aktk/block-components/wp-controls/tools-panel';

import type { ElementStyle, ElementStylePanelProps } from './types';
import { hasElementStyleValue, updateElementStyle } from './utils';

type FontFamilyPreset = {
	name: string;
	slug?: string;
	fontFamily: string;
};

const getPresetSlug = ( value: string | undefined, type: string ) => {
	const prefix = `var:preset|${ type }|`;
	return value?.startsWith( prefix )
		? value.slice( prefix.length )
		: undefined;
};

/**
 * 要素の文字設定パネル.
 *
 * @param props コンポーネントプロパティ.
 * @return 文字設定パネル.
 */
export function ElementTypographyPanel( props: ElementStylePanelProps ) {
	const { label, panelId, value, onChange } = props;
	const [ fontSizes, fluidSettings, layoutSettings ] = useSettings(
		'typography.fontSizes',
		'typography.fluid',
		'layout'
	);
	const availableFontSizes = fontSizes as FontSizePreset[] | undefined;
	const fontFamilySettings = useFontFamilies();
	const availableFontFamilies = Array.isArray( fontFamilySettings )
		? ( fontFamilySettings as FontFamilyPreset[] )
		: [];
	const colors = useThemeColors();
	const typography = value?.typography;
	const calculationSettings: FontSizeCalculationSettings = {
		fluid: fluidSettings,
		layout: layoutSettings,
	};
	const fontSizeSlug = getPresetSlug( typography?.fontSize, 'font-size' );
	const fontSizePreset = availableFontSizes?.find(
		( preset ) => preset.slug === fontSizeSlug
	);
	const storedFontSizeValue = fontSizePreset
		? fontSizeValueToCssValue(
				fontSizePreset.size,
				fontSizePreset,
				calculationSettings
		  )
		: typography?.fontSize;
	const fontSizePickerValue = fontSizeCssValueToPickerValue(
		storedFontSizeValue,
		availableFontSizes,
		calculationSettings
	);
	const fontFamilySlug = getPresetSlug(
		typography?.fontFamily,
		'font-family'
	);
	const fontFamilyValue =
		availableFontFamilies.find(
			( preset ) => preset.slug === fontFamilySlug
		)?.fontFamily ?? typography?.fontFamily;
	const updateTypography = ( newTypography?: ElementStyle[ 'typography' ] ) =>
		onChange( updateElementStyle( value, 'typography', newTypography ) );
	const setTypographyValue = (
		property: keyof NonNullable< ElementStyle[ 'typography' ] >,
		newValue?: string | number
	) => {
		updateTypography( {
			...typography,
			[ property ]: newValue || undefined,
		} );
	};
	const updateTextColor = ( text?: string ) =>
		onChange(
			updateElementStyle( value, 'color', {
				...value?.color,
				text,
			} )
		);
	const resetAll = () => {
		const styleWithoutTypography = updateElementStyle(
			value,
			'typography',
			undefined
		);
		onChange(
			updateElementStyle( styleWithoutTypography, 'color', {
				...styleWithoutTypography?.color,
				text: undefined,
			} )
		);
	};

	return (
		<ToolsPanel label={ label } panelId={ panelId } resetAll={ resetAll }>
			<ColorGradientSettingsDropdown
				panelId={ panelId }
				colors={ colors }
				__experimentalIsRenderedInSidebar
				settings={ [
					{
						label: __( '色', 'ystandard-blocks' ),
						colorValue: value?.color?.text,
						onColorChange: updateTextColor,
						onGradientChange: () => undefined,
						clearable: true,
						gradients: [],
						disableCustomGradients: true,
						isShownByDefault: true,
					},
				] }
			/>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( 'フォントサイズ', 'ystandard-blocks' ) }
				hasValue={ () => hasElementStyleValue( typography?.fontSize ) }
				onDeselect={ () => setTypographyValue( 'fontSize', undefined ) }
				isShownByDefault
			>
				<FontSizePicker
					value={ fontSizePickerValue }
					fontSizes={ availableFontSizes }
					onChange={ (
						newValue: FontSizeValue,
						selectedItem?: FontSizePreset
					) => {
						const nextValue = selectedItem?.slug
							? `var:preset|font-size|${ selectedItem.slug }`
							: fontSizeValueToCssValue(
									newValue,
									selectedItem,
									calculationSettings
							  );
						setTypographyValue( 'fontSize', nextValue );
					} }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( 'フォント', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( typography?.fontFamily )
				}
				onDeselect={ () =>
					setTypographyValue( 'fontFamily', undefined )
				}
				isShownByDefault={ false }
			>
				<FontFamilyControl
					fontFamilies={ availableFontFamilies }
					value={ fontFamilyValue }
					onChange={ ( newValue ) => {
						const preset = availableFontFamilies.find(
							( item ) => item.fontFamily === newValue
						);
						setTypographyValue(
							'fontFamily',
							preset?.slug
								? `var:preset|font-family|${ preset.slug }`
								: newValue
						);
					} }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '外観', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( typography?.fontStyle ) ||
					hasElementStyleValue( typography?.fontWeight )
				}
				onDeselect={ () =>
					updateTypography( {
						...typography,
						fontStyle: undefined,
						fontWeight: undefined,
					} )
				}
				isShownByDefault={ false }
			>
				<FontAppearanceControl
					value={ {
						fontStyle: typography?.fontStyle,
						fontWeight: typography?.fontWeight,
					} }
					onChange={ ( appearance ) =>
						updateTypography( {
							...typography,
							...appearance,
						} )
					}
					hasFontStyles
					hasFontWeights
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '行の高さ', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( typography?.lineHeight )
				}
				onDeselect={ () =>
					setTypographyValue( 'lineHeight', undefined )
				}
				isShownByDefault={ false }
			>
				<CustomLineHeightControl
					label={ __( '行の高さ', 'ystandard-blocks' ) }
					value={ typography?.lineHeight }
					onChange={ ( lineHeight ) =>
						setTypographyValue( 'lineHeight', lineHeight )
					}
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '文字間隔', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( typography?.letterSpacing )
				}
				onDeselect={ () =>
					setTypographyValue( 'letterSpacing', undefined )
				}
				isShownByDefault={ false }
			>
				<LetterSpacingControl
					value={ typography?.letterSpacing }
					onChange={ ( letterSpacing: string ) =>
						setTypographyValue( 'letterSpacing', letterSpacing )
					}
					__next40pxDefaultSize
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '装飾', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( typography?.textDecoration )
				}
				onDeselect={ () =>
					setTypographyValue( 'textDecoration', undefined )
				}
				isShownByDefault={ false }
			>
				<TextDecorationControl
					value={ typography?.textDecoration ?? '' }
					onChange={ ( textDecoration ) =>
						setTypographyValue( 'textDecoration', textDecoration )
					}
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '大文字小文字', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( typography?.textTransform )
				}
				onDeselect={ () =>
					setTypographyValue( 'textTransform', undefined )
				}
				isShownByDefault={ false }
			>
				<TextTransformControl
					value={ typography?.textTransform }
					onChange={ ( textTransform: string ) =>
						setTypographyValue( 'textTransform', textTransform )
					}
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
