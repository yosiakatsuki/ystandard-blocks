/**
 * WordPress
 */
import { BaseControl, ToggleControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsiveTab, { tabType } from '@ystd/components/responsive-tab';
import {
	getResponsiveValue,
	parseResponsiveValues,
} from '@ystd/helper/responsive';
import ResponsiveValuesInfo from '@ystd/components/responsive-values-info';

const ResponsiveToggle = ( {
	panelLabel,
	toggleLabel,
	values,
	onChange,
	valuesInfoLabel = undefined,
} ) => {
	const _valuesInfoLabel =
		valuesInfoLabel ?? _x( 'ON', 'responsive-toggle', 'ystandard-blocks' );
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
			<ResponsiveTab label={ panelLabel }>
				{ ( tab ) => {
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
				} }
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
