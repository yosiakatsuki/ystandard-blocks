/**
 * WordPress
 */
import { CustomSelectControl as WPCustomSelectControl } from '@wordpress/components';

const CustomSelectControl = ( {
	value,
	options,
	onChange,
	label = undefined,
	...props
} ) => {
	const handleOnChange = ( { selectedItem } ) => {
		onChange( selectedItem.key );
	};
	const currentSelection = options.find( ( option ) => {
		return option.key === value;
	} );
	return (
		<WPCustomSelectControl
			label={ label }
			options={ options }
			value={ currentSelection }
			onChange={ handleOnChange }
			{ ...props }
		/>
	);
};
export default CustomSelectControl;
