# カスタム見出しブロック改修計画

更新日: 2026-08-21

対象ブロック: `ystdb/custom-heading`

## 目的

公開済みのカスタム見出しブロックとの互換性を保ちながら、WordPressコアのBlock Supportsを中心にした設定構造へ段階的に移行する。

最終的には、複数のコアブロックを組み合わせて作る見出し表現を1ブロックで扱え、WordPress標準のスタイルコピーでも主要な見た目をまとめて複製できる状態を目指す。

## 今回確定した方針

-   WordPress標準のBlock Supportsで表示される設定は、メインテキストの設定として扱う。
-   Block Supportsが生成する見た目のクラスとスタイルは、見出しタグだけへ適用する。
-   `.ystdb-custom-heading`は見出しタグ専用とし、`hgroup`とサブテキストには別のクラスを使用する。
-   `hgroup`とサブテキストのスタイルは、メインテキストとは別の設定領域で管理する。
-   コア見出しのタイポグラフィパネルに表示される「色」「サイズ」「フォント」「外観」「行の高さ」「文字間隔」「装飾」「大文字小文字」を使用できるようにする。
-   コアのタイポグラフィパネルに表示される設定は、すべてメインテキストの単一設定とする。
-   メインテキスト用として同じ設定を独自UIに重複表示しない。
-   サブテキストなど、コア設定だけでは対象を区別できない項目は、対象名を付けた独自ToolsPanelへ追加する。
-   単一設定は可能な限りWordPressコアのコンポーネントと属性構造を使う。
-   レスポンシブ設定は単一設定と別のUIパネル、別の属性領域に置く。
-   単一設定とレスポンシブ設定は併用でき、対象デバイスのレスポンシブ値が存在するときはレスポンシブ値を優先する。
-   「テキストを合わせる」はカスタム見出しでは使用しない。
-   公開済みブロックの属性や保存HTMLを変更するときは、変更と同時にdeprecated定義と移行テストを追加する。
-   段階移行の途中でリリースする場合、その時点の保存形式も後から復元できるように固定する。
-   メインテキストの単一余白はコアの`spacing`サポートを使い、`hgroup`とサブテキストの余白は独自設定で管理する。
-   レスポンシブ余白は単一設定と別パネルで管理し、新しい共通コントロールへ移行する。
-   yStandard独自パネルにはysアイコンを表示し、コアパネルとの違いを判別できるようにする。
-   「スタイル削除」は現行属性とUIから廃止し、旧HTMLの認識に必要なdeprecated実装だけに残す。
-   `hgroup`はflexコンテナとし、縦並びを既定にして横並びも選択できるようにする。
-   見出しグループの`align-items`と`justify-content`は別々に設定し、`group.layout`へCSSプロパティと対応するキーで保存する。
-   見出しグループの「ブロックの間隔」は`style.ystdb.customHeading.group.spacing.blockGap`へ保存する。
-   背景色またはグラデーションを設定した要素には、明示的な余白で上書きできる仮の`padding: 0.25em`を適用する。

## 現状

### 公開状況

-   `ystdb/custom-heading`はv3.25.2で追加され、v3.25.3にも含まれている。
-   現在はβ表記だが、既存投稿に保存される公開済みブロックとして扱う必要がある。
-   v3.25.2から現在まで、見出し本体の保存HTMLに大きな変更はない。
-   現行ブランチでは`align`サポートに`wide`と`full`が追加されている。

### 現在の保存構造

-   サブテキストを使わない場合、保存HTMLは`h1`から`h6`のいずれか1要素で構成される。
-   サブテキストを使う場合、`hgroup`の中にメイン見出しとサブテキストを保存する。`.ystdb-custom-heading`は内側の見出しだけへ付け、`hgroup`には`.ystdb-custom-heading-group`を付ける。
-   メインテキストは`content`に保存される。
-   サブテキストは`subText`に保存し、`hasSubText`のON/OFFでは内容を削除しない。
-   サブテキストと見出しグループの単一スタイル設定は、`style.ystdb.customHeading.sub/group`へ保存する。
-   v3.25.3までの属性定義と保存処理は`deprecated/v3_25_3`へ固定し、deprecated定義として登録済みである。

