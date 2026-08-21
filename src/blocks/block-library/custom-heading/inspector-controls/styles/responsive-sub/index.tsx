/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { ResponsiveFontSizeControl } from '@aktk/block-components/components/responsive-font-size-control';
import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import {
	hasResponsiveSpacingValue,
	ResponsiveSpacingControl,
} from '@aktk/block-components/components/responsive-spacing-control';
import { PanelIcon } from '@aktk/block-components/components/ystandard-icon';
import { stripUndefined } from '@aktk/block-components/utils/object';
import {
	ToolsPanel,
	ToolsPanelItem,
} from '@aktk/block-components/wp-controls/tools-panel';

/**
 * Block dependencies.
 */
import type { Attributes, ResponsiveTextStyle } from '../../../types';
import {
	getCustomHeadingResponsiveElementStyle,
	updateCustomHeadingResponsiveElementStyle,
} from '../../../utils';

// @ts-ignore.
export function ResponsiveSubPanel( props ) {
	const { attributes, setAttributes } = props;
	const blockAttributes = attributes as Attributes;
	const panelId = 'ystdb-custom-heading-responsive-sub';

	// サブテキストがない場合は対象要素と設定パネルを一致させる.
	if ( ! blockAttributes.hasSubText ) {
		return null;
	}

	const responsiveStyle = getCustomHeadingResponsiveElementStyle(
		blockAttributes,
		'sub'
	);
	const responsiveFontSize = responsiveStyle?.typography?.fontSize;
	const responsiveMargin = responsiveStyle?.spacing?.margin;
	const responsivePadding = responsiveStyle?.spacing?.padding;
	const updateStyle = ( style?: ResponsiveTextStyle ) => {
		setAttributes( {
			style: updateCustomHeadingResponsiveElementStyle(
				blockAttributes.style,
				'sub',
				style
			),
		} );
	};
	const updateFontSize = ( fontSize?: ResponsiveFontSize ) => {
		updateStyle(
			stripUndefined( {
				...responsiveStyle,
				typography: {
					...responsiveStyle?.typography,
					fontSize,
				},
			} ) as ResponsiveTextStyle | undefined
		);
	};
	const updateSpacing = ( spacing?: ResponsiveTextStyle[ 'spacing' ] ) => {
		updateStyle(
			stripUndefined( {
				...responsiveStyle,
				spacing,
			} ) as ResponsiveTextStyle | undefined
		);
	};
	const hasFontSize = () =>
		Object.values( responsiveFontSize ?? {} ).some(
			( fontSize ) => undefined !== fontSize && '' !== fontSize
		);

	return (
		<ToolsPanel
			icon={ <PanelIcon /> }
			label={ __( 'レスポンシブ（サブテキスト）', 'ystandard-blocks' ) }
			panelId={ panelId }
			resetAll={ () => updateStyle( undefined ) }
		>
			<ToolsPanelItem
				className="single-column"
				hasValue={ hasFontSize }
				isShownByDefault={ false }
				label={ __( 'フォントサイズ', 'ystandard-blocks' ) }
				onDeselect={ () => updateFontSize( undefined ) }
				panelId={ panelId }
			>
				<ResponsiveFontSizeControl
					id="custom-heading-responsive-sub-font-size"
					label={ __( 'フォントサイズ', 'ystandard-blocks' ) }
					value={ responsiveFontSize }
					onChange={ updateFontSize }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				hasValue={ () =>
					hasResponsiveSpacingValue( responsivePadding )
				}
				isShownByDefault={ false }
				label={ __( 'パディング', 'ystandard-blocks' ) }
				onDeselect={ () =>
					updateSpacing( {
						...responsiveStyle?.spacing,
						padding: undefined,
					} )
				}
				panelId={ panelId }
			>
				<ResponsiveSpacingControl
					id="custom-heading-responsive-sub-padding"
					label={ __( 'パディング', 'ystandard-blocks' ) }
					value={ responsivePadding }
					onChange={ ( padding ) =>
						updateSpacing( {
							...responsiveStyle?.spacing,
							padding,
						} )
					}
					allowedSides={ [ 'top', 'right', 'bottom', 'left' ] }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				hasValue={ () => hasResponsiveSpacingValue( responsiveMargin ) }
				isShownByDefault={ false }
				label={ __( 'マージン', 'ystandard-blocks' ) }
				onDeselect={ () =>
					updateSpacing( {
						...responsiveStyle?.spacing,
						margin: undefined,
					} )
				}
				panelId={ panelId }
			>
				<ResponsiveSpacingControl
					id="custom-heading-responsive-sub-margin"
					label={ __( 'マージン', 'ystandard-blocks' ) }
					value={ responsiveMargin }
					onChange={ ( margin ) =>
						updateSpacing( {
							...responsiveStyle?.spacing,
							margin,
						} )
					}
					allowedSides={ [ 'top', 'right', 'bottom', 'left' ] }
					minimumCustomValue={ -9999 }
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
