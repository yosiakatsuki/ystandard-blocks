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

export const TYPES = [
	{
		label: __( '会話', 'ystandard-blocks' ),
		value: 'serif',
	},
	{
		label: __( '会話(枠線)', 'ystandard-blocks' ),
		value: 'serif-border',
	},
	{
		label: __( '考え中', 'ystandard-blocks' ),
		value: 'think',
	},
];

// @ts-ignore
export default function BalloonType( props ) {
	const { attributes, setAttributes } = props;
	const { balloonType } = attributes;

	const handleOnChange = ( value: string ) => {
		setAttributes( { balloonType: value } );
	};
	return (
		<BaseControl
			id={ 'balloon-types' }
			label={ __( '吹き出しタイプ', 'ystandard-blocks' ) }
		>
			<HorizonButtons>
				{ TYPES.map( ( type ) => {
					const slug = type.value;
					const label = type.label;
					const Button =
						slug === balloonType ? PrimaryButton : SecondaryButton;
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
