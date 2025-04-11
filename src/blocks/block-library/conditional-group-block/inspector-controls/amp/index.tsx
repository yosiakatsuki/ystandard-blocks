/**
 * WordPress dependencies.
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Plugin
 */
import Notice from '@aktk/blocks/components/notice';
import Panel from '@aktk/blocks/components/panel';
import { getBlockEditorConfig } from '@aktk/blocks/utils';


export default function PanelAmp( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ) {
	const { hideAMP, onlyAMP } = attributes;
	const useAmp = getBlockEditorConfig( 'useAmp' );
	return (
		<>
			{ !! useAmp && (
				<Panel
					title={ __( 'AMP 表示・非表示 設定', 'ystandard-blocks' ) }
					initialOpen={ hideAMP || onlyAMP }
				>
					<BaseControl id={ 'amp-help' }>
						<Notice type={ 'help' }>
							{ __(
								'AMPページでの表示・非表示設定',
								'ystandard-blocks'
							) }
						</Notice>
					</BaseControl>
					<BaseControl id={ 'amp-enable' }>
						<ToggleControl
							label={ __(
								'AMPページで非表示',
								'ystandard-blocks'
							) }
							checked={ hideAMP }
							onChange={ ( value ) => {
								setAttributes( { hideAMP: value } );
							} }
							__nextHasNoMarginBottom
						/>
						<ToggleControl
							label={ __(
								'AMPページのみ表示',
								'ystandard-blocks'
							) }
							checked={ onlyAMP }
							onChange={ ( value ) => {
								setAttributes( { onlyAMP: value } );
							} }
							__nextHasNoMarginBottom
						/>
					</BaseControl>
				</Panel>
			) }
		</>
	);
}
