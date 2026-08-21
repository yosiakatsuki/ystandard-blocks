# ElementLayoutPanel配置設定仕様

更新日: 2026-08-21

## 目的

flexコンテナとなる内部要素の並び方向、`align-items`、`justify-content`を、再利用可能なToolsPanelとして設定できるようにする。

最初の適用先は`ystdb/custom-heading`の見出しグループとする。コンポーネント側は対象要素や属性階層を決めず、ラベル、現在値、更新処理を呼び出し側から受け取る。

## 保存形式

`ElementStyle.layout`を次の形式へ拡張する。

```ts
type ElementLayout = {
	orientation?: 'vertical' | 'horizontal';
	alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between';
};
```

CSSプロパティと保存キーを一致させる。WordPressコアのflexレイアウトで使われる`left`、`right`などの抽象値には変換せず、内部要素へそのまま適用できるCSS値を保存する。

既定値は次のとおりとし、既定値と同じ値は属性へ保存しない。

-   `orientation`: `vertical`
-   `alignItems`: `stretch`
-   `justifyContent`: `flex-start`

未設定と既定値を同じ見た目にし、スタイルコピー時に不要な値を増やさない。

## UI構成

既存の`ElementLayoutPanel`内に、次のToolsPanelItemを表示する。

-   並び方向
-   `align-items`の配置
-   `justify-content`の配置

3項目とも配置を決める主要設定として初期表示する。個別項目の解除ではそのキーだけを削除し、パネルの「すべてリセット」では`layout`全体を削除する。

配置方向のラベルは、現在の並び方向に合わせて切り替える。

| 保存キー         | 縦並び時のラベル | 横並び時のラベル |
| ---------------- | ---------------- | ---------------- |
| `alignItems`     | 横方向の配置     | 縦方向の配置     |
| `justifyContent` | 縦方向の配置     | 横方向の配置     |

ラベルは利用者が見た方向を表し、コントロールのヘルプまたはアクセシブルラベルでは対応するCSSプロパティも識別できるようにする。

縦並び時の`justify-content`は、見出しグループの高さが内容より大きい場合にだけ見た目の差が生じる。コントロールのヘルプへこの条件を表示し、反映されないように見える理由を確認できるようにする。今回の範囲では高さや最小高さの設定を追加せず、テーマや将来のサイズ設定で高さが確保された場合にも使える単一設定として用意する。

## 選択肢

`align-items`は次の4種類とする。

-   開始位置: `flex-start`
-   中央: `center`
-   終了位置: `flex-end`
-   幅または高さを揃える: `stretch`

`justify-content`は次の4種類とする。

-   開始位置: `flex-start`
-   中央: `center`
-   終了位置: `flex-end`
-   両端に配置: `space-between`

WordPressコアのToggleGroupControlと配置アイコンを利用する。`AlignmentMatrixControl`は`stretch`と`space-between`を表現できず、2つのプロパティを個別にリセットできないため使用しない。

`baseline`、`space-around`、`space-evenly`は初期仕様へ含めない。見出しグループでの利用頻度とWordPressコアのflex設定との一貫性を優先し、必要性が確認できた場合に追加する。

## 並び方向を変更した場合

`alignItems`と`justifyContent`は並び方向を変更しても保持する。保存値はCSSプロパティの責務を表しており、方向変更によって別のキーへ移し替えない。

方向変更後は、各プロパティが作用する物理方向に合わせてUIラベルを更新する。すべての選択肢は縦並びと横並びの両方で有効なため、値の自動補正は行わない。

## スタイル出力

`getInnerBlockSupportProps`へ`layout.alignItems`と`layout.justifyContent`の出力を追加し、編集画面と保存HTMLで同じインラインスタイルを使用する。

`display: flex`と`flex-direction`は対象ブロックの構造に関わるため、共通アダプターでは追加しない。カスタム見出しでは引き続き`.ystdb-custom-heading-group`と`.is-horizontal`が担当する。

カスタム見出しのCSSでは、既存表示を固定するため次の既定値を明示する。

```css
.ystdb-custom-heading-group {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
}
```

利用者が設定した値はインラインスタイルになるため、この既定値を上書きする。

## レスポンシブ設定

今回追加するのは単一設定だけとする。レスポンシブ化が必要になった場合は、既存の単一設定へ混在させず、`style.ystdb.customHeading.responsive.group.layout`配下と専用パネルを追加する。

## マイグレーション

未設定時の保存HTMLは変更しない。今回追加する値は現行の`style`オブジェクト内に保存するため、開発中の形式に対するdeprecatedは追加しない。

公開済みのv3.25.3互換は既存の`deprecated/v3_25_3`だけで維持する。正式リリース後に保存HTMLの既定構造を変更する場合は、その時点の保存処理を新しいdeprecatedとして固定する。

## 検証項目

-   未設定時は既存と同じ縦並び、`stretch`、`flex-start`になる。
-   `alignItems`と`justifyContent`が編集画面とフロントへ同じ値で反映される。
-   縦並びと横並びを切り替えると、配置コントロールのラベルが対応する方向へ切り替わる。
-   縦並び時の`justify-content`に、反映条件を説明するヘルプが表示される。
-   並び方向を切り替えても保存済みの配置値を失わない。
-   個別リセットで他の`layout`値を維持し、パネルのリセットで`layout`全体を削除する。
-   WordPress標準のスタイルコピーで並び方向と2つの配置値がコピーされる。
-   保存、parse、再serializeでブロック検証エラーが発生しない。
