import classnames from 'classnames';
/**
 * aktk dependencies.
 */
import {
	ToggleGroupControl,
	ToggleGroupControlOption,
} from '@aktk/block-components/wp-controls/toggle-group-control';

interface ToggleGroupProps {
	label?: string;
	onChange: ( value?: string | number ) => void;
	value: string | number;
	isBlock?: boolean;
	isDeselectable?: boolean;
	options: Array< {
		label: string;
		value: string | number;
	} >;
	className?: string;
}

import './style-editor.scss';

export function ToggleGroup( props: ToggleGroupProps ) {
	const {
		label,
		onChange,
		value,
		isBlock,
		isDeselectable,
		options,
		className,
	} = props;

	const controlClasses = classnames(
		className,
		'aktk-components__toggle-group'
	);

	return (
		<ToggleGroupControl
			label={ label }
			value={ value }
			onChange={ onChange }
			isBlock={ isBlock }
			isDeselectable={ isDeselectable }
			className={ controlClasses }
		>
			{ options.map( ( option ) => (
				<ToggleGroupControlOption
					key={ option.value }
					label={ option.label }
					value={ option.value }
				/>
			) ) }
		</ToggleGroupControl>
	);
}
