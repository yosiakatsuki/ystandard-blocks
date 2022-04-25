/**
 * WordPress.
 */
import { PanelBody, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import HorizonButtons from '@ystd/components/horizon-buttons';
import { paddingTypes } from '../../config';

const PanelPadding = ( { attributes, setAttributes } ) => {
	const { paddingType } = attributes;
	const handleOnClick = ( value ) => {
		setAttributes( {
			paddingType: value,
		} );
	};
	return (
		<PanelBody title={ __( '余白設定', 'ystandard-blocks' ) }>
			<BaseControl
				id={ 'padding' }
				label={ __( '内側余白(padding)', 'ystandard-blocks' ) }
			>
				<HorizonButtons>
					{ paddingTypes.map( ( item ) => {
						return (
							<Button
								key={ item.value }
								isSecondary={ paddingType !== item.value }
								isPrimary={ paddingType === item.value }
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
		</PanelBody>
	);
};
export default PanelPadding;
