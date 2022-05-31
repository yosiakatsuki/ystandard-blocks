import { PanelBody } from '@wordpress/components';
import ResponsiveGapControl from '@aktk/controls/responsive-gap-control';
import { __ } from '@wordpress/i18n';

const PanelGap = ( { attributes, setAttributes } ) => {
	const { gap } = attributes;
	const handleGapOnChange = ( newValue ) => {
		setAttributes( {
			gap: newValue,
		} );
	};
	return (
		<PanelBody title={ __( 'カラム間余白', 'ystandard-blocks' ) }>
			<ResponsiveGapControl
				label={ __( 'カラム間の余白(gap)', 'ystandard-blocks' ) }
				onChange={ handleGapOnChange }
				values={ gap }
			/>
		</PanelBody>
	);
};
export default PanelGap;
