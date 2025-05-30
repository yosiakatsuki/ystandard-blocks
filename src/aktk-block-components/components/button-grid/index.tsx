/**
 * Aktk dependencies.
 */
import Button from '@aktk/block-components/wp-controls/button';

type ButtonProps = {
	label: string;
	value: string;
};

interface ButtonGridProps {
	buttons: ButtonProps[];
	onChange: ( value: string ) => void;
	current?: string;
}

export function ButtonGrid( props: ButtonGridProps ) {
	const { buttons, current, onChange } = props;
	const handleOnClick = ( value: string ) => {
		onChange( value );
	};
	return (
		<div className="grid grid-cols-2 gap-2">
			{ buttons.map( ( button ) => {
				const isActive = button.value === current;
				return (
					<Button
						className={ 'justify-center text-center' }
						key={ button.value }
						onClick={ () => handleOnClick( button.value ) }
						variant={ isActive ? 'primary' : 'secondary' }
					>
						{ button.label }
					</Button>
				);
			} ) }
		</div>
	);
}
