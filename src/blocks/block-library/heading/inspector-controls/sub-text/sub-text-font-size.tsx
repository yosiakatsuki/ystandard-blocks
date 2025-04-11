/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies
 */
import { toNumber } from '@aktk/block-components/utils/number';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

/**
 * Plugin dependencies.
 */
import ResponsiveDeprecatedFontSizeControl from '@aktk/blocks/deprecated/components/responsive-font-size';

// @ts-ignore
export function SubTextFontSize( props ) {
	const { subTextSize, setSubTextSize, attributes, setAttributes } = props;
	const {
		useSubTextSizeResponsive,
		subTextSizeMobile,
		subTextSizeTablet,
		subTextSizeDesktop,
	} = attributes;

	return (
		<BaseControl
			id={ 'sub-text-font-size' }
			label={ __( '文字サイズ', 'ystandard-blocks' ) }
		>
			<ResponsiveDeprecatedFontSizeControl
				id={ 'font-size' }
				useResponsive={ useSubTextSizeResponsive }
				fontSize={ subTextSize }
				onChangeFontSizePicker={ ( font ) => {
					setSubTextSize( font );
				} }
				changeResponsiveMode={ ( value ) => {
					if ( value ) {
						setAttributes( {
							subTextSizeDesktop:
								! subTextSizeDesktop && subTextSize.size
									? subTextSize.size
									: toNumber( subTextSizeDesktop, {
											min: 0,
											max: 200,
											default: undefined,
									  } ),
							subTextSizeTablet:
								! subTextSizeTablet && subTextSize.size
									? subTextSize.size
									: toNumber( subTextSizeTablet, {
											min: 0,
											max: 200,
											default: undefined,
									  } ),
							subTextSizeMobile:
								! subTextSizeMobile && subTextSize.size
									? subTextSize.size
									: toNumber( subTextSizeMobile, {
											min: 0,
											max: 200,
											default: undefined,
									  } ),
						} );
					}
					setAttributes( { useSubTextSizeResponsive: value } );
				} }
				desktopValue={ subTextSizeDesktop }
				desktopOnChange={ ( value ) => {
					setAttributes( {
						subTextSizeDesktop: toNumber( value, {
							min: 0,
							max: 200,
							default: undefined,
						} ),
					} );
				} }
				desktopUnit={ 'px' }
				tabletValue={ subTextSizeTablet }
				tabletOnChange={ ( value ) =>
					setAttributes( {
						subTextSizeTablet: toNumber( value, {
							min: 0,
							max: 200,
							default: undefined,
						} ),
					} )
				}
				tabletUnit={ 'px' }
				mobileValue={ subTextSizeMobile }
				mobileOnChange={ ( value ) =>
					setAttributes( {
						subTextSizeMobile: toNumber( value, {
							min: 0,
							max: 200,
							default: undefined,
						} ),
					} )
				}
				mobileUnit={ 'px' }
			/>
		</BaseControl>
	);
}
