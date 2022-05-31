/**
 * WordPress.
 */
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import ResponsivePaddingControl from '@aktk/controls/responsive-padding-control';

const PanelPadding = ( { attributes, setAttributes } ) => {
	const { padding } = attributes;
	const handlePaddingOnChange = ( value ) => {
		setAttributes( {
			padding: value,
		} );
	};
	return (
		<PanelBody title={ __( '余白設定', 'ystandard-blocks' ) }>
			<ResponsivePaddingControl
				values={ padding }
				onChange={ handlePaddingOnChange }
			/>
		</PanelBody>
	);
};
export default PanelPadding;
