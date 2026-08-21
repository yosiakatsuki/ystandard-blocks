/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { ResponsiveFontSizeControl } from '@aktk/block-components/components/responsive-font-size-control';
import {
	hasResponsiveSpacingValue,
	ResponsiveSpacingControl,
} from '@aktk/block-components/components/responsive-spacing-control';
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
	getMainResponsiveFontSize,
	getMainResponsiveSpacing,
	updateMainResponsiveFontSize,
	updateMainResponsiveSpacing,
} from '../../../utils';

// @ts-ignore.
export function ResponsiveMainPanel( props ) {
	const { attributes, setAttributes } = props;
	const panelId = 'ystdb-custom-heading-responsive-main';
	const responsiveFontSize = getMainResponsiveFontSize(
		attributes as Attributes
	);
	const { margin: responsiveMargin, padding: responsivePadding } =
		getMainResponsiveSpacing( attributes as Attributes ) ?? {};
	const hasResponsiveFontSize = () =>
		Object.values( responsiveFontSize ?? {} ).some(
			( fontSize ) => undefined !== fontSize && '' !== fontSize
		);
	const resetResponsiveFontSize = () => {
		setAttributes( {
			style: updateMainResponsiveFontSize( attributes.style, undefined ),
		} );
	};
	const hasMargin = () => hasResponsiveSpacingValue( responsiveMargin );
	const hasPadding = () => hasResponsiveSpacingValue( responsivePadding );
	const resetMargin = () => {
		setAttributes( {
			style: updateMainResponsiveSpacing( attributes.style, {
				margin: undefined,
				padding: responsivePadding,
			} ),
		} );
	};
	const resetPadding = () => {
		setAttributes( {
			style: updateMainResponsiveSpacing( attributes.style, {
				margin: responsiveMargin,
				padding: undefined,
			} ),
		} );
	};
	const resetAll = () => {
		const style = updateMainResponsiveFontSize(
			attributes.style,
			undefined
		);
		setAttributes( {
			style: updateMainResponsiveSpacing( style, undefined ),
		} );
	};

	return (
		<ToolsPanel
			label={ __( 'レスポンシブ（メイン）', 'ystandard-blocks' ) }
			panelId={ panelId }
			resetAll={ resetAll }
			icon={ <PanelIcon /> }
		>
			<ToolsPanelItem
				className="single-column"
				hasValue={ hasResponsiveFontSize }
				label={ __( 'フォントサイズ', 'ystandard-blocks' ) }
				onDeselect={ resetResponsiveFontSize }
				panelId={ panelId }
				isShownByDefault={ false }
			>
				<ResponsiveFontSizeControl
					id="custom-heading-responsive-main-font-size"
					label={ __( 'フォントサイズ', 'ystandard-blocks' ) }
					value={ responsiveFontSize }
					onChange={ ( fontSize ) => {
						setAttributes( {
							style: updateMainResponsiveFontSize(
								attributes.style,
								fontSize
							),
						} );
					} }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				hasValue={ hasPadding }
				label={ __( 'パディング', 'ystandard-blocks' ) }
				onDeselect={ resetPadding }
				panelId={ panelId }
				isShownByDefault={ false }
			>
				<ResponsiveSpacingControl
					id="custom-heading-responsive-main-padding"
					label={ __( 'パディング', 'ystandard-blocks' ) }
					value={ responsivePadding }
					onChange={ ( padding ) => {
						setAttributes( {
							style: updateMainResponsiveSpacing(
								attributes.style,
								{
									margin: responsiveMargin,
									padding,
								}
							),
						} );
					} }
					allowedSides={ [ 'top', 'right', 'bottom', 'left' ] }
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				hasValue={ hasMargin }
				label={ __( 'マージン', 'ystandard-blocks' ) }
				onDeselect={ resetMargin }
				panelId={ panelId }
				isShownByDefault={ false }
			>
				<ResponsiveSpacingControl
					id="custom-heading-responsive-main-margin"
					label={ __( 'マージン', 'ystandard-blocks' ) }
					value={ responsiveMargin }
					onChange={ ( margin ) => {
						setAttributes( {
							style: updateMainResponsiveSpacing(
								attributes.style,
								{
									margin,
									padding: responsivePadding,
								}
							),
						} );
					} }
					allowedSides={ [ 'top', 'bottom' ] }
					minimumCustomValue={ -9999 }
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
