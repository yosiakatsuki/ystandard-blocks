# レスポンシブ余白コントロール設計

更新日: 2026-08-21

## 目的

今後追加、改修するブロックで共通利用するレスポンシブ余白コントロールの仕様を定める。

既存の`custom-spacing-select`は変更せず、新しいコンポーネントを独立して作る。利用箇所を順次移行し、既存コンポーネントが未使用になった時点で安全に廃止できる構成にする。

## 現状

カスタム見出しのレスポンシブ余白は、`custom-spacing-select/responsive-spacing-select.tsx`にある既存の`ResponsiveSpacingSelectControl`を利用している。

このコントロールには次の課題がある。

-   呼び出し側がラベルを表示しないと、マージンとパディングのどちらを設定しているか判別できない。
-   許可できる方向の型が`top`、`right`、`bottom`、`left`に限定され、下位のコアコンポーネントが対応する`vertical`と`horizontal`を利用できない。
-   既存の複合コントロールと同じファイルにあり、今後の仕様変更と旧実装の廃止を分離しにくい。

## 新しいコンポーネント

新しいコンポーネントは、既存の`custom-spacing-select`とは別の場所へ作成する。

```text
src/aktk-block-components/components/responsive-spacing-control/
  SPEC.md
  index.tsx
  types.ts
  device-spacing-control.tsx
  style.scss
  utils.ts
  tests/
```

コンポーネント名は`ResponsiveSpacingControl`とする。既存の`ResponsiveSpacingSelect`、`ResponsiveSpacingSelectControl`は名前を変更せず、移行期間中も旧仕様として扱う。

新コンポーネントは`custom-spacing-select`を参照しない。WordPressコアの余白入力をラップした`SpacingSizesControl`など、既存の低レベル部品を直接利用する。

## 入出力

```ts
type SpacingSide =
	| 'top'
	| 'right'
	| 'bottom'
	| 'left'
	| 'vertical'
	| 'horizontal';

type ResponsiveSpacingValue = {
	desktop?: SpacingValue;
	tablet?: SpacingValue;
	mobile?: SpacingValue;
};

type ResponsiveSpacingControlProps = {
	label: string;
	value?: ResponsiveSpacingValue;
	onChange: ( value?: ResponsiveSpacingValue ) => void;
	allowedSides: SpacingSide[];
	minimumCustomValue?: number;
	showResetButton?: boolean;
};
```

-   `label`は必須とし、画面上に表示する。
-   `allowedSides`は表示、操作を許可する方向だけを渡す。
-   `allowedSides`は必須とし、呼び出し側が適用対象の方針を明示する。
-   未指定の方向はUIへ表示せず、コントロールから新しい値を作成できないようにする。
-   既存値に許可されていない方向が含まれる場合は、表示だけを理由に自動削除しない。削除は利用側のマイグレーションまたは明示的なリセットで行う。
-   デスクトップ、タブレット、モバイルの値がすべて未設定になった場合は`onChange( undefined )`を返す。
-   `0`を有効値として扱い、未設定判定に真偽値を使わない。

## UI

-   コントロール上部に設定名を表示する。
-   余白の設定名は「マージン」「パディング」に統一する。
-   デスクトップ、タブレット、モバイルの3設定を、端末アイコン付きで縦に並べる。
-   タブ切り替えは使用しない。
-   各端末の入力には、端末名をアクセシブルな名前として渡す。
-   `ToolsPanelItem`の項目名と内部コントロールのラベルは、どちらも「マージン」または「パディング」とする。項目を単独で開いた場合でも設定対象が分かる状態を優先する。

この命名は今後作成するコントロールに適用する。既存の「外側余白」「内側余白」などは一括変更せず、各ブロックの改修時に順次合わせる。

## 許可する方向

`allowedSides`はブロックと適用対象の責務に合わせて明示する。

| 適用対象                         | 推奨値                                              |
| -------------------------------- | --------------------------------------------------- |
| ブロックのルート要素のマージン   | `['top', 'bottom']`                                 |
| ブロックのルート要素のパディング | `['top', 'right', 'bottom', 'left']`                |
| 縦横単位で設定する内部要素       | `['vertical', 'horizontal']`                        |
| 各辺を設定する内部要素           | `['top', 'right', 'bottom', 'left']`                |

ブロックのルート要素に適用するマージンでは、左右と`horizontal`を許可しない。コンテンツ幅や配置をブロック側のマージンで崩さず、左右位置は配置、幅、親レイアウトの仕組みに任せる。

コンポーネント自身は適用対象を推測しない。呼び出し側が`allowedSides`を指定し、ブロックごとの意図をコード上で明確にする。

## 値の優先順位

レスポンシブ値と単一値は別々に保持する。画面幅に対応するレスポンシブ値がある場合だけ、単一値より優先する。

```ts
const effectiveValue = responsiveValue?.[ device ] ?? singleValue;
```

新コンポーネントはレスポンシブ値の編集だけを担当し、単一値との合成やCSS出力はブロック側または共通のスタイル出力ユーティリティーが担当する。

## リセット

-   `ToolsPanelItem`のリセットでは、その項目のレスポンシブ値だけを削除する。
-   コントロール内のリセットも、デスクトップ、タブレット、モバイルの値だけを削除する。
-   単一設定は削除しない。
-   許可方向を変更しただけでは既存値を削除しない。

## 移行方針

-   新規ブロックと新規設定は`ResponsiveSpacingControl`を使用する。
-   既存ブロックは、そのブロックを改修するタイミングで新コンポーネントへ移行する。
-   属性の保存形式が同じ場合でも、UIコンポーネントだけを段階的に置き換えられるようにする。
-   保存形式を変更する場合は、各ブロックのdeprecated定義と移行テストを同時に追加する。
-   既存の`ResponsiveSpacingSelect`と`ResponsiveSpacingSelectControl`の参照がなくなったことを`rg`で確認してから、旧ファイルを削除する。

## 検証項目

-   「マージン」「パディング」のラベルが常に表示される。
-   3端末の入力がアイコン付きで縦に並ぶ。
-   `top`、`right`、`bottom`、`left`を個別に許可、禁止できる。
-   `vertical`と`horizontal`を許可、禁止できる。
-   ブロックのルート要素のマージンで左右方向を設定できない。
-   プリセット値、任意値、`0`を保持できる。
-   全端末をリセットすると`undefined`になる。
-   リセットしても単一設定は残る。
-   新コンポーネントが`custom-spacing-select`を参照していない。
