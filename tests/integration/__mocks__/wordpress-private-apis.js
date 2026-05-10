/**
 * @wordpress/private-apis のモック
 *
 * node_modules 配下に複数バージョンの @wordpress パッケージが重複インストールされており、
 * private-apis の consent 文字列がそれぞれ異なるため、本物の private-apis を介した
 * opt-in が失敗する。fixture-based test では lock/unlock が動けば良いので簡易実装に置換する。
 *
 * moduleNameMapper で nested 解決される private-apis も含めてこのモックに揃える。
 */
const lockMap = new WeakMap();
const lock = ( object, privateData ) => {
	lockMap.set( object, privateData );
};
const unlock = ( object ) => lockMap.get( object );

module.exports = {
	__dangerousOptInToUnstableAPIsOnlyForCoreModules: () => ( {
		lock,
		unlock,
	} ),
};
