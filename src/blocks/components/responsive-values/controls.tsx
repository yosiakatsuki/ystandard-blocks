import classnames from 'classnames';

/**
 * @WordPress dependencies.
 */
import {
	Button,
	__experimentalUnitControl as WPUnitControl,
	Icon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import type { ResponsiveValues, ResponsiveValuesUnit } from './types';
import { parseResponsiveValues } from './utils';

interface ResponsiveValuesControlProps {
	label?: string;
	labelClassName?: string;
	values?: ResponsiveValues;
	onChange?: (values?: ResponsiveValues) => void;
	hasPadding?: boolean;
	units?: ResponsiveValuesUnit[];
}

export function ResponsiveValuesControl(props: ResponsiveValuesControlProps) {
	const {
		label,
		values = {},
		onChange,
		hasPadding = false,
		labelClassName,
		units,
	} = props;
	const wrapClasses = classnames({
		'py-2': hasPadding,
	});
	const labelClasses = classnames('font-bold mb-2', labelClassName);

	const handleOnClear = () => {
		onChange?.(undefined);
	};

	return (
		<div className={wrapClasses}>
			{label && <div className={labelClasses}>{label}</div>}
			<div className="flex gap-2 mb-2">
				<div className="flex gap-1 items-center">
					<Icon icon="desktop" size={14} />
					<WPUnitControl
						className="mb-0"
						value={values?.desktop}
						onChange={(value) => {
							const newValues = {
								...values,
								desktop: value || undefined,
							};
							onChange?.(parseResponsiveValues(newValues));
						}}
						units={units}
					/>
				</div>
				<div className="flex gap-1 items-center">
					<Icon icon="tablet" size={14} />
					<WPUnitControl
						className="mb-0"
						value={values?.tablet}
						onChange={(value) => {
							const newValues = {
								...values,
								tablet: value || undefined,
							};
							onChange?.(parseResponsiveValues(newValues));
						}}
						units={units}
					/>
				</div>
				<div className="flex gap-1 items-center">
					<Icon icon="smartphone" size={14} />
					<WPUnitControl
						className="mb-0"
						value={values?.mobile}
						onChange={(value) => {
							const newValues = {
								...values,
								mobile: value || undefined,
							};
							onChange?.(parseResponsiveValues(newValues));
						}}
						units={units}
					/>
				</div>
			</div>
			<Button
				variant={'secondary'}
				isSmall
				className={'w-full justify-center'}
				onClick={handleOnClear}
			>
				{__('すべてクリア', 'ystandard-blocks')}
			</Button>
		</div>
	);
}
