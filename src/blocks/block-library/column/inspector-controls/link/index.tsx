/**
 * WordPress dependencies
 */
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * aktk dependencies
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import { NoticeWarning } from '@aktk/block-components/components/notice';
import {
	CustomURLInput,
	type CustomURLInputValue,
} from '@aktk/block-components/components/url-input';

// @ts-ignore
const PanelLink = ( { attributes, setAttributes } ) => {
	const { linkTarget, rel, url, screenReaderText } = attributes;

	const handleScreenReaderTextChange = ( value: string ) => {
		setAttributes( { screenReaderText: value } );
	}

	const handleCustomURLInputChange = ( value: CustomURLInputValue ) => {
		const { url: newURL, linkTarget: newLinkTarget, rel: newRel } = value;
		setAttributes( {
			url: newURL,
			linkTarget: newLinkTarget,
			rel: newRel,
		} );
	};

	return (
		<PanelBody
			title={ __( 'リンク設定', 'ystandard-blocks' ) }
			initialOpen={ false }
		>
			<BaseControl>
				<CustomURLInput
					url={ url }
					linkTarget={linkTarget}
					rel={ rel }
					onChange={ handleCustomURLInputChange }
				/>
			</BaseControl>
			<BaseControl>
				<NoticeWarning
					style={ { fontSize: '12px' } }
				>
					<div>
						{ __(
							'リンクの設定をした場合、公開ページでカラム内のテキストを選択できない状態になります。',
							'ystandard-blocks'
						) }
					</div>
				</NoticeWarning>
			</BaseControl>
			<BaseControl>
				<TextControl
					className={ 'ystdb-column-editor__link-rel' }
					label={ __(
						'スクリーンリーダーテキスト',
						'ystandard-blocks'
					) }
					value={ screenReaderText || '' }
					onChange={ handleScreenReaderTextChange }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</BaseControl>
		</PanelBody>
	);
};
export default PanelLink;
