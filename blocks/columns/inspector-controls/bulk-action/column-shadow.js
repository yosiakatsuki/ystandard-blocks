import { BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import HorizonButtons from '@ystd/components/horizon-buttons';

const ColumnShadow = ( props ) => {
	const { updateBoxShadow } = props;
	const handleOnClick = ( value ) => {
		updateBoxShadow( {
			paddingType: value,
		} );
	};
	return (
		<BaseControl
			id={ 'padding' }
			label={ __( '内側余白', 'ystandard-blocks' ) }
		>
			<HorizonButtons>
				<Button
					key={ 'shadow-on' }
					isSecondary
					onClick={ () => {
						handleOnClick( true );
					} }
				>
					{ __( 'ON', 'ystandard-blocks' ) }
				</Button>
				<Button
					key={ 'shadow-off' }
					isSecondary
					onClick={ () => {
						handleOnClick( false );
					} }
				>
					{ __( 'OFF', 'ystandard-blocks' ) }
				</Button>
			</HorizonButtons>
		</BaseControl>
	);
};
export default ColumnShadow;
