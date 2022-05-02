import { camelCase } from 'lodash';
/**
 * WordPress.
 */
import { _x } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
/**
 * yStandard.
 */
import BoxControl from '@ystd/components/box-control';
import ResponsiveTab, { tabType } from '@ystd/components/responsive-tab';
import ResponsiveValuesInfo from '@ystd/components/responsive-values-info';
import { getComponentConfig } from '@ystd/helper/config';
import {
	getResponsiveValue,
	isResponsive,
	parseResponsiveValues,
} from '@ystd/helper/responsive';
import {
	getSpacingInfo,
	getSpacingProps,
	parseSpacing,
} from '@ystd/helper/spacing';
import { isObject, parseObject } from '@ystd/helper/object';
import { getGapProperty } from '@ystd/helper/gap.js';

const ResponsiveSpacing = ( props ) => {
	const { label, values, onChange, units, inputProps, splitOnAxis } = props;

	const _units = units ?? getComponentConfig( 'units' );
	const valueDesktop = getResponsiveValue( values, 'desktop' );
	const valueTablet = getResponsiveValue( values, 'tablet' );
	const valueMobile = getResponsiveValue( values, 'mobile' );

	const handleOnChangeDesktop = ( nextValues ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				desktop: parseSpacing( nextValues ),
			} )
		);
	};
	const handleOnChangeTablet = ( nextValues ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				tablet: parseSpacing( nextValues ),
			} )
		);
	};
	const handleOnChangeMobile = ( nextValues ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				mobile: parseSpacing( nextValues ),
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
								<div
									className={
										'ystd-responsive-spacing-box-control'
									}
								>
									<BoxControl
										label={ _x(
											'デスクトップ',
											'responsive-component',
											'ystandard-toolbox'
										) }
										values={ valueDesktop }
										onChange={ handleOnChangeDesktop }
										units={ _units }
										inputProps={ inputProps }
										splitOnAxis={ splitOnAxis }
									/>
								</div>
							) }
							{ tabType.tablet === tab.name && (
								<div
									className={
										'ystd-responsive-spacing-box-control'
									}
								>
									<BoxControl
										label={ _x(
											'タブレット',
											'responsive-component',
											'ystandard-toolbox'
										) }
										values={ valueTablet }
										onChange={ handleOnChangeTablet }
										units={ _units }
										inputProps={ inputProps }
										splitOnAxis={ splitOnAxis }
									/>
								</div>
							) }
							{ tabType.mobile === tab.name && (
								<div
									className={
										'ystd-responsive-spacing-box-control'
									}
								>
									<BoxControl
										label={ _x(
											'モバイル',
											'responsive-component',
											'ystandard-toolbox'
										) }
										values={ valueMobile }
										onChange={ handleOnChangeMobile }
										units={ _units }
										inputProps={ inputProps }
										splitOnAxis={ splitOnAxis }
									/>
								</div>
							) }
						</>
					);
				} }
			</ResponsiveTab>
			<ResponsiveValuesInfo
				desktop={ getSpacingInfo( valueDesktop ) }
				tablet={ getSpacingInfo( valueTablet ) }
				mobile={ getSpacingInfo( valueMobile ) }
				style={ { marginTop: 0 } }
			/>
		</BaseControl>
	);
};
export default ResponsiveSpacing;

const getCustomProperty = (
	value,
	device,
	_isResponsive = true,
	suffix = ''
) => {
	const prefix = '--ystdb';
	const _suffix = suffix ? `-${ suffix }` : '';
	if ( ! isObject( value ) ) {
		return undefined;
	}
	let result = {};
	Object.keys( value ).map( ( key ) => {
		const propertyName = _isResponsive
			? `${ prefix }-${ key }${ _suffix }-${ device }`
			: camelCase( key );
		result = {
			...result,
			[ propertyName ]: value[ key ],
		};
		return true;
	} );
	return result;
};

const getResponsiveSpacingCustomProperty = ( value, suffix = '' ) => {
	if ( ! isObject( value ) ) {
		return undefined;
	}
	return {
		...getCustomProperty(
			value?.desktop,
			'desktop',
			isResponsive( value ),
			suffix
		),
		...getCustomProperty(
			value?.tablet,
			'tablet',
			isResponsive( value ),
			suffix
		),
		...getCustomProperty(
			value?.mobile,
			'mobile',
			isResponsive( value ),
			suffix
		),
	};
};

const getResponsiveGapCustomProperty = ( value, suffix = '' ) => {
	if ( ! isObject( value ) ) {
		return undefined;
	}
	return {
		...getCustomProperty(
			getGapProperty( value?.desktop ),
			'desktop',
			isResponsive( value ),
			suffix
		),
		...getCustomProperty(
			getGapProperty( value?.tablet ),
			'tablet',
			isResponsive( value ),
			suffix
		),
		...getCustomProperty(
			getGapProperty( value?.mobile ),
			'mobile',
			isResponsive( value ),
			suffix
		),
	};
};

export const getResponsiveSpacingStyle = ( type, values, suffix = '' ) => {
	const parsedValue = parseResponsiveValues( {
		desktop: getSpacingProps( type, values?.desktop ),
		tablet: getSpacingProps( type, values?.tablet ),
		mobile: getSpacingProps( type, values?.mobile ),
	} );

	return parseObject(
		getResponsiveSpacingCustomProperty( parsedValue, suffix )
	);
};
export const getResponsiveGapStyle = ( values, suffix = '' ) => {
	return parseObject( getResponsiveGapCustomProperty( values, suffix ) );
};
export const getResponsivePaddingStyle = ( values, suffix = '' ) => {
	return getResponsiveSpacingStyle( 'padding', values, suffix );
};
export const getResponsiveMarginStyle = ( values, suffix = '' ) => {
	return getResponsiveSpacingStyle( 'margin', values, suffix );
};
