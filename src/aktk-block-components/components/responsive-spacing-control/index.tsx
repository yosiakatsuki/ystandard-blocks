/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import {
	DesktopControl,
	MobileControl,
	TabletControl,
} from '@aktk/block-components/components/icon-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import Button from '@aktk/block-components/wp-controls/button';
import SpacingSizesControl from '@aktk/block-components/wp-controls/spacing-size-control';

/**
 * Internal dependencies.
 */
import type {
	ResponsiveSpacingControlProps,
	ResponsiveSpacingDevice,
} from './types';
import { updateResponsiveSpacing } from './utils';

type DeviceControlProps = {
	children: React.ReactNode;
};

type DeviceControl = React.ComponentType< DeviceControlProps >;

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
		showResetButton = true,
	} = props;

	const renderDeviceControl = (
		device: ResponsiveSpacingDevice,
		deviceLabel: string,
		Control: DeviceControl
	) => (
		<div role="group" aria-label={ deviceLabel }>
			<Control>
				<div>
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
			</Control>
		</div>
	);

	return (
		<BaseControl id={ id } label={ label }>
			<div className="aktk-responsive-spacing-control grid grid-cols-1 gap-4">
				{ renderDeviceControl(
					'desktop',
					__( 'デスクトップ', 'ystandard-blocks' ),
					DesktopControl
				) }
				{ renderDeviceControl(
					'tablet',
					__( 'タブレット', 'ystandard-blocks' ),
					TabletControl
				) }
				{ renderDeviceControl(
					'mobile',
					__( 'モバイル', 'ystandard-blocks' ),
					MobileControl
				) }
			</div>
			{ showResetButton && (
				<Button
					onClick={ () => onChange( undefined ) }
					size="small"
					variant="secondary"
					isDestructive
					className="mt-2 w-full justify-center text-center"
				>
					{ __( 'リセット', 'ystandard-blocks' ) }
				</Button>
			) }
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