### 現在のスタイル属性

公開済み仕様では、主なスタイル値がブロック独自のトップレベル属性に保存されている。

-   フォントサイズ: `fontSize`、`customFontSize`、`responsiveFontSize`
-   文字色: `textColor`、`customTextColor`
-   タイポグラフィ: `lineHeight`、`letterSpacing`、`fontWeight`、`fontStyle`、`fontFamily`
-   余白: `margin`、`responsiveMargin`、`padding`、`responsivePadding`
-   その他: `textAlign`、`clearStyle`（現行仕様では廃止）

このままでは、WordPress標準のスタイルコピーが認識する`style`属性へ独自設定が集約されず、コピー対象から外れる値が残る。

現行実装では、メインテキストの色、タイポグラフィ、単一余白、枠線をコアBlock Supportsへ移行し、旧トップレベル属性はdeprecatedの`migrate`でコア属性へ変換している。Block Supportsの自動シリアライズを停止し、共通アダプターで生成したクラスとスタイルを見出しタグだけへ出力する。サブテキストと見出しグループの単一スタイルも同じアダプターで各要素へ出力する。レスポンシブ余白は単一余白から分離した独自パネルで新しい`ResponsiveSpacingControl`を利用する。旧`clearStyle`は現行属性とUIへ引き継がず、公開済みHTMLの認識に必要なdeprecated実装だけへ残す。

## 目標とする設定の責務

### 構造とコンテンツ

見た目ではなくブロック構造や内容を表す値は、トップレベル属性に残す。

-   `content`
-   `level`
-   `hasSubText`
-   `subText`
-   `placeholder`
-   `anchor`

`subText`には`role: "content"`を指定し、スタイルコピーで文章そのものがコピーされない構造にする。

見出し内でリンクを利用するケースは対象外とし、メインテキストとサブテキストのRichTextではインタラクティブな書式を無効化する。リンク色を設定する「要素」パネルも表示しない。既存投稿に保存済みのリンクは互換性維持のため自動削除しない。

### メインテキストの単一スタイル

コアBlock Supportsが扱える値は、コアの属性構造を正本にする。

-   プリセットのフォントサイズ: `fontSize`
-   任意のフォントサイズ: `style.typography.fontSize`
-   文字色プリセット: `textColor`
-   任意の文字色: `style.color.text`
-   背景色プリセット: `backgroundColor`
-   任意の背景色: `style.color.background`
-   グラデーションプリセット: `gradient`
-   任意のグラデーション: `style.color.gradient`
-   行の高さ: `style.typography.lineHeight`
-   文字間隔: `style.typography.letterSpacing`
-   文字の太さ: `style.typography.fontWeight`
-   文字スタイル: `style.typography.fontStyle`
-   フォントファミリー: コアプリセットは`fontFamily`、任意値は`style.typography.fontFamily`
-   文字揃え: `style.typography.textAlign`
-   文字装飾: `style.typography.textDecoration`
-   大文字小文字: `style.typography.textTransform`
-   書字方向: `style.typography.writingMode`
-   マージン: `style.spacing.margin`。設定方向は上下だけに制限する。
-   パディング: `style.spacing.padding`

コアのタイポグラフィパネルに表示される各項目は、このメインテキスト用属性を直接操作する。WordPressやテーマ設定によって利用できない項目は、コア見出しと同様にUIへ表示されない。

### 独自対象とレスポンシブスタイル

コアの属性構造だけでは「どのテキストの設定か」を表せない値は、`style.ystdb.customHeading`配下へ保存する。

想定構造:

```json
{
	"style": {
		"ystdb": {
			"customHeading": {
				"group": {
					"layout": {},
					"spacing": {},
					"border": {},
					"color": {}
				},
				"sub": {
					"typography": {},
					"color": {},
					"border": {},
					"spacing": {}
				},
				"responsive": {
					"main": {
						"typography": {},
						"spacing": {}
					},
					"group": {
						"spacing": {}
					},
					"sub": {
						"typography": {},
						"spacing": {}
					}
				}
			}
		}
	}
}
```

