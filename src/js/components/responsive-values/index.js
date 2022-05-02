import { camelCase } from 'lodash';
/**
 * WordPress
 */
import { BaseControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';
/**
 * yStandard
 */
import ResponsiveTab, { tabType } from '@ystd/components/responsive-tab';
import { getComponentConfig } from '@ystd/helper/config';
import {
	getResponsiveValue,
	isResponsive,
	parseResponsiveValues,
} from '@ystd/helper/responsive';
import UnitControl from '@ystd/components/unit-control';
import ResponsiveValuesInfo from '@ystd/components/responsive-values-info';
import ButtonReset from '@ystd/components/button-reset';
import { Flex } from '@ystd/components/flex';
import { isObject, parseObject } from '@ystd/helper/object.js';

const ResponsiveValues = ( { label, values, onChange, units = undefined } ) => {
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
export default ResponsiveValues;

const getCustomProperties = ( propertyName, values, suffix = '' ) => {
	const prefix = '--ystdb';
	const _suffix = suffix ? `-${ suffix }` : '';
	if ( ! isObject( values ) ) {
		return undefined;
	}
	if ( ! isResponsive( values ) ) {
		return { [ camelCase( propertyName ) ]: values?.desktop };
	}
	let result = {};
	Object.keys( values ).map( ( key ) => {
		const _propertyName = `${ prefix }-${ propertyName }${ _suffix }-${ key }`;
		result = {
			...result,
			[ _propertyName ]: values[ key ],
		};
		return true;
	} );
	return result;
};

export const getResponsiveValueStyle = (
	propertyName,
	values,
	suffix = ''
) => {
	const parsedValue = parseResponsiveValues( {
		desktop: values?.desktop,
		tablet: values?.tablet,
		mobile: values?.mobile,
	} );
	return parseObject(
		getCustomProperties( propertyName, parsedValue, suffix )
	);
};

export const getResponsiveWidthStyle = ( values, suffix = '' ) => {
	return getResponsiveValueStyle( 'width', values, suffix );
};
export const getResponsiveHeightStyle = ( values, suffix = '' ) => {
	return getResponsiveValueStyle( 'height', values, suffix );
};
