/**
 * Aktk dependencies.
 */
import type { ResponsiveSpacing } from '@aktk/block-components/components/responsive-spacing-control';
import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import type { ElementStyle } from '@aktk/block-components/components/element-style-controls';
import { getElementLayoutDefaultValues } from '@aktk/block-components/components/element-style-controls/layout-defaults';
import { stripUndefined } from '@aktk/block-components/utils/object';
import {
	getResponsiveCustomProperties,
	presetTokenToCssVar,
} from '@aktk/block-components/utils/style-engine';

/**
 * Plugin dependencies.
 */
import { getResponsiveCustomPropName } from '@aktk/blocks/components/responsive-values';
/**
 * Block dependencies.
 */
import type {
	Attributes,
	ResponsiveGroupStyle,
	ResponsiveTextStyle,
} from './types';
import { CUSTOM_HEADING_LAYOUT_DEFAULT_VALUES } from './config';

const positions = [ 'top', 'right', 'bottom', 'left' ] as const;
export type CustomHeadingElement = 'group' | 'sub';
type ResponsiveElementStyleMap = {
	group: ResponsiveGroupStyle;
	sub: ResponsiveTextStyle;
};

/**
 * メインテキストのクラスを生成.
 * @param attributes
 * @return
 */
export function getMainTextClasses() {
	return 'ystdb-custom-heading';
}

/**
 * 見出しグループのクラスを生成.
 *
 * @param attributes ブロック属性.
 * @return 見出しグループのクラス.
 */
export function getHeadingGroupClasses( attributes: Attributes ) {
	const orientation = getCustomHeadingElementStyle( attributes, 'group' )
		?.layout?.orientation;

	return orientation === 'horizontal'
		? 'ystdb-custom-heading-group is-horizontal'
		: 'ystdb-custom-heading-group';
}

/**
 * メインテキストのレスポンシブフォントサイズを取得.
 *
 * @param attributes ブロック属性.
 * @return レスポンシブフォントサイズ.
 */
export function getMainResponsiveFontSize( attributes: Attributes ) {
	return attributes.style?.ystdb?.customHeading?.responsive?.main?.typography
		?.fontSize;
}

/**
 * メインテキストのレスポンシブフォントサイズを更新.
 *
 * @param style    コアのstyle属性.
 * @param fontSize レスポンシブフォントサイズ.
 * @return 更新後のstyle属性.
 */
export function updateMainResponsiveFontSize(
	style: Attributes[ 'style' ],
	fontSize?: ResponsiveFontSize
) {
	return stripUndefined( {
		...style,
		ystdb: {
			...style?.ystdb,
			customHeading: {
				...style?.ystdb?.customHeading,
				responsive: {
					...style?.ystdb?.customHeading?.responsive,
					main: {
						...style?.ystdb?.customHeading?.responsive?.main,
						typography: {
							...style?.ystdb?.customHeading?.responsive?.main
								?.typography,
							fontSize,
						},
					},
				},
			},
		},
	} ) as Attributes[ 'style' ];
}

/**
 * メインテキストのレスポンシブ余白を取得.
 *
 * @param attributes ブロック属性.
 * @return レスポンシブ余白.
 */
export function getMainResponsiveSpacing( attributes: Attributes ) {
	return attributes.style?.ystdb?.customHeading?.responsive?.main?.spacing;
}

/**
 * メインテキストのレスポンシブ余白を更新.
 *
 * @param style           コアのstyle属性.
 * @param spacing         レスポンシブ余白.
 * @param spacing.margin  外側余白.
 * @param spacing.padding 内側余白.
 * @return 更新後のstyle属性.
 */
export function updateMainResponsiveSpacing(
	style: Attributes[ 'style' ],
	spacing?: {
		margin?: ResponsiveSpacing;
		padding?: ResponsiveSpacing;
	}
) {
	return stripUndefined( {
		...style,
		ystdb: {
			...style?.ystdb,
			customHeading: {
				...style?.ystdb?.customHeading,
				responsive: {
					...style?.ystdb?.customHeading?.responsive,
					main: {
						...style?.ystdb?.customHeading?.responsive?.main,
						spacing,
					},
				},
			},
		},
	} ) as Attributes[ 'style' ];
}

