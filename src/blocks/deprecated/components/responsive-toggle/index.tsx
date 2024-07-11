/**
 * WordPress
 */
import { BaseControl, ToggleControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsiveTab, {
	tabType,
} from '@aktk/blocks/deprecated/components/responsive-tab';
import {
	getResponsiveValue,
	parseResponsiveValues,
} from '@aktk/blocks/deprecated/utils/responsive';
import ResponsiveValuesInfo from '@aktk/blocks/deprecated/components/responsive-values-info';

/**
 * @param      root0
 * @param      root0.panelLabel
 * @param      root0.toggleLabel
 * @param      root0.values
 * @param      root0.onChange
 * @param      root0.valuesInfoLabel
 * @deprecated 置き換え予定
 */
const ResponsiveToggle = ( {
	// @ts-ignore
	panelLabel,
	// @ts-ignore
	toggleLabel,
	// @ts-ignore
	values,
	// @ts-ignore
	onChange,
	valuesInfoLabel = undefined,
} ) => {
	const _valuesInfoLabel =
		valuesInfoLabel ?? _x( 'ON', 'responsive-toggle', 'ystandard-blocks' );
	const valueDesktop = getResponsiveValue( values, 'desktop' );
	const valueTablet = getResponsiveValue( values, 'tablet' );
	const valueMobile = getResponsiveValue( values, 'mobile' );
	// @ts-ignore
	const handleOnChangeDesktop = ( value ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				desktop: value || undefined,
			} )
		);
	};
	// @ts-ignore
	const handleOnChangeTablet = ( value ) => {
		onChange(
			parseResponsiveValues( {
				...values,
				tablet: value || undefined,
			} )
		);
	};
	// @ts-ignore
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
			{ /* @ts-ignore */ }
			<ResponsiveTab label={ panelLabel }>
				{
					// @ts-ignore
					( tab ) => {
						return (
							<>
								{ tabType.desktop === tab.name && (
									<ToggleControl
										label={ toggleLabel }
										checked={ !! valueDesktop }
										onChange={ ( value ) => {
											handleOnChangeDesktop( value );
										} }
									/>
								) }
								{ tabType.tablet === tab.name && (
									<ToggleControl
										label={ toggleLabel }
										checked={ !! valueTablet }
										onChange={ ( value ) => {
											handleOnChangeTablet( value );
										} }
									/>
								) }
								{ tabType.mobile === tab.name && (
									<ToggleControl
										label={ toggleLabel }
										checked={ !! valueMobile }
										onChange={ ( value ) => {
											handleOnChangeMobile( value );
										} }
									/>
								) }
							</>
						);
					}
				}
			</ResponsiveTab>
			<ResponsiveValuesInfo
				desktop={ !! valueDesktop ? _valuesInfoLabel : undefined }
				tablet={ !! valueTablet ? _valuesInfoLabel : undefined }
				mobile={ !! valueMobile ? _valuesInfoLabel : undefined }
			/>
		</BaseControl>
	);
};
export default ResponsiveToggle;
