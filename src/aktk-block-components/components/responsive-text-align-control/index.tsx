import { Monitor, Smartphone, Tablet } from 'react-feather';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { TextAlignButtons } from '@aktk/block-components/components/alignment-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

import type {
	ResponsiveTextAlignControlProps,
	ResponsiveTextAlignDevice,
	TextAlign,
} from './types';
import { updateResponsiveTextAlign } from './utils';

const ICON_SIZE = 20;

/**
 * デバイス別文字揃えコントロール.
 *
 * @param props コンポーネントプロパティ.
 * @return レスポンシブ文字揃えコントロール.
 */
export function ResponsiveTextAlignControl(
	props: ResponsiveTextAlignControlProps
) {
	const { id, label, onChange, value } = props;
	const renderDeviceControl = (
		device: ResponsiveTextAlignDevice,
		deviceLabel: string,
		icon: JSX.Element
	) => (
		<div
			className="aktk-responsive-text-align-control__device"
			role="group"
			aria-label={ deviceLabel }
		>
			{ icon }
			<TextAlignButtons
				value={ value?.[ device ] }
				onChange={ ( textAlign ) =>
					onChange(
						updateResponsiveTextAlign(
							value,
							device,
							textAlign as TextAlign | undefined
						)
					)
				}
			/>
		</div>
	);

	return (
		<BaseControl id={ id } label={ label }>
			<div className="aktk-responsive-text-align-control">
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
	ResponsiveTextAlign,
	ResponsiveTextAlignControlProps,
	ResponsiveTextAlignDevice,
	TextAlign,
} from './types';
export {
	hasResponsiveTextAlignValue,
	updateResponsiveTextAlign,
} from './utils';
