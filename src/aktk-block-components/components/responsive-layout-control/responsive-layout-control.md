# ResponsiveLayoutControl配置設定仕様

更新日: 2026-08-21

## 目的

flexコンテナの並び方向、`align-items`、`justify-content`を、デスクトップ、タブレット、モバイルごとに設定できる共通コントロールを提供する。

## UI

WordPressの`TabPanel`を使い、デスクトップ、タブレット、モバイルをアイコン付きのタブとして表示する。各アイコンには端末名をアクセシブルラベルとツールチップとして設定する。

各タブには並び方向と、現在の並び方向で有効な配置をまとめて表示する。

-   縦並び: 並び方向、横方向の配置
-   横並び: 並び方向、縦方向の配置、横方向の配置

縦並びの横方向の配置には`baseline`を表示しない。縦方向の配置は、高さがない通常のflexコンテナでは効果を確認しにくいため表示しない。

## 保存形式

```ts
type ResponsiveLayout = {
	desktop?: ElementLayout;
	tablet?: ElementLayout;
	mobile?: ElementLayout;
};
```

値はCSSプロパティに対応する`orientation`、`alignItems`、`justifyContent`として保存する。未設定時は呼び出し側から渡された単一設定へフォールバックし、単一設定も未設定の場合は`defaultValues`を使う。

## スタイル

コンポーネントのレイアウトは独自CSSで実装し、Tailwindは使用しない。
