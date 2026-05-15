# WordPress 7.0 対応方針

調査日: 2026-05-15
対象: yStandard Blocks 3.24.0 時点

## 前提

WordPress 7.0 は 2026-05-20 リリース予定。2026-05-14 に RC4 が公開され、公式の Field Guide も公開済み。

当初注目されていたリアルタイム共同編集は、2026-05-08 の公式告知で 7.0 から除外された。そのため、このプラグインの 7.0 対応では共同編集前提の保存競合対応より、ブロックエディター・パターン編集・ブロック supports・iframe エディター周辺を優先して確認する。

## 参照元

- [WordPress 7.0 Field Guide](https://make.wordpress.org/core/2026/05/14/wordpress-7-0-field-guide/)
- [WordPress 7.0 Release Candidate 4](https://wordpress.org/news/2026/05/wordpress-7-0-release-candidate-4/)
- [WordPress 7.0 Release Party Updated Schedule](https://make.wordpress.org/core/2026/04/22/wordpress-7-0-release-party-updated-schedule/)
- [Real-time collaboration will not ship in WordPress 7.0](https://make.wordpress.org/core/2026/05/08/rtc-removed-from-7-0/)
- [Pattern Editing in WordPress 7.0](https://make.wordpress.org/core/2026/03/15/pattern-editing-in-wordpress-7-0/)
- [Pattern Overrides in WP 7.0: Support for Custom Blocks](https://make.wordpress.org/core/2026/03/16/pattern-overrides-in-wp-7-0-support-for-custom-blocks/)
- [Block Visibility in WordPress 7.0](https://make.wordpress.org/core/2026/03/15/block-visibility-in-wordpress-7-0/)
- [Custom CSS for Individual Block Instances in WordPress 7.0](https://make.wordpress.org/core/2026/03/15/custom-css-for-individual-block-instances-in-wordpress-7-0/)
- [Dimensions Support Enhancements in WordPress 7.0](https://make.wordpress.org/core/2026/03/15/dimensions-support-enhancements-in-wordpress-7-0/)
- [Iframed Editor Changes in WordPress 7.0](https://make.wordpress.org/core/2026/02/24/iframed-editor-changes-in-wordpress-7-0/)
- [Changes to the Interactivity API in WordPress 7.0](https://make.wordpress.org/core/2026/02/23/changes-to-the-interactivity-api-in-wordpress-7-0/)
- [PHP-only block registration](https://make.wordpress.org/core/2026/03/03/php-only-block-registration/)
- [Client-Side Abilities API in WordPress 7.0](https://make.wordpress.org/core/2026/03/24/client-side-abilities-api-in-wordpress-7-0/)
- [Core Button block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/button/block.json)
- [Core Image block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/image/block.json)
- [Core Heading block.json](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/block.json)

## 影響が大きい変更点

### `contentOnly` の適用範囲拡大

WordPress 7.0 では、未同期パターンやテンプレートパーツ内の編集体験で `contentOnly` がより広く使われる。`contentOnly` コンテナ内で編集対象にしたいカスタムブロックは、コンテンツを表す属性に `"role": "content"` を設定する必要がある。

このリポジトリでは `src/blocks/block-library/custom-heading/block.json` の `content` には設定済み。一方で、次のようなブロックはユーザーがパターン内で編集したい文字列・URL・画像属性を持つが、現時点では `role` が未設定。

- `ystdb/custom-button`: `content`, `url`
- `ystdb/heading`: `content`, `subText`, 装飾画像系
- `ystdb/balloon`: `avatarName`, `avatarURL`, `avatarAlt`, `text`
- `ystdb/card`: `url`, `title`, `imageURL`, `imageAlt`, `dscr`, `caption`
- `ystdb/svg-icon`: `icon`, `url`
- `ystdb/column`: `url`, `screenReaderText`
- 非推奨ブロック: `ystdb/svg-button`, `ystdb/svg-button-link`

方針として、既存投稿のシリアライズに影響しない範囲で `role: "content"` を追加する。コンテナ系ブロックで属性自体に編集対象のコンテンツがないものは、必要に応じて `supports.contentRole` を検討する。ただし、まずは属性単位の `role` を優先する。

### `role: "content"` 付与対象調査

調査日: 2026-05-15
対応 ID: `WP70-002`

判断基準は「パターンやテンプレートパーツの利用者が、デザインを崩さず個別に差し替えたい中身かどうか」。テキスト、URL、画像 URL、画像 alt、画像 ID は対象候補にする。色、余白、配置、サイズ、表示タイプ、アニメーション、表示条件は対象外にする。

Core ブロックでは、Button の `url` / `text` / `linkTarget` / `rel`、Image の `url` / `alt` / `caption` / `title` / `href` / `id`、Heading の `content` などに `role: "content"` が付いている。これに合わせ、リンクの `linkTarget` / `rel` や画像の `imageID` / `avatarID` も contentOnly 内での差し替えに関係する属性として扱う。

- `ystdb/balloon`
  - 推奨: `avatarName`, `avatarURL`, `avatarAlt`, `avatarID`, `text`
  - 対象外: 色、文字サイズ、枠線、角丸、吹き出し位置、吹き出しタイプ、縦位置
  - 理由: 名前、アバター画像、本文はパターン利用時に差し替える中身。見た目設定はパターン側で固定したい。
- `ystdb/custom-button`
  - 推奨: `content`, `url`, `linkTarget`, `rel`
  - 要検討: `iconLeft`, `iconRight`
  - 対象外: ボタン種別、アイコンサイズ、アイコン位置、空アイコン、色、グラデーション、枠線、角丸、文字サイズ、下線、幅、余白、アニメーション、`style`
  - 理由: ラベルとリンク関連は Core Button と同様にコンテンツ扱い。アイコンは文脈によってコンテンツにも装飾にもなるため、初回実装では要検討にする。
- `ystdb/card`
  - 推奨: `url`, `linkTarget`, `rel`, `title`, `imageURL`, `imageAlt`, `imageID`, `dscr`, `caption`
  - 対象外: カードタイプ、画像表示有無、画像サイズ、画像タイプ、画像位置、概要表示有無、概要文字数、ドメイン表示有無、色、枠線
  - 理由: リンク先、タイトル、画像、概要、キャプションはカードごとの差し替え対象。表示方法や装飾はデザイン設定。
- `ystdb/column`
  - 推奨: `url`, `linkTarget`, `rel`, `screenReaderText`
  - 対象外: 背景色、影、余白、幅、自動幅
  - 理由: カラム全体リンクのリンク先とスクリーンリーダーテキストはコンテンツ差し替え対象。レイアウトは対象外。
- `ystdb/columns`
  - 推奨: なし
  - 要検討: `supports.contentRole: true`, `supports.listView: true`
  - 対象外: カラム数、配置、逆順、余白削除、gap、margin
  - 理由: ブロック自身に差し替えるコンテンツ属性はない。子ブロックを持つコンテナなので、contentOnly 内での選択性や List View 体験は別途確認する。
- `ystdb/conditional-group-block`
  - 推奨: なし
  - 要検討: `supports.contentRole: true`, `supports.listView: true`
  - 対象外: デバイス表示条件、タクソノミー条件、AMP 条件、子ブロックへの適用設定
  - 理由: 属性は表示条件でありコンテンツではない。子ブロックを編集させるためのコンテナ扱いは別途確認する。
- `ystdb/custom-heading`
  - 推奨: `content` は対応済み
  - 対象外: 見出しレベル、配置、色、文字サイズ、行高、文字間、太さ、スタイル、フォント、スタイルクリア、placeholder
  - 理由: 見出し本文のみがコンテンツ。その他はデザイン・編集補助設定。
- `ystdb/heading`
  - 推奨: `content`, `subText`, `dividerImageURL`, `dividerImageAlt`, `dividerImageID`
  - 対象外: 見出しレベル、配置、色、文字サイズ、レスポンシブ文字サイズ、太さ、文字間、余白、サブテキスト位置、サブテキスト装飾、区切り線サイズ、スタイルクリア
  - 理由: メインテキスト、サブテキスト、装飾画像は見出しごとの差し替え対象。装飾画像はデザイン要素でもあるため、実装時にパターン用途を再確認する。
- `ystdb/section`
  - 推奨: `backgroundImageURL`, `backgroundImageAlt`, `backgroundImageID`
  - 要検討: `supports.contentRole: true`, `supports.listView: true`
  - 対象外: 配置、余白、背景色、グラデーション、オーバーレイ、背景画像表示設定、テキスト色、区切り線、内側幅、高さ、アニメーション、HTML タグ、枠線
  - 理由: 背景画像をパターン利用者が差し替える用途はあり得る。ただしセクションは基本的にレイアウトコンテナなので、画像を content 扱いにするかはパターン設計次第。
- `ystdb/svg-button`
  - 推奨: `text`, `url`, `linkTarget`, `rel`
  - 要検討: `iconLeft`, `iconRight`
  - 対象外: 角丸、アイコンサイズ、配置、色、文字サイズ、レスポンシブ文字サイズ、余白、ブロック幅、最大幅、アニメーション
  - 理由: 非推奨ブロックだが既存投稿・既存パターンの互換性を考えると、ラベルとリンク関連は対象にする価値がある。
- `ystdb/svg-button-link`
  - 推奨: `content`
  - 要検討: `iconLeft`, `iconLeftSVG`, `iconRight`, `iconRightSVG`
  - 対象外: 角丸、アイコンサイズ、配置、色、文字サイズ、レスポンシブ文字サイズ、余白、ボタンタイプ、最大幅、アニメーション
  - 理由: 非推奨かつ `url` 属性がないボタン型リンク。表示テキストは対象、アイコンは装飾寄りなので要検討。
- `ystdb/svg-icon`
  - 推奨: `icon`, `url`, `linkTarget`, `rel`
  - 対象外: 配置、色、背景色、文字サイズ、余白、幅、高さ、枠線、角丸、アイコンサイズ
  - 理由: アイコン単体ブロックではアイコン名そのものが主コンテンツ。リンク関連も差し替え対象。

`WP70-003` では、まず「推奨」に分類した属性を実装対象にする。`要検討` にした属性は、contentOnly パターンでの編集体験を確認してから追加可否を決める。

### iframe エディター

WordPress 7.0 では、投稿エディターの iframe 判定が「全登録ブロック」ではなく「投稿に実際に挿入されているブロック」の Block API version を見る方式になる。投稿内のブロックがすべて Block API v3 以上の場合は iframe 化され、v2 以下のブロックが含まれる場合は iframe が外れる。

公式 dev note では、WordPress 7.0 時点で iframe 化を一律強制するわけではなく、段階的な移行として扱うことも明記されている。Gutenberg プラグイン 22.6 以降では classic theme でも iframe がより積極的に使われるため、WordPress 7.0 RC と Gutenberg プラグイン有効時の両方で確認する。

このリポジトリの `src/blocks/block-library/` 配下の主要ブロックはすべて `apiVersion: 3`。ただし、旧 v1 ブロックや非推奨ブロックが混在する投稿では iframe の有無が切り替わる可能性がある。

コード調査では、v2 ブロックの `block.json` は `style` と `editorStyle` を持ち、追加のエディター用 CSS も `enqueue_block_assets` 経由で管理画面に限定して出力する実装になっている。PHP 側で追加出力しているレスポンシブ用 CSS は `custom-button`, `custom-heading`, `svg-icon` にあり、これらは iframe 内・フロントの両方で必要なブロック表示用 CSS として扱う。

既に `enqueue_block_assets` 経由で iframe 内へスタイルを届ける対応が入っているが、WP 7.0 RC で次を確認する。

- ブロックエディター内で各ブロックのスタイルが欠落しない
- 管理画面側だけに出すべき CSS が iframe 内外で過剰に効かない
- `enqueue_block_assets` に移した CSS がフロント側へ不要に出ていないか
- ウィジェット編集画面、テンプレートエディター、投稿エディターで表示が揃うか

### ブロック単位の Custom CSS

WordPress 7.0 では、個別ブロックに `style.css` としてカスタム CSS を保存する機能が追加され、`supports.customCSS` は原則として有効になる。`className: false` とは別の機能なので、追加 CSS クラス欄を非表示にしているブロックでも Custom CSS パネルが出る可能性がある。

このプラグインのブロックは独自のインラインスタイル生成やレスポンシブ CSS を多く持つため、まずは全ブロックで Custom CSS の表示有無とフロント出力を確認する。通常ブロックでは有効のままでもよいが、ルート要素へのクラス注入で表示や保存に問題が出るブロックは `supports.customCSS: false` を設定する。

### ブロック表示制御

WordPress 7.0 では viewport 別の表示制御が追加され、ブロックの `metadata.blockVisibility` が `false` だけでなく `{ viewport: ... }` のオブジェクトを取りうる。

このプラグインには `ystdb/conditional-group-block` があり、`hideSp` / `hideMd` / `hideLg` で独自の表示制御を持つ。Core の viewport 表示制御と機能が重なるため、当面は既存ブロックの仕様を維持し、Core 機能への移行は行わない。

確認すべきことは次の通り。

- `ystdb/conditional-group-block` と Core の viewport 表示制御を同時に設定した場合のフロント表示
- List View 上の表示、非表示アイコン、ブロック選択の分かりやすさ
- サーバー側でブロック属性やメタデータを解析する処理が `blockVisibility` を真偽値前提で扱っていないか

### Dimensions support

WordPress 7.0 では `supports.dimensions.width` と `supports.dimensions.height` が追加される。既存のカスタム幅・高さ UI を持つブロックは移行を検討できるが、7.0 対応としては必須ではない。

このプラグインでは `custom-button`, `svg-icon`, `section`, `column`, `columns` などに独自の幅・高さ・余白・レスポンシブ制御がある。すぐに Core support へ移行すると保存形式・既存投稿・非推奨マイグレーションの影響が大きいため、7.0 対応では移行しない。重複 UI が出ていないかだけ確認し、Core support 活用は別タスクに分ける。

## 追加機能として検討できる変更

### Pattern Overrides

WordPress 7.0 では、Block Bindings に対応した属性を持つカスタムブロックでも Pattern Overrides を利用できる。`block_bindings_supported_attributes` フィルターで対象属性を opt-in する。

このプラグインでは、`custom-button` の `content` / `url`、`custom-heading` の `content`、`card` の `title` / `url` などが候補。ただし、Pattern Overrides はテーマやパターン設計との関係が強いため、7.0 互換性対応では必須化しない。まずは `role: "content"` を整備し、その後に提供価値が高いブロックだけ opt-in する。

### Core の新ブロック・新 UI との重複

WordPress 7.0 では Heading、Icons、Breadcrumbs などの新ブロックやデザインツールが強化される。`ystdb/heading`, `ystdb/custom-heading`, `ystdb/svg-icon` は Core ブロックと用途が近い。

既存ブロックを急に廃止・移行する必要はない。ただし、インサーターでの見つけやすさ、変換候補、ユーザー向け名称の混乱は確認する。特に `カスタム見出し` と Core の見出し系ブロックが並ぶ場面では、説明文やキーワードが適切かを確認する。

### PHP-only block registration

WordPress 7.0 では `supports.autoRegister` と `render_callback` による PHP-only ブロック登録が追加される。このプラグインの既存ブロックは React ベースの編集 UI を持つため、既存ブロックを PHP-only に置き換える必要はない。

将来的に、管理画面用の簡易表示ブロックやサーバー側だけで完結する補助ブロックを追加する場合の選択肢として扱う。

### Abilities API / AI 関連

WordPress 7.0 では AI Client、Client-Side Abilities API、Connectors API などが導入される。このプラグインは現時点で Abilities API や AI 連携を持たないため、互換性対応としての必須作業はない。

将来的に「ブロック設定の自動生成」「カード情報の取得」「条件付き表示ルールの提案」などを AI 連携する場合に別途検討する。

### Interactivity API

WordPress 7.0 では `@wordpress/interactivity` に `watch()` が追加され、`core/router` の一部内部状態が非推奨になる。このリポジトリでは Interactivity API の直接利用は見当たらないため、必須対応はない。

## 進行管理リスト

凡例: `⬜` 未着手 / `🔄` 対応中 / `✅` 完了 / `⏸️` 保留

- ✅ `WP70-001` 高: WP 7.0 RC 環境の準備
  - 対応方針: wp-env または Local の検証サイトで WordPress 7.0 RC4 以降を用意する。本番・重要サイトでは実施しない。
  - 確認方法: 管理画面のバージョン表示、ブロックエディター起動
- ✅ `WP70-002` 高: `role: "content"` の付与対象調査
  - 対応方針: 全 `block.json` の属性を確認し、パターン内で編集対象にすべき属性を決める。
  - 確認方法: 属性一覧レビュー、Core Button / Image / Heading の `role: "content"` 設定との比較
- ✅ `WP70-003` 高: `role: "content"` の実装
  - 対応方針: 既存保存形式を変えずに `block.json` の対象属性へ追加する。必要なら非推奨ブロックにも追加する。
  - 確認方法: `npm run build:block:v2`、`npm run test:integration`
- ✅ `WP70-004` 高: `contentOnly` パターン内の編集確認
  - 対応方針: 未同期パターン、同期パターン、テンプレートパーツに各ブロックを入れて、テキスト・URL・画像が編集できるか確認する。
  - 確認方法: WP 7.0 RC のエディター操作
  - 調査メモ: JS 側の `registerBlockType()` で `attributes` を渡すと、サーバー登録済みの `block.json` attributes を上書きし、`role: "content"` が失われる場合がある。v2 ブロックは JS 側で attributes を渡さず、default 値は PHP の `block_type_metadata_settings` で `ys_block_default_attributes` から取得して注入する。
- 🔄 `WP70-005` 高: iframe エディター内の表示確認
  - 対応方針: 投稿エディター、テンプレートエディター、ウィジェット編集画面で CSS と操作 UI を確認する。
  - 確認方法: WP 7.0 RC の画面確認
  - コード調査: v2 ブロックはすべて `apiVersion: 3`。各 `block.json` に `editorStyle` と `style` があり、共通エディター CSS、インラインスタイル用 CSS、カラーパレット、フォントサイズは `enqueue_block_assets` 経由で iframe 内に届く設計になっている。
  - 確認パターン: v2 ブロックのみの投稿、v1 または非推奨ブロックを混在させた投稿、テンプレートエディター、ウィジェット編集画面
  - 注意点: 投稿エディターでは v2 以下のブロックを追加すると iframe が外れる可能性があるため、iframe 有無を DevTools で確認してから表示差分を見る。
- ⬜ `WP70-006` 高: Custom CSS の影響確認
  - 対応方針: 全ブロックで Custom CSS パネルの表示、保存、フロント出力、ルートクラス注入の影響を確認する。
  - 確認方法: CSS 入力後の保存・再表示・フロント確認
- ⬜ `WP70-007` 中: `supports.customCSS` の opt-out 判断
  - 対応方針: 表示崩れやセキュリティ・運用上の問題があるブロックのみ `customCSS: false` を設定する。
  - 確認方法: 問題再現ブロックの有無
- ⬜ `WP70-008` 高: Core block visibility と条件付きグループの競合確認
  - 対応方針: `ystdb/conditional-group-block` と Core viewport 表示制御を併用して、期待通りの表示になるか確認する。
  - 確認方法: モバイル・タブレット・PC 幅でフロント確認
- ⬜ `WP70-009` 中: `metadata.blockVisibility` 解析箇所の確認
  - 対応方針: PHP/JS でブロックメタデータを読む処理が追加された場合も含め、真偽値前提の処理がないか確認する。
  - 確認方法: `rg "blockVisibility"` と関連コードレビュー
- ⬜ `WP70-010` 中: Dimensions support との UI 重複確認
  - 対応方針: 独自の幅・高さ・余白 UI と Core の Dimensions UI が重複していないか確認する。7.0 では Core support へ移行しない。
  - 確認方法: 各ブロックのインスペクター確認
- ⬜ `WP70-011` 中: Core 新ブロックとの名称・変換確認
  - 対応方針: `heading`, `custom-heading`, `svg-icon` と Core 側の見出し・アイコン系ブロックのインサーター表示や変換候補を確認する。
  - 確認方法: インサーター検索、変換メニュー確認
- ⬜ `WP70-012` 中: Pattern Overrides の候補整理
  - 対応方針: `block_bindings_supported_attributes` に opt-in する価値がある属性を整理する。互換性対応とは分離する。
  - 確認方法: 候補表の作成、別 Issue 化
- ⬜ `WP70-013` 低: PHP-only block registration の採用判断
  - 対応方針: 既存ブロックには採用しない。新規のサーバー描画のみブロックが必要になった場合だけ検討する。
  - 確認方法: 追加要件発生時に再検討
- ⬜ `WP70-014` 低: Abilities API / AI 連携の扱い確認
  - 対応方針: 7.0 互換性対応では対象外。将来機能として別途検討する。
  - 確認方法: なし
- ⬜ `WP70-015` 低: Interactivity API 変更の影響確認
  - 対応方針: 直接利用がないため基本対応なし。将来 `viewScriptModule` や Interactivity API を導入する場合に再確認する。
  - 確認方法: `rg "@wordpress/interactivity"`
- ⬜ `WP70-016` 高: ビルド・lint・テスト
  - 対応方針: 実装後に関連チェックを実行する。ビルド成果物は管理対象なので、仕様変更時は成果物差分も含める。
  - 確認方法: `npm run build`、`npm run lint`、`npm run test:unit-js`、必要に応じて `npm run test:unit-php`

## 推奨対応順

まず `WP70-001` で検証環境を作る。`WP70-002` の調査結果をもとに `WP70-003` で `role: "content"` を実装し、その後 `WP70-004` で contentOnly パターン内の編集可否を確認する。

次に `WP70-005` と `WP70-006` を確認し、必要がある場合だけ `WP70-007` を実装する。`WP70-008` は既存機能と Core 新機能の重複なので、リリース前に必ず確認する。

`WP70-010` 以降は、7.0 互換性の必須対応ではなく改善候補として扱う。既存投稿の保存形式やブロック deprecations に影響する可能性があるため、WordPress 7.0 対応リリースとは別の作業単位に分ける。

## 現時点の判断

WordPress 7.0 対応として実装優先度が高いのは、`role: "content"` の整理、iframe エディター確認、Custom CSS の影響確認、Core block visibility と条件付きグループブロックの併用確認。

Dimensions support への移行、Pattern Overrides 対応、PHP-only block registration、Abilities API / AI 連携は、互換性維持のために急いで入れる必要はない。特に保存形式が変わる可能性のある変更は、既存投稿の互換性を優先して 7.0 対応リリースから分離する。
