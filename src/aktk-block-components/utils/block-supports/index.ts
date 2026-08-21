import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {
	// @ts-expect-error WordPressが内部要素向けに公開している実験的API.
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	// @ts-expect-error WordPressが内部要素向けに公開している実験的API.
	__experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
	// @ts-expect-error 型定義が同梱されていないWordPress公開API.
	getTypographyClassesAndStyles,
} from '@wordpress/block-editor';

import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';

type BlockSupportAttributes = {
	backgroundColor?: string;
	fontFamily?: string;
	fontSize?: string;
	gradient?: string;
	textColor?: string;
	style?: {
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
	const typography = getTypographyClassesAndStyles( attributes, settings );
	const color = getColorClassesAndStyles( attributes );
	const spacing = getSpacingClassesAndStyles( attributes );
	const linkColor = attributes.style?.elements?.link?.color?.text;
	const linkColorValue = linkColor
		? presetTokenToCssVar( linkColor ) || linkColor
		: undefined;
	const className = classnames( typography.className, color.className );

	return {
		className: className || undefined,
		style: {
			...typography.style,
			...color.style,
			...spacing.style,
			...( linkColorValue
				? { '--wp--style--color--link': linkColorValue }
				: {} ),
		},
	};
}
