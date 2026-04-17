# yStandard Blocks

無料 WordPress テーマ「yStandard」用のブロック追加 WordPress プラグイン。

- プラグインメインファイル: `ystandard-blocks.php`
- テキストドメイン: `ystandard-blocks`
- Requires PHP: 7.4 / Requires at least: 6.4

## 開発コマンド

wp-env ベースで開発する。初回は `composer install && npm install` を実行すること。

### 環境

- `npm run wpenv:start` — wp-env 起動（xdebug 有効）
- `npm run wpenv:stop` / `npm run wpenv:destroy`
- `npm run cli` / `npm run wp` — wp-env 内で wp-cli 実行

### ビルド / ウォッチ

- `npm run build` — CSS・ブロック（v1/v2）・admin・app をまとめてビルド
- `npm run watch` — 開発時の監視ビルド
- `npm run build:block` / `npm run build:css` — 個別実行
- `npm run zip` — 配布用 ZIP 生成（`build/` とビルド済み資産のみを同梱）

### Lint

- `npm run lint` — JS / CSS / PHP をまとめて実行
- `composer phpcs` — PHP のみ（`.phpcs.xml.dist` を参照）
- `npm run lint:blocks` / `npm run lint:css` — 個別実行

### テスト

- `npm run test` — JS ユニット + PHP ユニット
- `npm run test:unit-js` — Jest（`tests/unit/jest.config.js`）
- `npm run test:unit-php` — wp-env 内で PHPUnit（`phpunit.xml.dist`）
- `npm run test:e2e` / `npm run test:e2e:debug` — Playwright

### 翻訳

- `npm run i18n:pot` — `languages/ystandard-blocks.pot` を生成
- `npm run i18n:po2json:blocks` — エディタ用 JSON 生成

## コーディング規約

- PHPCS は `.phpcs.xml.dist`（WordPress-Core + WordPress-Docs、short array 許容）に従う。除外ディレクトリは `vendor/` `build/` `node_modules/` `library/` `js/` `phpunit/` ほか。個別ルールは設定ファイル参照
- JS / CSS は `@wordpress/scripts` のデフォルト規約（`.eslintrc.js` `.stylelintrc.json` `.prettierrc.js`）
- PHP 名前空間は `ystandard_blocks` 配下に揃える（既存: `ystandard_blocks\helper` / `ystandard_blocks\utils` など）。新規クラスも同じ階層に合わせる
- PHP クラスのファイル名は `class-{name}.php`。`src/blocks/` 配下は PHPCS のクラスファイル命名ルールを除外しているため TypeScript / React の慣習で書いてよい
- 定数のプレフィックスは `YSTDB_`（例: `YSTDB_VERSION` `YSTDB_PATH` `YSTDB_URL`）
- フック名・オプション名のプレフィックスは `ystdb_`（例: オプションキー `ystdb_options`）
- カスタムブロックの名前空間は `ystdb/*`（`block.json` の `name` を `ystdb/xxx` にする）
- 翻訳関数（`__()` / `esc_html__()` / `_e()` など）を必ず使用し、テキストドメインは `ystandard-blocks` に統一する。ハードコードされた日本語文字列を直接 echo / return しない

## アーキテクチャ

- `inc/` — PHP 本体。`inc/load.php` がエントリで、必要なクラスを `require_once` で順に読み込む。サブディレクトリは責務ごとに分割（`admin` `admin-menu` `api` `balloon` `blocks` `config` `enqueue` `helper` `icon` `init` `inline-style` `kses` `migration` `option` `utility` `utils`）
- `src/blocks/block-library/` — ブロック v2。`block.json` + `index.tsx` + SCSS で構成し、ビルド結果は `build/blocks/` に出力される
- `src/blocks/deprecated/` / 各ブロック配下の `deprecated/` — 旧バージョンとの互換用
- `src/aktk-block-components/` — ブロック横断のエディタ用 React コンポーネント
- `src/js/admin-menu/` `src/js/app/` — 管理画面メニューおよびアプリ UI（webpack 個別 config）
- `blocks/` — v1 ブロック向けの SCSS / 静的アセット
- `src/sass/` — フロント用 SCSS。`css/` に出力される
- `src/icons/` — SVG アイコン定義（`npm run build:icons` で一覧生成）
- `library/` — 同梱する外部ライブラリ。PHPCS と配布の両方から除外
- 配布 ZIP は `package.json` の `zip:copy:*` 定義に従い、`build/` `inc/` `css/` `js/` `languages/` などを含め、`src/` `blocks/` や開発用設定は除外する

## ワークフロー

- ブランチ戦略
  - `feature/*` で開発 → `develop` にマージすると CI（`.github/workflows/develop.yml`）で lint / PHP 構文チェック / ユニットテスト / ベータ版 FTP デプロイが走る
  - `production` にマージすると本番 FTP デプロイ（`.github/workflows/production.yml`）
  - PR のベースは `master`
- バージョンを上げる場合は `ystandard-blocks.php` のヘッダーと `YSTDB_VERSION` 定数の **両方** を同じ値に揃える
- コミットメッセージは日本語で書く
- `build/` や `css/`・`js/` のビルド成果物はリポジトリ管理対象。仕様変更時はビルドを走らせてから差分をコミットする

## 注意事項

- IMPORTANT: DB への直接クエリ（`$wpdb`）は原則禁止。`WP_Query` / `get_posts` / `get_option` など WordPress 既存関数を優先する。やむを得ず使う場合は必ず `$wpdb->prepare()` を通し、直接クエリを選んだ理由をコメントに残す
- IMPORTANT: 出力には必ずエスケープ（`esc_html` / `esc_attr` / `esc_url` / `wp_kses_post` 等）、入力にはサニタイズ、フォーム・Ajax・REST 以外の書き込み処理には nonce（`wp_nonce_field` / `check_admin_referer` / `wp_verify_nonce`）を付ける
- IMPORTANT: ブロックの `attributes` や `block.json` のスキーマを変更する場合は、該当ブロックの `deprecated/` に旧仕様のマイグレーションを追加し、既存投稿が壊れないようにする