`main`はメイン見出し、`group`は`hgroup`、`sub`はサブテキストを表す。このキー名を確定仕様とし、以後は同じ意味のキーを変更しない。

`group.layout.orientation`は見出しグループの並び方向を表し、未設定時は縦並び、`horizontal`のときは横並びとする。`group.layout.alignItems`と`group.layout.justifyContent`は各CSSプロパティへ直接対応させる。`group.spacing.blockGap`は見出しとサブテキストの間隔を表し、プリセットまたは任意のCSS値を保存する。

### レスポンシブ値の優先順位

デバイスごとの最終値は、次の規則で決定する。

```ts
responsiveValue[ device ] ?? singleValue;
```

-   レスポンシブ値が未設定なら単一設定を使う。
-   レスポンシブ値が設定済みなら、そのデバイスではレスポンシブ値を使う。
-   `0`や空文字を有効値として扱う項目では、真偽値ではなく`undefined`または`null`で未設定を判定する。
-   レスポンシブ設定のリセットはレスポンシブ値だけを削除し、単一設定は維持する。

## InspectorControlsの構成

### メインテキストのコアパネル

`InspectorControls group="typography"`を利用する。

-   コアの「フォントサイズ」: メインテキスト
-   コアが表示するその他の標準タイポグラフィ設定: メインテキスト
-   メインテキスト用の同名独自項目は追加しない。

サブテキスト設定と見出しグループ設定は`InspectorControls group="styles"`内へ、対象と用途が分かる独自ToolsPanelとして追加する。サブテキストを使用するときだけ表示する。確定した項目と初期表示は[`スタイル設定仕様`](./style-settings.md)を正本にする。

### 色、余白、枠線のパネル

コアBlock Supportsを有効にする項目は、それぞれWordPress標準のパネルを使う。

-   コアの標準設定はメインテキストへ作用させる。
-   サブテキストなど複数対象が必要な項目は、独自ToolsPanelへ追加する。
-   レスポンシブ設定はコアパネルへ混在させず、専用のレスポンシブパネルへ置く。

`hgroup`とサブテキストの余白、枠線、角丸、背景色、グラデーションは、メインテキスト用Block Supportsとは別の独自設定として追加する。適用対象を設定名と保存先で明示し、Block Supportsの出力が`hgroup`へ漏れないようにする。背景のコントロールとメインテキストの枠線・角丸は初期表示せず、`+`メニューから追加する。

メインテキスト、サブテキスト、見出しグループに背景色またはグラデーションがある場合は、仮の既定値として`padding: 0.25em`を適用する。属性へ値を自動保存せず、利用者が設定したパディングで上書きできるCSS既定値にする。

レスポンシブ余白には[`ResponsiveSpacingControlの仕様`](../../../aktk-block-components/components/responsive-spacing-control/SPEC.md)で定めた新しい共通コントロールを使う。現在のメイン見出し用マージンはサブテキストなしでルート要素になるため上下だけを許可する。将来追加する`hgroup`用マージンも上下だけを許可する。

### リセット

-   コアパネルの「すべてリセット」では、メインテキスト用のコア属性だけを削除する。
-   サブテキストと見出しグループの「すべてリセット」では、その独自ToolsPanelが管理する値だけを削除する。
-   レスポンシブパネルの「すべてリセット」は、そのパネル内のレスポンシブ属性だけを削除する。
-   `hasValue`はコア属性と`style.ystdb`内の対象値の両方を確認する。

## 保存HTMLの方針

### サブテキストなし

既存投稿との互換性と不要なDOM変更を避けるため、現在の見出し要素1つの構造を維持する。

```html
<h2 class="ystdb-custom-heading">見出し</h2>
```

### サブテキストあり

サブテキストを使う場合だけ`hgroup`で囲む。

