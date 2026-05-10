/**
 * fixture-based test 用のブロック登録ヘルパー
 *
 * 各ブロックの index.tsx / index.js 経由ではなく、`block.json` または `config.js` から
 * `attributes` / `supports` / `save` を直接 registerBlockType に渡すことで
 * edit 側の依存（react-feather, @aktk/components 等）を引き込まない。
 * テスト環境で edit 関数自体は呼ばれないため、ダミーで足りる。
 */
import { registerBlockType, getBlockType } from '@wordpress/blocks';

// card は v2 化済み（block.json 経由）.
import cardMetadata from '../../../src/blocks/block-library/card/block.json';

// section は v1 形式のまま（移行前）.
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
	registerOnce( cardMetadata.name, {
		...cardMetadata,
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
