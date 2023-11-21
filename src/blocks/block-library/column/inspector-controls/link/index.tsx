/**
 * WordPress dependencies
 */
import { useCallback, useMemo } from '@wordpress/element';
import { PanelBody, BaseControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * aktk dependencies
 */
import { LinkControl } from '@aktk/block-components/components/link-control';
/**
 * Plugin dependencies
 */
import Notice, { noticeType } from '@aktk/blocks/deprecated/components/notice';

// @ts-ignore
const PanelLink = ({ attributes, setAttributes }) => {
	const { linkTarget, rel, url, screenReaderText } = attributes;

	// @ts-ignore
	const handleOnLinkChange = (newValue) => {
		setAttributes(newValue);
	};

	const onSetLinkRel = useCallback(
		// @ts-ignore
		(value) => {
			setAttributes({ rel: value });
		},
		[setAttributes]
	);
	const onSetScreenReaderText = useCallback(
		// @ts-ignore
		(value) => {
			setAttributes({ screenReaderText: value });
		},
		[setAttributes]
	);

	const linkControlValue = useMemo(() => {
		return {
			url,
			linkTarget,
			rel,
		};
	}, [url, linkTarget, rel]);

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
					value={linkControlValue}
					onChange={handleOnLinkChange}
					isInspectorControls={true}
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
