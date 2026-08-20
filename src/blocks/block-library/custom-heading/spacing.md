# カスタム見出しの余白設定メモ

> [!NOTE]
> 最新の全体方針は`implementation-plan.md`を参照する。単一設定とレスポンシブ設定は同じ部品内で切り替えず、別属性・別パネルで同時に保持し、該当画面幅のレスポンシブ値を優先する。

## 方針

単一の余白設定はインスペクターの「余白」パネル、画面幅別の余白設定は独立した「レスポンシブ」パネルに配置する。どちらも`ToolsPanel`形式にし、必要な項目を`+`メニューから表示できるようにする。

単一設定とレスポンシブ設定は同時に保持できる。該当画面幅にレスポンシブ値があればレスポンシブ値を使い、なければ単一設定へ戻る。

ユーザーにHTML構造を意識させないため、`hgroup`相当のまとまりは、サブテキストがない場合はUI上で「メインテキスト」と表示する。サブテキストがある場合だけ「見出しグループ」と表示し、メインテキストとサブテキストをまとめる範囲であることを示す。

## ラベル切り替え

余白パネル先頭の設定グループ名は、`hasSubText`で切り替える。

```ts
const groupSpacingLabel = hasSubText
	? __( '見出しグループ', 'ystandard-blocks' )
	: __( 'メインテキスト', 'ystandard-blocks' );
```

直近のリリースではサブテキストを実装しないが、この切り替えロジックまでは入れておく。

## 直近の実装範囲

直近のリリースではサブテキストを実装しないため、余白パネルには次の設定だけを追加する。

- メインテキスト
  - 外側余白
  - 内側余白

この段階では、保存HTMLは現在の`h1`〜`h6`単体構造を維持する。外側余白と内側余白は、見出し要素自体に適用する。

この段階で実装するUI上の見出しは「メインテキスト」だが、内部的には将来の「見出しグループ」に相当する余白として扱う。

## 将来のサブテキスト対応

サブテキストを実装する段階では、保存HTMLを次のような構造へ変更する想定。

```html
<div class="ystdb-custom-heading">
	<hgroup class="ystdb-custom-heading__group">
		<h2 class="ystdb-custom-heading__main">メインテキスト</h2>
		<p class="ystdb-custom-heading__sub">サブテキスト</p>
	</hgroup>
</div>
```

区切り線はHTML要素として`hgroup`内へ入れず、原則として疑似要素で表示する。見た目上はメインテキストとサブテキストの間に表示する。

サブテキストがある場合の単一設定用「余白」パネルは次の構成にする。

- メインテキスト
  - 外側余白
  - 内側余白
- メインテキスト内テキスト
  - 内側余白
- サブテキスト
  - 内側余白
- 区切り線
  - 上下余白

サブテキストがない場合は、「メインテキスト内テキスト」「サブテキスト」「区切り線」を非表示にする。

サブテキストがある場合は、先頭の「メインテキスト」を「見出しグループ」に切り替える。

画面幅別の指定が必要な同種の項目は、別の「レスポンシブ」パネルへ配置する。同じ入力部品内のタブでは切り替えない。

## 属性設計

直近の実装範囲では、次の属性を追加する。

- `margin`
- `responsiveMargin`
- `padding`
- `responsivePadding`

通常値は`margin` / `padding`、レスポンシブ値は`responsiveMargin` / `responsivePadding`へ別々に保存する。一方を変更またはリセットしても、もう一方は変更しない。

将来のサブテキスト対応では、対象が増えるため次のように対象名を持つ属性へ拡張する。

- `margin`
- `responsiveMargin`
- `padding`
- `responsivePadding`
- `mainTextPadding`
- `responsiveMainTextPadding`
- `subTextPadding`
- `responsiveSubTextPadding`
- `dividerMargin`
- `responsiveDividerMargin`

直近で追加する`margin` / `padding`は、将来も「見出しグループ」の外側余白・内側余白として継続利用する。サブテキスト対応時に`groupMargin` / `groupPadding`へリネームすると既存投稿の互換処理が増えるため、属性名は変えない。

## スタイル設計

通常値はインラインスタイルとして出力する。

- `margin`は`margin-top`、`margin-right`、`margin-bottom`、`margin-left`へ変換する。
- `padding`は`padding-top`、`padding-right`、`padding-bottom`、`padding-left`へ変換する。

レスポンシブ値はCSSカスタムプロパティとして出力し、PHP側の`enqueue_responsive_style()`でメディアクエリ内のプロパティへ変換する。

- `--ystdb--desktop--custom-heading--margin-top`
- `--ystdb--tablet--custom-heading--margin-top`
- `--ystdb--mobile--custom-heading--margin-top`
- `--ystdb--desktop--custom-heading--padding-top`
- `--ystdb--tablet--custom-heading--padding-top`
- `--ystdb--mobile--custom-heading--padding-top`

上記は例で、対象方向は`top`、`right`、`bottom`、`left`の4方向を出力する。

プリセットトークンは既存ブロックと同じくCSS変数へ変換してから出力する。
