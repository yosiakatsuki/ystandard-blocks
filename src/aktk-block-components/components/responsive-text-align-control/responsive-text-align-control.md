# ResponsiveTextAlignControl文字揃え設定仕様

## 目的

デスクトップ、タブレット、モバイルの文字揃えを、ブロック横断で同じUIと保存形式により設定する。

## UI

-   3端末の設定を端末アイコン付きで縦に並べる。
-   各端末で左揃え、中央揃え、右揃えを選択できる。
-   選択中の値をもう一度押した場合は、その端末の設定を解除する。
-   Tailwindユーティリティーは使用せず、`index.css`の専用クラスでレイアウトする。

## 入出力

```ts
type ResponsiveTextAlign = {
	desktop?: 'left' | 'center' | 'right';
	tablet?: 'left' | 'center' | 'right';
	mobile?: 'left' | 'center' | 'right';
};
```

全端末の値が未設定になった場合は`onChange( undefined )`を返す。単一設定との合成とCSS出力は利用側が担当する。
