import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {
	// @ts-expect-error WordPressが内部要素向けに公開している実験的API.
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	// @ts-expect-error WordPressが内部要素向けに公開している実験的API.
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	// @ts-expect-error WordPressが内部要素向けに公開している実験的API.
	__experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
	getTypographyClassesAndStyles,
} from '@wordpress/block-editor';

import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';

type BlockSupportAttributes = {
	backgroundColor?: string;
	borderColor?: string;
	fontFamily?: string;
	fontSize?: string;
	gradient?: string;
	textColor?: string;
	style?: {
		border?: Record< string, unknown >;
		color?: Record< string, unknown >;
		elements?: {
			link?: {
				color?: {
					text?: string;
				};
			};
		};
		spacing?: Record< string, unknown >;
		typography?: Record< string, unknown >;
	};
};

type BlockSupportSettings = {
	layout?: Record< string, unknown >;
	typography?: Record< string, unknown >;
};

export type InnerBlockSupportProps = {
	className?: string;
	style: Record< string, string | number | undefined >;
};

/**
 * Block Supportsのクラスとスタイルを内部要素向けに生成.
 *
 * 実験的APIへの依存をこの関数へ集約し、各ブロックから直接参照しない.
 *
 * @param attributes Block Supportsの属性.
 * @param settings   theme.jsonのタイポグラフィとレイアウト設定.
 * @return 内部要素へ付与するクラスとスタイル.
 */
export function getInnerBlockSupportProps(
	attributes: BlockSupportAttributes,
	settings?: BlockSupportSettings
): InnerBlockSupportProps {
	const typography = (
		getTypographyClassesAndStyles as unknown as (
			blockAttributes: BlockSupportAttributes,
			blockSettings?: BlockSupportSettings
		) => InnerBlockSupportProps
	 )( attributes, settings );
	const color = getColorClassesAndStyles( attributes );
	const spacing = getSpacingClassesAndStyles( attributes );
	const border = getBorderClassesAndStyles( attributes );
	const blockGap = attributes.style?.spacing?.blockGap;
	const blockGapValue =
		'string' === typeof blockGap
			? presetTokenToCssVar( blockGap ) || blockGap
			: undefined;
	const linkColor = attributes.style?.elements?.link?.color?.text;
	const linkColorValue = linkColor
		? presetTokenToCssVar( linkColor ) || linkColor
		: undefined;
	const className = classnames(
		typography.className,
		color.className,
		border.className
	);

	return {
		className: className || undefined,
		style: {
			...typography.style,
			...color.style,
			...spacing.style,
			...( blockGapValue ? { gap: blockGapValue } : {} ),
			...border.style,
			...( linkColorValue
				? { '--wp--style--color--link': linkColorValue }
				: {} ),
		},
	};
}