/**
 * サブテキストまたは見出しグループのスタイルを取得.
 *
 * @param attributes ブロック属性.
 * @param element    取得対象.
 * @return 対象要素のスタイル.
 */
export function getCustomHeadingElementStyle(
	attributes: Attributes,
	element: CustomHeadingElement
) {
	return attributes.style?.ystdb?.customHeading?.[ element ];
}

/**
 * サブテキストまたは見出しグループのスタイルを更新.
 *
 * @param style        コアのstyle属性.
 * @param element      更新対象.
 * @param elementStyle 対象要素のスタイル.
 * @return 更新後のstyle属性.
 */
export function updateCustomHeadingElementStyle(
	style: Attributes[ 'style' ],
	element: CustomHeadingElement,
	elementStyle?: ElementStyle
) {
	return stripUndefined( {
		...style,
		ystdb: {
			...style?.ystdb,
			customHeading: {
				...style?.ystdb?.customHeading,
				[ element ]: elementStyle,
			},
		},
	} ) as Attributes[ 'style' ];
}

/**
 * サブテキストまたは見出しグループのレスポンシブスタイルを取得.
 *
 * @param attributes ブロック属性.
 * @param element    取得対象.
 * @return 対象要素のレスポンシブスタイル.
 */
export function getCustomHeadingResponsiveElementStyle<
	Element extends keyof ResponsiveElementStyleMap,
>( attributes: Attributes, element: Element ) {
	return attributes.style?.ystdb?.customHeading?.responsive?.[ element ] as
		| ResponsiveElementStyleMap[ Element ]
		| undefined;
}

/**
 * サブテキストまたは見出しグループのレスポンシブスタイルを更新.
 *
 * @param style        コアのstyle属性.
 * @param element      更新対象.
 * @param elementStyle 対象要素のレスポンシブスタイル.
 * @return 更新後のstyle属性.
 */
export function updateCustomHeadingResponsiveElementStyle<
	Element extends keyof ResponsiveElementStyleMap,
>(
	style: Attributes[ 'style' ],
	element: Element,
	elementStyle?: ResponsiveElementStyleMap[ Element ]
) {
	return stripUndefined( {
		...style,
		ystdb: {
			...style?.ystdb,
			customHeading: {
				...style?.ystdb?.customHeading,
				responsive: {
					...style?.ystdb?.customHeading?.responsive,
					[ element ]: elementStyle,
				},
			},
		},
	} ) as Attributes[ 'style' ];
}

/**
 * レスポンシブ余白をCSSカスタムプロパティへ変換.
 *
 * @param prefix  カスタムプロパティ名の接頭辞.
 * @param spacing レスポンシブ余白.
 * @return CSSカスタムプロパティ.
 */
function getResponsiveSpacingStyles(
	prefix: string,
	spacing?: ResponsiveTextStyle[ 'spacing' ]
) {
	const styles: Record< string, string > = {};
	const types = [ 'desktop', 'tablet', 'mobile' ] as const;

	types.forEach( ( type ) => {
		const margin = spacing?.margin?.[ type ];
		const padding = spacing?.padding?.[ type ];

		positions.forEach( ( position ) => {
			const marginValue = margin?.[ position ];
			// 未設定の辺は単一設定へフォールバックさせる.
			if ( marginValue ) {
				styles[
					getResponsiveCustomPropName(
						`${ prefix }--margin-${ position }`,
						type
					)
				] = presetTokenToCssVar( marginValue ) || marginValue;
			}

			const paddingValue = padding?.[ position ];
			// 未設定の辺は単一設定へフォールバックさせる.
			if ( paddingValue ) {
				styles[
					getResponsiveCustomPropName(
						`${ prefix }--padding-${ position }`,
						type
					)
				] = presetTokenToCssVar( paddingValue ) || paddingValue;
			}
		} );
	} );

	return styles;
}

