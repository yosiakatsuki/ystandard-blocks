# カスタム見出しの余白設定メモ

更新日: 2026-08-21

> [!NOTE]
> 最新の全体方針は`implementation-plan.md`、共通UIの仕様は[`ResponsiveSpacingControlの仕様`](../../../aktk-block-components/components/responsive-spacing-control/SPEC.md)を参照する。本書はカスタム見出し内の適用対象と保存先を補足する。

## 方針

メイン見出し、`hgroup`、サブテキストの余白を別々に管理する。

-   WordPressコアの`spacing`サポートはメイン見出し専用とする。
-   `hgroup`とサブテキストの余白は、`style.ystdb.customHeading`配下の独自設定とする。
-   単一設定とレスポンシブ設定は別のUI、別の保存領域で同時に保持する。
-   対象デバイスのレスポンシブ値がある場合だけ、単一値より優先する。
-   余白の項目名は「マージン」「パディング」とする。

既存ブロックの「外側余白」「内側余白」などは一括変更しない。新規設定から適用し、既存設定は各ブロックの改修時に順次合わせる。

## HTML構造との対応

### サブテキストなし

```html
<h2 class="ystdb-custom-heading">
	メインテキスト
</h2>
```

ブロックのルート要素とメイン見出しが同じ要素になる。コアBlock Supportsのマージンとパディングをこの見出しタグへ適用する。

### サブテキストあり

```html
<hgroup class="ystdb-custom-heading-group">
	<h2 class="ystdb-custom-heading">メインテキスト</h2>
	<p class="ystdb-custom-heading-sub">サブテキスト</p>
</hgroup>
```

-   コアBlock Supportsのマージンとパディングは`.ystdb-custom-heading`へ適用する。
-   `hgroup`のマージンとパディングは`.ystdb-custom-heading-group`へ適用する。
-   サブテキストのマージンとパディングは`.ystdb-custom-heading-sub`へ適用する。
-   `.ystdb-custom-heading`を`hgroup`へ付けない。

このブロックは`supports.className: false`を維持するため、保存HTMLへ`wp-block-ystdb-custom-heading`を追加しない。

## UI

単一設定はWordPressコアのスタイルグループへ配置する。

-   コアの余白設定: メイン見出し
-   `hgroup`用の独自項目: 見出しグループ
-   サブテキスト用の独自項目: サブテキスト

独自項目は`ToolsPanelItem`として追加する。設定値がある項目は表示し、未使用の項目は`+`メニューから追加できるようにする。

レスポンシブ設定は、単一設定とは別のyStandardパネルへ配置する。各パネル内のコントロールには「マージン」または「パディング」のラベルを常に表示する。

## 設定できる方向

新しい`ResponsiveSpacingControl`の`allowedSides`で、対象ごとに設定可能な方向を制限する。

| 対象                 | マージン                                            | パディング                                          |
| -------------------- | --------------------------------------------------- | --------------------------------------------------- |
| メイン見出し         | `top`、`bottom`                                     | `top`、`right`、`bottom`、`left`                    |
| `hgroup`             | `top`、`bottom`                                     | `top`、`right`、`bottom`、`left`                    |
| サブテキスト         | `top`、`right`、`bottom`、`left`                    | `top`、`right`、`bottom`、`left`                    |

サブテキストなしでブロックのルート要素になるメイン見出しと、サブテキストありでルート要素になる`hgroup`では、左右マージンと横方向マージンを許可しない。左右位置はブロックの配置、幅、親レイアウトへ任せる。

内部要素を縦横単位で設定するUIが適する場合は、各辺の代わりに`vertical`と`horizontal`を許可できる。各辺と縦横のどちらを表示するかは呼び出し側が明示し、コントロール自身では推測しない。

## 保存先

メイン見出しの単一余白はコア属性を正本にする。

```text
style.spacing.margin
style.spacing.padding
```

`hgroup`、サブテキスト、レスポンシブ値はスタイルコピーの対象になる独自領域へ保存する。

```ts
type CustomHeadingStyle = {
	group?: {
		spacing?: {
			margin?: SpacingValue;
			padding?: SpacingValue;
		};
	};
	sub?: {
		spacing?: {
			margin?: SpacingValue;
			padding?: SpacingValue;
		};
	};
	responsive?: {
		main?: {
			spacing?: ResponsiveSpacingValue;
		};
		group?: {
			spacing?: ResponsiveSpacingValue;
		};
		sub?: {
			spacing?: ResponsiveSpacingValue;
		};
	};
};
```

メイン見出しは`main`、`hgroup`は`group`、サブテキストは`sub`に統一する。

## Block Supportsの出力

`block.json`ではspacingサポートのUIとコア属性を利用し、自動シリアライズは停止する。コアのspacing取得関数から生成したクラスとスタイルを、エディターと保存HTMLのメイン見出しへ適用する。

`useBlockProps`と`useBlockProps.save()`は、ブロックの識別に必要なルートPropsを引き続き生成する。サブテキストがある場合はルートPropsを`hgroup`へ付け、メイン見出し用のspacing出力とは分ける。

## 値の優先順位とリセット

```ts
const effectiveValue = responsiveValue?.[ device ] ?? singleValue;
```

-   レスポンシブ値が未設定なら単一値を使う。
-   レスポンシブ値が設定済みなら、その端末ではレスポンシブ値を使う。
-   単一設定のリセットでは単一値だけを削除する。
-   レスポンシブ設定のリセットではレスポンシブ値だけを削除する。
-   `0`は有効値として扱う。

## マイグレーション

-   v3.25.3までの`margin`と`padding`は、メイン見出しの`style.spacing`へ移す。
-   v3.25.3までの`responsiveMargin`と`responsivePadding`は、`style.ystdb.customHeading.responsive.main.spacing`へ移す。
-   現行ブランチで`hgroup`へ`.ystdb-custom-heading`とBlock Supportsの余白を付ける保存形式は、クラス変更前にdeprecatedへ固定する。
-   deprecatedの`migrate`は各旧形式から最新形式へ直接変換する。
-   保存HTMLと属性スキーマの変更には、parse、serialize、再parseのテストを追加する。

## 検証項目

-   サブテキストの有無にかかわらず、コアの余白が見出しタグだけへ適用される。
-   `hgroup`とサブテキストの余白を別々に設定、リセットできる。
-   レスポンシブ余白に「マージン」「パディング」のラベルが表示される。
-   `hgroup`のマージンで左右と横方向を選択できない。
-   上下左右と縦横の許可状態を呼び出し側から指定できる。
-   単一設定とレスポンシブ設定を別々に追加、リセットできる。
-   スタイルコピーでメイン、`hgroup`、サブテキストの余白がコピーされる。
-   公開済みHTMLと現行ブランチのHTMLが、deprecated経由で検証エラーなく移行できる。
