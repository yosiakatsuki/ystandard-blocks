import {
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarItem,
	ToolbarButton,
	DropdownMenu,
} from '@wordpress/components';


const ContainerFluid = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const { containerFluid, align } = attributes;

	if ( 'full' !== align ) {
		return ( <></> );
	}

	return (
		<ToolbarGroup>

		</ToolbarGroup>
	);
};

export default ContainerFluid;
