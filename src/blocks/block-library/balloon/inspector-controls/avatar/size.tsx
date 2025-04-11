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

const SIZE = [
	{
		label: __( '小', 'ystandard-blocks' ),
		value: 'small',
	},
	{
		label: __( '大', 'ystandard-blocks' ),
		value: 'large',
	},
];

// @ts-ignore
export default function AvatarSize( props ) {
	const { attributes, setAttributes } = props;
	const { avatarSize } = attributes;

	const handleOnChange = ( value: string ) => {
		setAttributes( { avatarSize: value } );
	};

	return (
		<BaseControl
			id={ 'avatar-size' }
			label={ __( 'アバターサイズ', 'ystandard-blocks' ) }
		>
			<HorizonButtons>
				{ SIZE.map( ( size ) => {
					const slug = size.value;
					const label = size.label;
					const Button =
						slug === avatarSize ? PrimaryButton : SecondaryButton;
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
