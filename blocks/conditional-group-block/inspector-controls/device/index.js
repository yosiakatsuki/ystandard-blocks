import { PanelBody, BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import Notice from '@aktk/components/notice';

const PanelDevice = ( { attributes, setAttributes } ) => {
	const { hideSp, hideMd, hideLg } = attributes;
	return (
		<PanelBody
			title={ __( '画面サイズ別非表示設定', 'ystandard-blocks' ) }
			initialOpen={ true }
		>
			<BaseControl>
				<Notice type={ 'help' }>
					{ __(
						'各デバイスの画面サイズでブロックを非表示にできます。',
						'ystandard-blocks'
					) }
				</Notice>
			</BaseControl>
			<BaseControl>
				<ToggleControl
					label={ __(
						'スマートフォンサイズで非表示',
						'ystandard-blocks'
					) }
					checked={ hideSp }
					onChange={ ( value ) => {
						setAttributes( { hideSp: value } );
					} }
				/>

				<ToggleControl
					label={ __(
						'タブレットサイズで非表示',
						'ystandard-blocks'
					) }
					checked={ hideMd }
					onChange={ ( value ) => {
						setAttributes( { hideMd: value } );
					} }
				/>

				<ToggleControl
					label={ __( 'PCサイズで非表示', 'ystandard-blocks' ) }
					checked={ hideLg }
					onChange={ ( value ) => {
						setAttributes( { hideLg: value } );
					} }
				/>
			</BaseControl>
		</PanelBody>
	);
};
export default PanelDevice;
