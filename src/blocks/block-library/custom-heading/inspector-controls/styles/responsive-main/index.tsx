/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { ResponsiveFontSizeControl } from '@aktk/block-components/components/responsive-font-size-control';
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
	updateMainResponsiveFontSize,
} from '../../../utils';

// @ts-ignore.
export function ResponsiveMainPanel( props ) {
	const { attributes, setAttributes } = props;
	const responsiveFontSize = getMainResponsiveFontSize(
		attributes as Attributes
	);
	const hasResponsiveFontSize = () =>
		Object.values( responsiveFontSize ?? {} ).some(
			( fontSize ) => undefined !== fontSize && '' !== fontSize
		);
	const resetResponsiveFontSize = () => {
		setAttributes( {
			style: updateMainResponsiveFontSize( attributes.style, undefined ),
		} );
	};

	return (
		<ToolsPanel
			label={ __( 'レスポンシブ（メイン）', 'ystandard-blocks' ) }
			resetAll={ resetResponsiveFontSize }
		>
			<ToolsPanelItem
				hasValue={ hasResponsiveFontSize }
				label={ __( 'フォントサイズ', 'ystandard-blocks' ) }
				onDeselect={ resetResponsiveFontSize }
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
		</ToolsPanel>
	);
}
