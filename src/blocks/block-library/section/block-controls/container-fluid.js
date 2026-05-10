import { Maximize2 } from 'react-feather';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ContainerFluid = ( props ) => {
	const { attributes, setAttributes } = props;

	const { containerFluid, align } = attributes;

	if ( 'full' !== align ) {
		return <></>;
	}

	return (
		<ToolbarGroup>
			<ToolbarButton
				icon={ <Maximize2 /> }
				label={ __( '画面幅まで広げる', 'ystandard-blocks' ) }
				onClick={ () => {
					setAttributes( {
						containerFluid: ! containerFluid,
					} );
				} }
				isPressed={ containerFluid }
			/>
		</ToolbarGroup>
	);
};

export default ContainerFluid;
