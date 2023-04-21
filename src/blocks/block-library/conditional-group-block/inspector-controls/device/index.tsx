/**
 * WordPress
 */
import { BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { BlockAttributes, BlockEditProps } from '@wordpress/blocks';

/**
 * Plugin.
 */
import Panel from '@aktk/blocks/components/panel';
import Notice from '@aktk/blocks/components/notice';

/**
 * 画面サイズ別非表示設定
 * @param {object} props
 * @param {object} props.attributes
 * @param {function} props.setAttributes
 * @constructor
 */
const PanelDevice = ({
	attributes,
	setAttributes,
}: BlockEditProps<BlockAttributes>) => {
	// @ts-ignore
	const { hideSp, hideMd, hideLg } = attributes;
	return (
		<Panel
			title={__('画面サイズ別非表示設定', 'ystandard-blocks')}
			initialOpen={hideSp || hideMd || hideLg}
		>
			<BaseControl id={'notice'}>
				<Notice type={'help'}>
					{__(
						'各デバイスの画面サイズでブロックを非表示にできます。',
						'ystandard-blocks'
					)}
				</Notice>
			</BaseControl>
			<BaseControl id={'device'}>
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
