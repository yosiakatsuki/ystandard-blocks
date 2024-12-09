/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

/**
 * Aktk Dependencies
 */
import {
	HorizonButtons,
	PrimaryButton,
	SecondaryButton,
} from '@aktk/block-components/components/buttons';

const POSITIONS = [
	{
		label: __( '下', 'ystandard-blocks' ),
		value: 'bottom',
	},
	{
		label: __( '上', 'ystandard-blocks' ),
		value: 'top',
	},
];

// @ts-ignore
export function SubTextPosition( props ) {
	const { attributes, setAttributes } = props;
	const { subTextPosition } = attributes;
	return (
		<BaseControl
			id={ 'sub-text-position' }
			label={ __( 'サブテキストの位置', 'ystandard-blocks' ) }
		>
			<HorizonButtons>
				{ POSITIONS.map( ( { label, value } ) => {
					const handleOnChange = ( newValue: string ) => {
						setAttributes( {
							subTextPosition: newValue,
						} );
					};

					const Button =
						subTextPosition === value
							? PrimaryButton
							: SecondaryButton;
					return (
						<Button
							key={ value }
							onClick={ () => handleOnChange( value ) }
						>
							{ label }
						</Button>
					);
				} ) }
			</HorizonButtons>
		</BaseControl>
	);
}
