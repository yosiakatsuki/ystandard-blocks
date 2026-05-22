# TODO

後回しにする項目を記録するメモ。スコープ外と判断したが将来対応したいもの。

## ブロック移行関連

### カード・セクションブロックの lint 対応

カード・セクションブロックは v2 → v3 移行で v1 由来のコードを `src/blocks/block-library/card/` `src/blocks/block-library/section/` 配下に取り込んだが、`@wordpress/eslint-plugin` の recommended ルールに合致しない箇所が多数あり、`eslint.config.cjs` の `ignores` で一時除外している。

- 影響範囲: 上記 2 ブロックの edit / save / deprecated / inspector-controls 配下
- 主なエラー種別: `react-hooks/rules-of-hooks`、jsdoc 系、未使用変数など
- 対応方針: ブロック単位で段階的に lint を通す形にし、通った時点で `eslint.config.cjs` の `ignores` から外す

### `isSecondary` / `isPrimary` の deprecated 警告

`@wordpress/components` の `Button` で `isSecondary` / `isPrimary` プロパティが非推奨。代わりに `variant="secondary"` / `variant="primary"` を使う。

- 該当箇所例: `src/blocks/block-library/card/edit.tsx`（画像サイズボタン群、画像クリアボタン）
- 影響範囲: 旧 v1 ブロックから移植したコード全般。動作には支障なし
- 対応方針: TS 警告として可視化されているので、まとめて `variant="..."` に置換

### `*.scss` 副作用 import の型宣言不足

```ts
import './style-editor.scss';
```

を書くと TS が `モジュールまたは型宣言が見つかりません [2882]` を出す。実害はないがエディタに赤線が出る。

- 対応方針: `src/types/scss.d.ts` 等で `declare module '*.scss';` を宣言する
- 影響範囲: v2 化したブロック全般

### v2 webpack config に追加した `@aktk/components` 等の alias

card/section 移行のために `webpack.blocks.v2.config.js` に v1 由来の alias（`@aktk/components` / `@aktk/helper` / `@aktk/util` / `@aktk/controls` / `@aktk/config`）を追加した。本来は `@aktk/block-components` 配下の v2 コンポーネントに置き換えていきたい。

- 例: `@aktk/components/color-palette-control` → `@aktk/block-components/components/color-pallet-control` の `ColorPalette`（API は微妙に異なる）
- 影響範囲: card / section の edit
- 対応方針: ブロックごとに段階的に置き換える

### 旧ブロック登録処理の整理

`block.json` ベースの v2 ブロック登録へ移行した後も、PHP 側には旧 `js/blocks` 前提の処理が残っている。

- `inc/blocks/class-dynamic-block.php` は `src/blocks/block-library/card/class-card-block.php` が継承しているため、現時点では削除しない
- `inc/blocks/class-blocks.php` の旧 `js/blocks/*.js` スキャン処理は、`ystdb` 設定の `wp_localize_script()` と絡むため別工程で整理する
- 対応方針: card の dynamic block 実装とエディター設定の受け渡しを確認したうえで、旧登録処理を段階的に廃止する
