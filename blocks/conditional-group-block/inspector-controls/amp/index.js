import { PanelBody, BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard Blocks.
 */
import Notice from '@aktk/components/notice';
import { getBlockEditorConfig } from '@aktk/helper/config';

const PanelAmp = ( { attributes, setAttributes } ) => {
	const { hideAMP, onlyAMP } = attributes;
	const useAmp = getBlockEditorConfig( 'useAmp' );
	console.log( { useAmp } );
	return (
		<>
			{ !! useAmp && (
				<PanelBody
					title={ __( 'AMP 表示・非表示 設定', 'ystandard-blocks' ) }
					initialOpen={ true }
				>
					<BaseControl>
						<Notice type={ 'help' }>
							{ __(
								'AMPページでの表示・非表示設定',
								'ystandard-blocks'
							) }
						</Notice>
					</BaseControl>
					<BaseControl>
						<ToggleControl
							label={ __(
								'AMPページで非表示',
								'ystandard-blocks'
							) }
							checked={ hideAMP }
							onChange={ ( value ) => {
								setAttributes( { hideAMP: value } );
							} }
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
						/>
					</BaseControl>
				</PanelBody>
			) }
		</>
	);
};
export default PanelAmp;
