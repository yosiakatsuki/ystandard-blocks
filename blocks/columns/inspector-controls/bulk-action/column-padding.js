/**
 * WordPress.
 */
import { BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import HorizonButtons from '@ystd/components/horizon-buttons';
/**
 * Block.
 */
import { paddingTypes } from '../../item/config';

const ColumnPadding = ( props ) => {
	const { updatePadding } = props;
	const handleOnClick = ( value ) => {
		updatePadding( {
			paddingType: value,
		} );
	};
	return (
		<BaseControl
			id={ 'padding' }
			label={ __( '内側余白', 'ystandard-blocks' ) }
		>
			<HorizonButtons>
				{ paddingTypes.map( ( item ) => {
					return (
						<Button
							key={ item.value }
							isSecondary
							onClick={ () => {
								handleOnClick( item.value );
							} }
						>
							<span>{ item.label }</span>
						</Button>
					);
				} ) }
			</HorizonButtons>
		</BaseControl>
	);
};
export default ColumnPadding;
