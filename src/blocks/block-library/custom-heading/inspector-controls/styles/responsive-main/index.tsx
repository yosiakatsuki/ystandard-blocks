/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { Panel } from '@aktk/block-components/components/panel';
import { ResponsiveFontSizeControl } from '@aktk/block-components/components/responsive-font-size-control';

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

	return (
		<Panel
			title={ __( 'レスポンシブ（メイン）', 'ystandard-blocks' ) }
			initialOpen={ false }
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
		</Panel>
	);
}
