/**
 * WordPress.
 */
import { _x } from '@wordpress/i18n';
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
		<>
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
		</>
	);
};
export default ResponsiveSpacing;

const getResponsiveSpacingCustomProperty = ( value, suffix = '' ) => {
	const prefix = '--ystdb';
	const _suffix = suffix ? `-${ suffix }` : '';
	if ( ! value || 'object' !== typeof value ) {
		return undefined;
	}
	const getProperty = ( spacing, device, _isResponsive = true ) => {
		if ( ! spacing || 'object' !== typeof spacing ) {
			return undefined;
		}
		let result = {};
		Object.keys( spacing ).map( ( key ) => {
			const propertyName = _isResponsive
				? `${ prefix }-${ key }${ _suffix }-${ device }`
				: key;
			result = {
				...result,
				[ propertyName ]: spacing[ key ],
			};
			return true;
		} );
		return result;
	};
	return {
		...getProperty( value?.desktop, 'desktop', isResponsive( value ) ),
		...getProperty( value?.tablet, 'tablet' ),
		...getProperty( value?.mobile, 'mobile' ),
	};
};

const getResponsiveGapCustomProperty = ( value, suffix = '' ) => {
	const prefix = '--ystdb';
	const _suffix = suffix ? `-${ suffix }` : '';
	if ( ! isObject( value ) ) {
		return undefined;
	}
	const _isResponsive = isResponsive( value );
	const getProperty = ( gap, device ) => {
		if ( ! isObject( gap ) ) {
			return undefined;
		}
		const parsedGap = getGapProperty( gap );
		let result = {};
		Object.keys( parsedGap ).map( ( key ) => {
			const propertyName = _isResponsive
				? `${ prefix }-${ key }${ _suffix }-${ device }`
				: key;
			result = {
				...result,
				[ propertyName ]: parsedGap[ key ],
			};
			return true;
		} );

		return result;
	};
	return {
		...getProperty( value?.desktop, 'desktop' ),
		...getProperty( value?.tablet, 'tablet' ),
		...getProperty( value?.mobile, 'mobile' ),
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
