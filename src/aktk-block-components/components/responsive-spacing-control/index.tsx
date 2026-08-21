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

/**
 * Internal dependencies.
 */
import type {
	ResponsiveSpacingControlProps,
	ResponsiveSpacingDevice,
} from './types';
import { updateResponsiveSpacing } from './utils';

const ICON_SIZE = 20;

/**
 * レスポンシブ余白コントロール.
 *
 * @param props コンポーネントプロパティ.
 */
export function ResponsiveSpacingControl(
	props: ResponsiveSpacingControlProps
): JSX.Element {
	const {
		id,
		label,
		value,
		onChange,
		allowedSides,
		minimumCustomValue = 0,
	} = props;

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
					values={ value?.[ device ] }
					onChange={ ( deviceValue ) =>
						onChange(
							updateResponsiveSpacing(
								value,
								device,
								deviceValue
							)
						)
					}
					sides={ allowedSides }
					minimumCustomValue={ minimumCustomValue }
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

export type {
	ResponsiveSpacing,
	ResponsiveSpacingControlProps,
	ResponsiveSpacingDevice,
	Spacing,
	SpacingSide,
} from './types';
export { hasResponsiveSpacingValue, updateResponsiveSpacing } from './utils';