```html
<hgroup class="ystdb-custom-heading-group">
	<h2 class="ystdb-custom-heading">見出し</h2>
	<p class="ystdb-custom-heading-sub">サブテキスト</p>
</hgroup>
```

このブロックは`supports.className: false`を維持するため、保存HTMLへ`wp-block-ystdb-custom-heading`を追加しない。`.ystdb-custom-heading`は常に見出しタグだけへ付ける。

`hgroup`は常にflexコンテナとし、既定は縦並びにする。横並びを選択した場合は`.is-horizontal`を追加する。見出しとサブテキストの既定間隔は`0.5em`とし、`group.spacing.blockGap`が設定された場合は共通アダプターが出力する`gap`で上書きする。

サブテキストなしでは、ブロックのルート要素とメイン見出しが同じ要素になる。サブテキストありでは、ルート用Block Propsを`hgroup`へ、メインテキスト用のクラスとスタイルを内側の見出しタグへ分ける。

### Block Supportsの出力先

属性の保存形式とWordPress標準UIは維持しつつ、Block Supportsによる自動シリアライズを対象カテゴリごとに停止する。

-   `supports.typography.__experimentalSkipSerialization`
-   `supports.color.__experimentalSkipSerialization`
-   `supports.spacing.__experimentalSkipSerialization`
-   枠線を有効化するときは`supports.__experimentalBorder.__experimentalSkipSerialization`

メインテキスト用のクラスとスタイルは、WordPressが公開している次の取得関数をローカルのアダプターから呼び出す。

-   `getTypographyClassesAndStyles`
-   `__experimentalGetColorClassesAndStyles`
-   `__experimentalGetSpacingClassesAndStyles`
-   `__experimentalGetBorderClassesAndStyles`

実験的APIへの依存は1つのアダプターへ隔離し、`edit`と`save`で同じ結果を使用する。WordPressのバージョン差でAPIが変わった場合も、ブロック本体ではなくアダプターだけを修正できる構成にする。

プリセット、任意値、fluidフォントサイズ、リンク色、枠線は取得関数ごとに出力差があるため、実装時に個別テストを追加する。取得関数だけでは見出しタグへ正しく出力できない項目は、その項目だけ共通スタイル出力を補完するか、対応を保留する。Block Supports全体を`hgroup`へ戻すフォールバックは採用しない。

## マイグレーション方針

### 公開済み仕様の固定

v3.25.2からv3.25.3までの属性定義、supports、保存処理、保存HTMLをdeprecated実装として固定する。

想定配置:

```text
custom-heading/
  deprecated/
    index.ts
    v3_25_3/
      attributes.ts
      save.tsx
      utils.ts
```

-   deprecated用の保存処理から現行の`save`や変更可能な共通関数を参照しない。
-   旧保存HTMLの検証に必要な処理はdeprecated配下へ固定コピーする。
-   deprecated配列は新しい仕様から古い仕様の順に並べる。
-   各`migrate`は一つ前の形式ではなく、その時点の最新属性へ直接変換する。
-   エディター表示後の`useEffect`による暗黙の属性書き換えは使わない。
-   `.ystdb-custom-heading`が`hgroup`へ付く現行ブランチの保存形式は、クラス変更前に新しいdeprecatedへ固定する。

### 旧属性から新属性への対応

