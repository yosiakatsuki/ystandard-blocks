/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	justifyBottom,
	justifyCenter,
	justifyCenterVertical,
	justifyLeft,
	justifyRight,
	justifySpaceBetween,
	justifySpaceBetweenVertical,
	justifyStretch,
	justifyStretchVertical,
	justifyTop,
} from '@wordpress/icons';

/**
 * Aktk dependencies.
 */
import {
	ToggleGroupControl,
	ToggleGroupControlOptionIcon,
} from '@aktk/block-components/wp-controls/toggle-group-control';

import type { ElementAlignItems, ElementJustifyContent } from './types';

type LayoutAlignmentProperty = 'alignItems' | 'justifyContent';

type LayoutAlignmentValue< Property extends LayoutAlignmentProperty > =
	Property extends 'alignItems' ? ElementAlignItems : ElementJustifyContent;

type LayoutAlignmentControlProps< Property extends LayoutAlignmentProperty > = {
	axis: 'horizontal' | 'vertical';
	help?: React.ReactNode;
	label: string;
	onChange: ( value: LayoutAlignmentValue< Property > ) => void;
	property: Property;
	value: LayoutAlignmentValue< Property >;
};

/**
 * flex配置の軸とプロパティに対応する選択肢を表示.
 *
 * @param props コンポーネントプロパティ.
 * @return 配置設定コントロール.
 */
export function LayoutAlignmentControl<
	Property extends LayoutAlignmentProperty,
>( props: LayoutAlignmentControlProps< Property > ) {
	const { axis, help, label, onChange, property, value } = props;
	const isHorizontal = 'horizontal' === axis;
	const startOption = {
		icon: isHorizontal ? justifyLeft : justifyTop,
		label: isHorizontal
			? __( '左揃え', 'ystandard-blocks' )
			: __( '上揃え', 'ystandard-blocks' ),
		value: 'flex-start',
	};
	const centerOption = {
		icon: isHorizontal ? justifyCenter : justifyCenterVertical,
		label: __( '中央揃え', 'ystandard-blocks' ),
		value: 'center',
	};
	const endOption = {
		icon: isHorizontal ? justifyRight : justifyBottom,
		label: isHorizontal
			? __( '右揃え', 'ystandard-blocks' )
			: __( '下揃え', 'ystandard-blocks' ),
		value: 'flex-end',
	};
	const additionalOption =
		'alignItems' === property
			? {
					icon: isHorizontal
						? justifyStretch
						: justifyStretchVertical,
					label: isHorizontal
						? __( '幅を揃える', 'ystandard-blocks' )
						: __( '高さを揃える', 'ystandard-blocks' ),
					value: 'stretch',
			  }
			: {
					icon: isHorizontal
						? justifySpaceBetween
						: justifySpaceBetweenVertical,
					label: isHorizontal
						? __( '左右の端に配置', 'ystandard-blocks' )
						: __( '上下の端に配置', 'ystandard-blocks' ),
					value: 'space-between',
			  };
	const options = [
		startOption,
		centerOption,
		endOption,
		additionalOption,
		...( 'alignItems' === property
			? [
					{
						icon: justifyCenterVertical,
						label: __( 'ベースライン', 'ystandard-blocks' ),
						value: 'baseline',
					},
			  ]
			: [] ),
	];

	return (
		<ToggleGroupControl
			label={ label }
			help={ help }
			value={ value }
			onChange={ ( nextValue ) => {
				// 実験的コンポーネントが未選択値を返す場合は保存値を変更しない.
				if ( 'string' === typeof nextValue ) {
					onChange( nextValue as LayoutAlignmentValue< Property > );
				}
			} }
		>
			{ options.map( ( option ) => (
				<ToggleGroupControlOptionIcon
					key={ option.value }
					icon={ option.icon }
					label={ option.label }
					value={ option.value }
				/>
			) ) }
		</ToggleGroupControl>
	);
}
