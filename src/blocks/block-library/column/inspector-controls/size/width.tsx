/**
 * WordPress.
 */
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsiveValues from '@aktk/blocks/deprecated/components/responsive-values';

// @ts-ignore
const Width = ( { attributes, setAttributes } ) => {
	const { width } = attributes;
	// @ts-ignore
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
