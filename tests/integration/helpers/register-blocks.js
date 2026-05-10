/**
 * fixture-based test 用のブロック登録ヘルパー
 *
 * 各ブロックの index.js 経由ではなく、`attributes` / `supports` / `save` を直接
 * registerBlockType に渡すことで edit.js の依存（react-feather 等）を引き込まない。
 * テスト環境で edit 関数自体は呼ばれないため、ダミーで足りる。
 *
 * 対象は v1 形式（block.json なし）の card / section ブロックのみ。
 */
import { registerBlockType, getBlockType } from '@wordpress/blocks';

import {
	attributes as cardAttributes,
	supports as cardSupports,
} from '../../../blocks/card/config';
import {
	attributes as sectionAttributes,
	supports as sectionSupports,
} from '../../../blocks/section/config';
import sectionSave from '../../../blocks/section/save';

const NoopEdit = () => null;

function registerOnce( name, settings ) {
	if ( getBlockType( name ) ) {
		return;
	}
	registerBlockType( name, {
		title: name,
		edit: NoopEdit,
		...settings,
	} );
}

export function registerCardTestBlock() {
	// card は dynamic block（save は null）.
	registerOnce( 'ystdb/card', {
		attributes: cardAttributes,
		supports: cardSupports,
		save: () => null,
	} );
}

export function registerSectionTestBlock() {
	registerOnce( 'ystdb/section', {
		attributes: sectionAttributes,
		supports: sectionSupports,
		save: sectionSave,
	} );
}
