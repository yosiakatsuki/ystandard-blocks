/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { CustomSizeInputPanel } from '@aktk/block-components/components/custom-font-size-picker';
import { Panel } from '@aktk/block-components/components/panel';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Block dependencies.
 */
import type { Attributes } from '../../types';
import {
	getMainResponsiveFontSize,
	updateMainResponsiveFontSize,
} from '../../utils';

// @ts-ignore.
export function ResponsivePanel( props ) {
	const { attributes, setAttributes } = props;
	const responsiveFontSize = getMainResponsiveFontSize(
		attributes as Attributes
	);

	return (
		<Panel
			title={ __( 'レスポンシブ設定', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<BaseControl
				id="custom-heading-responsive-main-font-size"
				label={ __(
					'メインテキストのフォントサイズ',
					'ystandard-blocks'
				) }
			>
				<CustomSizeInputPanel
					responsiveFontSize={ responsiveFontSize }
					onChange={ ( fontSize ) => {
						setAttributes( {
							style: updateMainResponsiveFontSize(
								attributes.style,
								fontSize
							),
						} );
					} }
				/>
			</BaseControl>
		</Panel>
	);
}