| 旧属性               | 移行先                                                          | 補足                                  |
| -------------------- | --------------------------------------------------------------- | ------------------------------------- |
| `fontSize`           | `fontSize`                                                      | コアのプリセットslugとして維持        |
| `customFontSize`     | `style.typography.fontSize`                                     | コアの任意フォントサイズ              |
| `responsiveFontSize` | `style.ystdb.customHeading.responsive.main.typography.fontSize` | 単一設定とは別管理                    |
| `textColor`          | `textColor`                                                     | コアの色プリセットとして維持          |
| `customTextColor`    | `style.color.text`                                              | コアの任意文字色                      |
| `lineHeight`         | `style.typography.lineHeight`                                   | Block Supports有効化と同時に移行      |
| `letterSpacing`      | `style.typography.letterSpacing`                                | Block Supports有効化と同時に移行      |
| `fontWeight`         | `style.typography.fontWeight`                                   | Block Supports有効化と同時に移行      |
| `fontStyle`          | `style.typography.fontStyle`                                    | Block Supports有効化と同時に移行      |
| `fontFamily`         | `style.typography.fontFamily`                                   | 旧UIが保存したCSS文字列を任意値へ移す |
| `textAlign`          | `style.typography.textAlign`                                    | ツールバーもコア属性を操作する        |
| `margin`             | `style.spacing.margin`                                          | 適用対象の検証後に移行                |
| `padding`            | `style.spacing.padding`                                         | 適用対象の検証後に移行                |
| `responsiveMargin`   | `style.ystdb.customHeading.responsive.main.spacing.margin`      | メイン見出しの単一設定とは別管理      |
| `responsivePadding`  | `style.ystdb.customHeading.responsive.main.spacing.padding`     | メイン見出しの単一設定とは別管理      |
| `clearStyle`         | 移行しない                                                      | deprecatedの旧HTML認識だけに使用する  |

### `hasSubText`の扱い

既存属性の`hasSubText`を再利用し、同じ意味の新しい属性は追加しない。

旧投稿に`hasSubText: true`が残っていても`subText`が存在しない場合、移行時は`hasSubText: false`へ正規化する。これにより、保存HTMLだけが突然`hgroup`へ変わる状態を防ぐ。

### スキーマバージョン

正式なdeprecatedと`migrate`で旧形式を判定できるため、空の`style.ystdb.customHeading.version`を全ブロックへ常時保存する必要はない。

-   現行実装で旧属性の実行時フォールバックを残さない場合、空のバージョン値は追加しない。
-   独自スタイルオブジェクト自体の内部移行が将来必要になった場合だけ、そのオブジェクトと一緒にバージョンを保存する。
-   旧属性と新属性を同時に読む暫定実装が必要になった場合は、未設定と旧形式を区別するためにバージョン値を再検討する。

## 段階的な実装計画

### 互換性の土台

変更内容:

-   v3.25.2からv3.25.3の属性、supports、保存処理をdeprecated配下へ固定する。
-   `index.tsx`へdeprecated定義を登録する。
-   公開済みの保存HTMLを統合テスト用fixtureとして追加する。
-   現行のsaveスナップショットとutilsテストを互換性テストから分離する。

完了条件:

-   公開済みHTMLがブロック検証エラーにならない。
-   deprecatedの`migrate`後に現行形式で保存できる。
-   移行後のHTMLを再度parse、serializeしても差分が発生しない。

### メインテキストのフォントサイズ

変更内容:

-   `supports.typography.fontSize`を有効にする。
-   コアの「フォントサイズ」をメインテキストの設定として採用する。
-   `fontSize`はコアのプリセット属性として維持する。
-   `customFontSize`を`style.typography.fontSize`へ移行する。
-   `responsiveFontSize`を`style.ystdb.customHeading.responsive.main.typography.fontSize`へ移行する。
-   旧独自フォントサイズUIを削除し、メインテキスト用の重複UIを作らない。
-   レスポンシブフォントサイズは専用パネルへ残す。
-   旧属性から生成していたクラスとインラインスタイルの重複を解消する。

完了条件:

-   プリセットと任意値の両方がコアUIで設定、解除できる。
-   コアのフォントサイズがエディターとフロントのメインテキストへ適用される。
-   レスポンシブ値が単一値を上書きし、レスポンシブ値の解除後は単一値へ戻る。
-   WordPress標準のスタイルコピーで単一値とレスポンシブ値がコピーされ、見出し本文はコピーされない。
-   v3.25.2からv3.25.3のフォントサイズ設定が移行後も同じ見た目になる。

### メインテキストの残りのタイポグラフィと文字色

変更内容:

-   文字色、行の高さ、文字間隔、文字の太さ、文字スタイル、フォントファミリーを1項目ずつコア属性へ移す。
-   各Block Supportsは、その項目の移行と保存処理が完成した時点で有効にする。
-   `fontFamily`の旧値がプリセットslugではなくCSS文字列の場合は、`style.typography.fontFamily`へ移す。
-   各項目で旧独自UIとコアUIが重複しないようにする。

