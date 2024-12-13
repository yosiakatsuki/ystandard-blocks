import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe( 'Block', () => {
	test.beforeEach( async ( { admin } ) => {
		// テストの前に新しい投稿を作成する
		await admin.createNewPost();
	} );

	test( 'should be created', async ( { editor } ) => {
		// ブロックを挿入する
		await editor.insertBlock( { name: 'ystdb/heading2' } );
		// コンテンツがスナップショットと一致する事をテストする
		expect( await editor.getEditedPostContent() ).toMatchSnapshot();
	} );
} );
