import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import { Button } from '@wordpress/components';

type ButtonProps = {
	label: string;
	value: string;
};

interface ButtonGridProps {
	buttons: ButtonProps[];
	onChange: (value: string) => void;
	current?: string;
}

export function ButtonGrid(props: ButtonGridProps) {
	const { buttons, current, onChange } = props;
	const handleOnClick = (value: string) => {
		onChange(value);
	};
	return (
		<div className="grid grid-cols-2 gap-2">
			{buttons.map((button) => {
				const isActive = button.value === current;
				const className = classnames('justify-center text-black', {
					'bg-black': isActive,
					'text-white': isActive,
				});
				const styles = {
					boxShadow: 'inset 0 0 0 1px #ccc',
				};
				return (
					<Button
						key={button.value}
						className={className}
						onClick={() => handleOnClick(button.value)}
						variant={'secondary'}
						style={styles}
					>
						<span className="shadow-"></span>
						{button.label}
					</Button>
				);
			})}
		</div>
	);
}