/**
 * レスポンシブ文字スタイルをCSSカスタムプロパティへ変換.
 *
 * @param fontSizeProperty フォントサイズのカスタムプロパティ名.
 * @param spacingPrefix    余白のカスタムプロパティ名の接頭辞.
 * @param style            レスポンシブ文字スタイル.
 * @return CSSカスタムプロパティ.
 */
function getResponsiveTextStyles(
	fontSizeProperty: string,
	spacingPrefix: string,
	style?: ResponsiveTextStyle
) {
	return {
		...getResponsiveCustomProperties(
			fontSizeProperty,
			style?.typography?.fontSize
		),
		...getResponsiveSpacingStyles( spacingPrefix, style?.spacing ),
	};
}

/**
 * メインテキストのスタイルを生成.
 * @param attributes
 * @return
 */
export function getMainTextStyles( attributes: Attributes ) {
	return getResponsiveTextStyles( 'heading--font-size', 'custom-heading', {
		typography: {
			fontSize: getMainResponsiveFontSize( attributes ),
		},
		spacing: getMainResponsiveSpacing( attributes ),
	} );
}

/**
 * サブテキストのレスポンシブスタイルを生成.
 *
 * @param attributes ブロック属性.
 * @return CSSカスタムプロパティ.
 */
export function getSubTextResponsiveStyles( attributes: Attributes ) {
	return getResponsiveTextStyles(
		'custom-heading-sub--font-size',
		'custom-heading-sub',
		getCustomHeadingResponsiveElementStyle( attributes, 'sub' )
	);
}

/**
 * 見出しグループのレスポンシブスタイルを生成.
 *
 * @param attributes ブロック属性.
 * @return CSSカスタムプロパティ.
 */
export function getGroupResponsiveStyles( attributes: Attributes ) {
	const style = getCustomHeadingResponsiveElementStyle( attributes, 'group' );
	const blockGapStyles = getResponsiveCustomProperties(
		'custom-heading-group--block-gap',
		style?.spacing?.blockGap,
		( value ) =>
			'string' === typeof value
				? presetTokenToCssVar( value ) || value
				: value
	);
	const layoutStyles: Record< string, string > = {};
	const types = [ 'desktop', 'tablet', 'mobile' ] as const;

	types.forEach( ( type ) => {
		const layout = style?.layout?.[ type ];
		const layoutDefaults = getElementLayoutDefaultValues(
			CUSTOM_HEADING_LAYOUT_DEFAULT_VALUES,
			layout?.orientation
		);

		// 並び方向がある場合だけflex-directionを上書きする.
		if ( layout?.orientation ) {
			layoutStyles[
				getResponsiveCustomPropName(
					'custom-heading-group--flex-direction',
					type
				)
			] = 'horizontal' === layout.orientation ? 'row' : 'column';
			layoutStyles[
				getResponsiveCustomPropName(
					'custom-heading-group--align-items',
					type
				)
			] = layout.alignItems ?? layoutDefaults.alignItems;
			layoutStyles[
				getResponsiveCustomPropName(
					'custom-heading-group--justify-content',
					type
				)
			] = layout.justifyContent ?? layoutDefaults.justifyContent;
		}

		// 配置がある場合だけ単一設定を上書きする.
		if ( layout?.alignItems && ! layout.orientation ) {
			layoutStyles[
				getResponsiveCustomPropName(
					'custom-heading-group--align-items',
					type
				)
			] = layout.alignItems;
		}

		// 配置がある場合だけ単一設定を上書きする.
		if ( layout?.justifyContent && ! layout.orientation ) {
			layoutStyles[
				getResponsiveCustomPropName(
					'custom-heading-group--justify-content',
					type
				)
			] = layout.justifyContent;
		}
	} );

	return {
		...getResponsiveSpacingStyles( 'custom-heading-group', style?.spacing ),
		...blockGapStyles,
		...layoutStyles,
	};
}
