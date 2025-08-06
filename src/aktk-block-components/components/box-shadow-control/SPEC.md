# BoxShadowControl

## 要件
- `@aktk/components/box-shadow-control`を移行して作成する
  - 移行対象ファイル @src/blocks/components/box-shadow-control/index.js
- @src/aktk-block-components 内のコンポーネントを使用して作成する
- スタイリングはTailwindCSSを使用する。
- RangeControlは使用しない。数値入力のみのコントロールを使用する
- i18n対応のテキストドメインは`aktk-block-components`とする
- `getComponentConfig`で取得している値はコンポーネント内に保持する

## 設計

### データ型定義

```typescript
interface BoxShadowValue {
  offsetX?: string;    // X方向のオフセット（例: "0", "2px", "-4px"）
  offsetY?: string;    // Y方向のオフセット（例: "2px", "4px", "8px"）
  blurRadius?: string; // ぼかし半径（例: "8px", "16px", "24px"）
  color?: string;      // 影の色（例: "#bdc3c7", "#000000"）
  opacity?: number;    // 不透明度（0-1の範囲、例: 0.7, 0.5, 1.0）
}

interface BoxShadowControlProps {
  value?: BoxShadowValue;
  onChange: (value?: BoxShadowValue) => void;
  label?: string;
}
```

### プリセット値

コンポーネント内に以下のプリセットを保持：

```typescript
const BOX_SHADOW_PRESETS = [
  {
    label: __('小', 'aktk-block-components'),
    value: {
      offsetX: '0',
      offsetY: '2px',
      blurRadius: '8px',
      color: '#bdc3c7',
      opacity: 0.7,
    },
  },
  {
    label: __('中', 'aktk-block-components'),
    value: {
      offsetX: '0',
      offsetY: '4px',
      blurRadius: '16px',
      color: '#bdc3c7',
      opacity: 0.7,
    },
  },
  {
    label: __('大', 'aktk-block-components'),
    value: {
      offsetX: '0',
      offsetY: '8px',
      blurRadius: '24px',
      color: '#bdc3c7',
      opacity: 0.7,
    },
  },
];
```

### コンポーネント構成

1. **ヘッダー部分**
   - ラベル表示（カスタマイズ可能、デフォルト: "影"）
   - リセットボタン（"クリア"）

2. **プリセット選択部分**
   - "プリセット"ラベル
   - 3つのプリセットボタン（小・中・大）を横並びで表示
   - `HorizonButtonSelect`コンポーネントを使用

3. **色設定部分**
   - "色"ラベル
   - カラーパレット（`ColorPalette`コンポーネント）
   - 不透明度設定（数値入力、0-1の範囲、ステップ0.1）

4. **位置・ぼかし設定部分**
   - X方向オフセット（`UnitControl`、px単位固定）
   - Y方向オフセット（`UnitControl`、px単位固定）
   - ぼかし半径（`UnitControl`、px単位固定）

### 使用するコンポーネント

- `@aktk/block-components/wp-controls/button` - リセットボタン用
- `@aktk/block-components/components/buttons/HorizonButtonSelect` - プリセット選択用
- `@aktk/block-components/components/color-pallet-control/ColorPalette` - カラー選択用
- `@aktk/block-components/wp-controls/unit-control` - 数値入力用
- `@aktk/block-components/wp-controls/number-control` - 不透明度入力用

### レイアウト・スタイリング

TailwindCSSクラスを使用：
- `flex`, `flex-col`, `gap-4` - メインレイアウト
- `flex`, `justify-between`, `items-center` - ヘッダー部分
- `text-sm`, `font-medium` - ラベルスタイル
- `grid`, `grid-cols-3`, `gap-2` - 数値入力のグリッドレイアウト

### ユーティリティ関数

```typescript
export function getBoxShadowStyle(value?: BoxShadowValue) {
  if (!value?.offsetX || !value?.offsetY || !value?.blurRadius) {
    return undefined;
  }
  
  const color = hex2rgb(value.color ?? '#000');
  const opacity = value.opacity ?? 0.7;
  
  return {
    boxShadow: `${value.offsetX} ${value.offsetY} ${value.blurRadius} rgba(${color[0]},${color[1]},${color[2]},${opacity})`,
  };
}
```

### ファイル構成

```
src/aktk-block-components/components/box-shadow-control/
├── index.tsx              // メインコンポーネント
├── box-shadow-control.tsx // BoxShadowControlコンポーネント
├── types.ts               // TypeScript型定義  
├── utils.ts               // ユーティリティ関数（getBoxShadowStyle等）
└── SPEC.md               // この仕様書
```

### 移行時の変更点

1. **依存関係の更新**
   - `@wordpress/components` → `@aktk/block-components/wp-controls/*`
   - `@aktk/components/*` → `@aktk/block-components/components/*`

2. **スタイリングの変更**
   - CSSクラス名（`ystdtb-box-shadow-control__*`） → TailwindCSSクラス
   - `BaseControl`の`__nextHasNoMarginBottom`プロパティ削除

3. **RangeControlの置き換え**
   - 不透明度の`RangeControl` → `NumberControl`（min: 0, max: 1, step: 0.1）

4. **テキストドメイン変更**
   - `ystandard-toolbox` → `aktk-block-components`

5. **プリセット値の内部保持**
   - `getComponentConfig('boxShadowPreset')` → コンポーネント内定数

この設計により、既存の機能を保持しながら、より現代的でメンテナブルなコンポーネントとして刷新できます。
