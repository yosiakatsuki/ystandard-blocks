/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, PanelBody } from '@wordpress/components';
/**
 * Plugin dependencies.
 */
import ResponsiveDeprecatedFontSizeControl from '@aktk/blocks/deprecated/components/responsive-font-size';
import { toNumber } from '@aktk/blocks/utils/number';

// @ts-ignore
export function FontSize( props ) {
	const { fontSize, setFontSize, setAttributes, attributes } = props;

	const {
		fontSizeDesktop,
		fontSizeTablet,
		fontSizeMobile,
		isFontSizeResponsive,
	} = attributes;

	return (
		<>
			<PanelBody title={ __( '文字設定', 'ystandard-blocks' ) }>
				<BaseControl id={ 'font-size' }>
					{ /* @ts-ignore */ }
					<ResponsiveDeprecatedFontSizeControl
						id={ 'font-size' }
						useResponsive={ isFontSizeResponsive }
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
											  } ),
									fontSizeTablet:
										! fontSizeTablet && fontSize.size
											? fontSize.size
											: toNumber( fontSizeDesktop, {
													min: 0,
													max: 200,
											  } ),
									fontSizeMobile:
										! fontSizeMobile && fontSize.size
											? fontSize.size
											: toNumber( fontSizeDesktop, {
													min: 0,
													max: 200,
											  } ),
								} );
							}
							setAttributes( {
								isFontSizeResponsive: value,
							} );
						} }
						desktopValue={ fontSizeDesktop }
						desktopOnChange={ ( value ) => {
							setAttributes( {
								fontSizeDesktop: toNumber( value, {
									min: 0,
									max: 200,
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
								} ),
							} )
						}
						mobileUnit={ 'px' }
					/>
				</BaseControl>
			</PanelBody>
		</>
	);
}
