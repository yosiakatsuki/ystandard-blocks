import { PanelBody, BaseControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PanelGap = ( { attributes, setAttributes } ) => {
	const { removeMargin } = attributes;
	const handleOnChange = () => {
		setAttributes( {
			removeMargin: ! removeMargin,
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
		</PanelBody>
	);
};
export default PanelGap;
