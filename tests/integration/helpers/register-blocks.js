/**
 * fixture-based test 用のブロック登録ヘルパー
 *
 * 各ブロックの index.tsx 経由ではなく、`block.json` + `save` を直接
 * registerBlockType に渡すことで edit 側の依存（react-feather, @aktk/components 等）を
 * 引き込まない。テスト環境で edit 関数自体は呼ばれないため、ダミーで足りる。
 */
import { registerBlockType, getBlockType } from '@wordpress/blocks';

// card.
import cardMetadata from '../../../src/blocks/block-library/card/block.json';

// section.
import sectionMetadata from '../../../src/blocks/block-library/section/block.json';
import sectionSave from '../../../src/blocks/block-library/section/save';

// custom-heading.
import customHeadingMetadata from '../../../src/blocks/block-library/custom-heading/block.json';
import customHeadingSave from '../../../src/blocks/block-library/custom-heading/save';
import { deprecated as customHeadingDeprecated } from '../../../src/blocks/block-library/custom-heading/deprecated';

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
	registerOnce( sectionMetadata.name, {
		...sectionMetadata,
		save: sectionSave,
	} );
}

export function registerCustomHeadingTestBlock() {
	registerOnce( customHeadingMetadata.name, {
		...customHeadingMetadata,
		save: customHeadingSave,
		deprecated: customHeadingDeprecated,
	} );
}