完了条件:

-   旧投稿の各値が欠落しない。
-   コアパネルのリセットで対象属性を完全に削除できる。
-   スタイルコピー後も設定対象がメインテキストのまま維持される。

### Block Supportsの適用先検証

枠線、角丸、背景色を本実装する前に、小さな技術検証を行う。コアBlock Supportsは見出しタグへ適用する仕様とする。

確認内容:

-   サブテキストなしの見出し要素へ`useBlockProps`のクラスとstyleが正しく付くか。
-   サブテキストありの`hgroup`で、コアのタイポグラフィ、色、余白を内側のメイン見出しへ適用できるか。
-   枠線、角丸、背景色をメイン見出しへ付け、`hgroup`へ漏らさず出力できるか。
-   エディターとフロントで同じDOM責務と見た目になるか。
-   WordPress標準のスタイルコピーとリセットが対象要素を変えないか。

判断基準:

-   公開APIまたは局所化したアダプターで安定して適用先を分けられるならBlock Supportsを有効にする。
-   適用先を安定して分けられない場合は、該当項目の対応を保留するか、コア属性を維持した独自出力処理を使う。
-   適用先が未確定のまま枠線、角丸、背景色をまとめて有効にしない。

### サブテキスト

変更内容:

-   `hasSubText`を有効化する設定UIを追加する。
-   見出し構成は「見出しのみ」「サブテキストあり」の横並びのセグメント型ラジオボタンで切り替える。
-   `hasSubText`が有効なときだけ`subText`の入力欄を表示する。
-   サブテキストがある場合だけ保存HTMLを`hgroup`へ変更する。
-   サブテキストのタイポグラフィ項目は、入力と保存HTMLの検証後にコアのタイポグラフィパネルへ追加する。
-   メインテキストのフォントサイズは引き続きコアの「フォントサイズ」を使い、独自項目を追加しない。
-   文字揃えはコアBlock Supportsが表示するツールバーだけを使用し、独自ツールバーを追加しない。
-   サブテキスト用の共通コンポーネントは、ラベル、値の取得先、値の更新先を渡して再利用できる粒度にする。

完了条件:

-   サブテキストなしでは従来の見出し要素1つの構造を維持する。
-   サブテキストありでは`hgroup`の見出し階層が適切になる。
-   サブテキストの有効化と無効化で本文データを意図せず失わない。
-   `subText`がスタイルコピーの対象にならない。

### 余白、枠線、角丸とレスポンシブ設定

Block Supportsの適用先検証で確定した責務に従い、項目を1カテゴリずつ追加する。

-   単一設定はWordPressコアのパネルと属性構造を優先する。
-   コアBlock Supportsの単一設定はメイン見出しへ適用する。
-   `hgroup`とサブテキストの設定は、対象ごとの独自属性としてコアパネルへ追加する。
-   レスポンシブ設定は専用パネルへ分離する。
-   レスポンシブ余白は新しい`ResponsiveSpacingControl`へ移行する。
-   `hgroup`のマージンは上下だけを許可し、左右と横方向を表示しない。
-   余白の項目名は「マージン」「パディング」に統一する。
-   各カテゴリの「すべてリセット」とスタイルコピーを同時に実装する。

### 変換、表示名、リリース準備

-   コア見出しと既存`ystdb/heading`からの変換で、移行後の属性を正しく生成する。
-   サブテキストを失う変換は非表示にするか、明示的な損失確認ができる形にする。
-   ブロック説明、README、block.json、翻訳ファイルを最終仕様へ合わせる。
-   β表記を外す条件を、互換性テスト、UI、スタイルコピー、レスポンシブ設定の合格にそろえる。
-   `npm run build`で管理対象の`build/`を更新する。

## テスト計画

### 公開済みfixture

v3.25.2からv3.25.3の実装で生成したHTMLを固定fixtureとして保存する。

最低限含めるケース:

