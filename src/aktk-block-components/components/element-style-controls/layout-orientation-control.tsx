/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { ToggleGroup } from '@aktk/block-components/components/toggle-group';

import type { ElementLayoutOrientation } from './types';

type LayoutOrientationControlProps = {
	onChange: ( value: ElementLayoutOrientation ) => void;
	value: ElementLayoutOrientation;
};

/**
 * flex要素の並び方向を選択.
 *
 * @param props コンポーネントプロパティ.
 * @return 並び方向コントロール.
 */
export function LayoutOrientationControl(
	props: LayoutOrientationControlProps
) {
	const { onChange, value } = props;

	return (
		<ToggleGroup
			label={ __( '並び方向', 'ystandard-blocks' ) }
			value={ value }
			options={ [
				{
					label: __( '縦並び', 'ystandard-blocks' ),
					value: 'vertical',
				},
				{
					label: __( '横並び', 'ystandard-blocks' ),
					value: 'horizontal',
				},
			] }
			onChange={ ( nextOrientation ) => {
				// 実験的コンポーネントが未選択値を返す場合は保存値を変更しない.
				if (
					'vertical' === nextOrientation ||
					'horizontal' === nextOrientation
				) {
					onChange( nextOrientation );
				}
			} }
			isBlock
		/>
	);
}
