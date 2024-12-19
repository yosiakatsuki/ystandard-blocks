// @ts-nocheck
/**
 * WordPress.
 */
import { _x } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
/**
 * aktk
 */
import { UNITS_SIZE } from '@aktk/block-components/config';
/**
 * yStandard.
 */
import BoxControl from '@aktk/blocks-old/components/box-control';
import ResponsiveTab, {
	tabType,
} from '@aktk/blocks-old/components/responsive-tab';
import ResponsiveValuesInfo from '@aktk/blocks-old/components/responsive-values-info';
import {
	getResponsiveValue,
	parseResponsiveValues,
} from '@aktk/blocks/deprecated/utils/responsive';
import {
	getSpacingInfo,
	parseSpacing,
} from '@aktk/blocks/deprecated/utils/spacing';
import './_edit.scss';

/**
 * @param      props
 * @deprecated v3.12.0
 */
export const ResponsiveSpacing = ( props ) => {
	const { label, values, onChange, units, inputProps, splitOnAxis } = props;

	const _units = units ?? UNITS_SIZE;
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
		<BaseControl __nextHasNoMarginBottom>
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
											'ystandard-blocks'
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
											'ystandard-blocks'
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
											'ystandard-blocks'
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
