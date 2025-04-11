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
export function FontSize( props ) {
	const { fontSize, setFontSize, attributes, setAttributes } = props;
	const {
		useFontSizeResponsive,
		fontSizeDesktop,
		fontSizeTablet,
		fontSizeMobile,
	} = attributes;

	return (
		<BaseControl
			id={ 'font-size' }
			label={ __( '文字サイズ', 'ystandard-blocks' ) }
		>
			<ResponsiveDeprecatedFontSizeControl
				id={ 'font-size' }
				useResponsive={ useFontSizeResponsive }
				fontSize={ fontSize }
				onChangeFontSizePicker={ ( font ) => {
					setFontSize( font );
				} }
				changeResponsiveMode={ ( value ) => {
					if ( value ) {
						setAttributes( {
							fontSizeDesktop:
								! fontSizeDesktop && fontSize.size
									? fontSize.size
									: toNumber( fontSizeDesktop, {
											min: 0,
											max: 200,
											default: undefined,
									  } ),
							fontSizeTablet:
								! fontSizeTablet && fontSize.size
									? fontSize.size
									: toNumber( fontSizeTablet, {
											min: 0,
											max: 200,
											default: undefined,
									  } ),
							fontSizeMobile:
								! fontSizeMobile && fontSize.size
									? fontSize.size
									: toNumber( fontSizeMobile, {
											min: 0,
											max: 200,
											default: undefined,
									  } ),
						} );
					}
					setAttributes( { useFontSizeResponsive: value } );
				} }
				desktopValue={ fontSizeDesktop }
				desktopOnChange={ ( value ) => {
					setAttributes( {
						fontSizeDesktop: toNumber( value, {
							min: 0,
							max: 200,
							default: undefined,
						} ),
					} );
				} }
				desktopUnit={ 'px' }
				tabletValue={ fontSizeTablet }
				tabletOnChange={ ( value ) =>
					setAttributes( {
						fontSizeTablet: toNumber( value, {
							min: 0,
							max: 200,
							default: undefined,
						} ),
					} )
				}
				tabletUnit={ 'px' }
				mobileValue={ fontSizeMobile }
				mobileOnChange={ ( value ) =>
					setAttributes( {
						fontSizeMobile: toNumber( value, {
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
