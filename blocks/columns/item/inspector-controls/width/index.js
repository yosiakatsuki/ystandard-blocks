/**
 * WordPress.
 */
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsiveValues from '@ystd/components/responsive-values';

const PanelWidth = ( { attributes, setAttributes } ) => {
	const { width } = attributes;
	const handleWidthOnChange = ( value ) => {
		setAttributes( {
			width: value,
		} );
	};
	return (
		<PanelBody title={ __( 'カラムサイズ設定', 'ystandard-blocks' ) }>
			<ResponsiveValues
				label={ __( 'カラム幅', 'ystandard-blocks' ) }
				values={ width }
				onChange={ handleWidthOnChange }
			/>
		</PanelBody>
	);
};

export default PanelWidth;
