import classnames from 'classnames';

/**
 * Aktk dependencies.
 */
import type { ResponsiveSpacing } from '@aktk/block-components/components/responsive-spacing-control';
import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
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
import type { Attributes } from './types';

const positions = [ 'top', 'right', 'bottom', 'left' ] as const;

/**
 * メインテキストのクラスを生成.
 * @param attributes
 * @return
 */
export function getMainTextClasses( attributes: Attributes ) {
	const { clearStyle } = attributes;

	return classnames( 'ystdb-custom-heading', {
		'is-clear-style': clearStyle,
	} );
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
 * メインテキストのスタイルを生成.
 * @param attributes
 * @return
 */
export function getMainTextStyles( attributes: Attributes ) {
	const { margin: responsiveMargin, padding: responsivePadding } =
		getMainResponsiveSpacing( attributes ) ?? {};
	// 「テキストを合わせる」は他の文字サイズ指定より優先するコア仕様に揃える.
	const responsiveFontSize = attributes.fitText
		? undefined
		: getMainResponsiveFontSize( attributes );
	const responsiveFontSizeStyles = getResponsiveCustomProperties(
		'heading--font-size',
		responsiveFontSize
	);

	const types = [ 'desktop', 'tablet', 'mobile' ] as const;
	// レスポンシブ指定のあるスタイルを生成.
	const responsiveStyles = types.reduce(
		( acc, type ) => {
			// margin, padding.
			const _margin = responsiveMargin?.[ type ];
			const _padding = responsivePadding?.[ type ];

			positions.forEach( ( position ) => {
				// 未設定の辺は出力せず、単一設定へフォールバックさせる.
				const marginValue = _margin?.[ position ];
				if ( marginValue ) {
					acc[
						getResponsiveCustomPropName(
							`custom-heading--margin-${ position }`,
							type
						)
					] = presetTokenToCssVar( marginValue ) || marginValue;
				}

				// 未設定の辺は出力せず、単一設定へフォールバックさせる.
				const paddingValue = _padding?.[ position ];
				if ( paddingValue ) {
					acc[
						getResponsiveCustomPropName(
							`custom-heading--padding-${ position }`,
							type
						)
					] = presetTokenToCssVar( paddingValue ) || paddingValue;
				}
			} );
			return acc;
		},
		{} as Record< string, string >
	);

	return {
		...responsiveFontSizeStyles,
		...responsiveStyles,
	};
}
