import { Link2 } from 'react-feather';
/**
 * WordPress.
 */
import { __ } from '@wordpress/i18n';
import { NoticeWarning } from '@aktk/block-components/components/notice';
import { registerBlockType } from '@wordpress/blocks';
/**
 * Aktk Dependencies.
 */
import { COLORS } from '@aktk/block-components/config';
/**
 * Plugin.
 */
import { CATEGORY } from '@aktk/blocks/config';
/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';
import edit from './edit';
import save from './save';
import './style.scss';

import transforms from './transforms';
import { mergeDefaultAttributes } from '@aktk/blocks/utils';

export function registerSvgButtonBlock() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);
	// @ts-ignore
	registerBlockType( metadata.name, {
		...metadata,
		...{
			description: (
				<NoticeWarning>
					{__( 'このブロックは非推奨になりました。今後廃止予定です。新しいブロックをご利用ください。ブロックの変換から「カスタムボタン」に変換できます。他にも非推奨となったボタンブロックを使用している箇所を調べるには、管理画面の yStandard Blocks > 移行が必要なブロック一覧 メニューをご確認ください。', 'ystandard-blocks' )}
				</NoticeWarning>
			),
			icon: (
				<Link2
					stroke={ COLORS.iconDeprecatedForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.deprecated,
			attributes,
			edit,
			save,
			example: {},
			transforms,
		},
	} );
}

registerSvgButtonBlock();
