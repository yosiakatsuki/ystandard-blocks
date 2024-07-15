// @ts-nocheck
/**
 * WordPress
 */
import { BaseControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';
/**
 * yStandard
 */
import ResponsiveTab, { tabType } from '@aktk/components/responsive-tab';
import { getComponentConfig } from '@aktk/helper/config';
import {
	getResponsiveValue,
	parseResponsiveValues,
} from '@aktk/helper/responsive';
import UnitControl from '@aktk/components/unit-control';
import ResponsiveValuesInfo from '@aktk/components/responsive-values-info';
import ButtonReset from '@aktk/components/button-reset';
import { Flex } from '@aktk/components/flex';

export const ResponsiveValues = ( {
	label,
	values,
	onChange,
	units = undefined,
} ) => {
	const _units = units ?? getComponentConfig( 'units' );
	const valueDesktop = getResponsiveValue( values, 'desktop' );
	const valueTablet = getResponsiveValue( values, 'tablet' );
	const valueMobile = getResponsiveValue( values, 'mobile' );

	const handleOnChangeDesktop = ( value ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				desktop: value || undefined,
			} )
		);
	};
	const handleOnChangeTablet = ( value ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				tablet: value || undefined,
			} )
		);
	};
	const handleOnChangeMobile = ( value ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				mobile: value || undefined,
			} )
		);
	};
	return (
		<BaseControl>
			<ResponsiveTab label={ label }>
				{ ( tab ) => {
					return (
						<>
							{ tabType.desktop === tab.name && (
								<Flex isGapSmall alignBottom>
									<UnitControl
										className={
											'ystd-responsive-values-unit-control'
										}
										label={ _x(
											'デスクトップ',
											'responsive-component',
											'ystandard-toolbox'
										) }
										value={ valueDesktop }
										onChange={ handleOnChangeDesktop }
										units={ _units }
									/>
									<ButtonReset
										isDisable={ ! valueDesktop }
										onClick={ () => {
											handleOnChangeDesktop( undefined );
										} }
									/>
								</Flex>
							) }
							{ tabType.tablet === tab.name && (
								<Flex isGapSmall alignBottom>
									<UnitControl
										className={
											'ystd-responsive-values-unit-control'
										}
										label={ _x(
											'タブレット',
											'responsive-component',
											'ystandard-toolbox'
										) }
										value={ valueTablet }
										onChange={ handleOnChangeTablet }
										units={ _units }
									/>
									<ButtonReset
										isDisable={ ! valueTablet }
										onClick={ () => {
											handleOnChangeTablet( undefined );
										} }
									/>
								</Flex>
							) }
							{ tabType.mobile === tab.name && (
								<Flex isGapSmall alignBottom>
									<UnitControl
										className={
											'ystd-responsive-values-unit-control'
										}
										label={ _x(
											'モバイル',
											'responsive-component',
											'ystandard-toolbox'
										) }
										value={ valueMobile }
										onChange={ handleOnChangeMobile }
										units={ _units }
									/>
									<ButtonReset
										isDisable={ ! valueMobile }
										onClick={ () => {
											handleOnChangeMobile( undefined );
										} }
									/>
								</Flex>
							) }
						</>
					);
				} }
			</ResponsiveTab>
			<ResponsiveValuesInfo
				desktop={ valueDesktop }
				tablet={ valueTablet }
				mobile={ valueMobile }
			/>
		</BaseControl>
	);
};
