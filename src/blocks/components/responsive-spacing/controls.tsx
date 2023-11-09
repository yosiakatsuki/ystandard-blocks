/**
 * WordPress dependencies.
 */
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies
 */
import {
	SpacingCustomAxialSizeControl,
	SpacingValue,
} from '@aktk/blocks/components/spacing-size-control';

/**
 * Internal dependencies
 */
import type { ResponsiveSpacing } from './types';

export interface ResponsiveSpacingControlProps {
	label?: string;
	onChange: (value: ResponsiveSpacing | undefined) => void;
	values?: ResponsiveSpacing;
}

export function ResponsiveSpacingControl(props: ResponsiveSpacingControlProps) {
	const { label, onChange, values } = props;

	const handleOnDesktopChange = (value: SpacingValue | undefined) => {
		onChange({
			...values,
			desktop: value,
		});
	};
	const handleOnTabletChange = (value: SpacingValue | undefined) => {
		onChange({
			...values,
			tablet: value,
		});
	};
	const handleOnMobileChange = (value: SpacingValue | undefined) => {
		onChange({
			...values,
			mobile: value,
		});
	};

	return (
		<div className="flex flex-col gap-4">
			<div>
				<span className="flex gap-1 items-center">
					<Icon icon="desktop" size={11} />
					<div className="text-[11px]">
						{__('デスクトップ', 'ystandard-blocks')}
					</div>
				</span>
				<SpacingCustomAxialSizeControl
					label={label}
					onChange={handleOnDesktopChange}
					value={values?.desktop}
				/>
			</div>
			<div>
				<span className="flex gap-1 items-center">
					<Icon icon="tablet" size={11} />
					<div className="text-[11px]">
						{__('タブレット', 'ystandard-blocks')}
					</div>
				</span>
				<SpacingCustomAxialSizeControl
					label={label}
					onChange={handleOnTabletChange}
					value={values?.tablet}
				/>
			</div>
			<div>
				<span className="flex gap-1 items-center">
					<Icon icon="smartphone" size={11} />
					<div className="text-[11px]">
						{__('スマートフォン', 'ystandard-blocks')}
					</div>
				</span>
				<SpacingCustomAxialSizeControl
					label={label}
					onChange={handleOnMobileChange}
					value={values?.mobile}
				/>
			</div>
		</div>
	);
}
