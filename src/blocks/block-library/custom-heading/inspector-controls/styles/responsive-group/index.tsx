/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import {
	hasResponsiveLayoutValue,
	ResponsiveLayoutControl,
} from '@aktk/block-components/components/responsive-layout-control';
import {
	hasResponsiveSpacingSizeValue,
	hasResponsiveSpacingValue,
	ResponsiveSpacingControl,
	ResponsiveSpacingSizeControl,
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
import { CUSTOM_HEADING_LAYOUT_DEFAULT_VALUES } from '../../../config';
import type { Attributes, ResponsiveGroupStyle } from '../../../types';
import {
	getCustomHeadingElementStyle,
	getCustomHeadingResponsiveElementStyle,
	updateCustomHeadingResponsiveElementStyle,
} from '../../../utils';

// @ts-ignore.
export function ResponsiveGroupPanel( props ) {
	const { attributes, setAttributes } = props;
	const blockAttributes = attributes as Attributes;
	const panelId = 'ystdb-custom-heading-responsive-group';

	// 見出しグループがない場合は対象要素と設定パネルを一致させる.
	if ( ! blockAttributes.hasSubText ) {
		return null;
	}

	const responsiveStyle = getCustomHeadingResponsiveElementStyle(
		blockAttributes,
		'group'
	);
	const blockGap = responsiveStyle?.spacing?.blockGap;
	const margin = responsiveStyle?.spacing?.margin;
	const padding = responsiveStyle?.spacing?.padding;
	const layout = responsiveStyle?.layout;
	const updateStyle = ( style?: ResponsiveGroupStyle ) => {
		setAttributes( {
			style: updateCustomHeadingResponsiveElementStyle(
				blockAttributes.style,
				'group',
				style
			),
		} );
	};
	const updateSpacing = ( spacing?: ResponsiveGroupStyle[ 'spacing' ] ) => {
		updateStyle(
			stripUndefined( {
				...responsiveStyle,
				spacing,
			} ) as ResponsiveGroupStyle | undefined
		);
	};
	const updateLayout = ( nextLayout?: ResponsiveGroupStyle[ 'layout' ] ) => {
		updateStyle(
			stripUndefined( {
				...responsiveStyle,
				layout: nextLayout,
			} ) as ResponsiveGroupStyle | undefined
		);
	};

	return (
		<ToolsPanel
			icon={ <PanelIcon /> }
			label={ __( 'レスポンシブ（見出しグループ）', 'ystandard-blocks' ) }
			panelId={ panelId }
			resetAll={ () => updateStyle( undefined ) }
		>
			<ToolsPanelItem
				className="single-column"
				hasValue={ () => hasResponsiveSpacingSizeValue( blockGap ) }
				isShownByDefault={ false }
				label={ __( 'ブロックの間隔', 'ystandard-blocks' ) }
				onDeselect={ () =>
					updateSpacing( {
						...responsiveStyle?.spacing,
						blockGap: undefined,
					} )
				}
				panelId={ panelId }
			>
				<ResponsiveSpacingSizeControl
					id="custom-heading-responsive-group-block-gap"
					label={ __( 'ブロックの間隔', 'ystandard-blocks' ) }
					value={ blockGap }
					onChange={ ( nextBlockGap ) =>
						updateSpacing( {
							...responsiveStyle?.spacing,
							blockGap: nextBlockGap,
						} )
					}
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				hasValue={ () => hasResponsiveSpacingValue( padding ) }
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
					id="custom-heading-responsive-group-padding"
					label={ __( 'パディング', 'ystandard-blocks' ) }
					value={ padding }
					onChange={ ( nextPadding ) =>
						updateSpacing( {
							...responsiveStyle?.spacing,
							padding: nextPadding,
						} )
					}
					allowedSides={ [ 'top', 'right', 'bottom', 'left' ] }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				hasValue={ () => hasResponsiveSpacingValue( margin ) }
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
					id="custom-heading-responsive-group-margin"
					label={ __( 'マージン', 'ystandard-blocks' ) }
					value={ margin }
					onChange={ ( nextMargin ) =>
						updateSpacing( {
							...responsiveStyle?.spacing,
							margin: nextMargin,
						} )
					}
					allowedSides={ [ 'top', 'bottom' ] }
					minimumCustomValue={ -9999 }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				hasValue={ () => hasResponsiveLayoutValue( layout ) }
				isShownByDefault={ false }
				label={ __( '配置', 'ystandard-blocks' ) }
				onDeselect={ () => updateLayout( undefined ) }
				panelId={ panelId }
			>
				<ResponsiveLayoutControl
					defaultValues={ CUSTOM_HEADING_LAYOUT_DEFAULT_VALUES }
					fallbackValue={
						getCustomHeadingElementStyle( blockAttributes, 'group' )
							?.layout
					}
					label={ __( '配置', 'ystandard-blocks' ) }
					value={ layout }
					onChange={ updateLayout }
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
