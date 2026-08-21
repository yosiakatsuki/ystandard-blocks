/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { ResponsiveSpacingSelectControl } from '@aktk/block-components/components/custom-spacing-select';
import { PanelIcon } from '@aktk/block-components/components/ystandard-icon';
import {
	ToolsPanel,
	ToolsPanelItem,
} from '@aktk/block-components/wp-controls/tools-panel';

/**
 * Block dependencies.
 */
import type { Attributes } from '../../../types';
import {
	getGroupResponsiveSpacing,
	updateGroupResponsiveSpacing,
} from '../../../utils';

// @ts-ignore.
export function ResponsiveSpacingPanel( props ) {
	const { attributes, setAttributes } = props;
	const { margin: responsiveMargin, padding: responsivePadding } =
		getGroupResponsiveSpacing( attributes as Attributes ) ?? {};
	const hasMargin = () =>
		Object.values( responsiveMargin ?? {} ).some( Boolean );
	const hasPadding = () =>
		Object.values( responsivePadding ?? {} ).some( Boolean );
	const resetMargin = () => {
		setAttributes( {
			style: updateGroupResponsiveSpacing( attributes.style, {
				margin: undefined,
				padding: responsivePadding,
			} ),
		} );
	};
	const resetPadding = () => {
		setAttributes( {
			style: updateGroupResponsiveSpacing( attributes.style, {
				margin: responsiveMargin,
				padding: undefined,
			} ),
		} );
	};
	const resetAll = () => {
		setAttributes( {
			style: updateGroupResponsiveSpacing( attributes.style, undefined ),
		} );
	};

	return (
		<ToolsPanel
			label={ __( 'レスポンシブ（見出し全体）', 'ystandard-blocks' ) }
			resetAll={ resetAll }
			icon={ <PanelIcon /> }
		>
			<ToolsPanelItem
				hasValue={ hasMargin }
				label={ __( '外側余白', 'ystandard-blocks' ) }
				onDeselect={ resetMargin }
			>
				<ResponsiveSpacingSelectControl
					value={ responsiveMargin }
					onChange={ ( value ) => {
						setAttributes( {
							style: updateGroupResponsiveSpacing(
								attributes.style,
								{
									margin: value,
									padding: responsivePadding,
								}
							),
						} );
					} }
					minimumCustomValue={ -9999 }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				hasValue={ hasPadding }
				label={ __( '内側余白', 'ystandard-blocks' ) }
				onDeselect={ resetPadding }
			>
				<ResponsiveSpacingSelectControl
					value={ responsivePadding }
					onChange={ ( value ) => {
						setAttributes( {
							style: updateGroupResponsiveSpacing(
								attributes.style,
								{
									margin: responsiveMargin,
									padding: value,
								}
							),
						} );
					} }
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
