/**
 * WordPress.
 */
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsiveValues from '@ystd/components/responsive-values';

const Width = ( { attributes, setAttributes } ) => {
	const { width } = attributes;
	const handleWidthOnChange = ( value ) => {
		setAttributes( {
			width: value,
		} );
	};
	return (
		<ResponsiveValues
			label={ __( 'カラム幅', 'ystandard-blocks' ) }
			values={ width }
			onChange={ handleWidthOnChange }
		/>
	);
};

export default Width;
