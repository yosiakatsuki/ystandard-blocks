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
	alignItems?:
		| 'stretch'
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'baseline';
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between';
};
```

CSSプロパティと保存キーを一致させる。WordPressコアのflexレイアウトで使われる`left`、`right`などの抽象値には変換せず、内部要素へそのまま適用できるCSS値を保存する。

共通コンポーネントのフォールバック初期値は次のとおりとし、初期値と同じ値は属性へ保存しない。

-   `orientation`: `vertical`
-   `alignItems`: 縦並びでは`stretch`、横並びでは`baseline`
-   `justifyContent`: `flex-start`

未設定と既定値を同じ見た目にし、スタイルコピー時に不要な値を増やさない。

呼び出し側は`defaultValues`で、並び方向と、縦並び・横並びそれぞれの`alignItems`、`justifyContent`を上書きできる。保存値がない場合も指定された値をUIの初期選択として表示するが、利用者が変更するまでは属性へ保存しない。

## UI構成

既存の`ElementLayoutPanel`内に、次のToolsPanelItemを表示する。

-   並び方向
-   `align-items`の配置
-   `justify-content`の配置（横並び時のみ）

表示する項目は配置を決める主要設定として初期表示する。個別項目の解除ではそのキーだけを削除し、パネルの「すべてリセット」では`layout`全体を削除する。

縦並びでは「並び方向」と`align-items`の「横方向の配置」だけを表示する。`justify-content`の「縦方向の配置」は、高さが確保されていない通常の見出しでは効果を確認しにくいため表示しない。

横並びでは「並び方向」、`align-items`の「縦方向の配置」、`justify-content`の「横方向の配置」を表示する。

| 保存キー         | 縦並び時のラベル | 横並び時のラベル |
| ---------------- | ---------------- | ---------------- |
| `alignItems`     | 横方向の配置     | 縦方向の配置     |
| `justifyContent` | 非表示           | 横方向の配置     |

ラベルは利用者が見た方向を表し、コントロールのヘルプまたはアクセシブルラベルでは対応するCSSプロパティも識別できるようにする。

## 選択肢

`align-items`は次の5種類とする。ただし、テキストの基準線を揃える`baseline`は横並びの場合だけ表示する。

-   開始位置: `flex-start`
-   中央: `center`
-   終了位置: `flex-end`
-   幅または高さを揃える: `stretch`
-   テキストの基準線を揃える: `baseline`

`justify-content`は次の4種類とする。

-   開始位置: `flex-start`
-   中央: `center`
-   終了位置: `flex-end`
-   両端に配置: `space-between`

WordPressコアのToggleGroupControlと配置アイコンを利用する。`AlignmentMatrixControl`は`stretch`と`space-between`を表現できず、2つのプロパティを個別にリセットできないため使用しない。

`space-around`、`space-evenly`は初期仕様へ含めない。見出しグループでの利用頻度とWordPressコアのflex設定との一貫性を優先し、必要性が確認できた場合に追加する。

## 並び方向を変更した場合

`alignItems`と`justifyContent`は並び方向を変更しても保持する。保存値はCSSプロパティの責務を表しており、方向変更によって別のキーへ移し替えない。

方向変更後は、各プロパティが作用する物理方向に合わせてUIラベルと表示項目を更新する。非表示になった`justifyContent`や`baseline`の保存値は、再び横並びへ戻したときに復元できるように保持し、値の自動補正は行わない。

## スタイル出力

`getInnerBlockSupportProps`へ`layout.alignItems`と`layout.justifyContent`の出力を追加し、編集画面と保存HTMLで同じインラインスタイルを使用する。

`display: flex`と`flex-direction`は対象ブロックの構造に関わるため、共通アダプターでは追加しない。カスタム見出しでは引き続き`.ystdb-custom-heading-group`と`.is-horizontal`が担当する。

カスタム見出しのCSSでは、既存表示を固定するため次の既定値を明示する。

```css
.ystdb-custom-heading-group {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
}

.ystdb-custom-heading-group.is-horizontal {
	flex-direction: row;
	align-items: baseline;
}
```

利用者が設定した値はインラインスタイルになるため、この既定値を上書きする。

カスタム見出しは`defaultValues`で、縦並び時の横方向を`flex-start`、横並び時の縦方向を`baseline`、横方向を`flex-start`にする。

## レスポンシブ設定

レスポンシブ配置は`style.ystdb.customHeading.responsive.group.layout`配下へ保存し、単一設定へ混在させない。UIと保存形式の詳細は[`ResponsiveLayoutControl配置設定仕様`](../responsive-layout-control/responsive-layout-control.md)を正本にする。

## マイグレーション

未設定時の保存HTMLは変更しない。今回追加する値は現行の`style`オブジェクト内に保存するため、開発中の形式に対するdeprecatedは追加しない。

公開済みのv3.25.3互換は既存の`deprecated/v3_25_3`だけで維持する。正式リリース後に保存HTMLの既定構造を変更する場合は、その時点の保存処理を新しいdeprecatedとして固定する。

## 検証項目

-   共通コンポーネントの未設定時は縦並び、`stretch`、`flex-start`になる。
-   カスタム見出しの未設定時は縦並び、横方向が`flex-start`になる。
-   `alignItems`と`justifyContent`が編集画面とフロントへ同じ値で反映される。
-   縦並びと横並びを切り替えると、配置コントロールのラベルが対応する方向へ切り替わる。
-   縦並びでは「横方向の配置」に`baseline`が表示されず、「縦方向の配置」も表示されない。
-   横並びでは「縦方向の配置」に`baseline`が表示され、「横方向の配置」も表示される。
-   並び方向を切り替えても保存済みの配置値を失わない。
-   個別リセットで他の`layout`値を維持し、パネルのリセットで`layout`全体を削除する。
-   WordPress標準のスタイルコピーで並び方向と2つの配置値がコピーされる。
-   保存、parse、再serializeでブロック検証エラーが発生しない。
