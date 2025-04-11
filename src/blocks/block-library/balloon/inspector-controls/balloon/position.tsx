/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import {
	HorizonButtons,
	PrimaryButton,
	SecondaryButton,
} from '@aktk/block-components/components/buttons';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

const POSITIONS = [
	{
		label: __( '右', 'ystandard-blocks' ),
		value: 'right',
	},
	{
		label: __( '左', 'ystandard-blocks' ),
		value: 'left',
	},
];

// @ts-ignore
export default function BalloonPosition( props ) {
	const { attributes, setAttributes } = props;
	const { balloonPosition } = attributes;

	const handleOnChange = ( value: string ) => {
		setAttributes( { balloonPosition: value } );
	};

	return (
		<BaseControl
			id={ 'balloon-position' }
			label={ __( '吹き出しの向き', 'ystandard-blocks' ) }
		>
			<HorizonButtons>
				{ POSITIONS.map( ( position ) => {
					const slug = position.value;
					const label = position.label;
					const Button =
						slug === balloonPosition
							? PrimaryButton
							: SecondaryButton;
					return (
						<Button
							key={ slug }
							onClick={ () => {
								handleOnChange( slug );
							} }
						>
							{ label }
						</Button>
					);
				} ) }
			</HorizonButtons>
		</BaseControl>
	);
}
