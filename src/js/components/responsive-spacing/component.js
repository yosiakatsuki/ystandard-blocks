// @ts-nocheck
/**
 * WordPress.
 */
import { _x } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
/**
 * yStandard.
 */
import BoxControl from '@aktk/components/box-control';
import ResponsiveTab, { tabType } from '@aktk/components/responsive-tab';
import ResponsiveValuesInfo from '@aktk/components/responsive-values-info';
import { getComponentConfig } from '@aktk/helper/config';
import {
	getResponsiveValue,
	parseResponsiveValues,
} from '@aktk/helper/responsive';
import { getSpacingInfo, parseSpacing } from '@aktk/helper/spacing';

/**
 * @deprecated v3.12.0
 */
export const ResponsiveSpacing = (props) => {
	const { label, values, onChange, units, inputProps, splitOnAxis } = props;

	const _units = units ?? getComponentConfig('units');
	const valueDesktop = getResponsiveValue(values, 'desktop');
	const valueTablet = getResponsiveValue(values, 'tablet');
	const valueMobile = getResponsiveValue(values, 'mobile');

	const handleOnChangeDesktop = (nextValues) => {
		onChange(
			parseResponsiveValues({
				...values,
				desktop: parseSpacing(nextValues),
			})
		);
	};
	const handleOnChangeTablet = (nextValues) => {
		onChange(
			parseResponsiveValues({
				...values,
				tablet: parseSpacing(nextValues),
			})
		);
	};
	const handleOnChangeMobile = (nextValues) => {
		onChange(
			parseResponsiveValues({
				...values,
				mobile: parseSpacing(nextValues),
			})
		);
	};
	return (
		<BaseControl>
			<ResponsiveTab label={label}>
				{(tab) => {
					return (
						<>
							{tabType.desktop === tab.name && (
								<div
									className={
										'ystd-responsive-spacing-box-control'
									}
								>
									<BoxControl
										label={_x(
											'デスクトップ',
											'responsive-component',
											'ystandard-toolbox'
										)}
										values={valueDesktop}
										onChange={handleOnChangeDesktop}
										units={_units}
										inputProps={inputProps}
										splitOnAxis={splitOnAxis}
									/>
								</div>
							)}
							{tabType.tablet === tab.name && (
								<div
									className={
										'ystd-responsive-spacing-box-control'
									}
								>
									<BoxControl
										label={_x(
											'タブレット',
											'responsive-component',
											'ystandard-toolbox'
										)}
										values={valueTablet}
										onChange={handleOnChangeTablet}
										units={_units}
										inputProps={inputProps}
										splitOnAxis={splitOnAxis}
									/>
								</div>
							)}
							{tabType.mobile === tab.name && (
								<div
									className={
										'ystd-responsive-spacing-box-control'
									}
								>
									<BoxControl
										label={_x(
											'モバイル',
											'responsive-component',
											'ystandard-toolbox'
										)}
										values={valueMobile}
										onChange={handleOnChangeMobile}
										units={_units}
										inputProps={inputProps}
										splitOnAxis={splitOnAxis}
									/>
								</div>
							)}
						</>
					);
				}}
			</ResponsiveTab>
			<ResponsiveValuesInfo
				desktop={getSpacingInfo(valueDesktop)}
				tablet={getSpacingInfo(valueTablet)}
				mobile={getSpacingInfo(valueMobile)}
				style={{ marginTop: 0 }}
			/>
		</BaseControl>
	);
};
