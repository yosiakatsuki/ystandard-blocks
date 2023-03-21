/**
 * WordPress
 */
import { BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard
 */
import Notice from '@aktk/components/notice';
import Panel from '@aktk/components/panel';

const PanelDevice = ({ attributes, setAttributes }) => {
	const { hideSp, hideMd, hideLg } = attributes;
	return (
		<Panel
			title={__('画面サイズ別非表示設定', 'ystandard-blocks')}
			initialOpen={hideSp || hideMd || hideLg}
		>
			<BaseControl>
				<Notice type={'help'}>
					{__(
						'各デバイスの画面サイズでブロックを非表示にできます。',
						'ystandard-blocks'
					)}
				</Notice>
			</BaseControl>
			<BaseControl>
				<ToggleControl
					label={__(
						'スマートフォンサイズで非表示',
						'ystandard-blocks'
					)}
					checked={hideSp}
					onChange={(value) => {
						setAttributes({ hideSp: value });
					}}
				/>

				<ToggleControl
					label={__('タブレットサイズで非表示', 'ystandard-blocks')}
					checked={hideMd}
					onChange={(value) => {
						setAttributes({ hideMd: value });
					}}
				/>

				<ToggleControl
					label={__('PCサイズで非表示', 'ystandard-blocks')}
					checked={hideLg}
					onChange={(value) => {
						setAttributes({ hideLg: value });
					}}
				/>
			</BaseControl>
		</Panel>
	);
};
export default PanelDevice;
