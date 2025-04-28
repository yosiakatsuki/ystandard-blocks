/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import Button from '@aktk/block-components/wp-controls/button';
import { HorizonButtons } from '@aktk/block-components/components/buttons';
import { UnitInput } from '@aktk/block-components/components/unit-input';

interface IconSizeProps {
	size: string;
	onChange: ( value: string | undefined ) => void;
}

const ICON_SIZE_LIST = {
	small: {
		label: __( '小', 'ystandard-blocks' ),
		value: '0.8em',
	},
	medium: {
		label: __( '中', 'ystandard-blocks' ),
		value: '1em',
	},
	large: {
		label: __( '大', 'ystandard-blocks' ),
		value: '1.2em',
	},
};

const UNIT_LIST = [
	{
		value: 'em',
		label: __( 'em', 'ystandard-blocks' ),
	},
];

export function IconSize( props: IconSizeProps ) {
	const { size, onChange } = props;

	const handleOnChange = ( value: string | undefined ) => {
		onChange( value );
	};

	const IconSizeButton = () => {
		return Object.entries( ICON_SIZE_LIST ).map( ( [ key, value ] ) => {
			const variant = size === value.value ? 'primary' : 'secondary';
			return (
				<Button
					key={ key }
					variant={ variant }
					onClick={ () => {
						handleOnChange( value.value );
					} }
					size={ 'small' }
				>
					{ value.label }
				</Button>
			);
		} );
	};

	return (
		<BaseControl
			id={ 'icon-size-left' }
			label={ __( '大きさ', 'ystandard-blocks' ) }
		>
			<HorizonButtons>{ IconSizeButton() }</HorizonButtons>
			<div className={ 'mt-2' }>
				<UnitInput
					value={ size }
					onChange={ handleOnChange }
					units={ UNIT_LIST }
					hasClearButton
				/>
			</div>
		</BaseControl>
	);
}
