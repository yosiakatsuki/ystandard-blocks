import classnames from 'classnames';
/**
 * Aktk dependencies.
 */
import Button from '@aktk/block-components/wp-controls/button';

export function HorizonButtons( {
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
} ) {
	const buttonClass = classnames(
		'aktk-components__horizon-buttons',
		className
	);
	return <div className={ buttonClass }>{ children }</div>;
}

interface HorizonButtonSelectProps {
	className?: string;
	onChange?: ( value: string ) => void;
	value?: string;
	options: { label: string; value: string }[];
	buttonSize?: 'small' | 'default' | 'compact';
}

export function HorizonButtonSelect( props: HorizonButtonSelectProps ) {
	const { className, onChange, value, options, buttonSize } = props;

	return (
		<HorizonButtons className={ className }>
			<>
				{ options?.map( ( option ) => (
					<Button
						key={ option.value }
						variant={
							option.value === value ? 'primary' : 'secondary'
						}
						size={ buttonSize }
						onClick={ () => onChange?.( option.value ) }
					>
						{ option.label }
					</Button>
				) ) }
			</>
		</HorizonButtons>
	);
}
