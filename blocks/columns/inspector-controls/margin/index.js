import { PanelBody } from '@wordpress/components';
import ResponsiveMarginControl from '@ystd/controls/responsive-margin-control';
import { __ } from '@wordpress/i18n';

const PanelMargin = ( { attributes, setAttributes } ) => {
	const { margin } = attributes;
	const handleMarginOnChange = ( newValue ) => {
		setAttributes( {
			margin: newValue,
		} );
	};
	return (
		<PanelBody title={ __( '余白', 'ystandard-blocks' ) }>
			<ResponsiveMarginControl
				label={ __( '外側余白(margin)', 'ystandard-blocks' ) }
				onChange={ handleMarginOnChange }
				values={ margin }
			/>
		</PanelBody>
	);
};
export default PanelMargin;
