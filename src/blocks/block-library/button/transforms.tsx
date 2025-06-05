/**
 * Wordpress dependencies.
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Aktk dependencies.
 */
import type { ResponsiveSpacing } from '@aktk/block-components/components/custom-spacing-select';
import { stripUndefined } from '@aktk/block-components/utils/object';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'ystdb/svg-button' ],
			// @ts-ignore
			transform: ( attributes ) => {
				const {
					text,
					isFontSizeResponsive,
					fontSizeDesktop,
					fontSizeTablet,
					fontSizeMobile,
					fontSize,
					customFontSize,
					isPaddingVerticalResponsive,
					paddingVerticalDesktop,
					paddingVerticalTablet,
					paddingVerticalMobile,
					isPaddingHorizontalResponsive,
					paddingHorizontalDesktop,
					paddingHorizontalTablet,
					paddingHorizontalMobile,
					buttonBlockDesktop,
					buttonBlockTablet,
					buttonBlockMobile,
					borderRadius,
					maxWidth,
					maxUnit,
					animationType,
					animationInterval,
					iconSizeLeft,
					iconSizeRight,
					className,
					...rest
				} = attributes;

				const newAttributes = { ...rest };

				// テキスト.
				newAttributes.content = text;

				// タイプ.
				if ( className && className.includes( 'is-style-outline' ) ) {
					newAttributes.buttonType = 'outline';
					newAttributes.className = className.replace(
						/is-style-outline/g,
						''
					);
				}

				// フォントサイズ変換.
				if ( isFontSizeResponsive ) {
					newAttributes.responsiveFontSize = {
						desktop: fontSizeDesktop
							? `${ fontSizeDesktop }px`
							: undefined,
						tablet: fontSizeTablet
							? `${ fontSizeTablet }px`
							: undefined,
						mobile: fontSizeMobile
							? `${ fontSizeMobile }px`
							: undefined,
					};
				} else {
					if ( undefined !== fontSize ) {
						newAttributes.fontSize = fontSize;
					}
					if ( undefined !== customFontSize ) {
						newAttributes.customFontSize = customFontSize;
					}
				}

				// 余白設定.
				const _responsivePading = {
					desktop: {
						top: paddingVerticalDesktop
							? `${ paddingVerticalDesktop }px`
							: undefined,
						right: paddingHorizontalDesktop
							? `${ paddingHorizontalDesktop }px`
							: undefined,
						bottom: paddingVerticalDesktop
							? `${ paddingVerticalDesktop }px`
							: undefined,
						left: paddingHorizontalDesktop
							? `${ paddingHorizontalDesktop }px`
							: undefined,
					},
					tablet: {
						top: paddingVerticalTablet
							? `${ paddingVerticalTablet }px`
							: undefined,
						right: paddingHorizontalTablet
							? `${ paddingHorizontalTablet }px`
							: undefined,
						bottom: paddingVerticalTablet
							? `${ paddingVerticalTablet }px`
							: undefined,
						left: paddingHorizontalTablet
							? `${ paddingHorizontalTablet }px`
							: undefined,
					},
					mobile: {
						top: paddingVerticalMobile
							? `${ paddingVerticalMobile }px`
							: undefined,
						right: paddingHorizontalMobile
							? `${ paddingHorizontalMobile }px`
							: undefined,
						bottom: paddingVerticalMobile
							? `${ paddingVerticalMobile }px`
							: undefined,
						left: paddingHorizontalMobile
							? `${ paddingHorizontalMobile }px`
							: undefined,
					},
				} as ResponsiveSpacing;
				newAttributes.responsivePadding =
					isPaddingVerticalResponsive || isPaddingHorizontalResponsive
						? _responsivePading
						: undefined;
				const _padding = {
					top: paddingVerticalDesktop
						? `${ paddingVerticalDesktop }px`
						: undefined,
					right: paddingHorizontalDesktop
						? `${ paddingHorizontalDesktop }px`
						: undefined,
					bottom: paddingVerticalDesktop
						? `${ paddingVerticalDesktop }px`
						: undefined,
					left: paddingHorizontalDesktop
						? `${ paddingHorizontalDesktop }px`
						: undefined,
				};
				newAttributes.padding =
					! isPaddingVerticalResponsive &&
					! isPaddingHorizontalResponsive
						? _padding
						: undefined;

				// 幅設定.
				const _responsiveWidth = {
					desktop: buttonBlockDesktop
						? `${ maxWidth }${ maxUnit }`
						: undefined,
					tablet: buttonBlockTablet
						? `${ maxWidth }${ maxUnit }`
						: undefined,
					mobile: buttonBlockMobile
						? `${ maxWidth }${ maxUnit }`
						: undefined,
				};
				newAttributes.responsiveWidth =
					buttonBlockDesktop || buttonBlockTablet || buttonBlockMobile
						? _responsiveWidth
						: undefined;

				const _width =
					buttonBlockDesktop &&
					! buttonBlockTablet &&
					! buttonBlockMobile
						? `${ maxWidth }${ maxUnit }`
						: undefined;
				newAttributes.width = _width;

				// 角丸.
				newAttributes.borderRadius = borderRadius
					? {
							topLeft: `${ borderRadius }px`,
							topRight: `${ borderRadius }px`,
							bottomLeft: `${ borderRadius }px`,
							bottomRight: `${ borderRadius }px`,
					  }
					: undefined;

				// アニメーション.
				if (
					animationType &&
					'none' !== animationType &&
					animationInterval
				) {
					newAttributes.animation = {
						type: animationType,
						interval: animationInterval,
					};
				}

				// アイコンサイズ.
				const ICON_SIZE = {
					'is-small': '0.8em',
					'is-large': '1.2em',
				};
				if ( iconSizeLeft ) {
					// @ts-ignore
					newAttributes.iconSizeLeft = ICON_SIZE[ iconSizeLeft ];
				}
				if ( iconSizeRight ) {
					// @ts-ignore
					newAttributes.iconSizeRight = ICON_SIZE[ iconSizeRight ];
				}

				return createBlock(
					'ystdb/custom-button',
					stripUndefined( newAttributes )
				);
			},
		},
	],
};

export default transforms;
