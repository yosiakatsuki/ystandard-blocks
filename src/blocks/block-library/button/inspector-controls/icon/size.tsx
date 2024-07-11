/**
 * WordPress dependencies.
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import HorizonButtons from '@aktk/blocks/components/horizon-buttons';
/**
 * Plugin dependencies.
 */
import { ValueInput } from '@aktk/blocks/components/value-input';
import { ComponentLabel } from '@aktk/blocks/components/label';

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
					isSmall
				>
					{ value.label }
				</Button>
			);
		} );
	};

	return (
		<div>
			<ComponentLabel>
				{ __( '大きさ', 'ystandard-blocks' ) }
			</ComponentLabel>
			<HorizonButtons>{ IconSizeButton() }</HorizonButtons>
			<div className={ 'mt-2' }>
				<ValueInput
					value={ size }
					onChange={ handleOnChange }
					units={ [ { value: 'em', label: 'em' } ] }
				/>
			</div>
		</div>
	);
}
