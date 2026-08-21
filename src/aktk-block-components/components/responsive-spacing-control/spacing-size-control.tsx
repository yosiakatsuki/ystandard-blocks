import { Monitor, Smartphone, Tablet } from 'react-feather';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import SpacingSizesControl from '@aktk/block-components/wp-controls/spacing-size-control';

import type {
	ResponsiveSpacingDevice,
	ResponsiveSpacingSizeControlProps,
} from './types';
import { updateResponsiveSpacingSize } from './utils';

const ICON_SIZE = 20;

/**
 * デバイス別に単一の余白値を設定するコントロール.
 *
 * @param props コンポーネントプロパティ.
 * @return レスポンシブ余白値コントロール.
 */
export function ResponsiveSpacingSizeControl(
	props: ResponsiveSpacingSizeControlProps
) {
	const { id, label, minimumCustomValue = 0, onChange, value } = props;
	const renderDeviceControl = (
		device: ResponsiveSpacingDevice,
		deviceLabel: string,
		icon: JSX.Element
	) => (
		<div
			className="aktk-responsive-spacing-control__device"
			role="group"
			aria-label={ deviceLabel }
		>
			{ icon }
			<div className="aktk-responsive-spacing-control__input">
				<SpacingSizesControl
					values={
						value?.[ device ] ? { top: value[ device ] } : undefined
					}
					onChange={ ( deviceValue ) =>
						onChange(
							updateResponsiveSpacingSize(
								value,
								device,
								deviceValue?.top
							)
						)
					}
					sides={ [ 'top' ] }
					minimumCustomValue={ minimumCustomValue }
					showSideInLabel={ false }
				/>
			</div>
		</div>
	);

	return (
		<BaseControl id={ id } label={ label }>
			<div className="aktk-responsive-spacing-control">
				{ renderDeviceControl(
					'desktop',
					__( 'デスクトップ', 'ystandard-blocks' ),
					<Monitor
						aria-hidden="true"
						focusable="false"
						size={ ICON_SIZE }
					/>
				) }
				{ renderDeviceControl(
					'tablet',
					__( 'タブレット', 'ystandard-blocks' ),
					<Tablet
						aria-hidden="true"
						focusable="false"
						size={ ICON_SIZE }
					/>
				) }
				{ renderDeviceControl(
					'mobile',
					__( 'モバイル', 'ystandard-blocks' ),
					<Smartphone
						aria-hidden="true"
						focusable="false"
						size={ ICON_SIZE }
					/>
				) }
			</div>
		</BaseControl>
	);
}
