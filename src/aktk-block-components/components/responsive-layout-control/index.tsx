/**
 * WordPress dependencies.
 */
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { desktop, mobile, tablet } from '@wordpress/icons';

/**
 * Aktk dependencies.
 */
import {
	getElementLayoutDefaultValues,
	LayoutAlignmentControl,
	LayoutOrientationControl,
} from '@aktk/block-components/components/element-style-controls';
import type {
	ElementLayout,
	ElementLayoutOrientation,
} from '@aktk/block-components/components/element-style-controls';
import type { ResponsiveSpacingDevice } from '@aktk/block-components/components/responsive-spacing-control';
import { stripUndefined } from '@aktk/block-components/utils/object';

import type { ResponsiveLayoutControlProps } from './types';
import { updateResponsiveLayout } from './utils';

const TABS = [
	{
		name: 'desktop',
		title: __( 'デスクトップ', 'ystandard-blocks' ),
		icon: desktop,
	},
	{
		name: 'tablet',
		title: __( 'タブレット', 'ystandard-blocks' ),
		icon: tablet,
	},
	{
		name: 'mobile',
		title: __( 'モバイル', 'ystandard-blocks' ),
		icon: mobile,
	},
];

/**
 * レスポンシブ配置コントロール.
 *
 * @param props コンポーネントプロパティ.
 * @return レスポンシブ配置コントロール.
 */
export function ResponsiveLayoutControl( props: ResponsiveLayoutControlProps ) {
	const { defaultValues, fallbackValue, label, onChange, value } = props;
	const initialDefaults = getElementLayoutDefaultValues( defaultValues );
	const fallbackOrientation =
		fallbackValue?.orientation ?? initialDefaults.orientation;

	const renderDeviceControls = ( device: ResponsiveSpacingDevice ) => {
		const deviceValue = value?.[ device ];
		const orientation = deviceValue?.orientation ?? fallbackOrientation;
		const isHorizontal = 'horizontal' === orientation;
		const orientationDefaults = getElementLayoutDefaultValues(
			defaultValues,
			orientation
		);
		const fallbackDefaults = getElementLayoutDefaultValues(
			defaultValues,
			fallbackOrientation
		);
		const usesResponsiveOrientation =
			undefined !== deviceValue?.orientation &&
			deviceValue.orientation !== fallbackOrientation;
		const unsetAlignItems = usesResponsiveOrientation
			? orientationDefaults.alignItems
			: fallbackValue?.alignItems ?? fallbackDefaults.alignItems;
		const unsetJustifyContent = usesResponsiveOrientation
			? orientationDefaults.justifyContent
			: fallbackValue?.justifyContent ?? fallbackDefaults.justifyContent;
		const alignItems = deviceValue?.alignItems ?? unsetAlignItems;
		const justifyContent =
			deviceValue?.justifyContent ?? unsetJustifyContent;
		const updateDeviceValue = < Key extends keyof ElementLayout >(
			property: Key,
			propertyValue: ElementLayout[ Key ]
		) => {
			const nextDeviceValue = stripUndefined( {
				...deviceValue,
				[ property ]: propertyValue,
			} ) as ElementLayout | undefined;
			onChange(
				updateResponsiveLayout( value, device, nextDeviceValue )
			);
		};
		const updateOrientation = (
			nextOrientation: ElementLayoutOrientation
		) => {
			const nextDefaults = getElementLayoutDefaultValues(
				defaultValues,
				nextOrientation
			);
			const nextDeviceValue = stripUndefined( {
				...deviceValue,
				orientation:
					nextOrientation === fallbackOrientation
						? undefined
						: nextOrientation,
				alignItems:
					deviceValue?.alignItems ??
					( nextOrientation === fallbackOrientation
						? undefined
						: nextDefaults.alignItems ),
				justifyContent:
					deviceValue?.justifyContent ??
					( nextOrientation === fallbackOrientation
						? undefined
						: nextDefaults.justifyContent ),
			} ) as ElementLayout | undefined;
			onChange(
				updateResponsiveLayout( value, device, nextDeviceValue )
			);
		};

		return (
			<div className="aktk-responsive-layout-control__controls">
				<LayoutOrientationControl
					value={ orientation }
					onChange={ updateOrientation }
				/>
				<LayoutAlignmentControl
					allowBaseline={ isHorizontal }
					axis={ isHorizontal ? 'vertical' : 'horizontal' }
					label={
						isHorizontal
							? __( '縦方向の配置', 'ystandard-blocks' )
							: __( '横方向の配置', 'ystandard-blocks' )
					}
					property="alignItems"
					value={ alignItems }
					onChange={ ( nextAlignItems ) =>
						updateDeviceValue(
							'alignItems',
							nextAlignItems === unsetAlignItems
								? undefined
								: nextAlignItems
						)
					}
				/>
				{ isHorizontal && (
					<LayoutAlignmentControl
						axis="horizontal"
						label={ __( '横方向の配置', 'ystandard-blocks' ) }
						property="justifyContent"
						value={ justifyContent }
						onChange={ ( nextJustifyContent ) =>
							updateDeviceValue(
								'justifyContent',
								nextJustifyContent === unsetJustifyContent
									? undefined
									: nextJustifyContent
							)
						}
					/>
				) }
			</div>
		);
	};

	return (
		<div
			className="aktk-responsive-layout-control"
			role="group"
			aria-label={ label }
		>
			<TabPanel
				className="aktk-responsive-layout-control__tabs"
				initialTabName="desktop"
				tabs={ TABS }
			>
				{ ( tab ) =>
					renderDeviceControls( tab.name as ResponsiveSpacingDevice )
				}
			</TabPanel>
		</div>
	);
}

export type { ResponsiveLayout, ResponsiveLayoutControlProps } from './types';
export { hasResponsiveLayoutValue, updateResponsiveLayout } from './utils';