-   最小構成の`h2`
-   見出しレベル変更
-   プリセットフォントサイズ
-   任意フォントサイズ
-   レスポンシブフォントサイズ
-   文字色とタイポグラフィ
-   marginとpadding
-   alignとanchor
-   主要属性を組み合わせたケース
-   `hasSubText: true`だがサブテキスト本文が存在しないケース

### マイグレーション

-   旧属性が最新属性へ直接移行される。
-   `0`、空文字、未設定が混同されない。
-   旧`fontFamily`のCSS文字列が失われない。
-   移行後に旧属性が不要なまま残らない。
-   deprecatedの各定義から最新形式へ直接移行できる。

### 保存と再読み込み

-   旧HTMLをparseして検証エラーにならない。
-   移行後のserialize結果を再度parseできる。
-   2回目のserializeで不要な差分が発生しない。
-   サブテキストなしでは既存HTML構造を維持する。
-   サブテキストありでは`hgroup`を保存する。
-   `.ystdb-custom-heading`は、サブテキストの有無にかかわらず見出しタグだけへ付く。
-   `hgroup`とサブテキストに、それぞれ専用クラスが付く。

### スタイルコピー

-   コアのメインテキスト設定がコピーされる。
-   `style.ystdb`内の`hgroup`、サブテキスト、レスポンシブ設定がコピーされる。
-   `content`、`subText`、`level`、`hasSubText`などの内容と構造はコピーされない。
-   ペースト先に存在した古い同カテゴリ設定が意図どおり置換または解除される。

### UI

-   コアの「フォントサイズ」がメインテキストへ作用する。
-   メインテキスト用のフォントサイズ設定が重複表示されない。
-   サブテキスト設定はサブテキスト使用時だけ表示される。
-   単一設定とレスポンシブ設定が別パネルに表示される。
-   レスポンシブ余白に「マージン」「パディング」のラベルが表示される。
-   許可されていない余白方向がUIへ表示されない。
-   カテゴリ全体と個別項目のリセットが正しく動作する。

## リリース単位のルール

-   属性、supports、保存HTMLのいずれかを変更するコミットには、対応するdeprecatedとテストを含める。
-   同一リリース内で複数段階を実装する場合、公開前の中間形式までdeprecatedへ残す必要はない。
-   段階の途中をリリースした場合、その形式を次の変更前にdeprecatedとして固定する。
-   ビルド成果物を含めた状態でlint、JSユニットテスト、PHPテスト、ビルドを可能な範囲で実行する。
-   Local上のエディター確認は、コード検証とは分けて実施結果を記録する。

## 作業停止条件

次の状態では次段階へ進まず、原因と仕様を確定する。

-   公開済みfixtureがブロック検証エラーになる。
-   移行後の再parse、serializeで差分が繰り返し発生する。
-   コアBlock Supportsの設定対象がエディターとフロントで異なる。
-   `hgroup`導入でサブテキストなしの既存HTMLまで変更される。
-   スタイルコピーで文章や見出しレベルが書き換わる。
-   コア設定と独自設定のどちらが正本か判定できない状態になる。

## 現在までの実装結果

保存形式の保護、要素ごとの責務分離、新しいレスポンシブ余白コントロールまでを実装した。

-   現行ブランチの属性、supports、保存HTMLを新しいdeprecatedへ固定する。
-   `.ystdb-custom-heading`を見出しタグ専用に変更し、`hgroup`とサブテキストへ専用クラスを付ける。
-   コアBlock Supportsの自動シリアライズを止め、メイン見出しへクラスとスタイルを出力するアダプターを追加する。
-   `ResponsiveSpacingControl`を既存コントロールから独立して実装する。
-   カスタム見出しのレスポンシブ余白を新しいコントロールへ切り替える。
-   「マージン」「パディング」のラベルと、対象ごとの`allowedSides`を指定する。

## 次の実装対象

次は、`hgroup`とサブテキスト固有の単一スタイルを対象ごとに追加する。余白から開始し、同じ対象分離とリセットを維持したまま枠線、角丸へ進む。
