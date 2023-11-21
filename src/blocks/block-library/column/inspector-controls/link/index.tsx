// @ts-nocheck
import { useCallback } from '@wordpress/element';
import { PanelBody, BaseControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import LinkControl from '@aktk/blocks/deprecated/components/link-control';
import Notice, { noticeType } from '@aktk/blocks/deprecated/components/notice';

const PanelLink = ({ attributes, setAttributes }) => {
	const { linkTarget, rel, url, screenReaderText } = attributes;

	const handleOnLinkChange = (newValue) => {
		setAttributes(newValue);
	};

	const onSetLinkRel = useCallback(
		(value) => {
			setAttributes({ rel: value });
		},
		[setAttributes]
	);
	const onSetScreenReaderText = useCallback(
		(value) => {
			setAttributes({ screenReaderText: value });
		},
		[setAttributes]
	);

	return (
		<PanelBody
			title={__('リンク設定', 'ystandard-blocks')}
			initialOpen={false}
		>
			<BaseControl>
				<Notice type={noticeType.warning} style={{ fontSize: '12px' }}>
					<div>
						{__(
							'リンクの設定をした場合、公開ページでカラム内のテキストを選択できない状態になります。',
							'ystandard-blocks'
						)}
					</div>
				</Notice>
			</BaseControl>
			<BaseControl>
				<LinkControl
					value={{ url, linkTarget, rel }}
					onChange={handleOnLinkChange}
				/>
			</BaseControl>
			<BaseControl>
				<TextControl
					className={'ystdb-column-editor__link-rel'}
					label={__('リンク rel 属性', 'ystandard-blocks')}
					value={rel || ''}
					onChange={onSetLinkRel}
				/>
			</BaseControl>
			<BaseControl>
				<TextControl
					className={'ystdb-column-editor__link-rel'}
					label={__('スクリーンリーダーテキスト', 'ystandard-blocks')}
					value={screenReaderText || ''}
					onChange={onSetScreenReaderText}
				/>
			</BaseControl>
		</PanelBody>
	);
};
export default PanelLink;
