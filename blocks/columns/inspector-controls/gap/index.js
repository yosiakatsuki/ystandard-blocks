import { PanelBody, BaseControl, ToggleControl } from '@wordpress/components';
import ResponsiveGapControl from '@ystd/controls/responsive-gap-control';
import { __ } from '@wordpress/i18n';

const PanelGap = ( { attributes, setAttributes } ) => {
	const { removeMargin, gap } = attributes;
	const handleOnChange = () => {
		setAttributes( {
			removeMargin: ! removeMargin,
		} );
	};
	const handleGapOnChange = ( newValue ) => {
		setAttributes( {
			gap: newValue,
		} );
	};
	return (
		<PanelBody title={ __( 'カラム間余白', 'ystandard-blocks' ) }>
			<BaseControl>
				<ToggleControl
					label={ __( 'カラム間の余白を削除', 'ystandard-blocks' ) }
					checked={ removeMargin }
					onChange={ handleOnChange }
				/>
			</BaseControl>
			<ResponsiveGapControl
				label={ __( 'カラム間の余白(gap)', 'ystandard-blocks' ) }
				onChange={ handleGapOnChange }
				values={ gap }
			/>
		</PanelBody>
	);
};
export default PanelGap;
