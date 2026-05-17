# Custom Spacing Select 仕様書

## 概要

`custom-spacing-select`は、レスポンシブ対応のスペーシング（余白・マージン・パディング・ギャップ）値を設定するためのコンポーネント群です。WordPressテーマのスペーシングプリセットとカスタム値の両方に対応し、デバイス別の細かい調整が可能です。

## エクスポートされるコンポーネント

### 1. ResponsiveSpacingSelect

レスポンシブ対応のメインコンポーネント。デフォルト/レスポンシブ切り替え可能。

```typescript
import { ResponsiveSpacingSelect } from '@aktk/block-components/components/custom-spacing-select';

<ResponsiveSpacingSelect
  value={spacing}
  onChange={handleChange}
  responsiveControlStyle="vertical"    // または "horizontal"
  useResponsive={true}
  showResetButton={true}
  sides={['top', 'right', 'bottom', 'left']}
  minimumCustomValue={0}
/>
```

#### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|---|-----------|-----|
| `value` | `ResponsiveSpacing` | - | レスポンシブスペーシング値 |
| `onChange` | `(value) => void` | - | 値変更時のコールバック |
| `responsiveControlStyle` | `'vertical' \| 'horizontal'` | `'vertical'` | レスポンシブコントロールのレイアウト |
| `useResponsive` | `boolean` | `true` | レスポンシブ機能の有効/無効 |
| `showResetButton` | `boolean` | `true` | リセットボタンの表示/非表示 |
| `sides` | `('top' \| 'right' \| 'bottom' \| 'left')[]` | `['top', 'right', 'bottom', 'left']` | 設定対象の辺 |
| `minimumCustomValue` | `number` | `0` | カスタム値の最小値 |

### 2. CustomSpacingSelectControl

単一デバイス用のスペーシングコントロール。

```typescript
import { CustomSpacingSelectControl } from '@aktk/block-components/components/custom-spacing-select';

<CustomSpacingSelectControl
  values={spacing}
  onChange={handleChange}
  label="スペーシング"
  sides={['top', 'bottom']}
  minimumCustomValue={0}
/>
```

## データ型定義

### Spacing

単一デバイスのスペーシング値。

```typescript
interface Spacing {
  top?: string;      // 上
  right?: string;    // 右
  bottom?: string;   // 下
  left?: string;     // 左
}
```

### ResponsiveSpacing

レスポンシブ対応スペーシング値。

```typescript
interface ResponsiveSpacing {
  desktop?: Spacing;  // デスクトップ
  tablet?: Spacing;   // タブレット
  mobile?: Spacing;   // モバイル
}
```

## 使用例

### 基本的な使用方法

```tsx
import { ResponsiveSpacingSelect } from '@aktk/block-components/components/custom-spacing-select';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

const PaddingControl = ({ attributes, setAttributes }) => {
  const { padding } = attributes;
  
  const handleOnChange = (values) => {
    setAttributes({
      padding: values,
    });
  };
  
  return (
    <BaseControl
      id="padding-control"
      label="内側余白"
    >
      <ResponsiveSpacingSelect
        value={padding}
        onChange={handleOnChange}
      />
    </BaseControl>
  );
};
```

### 上下のみの設定

```tsx
<ResponsiveSpacingSelect
  value={margin}
  onChange={handleChange}
  sides={['top', 'bottom']}
/>
```

### 水平レイアウト

```tsx
<ResponsiveSpacingSelect
  value={spacing}
  onChange={handleChange}
  responsiveControlStyle="horizontal"
/>
```

## プリセット値とCSS変数の処理

コンポーネントから得られる値が`var:preset`形式（例：`var:preset|spacing|60`）の場合があります。これをCSS変数に変換するには`presetTokenToCssVar`関数を使用してください。

### presetTokenToCssVar関数

```typescript
import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';

// var:preset|spacing|60 → var(--wp--preset--spacing--60)
const cssVar = presetTokenToCssVar('var:preset|spacing|60');

// ラッパーなしの変数名のみ取得
const varName = presetTokenToCssVar('var:preset|spacing|60', false);
// → --wp--preset--spacing--60
```

### スタイル生成での使用例

```typescript
import { presetTokenToCssVar } from '@aktk/block-components/utils/style-engine';

const generatePaddingStyle = (spacing) => {
  return {
    paddingTop: presetTokenToCssVar(spacing?.top),
    paddingRight: presetTokenToCssVar(spacing?.right),
    paddingBottom: presetTokenToCssVar(spacing?.bottom),
    paddingLeft: presetTokenToCssVar(spacing?.left),
  };
};
```

### ユーティリティ関数

`getCustomSpacingValues`関数を使用すると、自動的にプリセット値の変換が行われます。

```typescript
import { getCustomSpacingValues } from '@aktk/block-components/components/custom-spacing-select';

const paddingStyle = getCustomSpacingValues(spacing, 'padding');
// → {
//   'padding-top': 'var(--wp--preset--spacing--60)',
//   'padding-right': '1rem',
//   // ...
// }
```

## 従来コンポーネントからの移行

### ResponsiveSpacing → ResponsiveSpacingSelect

```typescript
// 変更前
import ResponsiveSpacing from '@aktk/components/responsive-spacing';
import { getResponsiveValues } from '@aktk/helper/responsive';

const handleOnChange = (values) => {
  setAttributes({
    padding: getResponsiveValues(values),
  });
};

<BaseControl id="control-id">
  <ResponsiveSpacing
    label="内側余白"
    values={padding}
    onChange={handleOnChange}
  />
</BaseControl>

// 変更後
import { ResponsiveSpacingSelect } from '@aktk/block-components/components/custom-spacing-select';

const handleOnChange = (values) => {
  setAttributes({
    padding: values,  // getResponsiveValues不要
  });
};

<BaseControl
  id="control-id"
  label="内側余白"  // ラベルをBaseControlに移動
>
  <ResponsiveSpacingSelect
    value={padding}  // values → value
    onChange={handleOnChange}
  />
</BaseControl>
```

### 主な変更点

1. **インポート**: `@aktk/components/responsive-spacing` → `@aktk/block-components/components/custom-spacing-select`
2. **プロパティ名**: `values` → `value`
3. **データ変換不要**: `getResponsiveValues`の削除
4. **ラベル位置**: コンポーネント内 → `BaseControl`の`label`プロパティ

## 注意事項

- データ構造は従来の`ResponsiveSpacing`コンポーネントと互換性があります
- プリセット値（`var:preset|spacing|*`）を使用する場合は`presetTokenToCssVar`で変換してください
- レスポンシブ機能を無効にする場合は`useResponsive={false}`を設定してください
- カスタム値の最小値制限が必要な場合は`minimumCustomValue`を設定してください