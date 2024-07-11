/**
 * WordPress.
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/**
 * yStandard.
 */
import ResponsivePaddingControl from '@aktk/blocks/deprecated/components/responsive-padding-control';

// @ts-ignore
const ColumnPadding = ( props ) => {
	const { updateColumnAttributes } = props;
	const [ padding, setPadding ] = useState();
	// @ts-ignore
	const handlePaddingOnChange = ( value ) => {
		updateColumnAttributes( {
			padding: value,
		} );
		setPadding( value );
	};
	return (
		<ResponsivePaddingControl
			label={ __( '内側余白(padding)', 'ystandard-blocks' ) }
			values={ padding }
			onChange={ handlePaddingOnChange }
		/>
	);
};
export default ColumnPadding;
