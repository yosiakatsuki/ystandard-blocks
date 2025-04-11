import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import HorizonButtons from '@aktk/blocks-old/components/horizon-buttons';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-ignore
const ColumnShadow = ( props ) => {
	const { updateColumnAttributes } = props;
	// @ts-ignore
	const handleOnClick = ( value ) => {
		updateColumnAttributes( {
			shadow: value,
		} );
	};
	return (
		<BaseControl id={ 'shadow' } label={ __( '影', 'ystandard-blocks' ) } __nextHasNoMarginBottom>
			<HorizonButtons>
				<Button
					key={ 'shadow-on' }
					variant={ 'secondary' }
					onClick={ () => {
						handleOnClick( true );
					} }
				>
					{ __( 'ON', 'ystandard-blocks' ) }
				</Button>
				<Button
					key={ 'shadow-off' }
					variant={ 'secondary' }
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
