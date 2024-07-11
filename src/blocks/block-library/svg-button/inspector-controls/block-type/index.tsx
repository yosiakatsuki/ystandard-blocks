/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	PanelBody,
	RadioControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

// @ts-ignore
export function BlockType( props ) {
	const { setAttributes, attributes } = props;

	const {
		buttonBlockDesktop,
		buttonBlockTablet,
		buttonBlockMobile,
		maxWidth,
		maxUnit,
	} = attributes;

	const maxWidthUnitMaximum = 'px' === maxUnit ? 1200 : 100;
	const maxWidthValue = '%' === maxUnit && 100 < maxWidth ? 100 : maxWidth;

	return (
		<>
			<PanelBody title={ __( 'ブロックタイプ設定', 'ystandard-blocks' ) }>
				<BaseControl id={ 'desktop' }>
					<ToggleControl
						label={ __( 'デスクトップ', 'ystandard-blocks' ) }
						onChange={ () => {
							setAttributes( {
								buttonBlockDesktop: ! buttonBlockDesktop,
							} );
						} }
						checked={ buttonBlockDesktop }
					/>
					<ToggleControl
						label={ __( 'タブレット', 'ystandard-blocks' ) }
						onChange={ () => {
							setAttributes( {
								buttonBlockTablet: ! buttonBlockTablet,
							} );
						} }
						checked={ buttonBlockTablet }
					/>
					<ToggleControl
						label={ __( 'モバイル', 'ystandard-blocks' ) }
						onChange={ () => {
							setAttributes( {
								buttonBlockMobile: ! buttonBlockMobile,
							} );
						} }
						checked={ buttonBlockMobile }
					/>
				</BaseControl>
				{ ( buttonBlockDesktop ||
					buttonBlockTablet ||
					buttonBlockMobile ) && (
					<BaseControl id={ 'button-size' }>
						<RangeControl
							value={ maxWidthValue }
							label={ __( 'ボタン最大幅', 'ystandard-blocks' ) }
							min={ 0 }
							max={ maxWidthUnitMaximum }
							initialPosition={ 100 }
							allowReset
							onChange={ ( value ) => {
								setAttributes( { maxWidth: value } );
							} }
						/>
						<RadioControl
							label={ __( '最大幅単位', 'ystandard-blocks' ) }
							selected={ maxUnit }
							options={ [
								{
									label: __( '%', 'ystandard-blocks' ),
									value: '%',
								},
								{
									label: __( 'px', 'ystandard-blocks' ),
									value: 'px',
								},
							] }
							onChange={ ( option ) => {
								setAttributes( { maxUnit: option } );
							} }
						/>
					</BaseControl>
				) }
			</PanelBody>
		</>
	);
}
