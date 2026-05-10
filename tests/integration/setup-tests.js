/**
 * integration テスト用セットアップ
 *
 * fixture-based test では実際の @wordpress/blocks を使って parse / serialize / validate を動かす。
 * テスト環境では edit 関数は呼ばれないが、save が間接ロードする WP パッケージのうち
 * 実体不要なものを最小モックに置き換える。
 */
import '@testing-library/jest-dom';

global.fetch = jest.fn( () =>
	Promise.resolve( {
		json: () => Promise.resolve( {} ),
	} )
);

// @wordpress/private-apis の置き換えは integration.config.js の moduleNameMapper で行う.

// section.save が間接的に @wordpress/editor をロードする可能性に備える.
jest.mock(
	'@wordpress/editor',
	() => ( {
		store: { name: 'core/editor' },
	} ),
	{ virtual: true }
);
