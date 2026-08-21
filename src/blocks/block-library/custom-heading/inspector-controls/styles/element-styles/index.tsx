/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import {
	ElementBackgroundPanel,
	ElementBorderPanel,
	ElementSpacingPanel,
	ElementTypographyPanel,
} from '@aktk/block-components/components/element-style-controls';

/**
 * Block dependencies.
 */
import type { Attributes } from '../../../types';
import {
	getCustomHeadingElementStyle,
	updateCustomHeadingElementStyle,
} from '../../../utils';

// @ts-ignore.
export function ElementStylePanels( props ) {
	const { attributes, setAttributes } = props;
	const blockAttributes = attributes as Attributes;

	// 対象要素が存在しない間は設定パネルを隠し、構造とUIを一致させる.
	if ( ! blockAttributes.hasSubText ) {
		return null;
	}

	const subStyle = getCustomHeadingElementStyle( blockAttributes, 'sub' );
	const groupStyle = getCustomHeadingElementStyle( blockAttributes, 'group' );
	const updateStyle = (
		target: 'sub' | 'group',
		elementStyle: typeof subStyle
	) => {
		setAttributes( {
			style: updateCustomHeadingElementStyle(
				blockAttributes.style,
				target,
				elementStyle
			),
		} );
	};

	return (
		<>
			<ElementTypographyPanel
				label={ __( 'サブテキスト（文字）', 'ystandard-blocks' ) }
				panelId="ystdb-custom-heading-sub-typography"
				value={ subStyle }
				onChange={ ( style ) => updateStyle( 'sub', style ) }
			/>
			<ElementBackgroundPanel
				label={ __( 'サブテキスト（背景）', 'ystandard-blocks' ) }
				panelId="ystdb-custom-heading-sub-background"
				value={ subStyle }
				onChange={ ( style ) => updateStyle( 'sub', style ) }
			/>
			<ElementBorderPanel
				label={ __( 'サブテキスト（枠線）', 'ystandard-blocks' ) }
				panelId="ystdb-custom-heading-sub-border"
				value={ subStyle }
				onChange={ ( style ) => updateStyle( 'sub', style ) }
			/>
			<ElementSpacingPanel
				label={ __( 'サブテキスト（余白）', 'ystandard-blocks' ) }
				panelId="ystdb-custom-heading-sub-spacing"
				value={ subStyle }
				onChange={ ( style ) => updateStyle( 'sub', style ) }
				marginSides={ [ 'top', 'right', 'bottom', 'left' ] }
				paddingSides={ [ 'top', 'right', 'bottom', 'left' ] }
			/>
			<ElementSpacingPanel
				label={ __( '見出しグループ（余白）', 'ystandard-blocks' ) }
				panelId="ystdb-custom-heading-group-spacing"
				value={ groupStyle }
				onChange={ ( style ) => updateStyle( 'group', style ) }
				marginSides={ [ 'top', 'bottom' ] }
				paddingSides={ [ 'top', 'right', 'bottom', 'left' ] }
			/>
			<ElementBackgroundPanel
				label={ __( '見出しグループ（背景）', 'ystandard-blocks' ) }
				panelId="ystdb-custom-heading-group-background"
				value={ groupStyle }
				onChange={ ( style ) => updateStyle( 'group', style ) }
			/>
			<ElementBorderPanel
				label={ __( '見出しグループ（枠線）', 'ystandard-blocks' ) }
				panelId="ystdb-custom-heading-group-border"
				value={ groupStyle }
				onChange={ ( style ) => updateStyle( 'group', style ) }
			/>
		</>
	);
}
