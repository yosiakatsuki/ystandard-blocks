import { BaseControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { getComponentConfig } from '@ystdb/helper/config';

const BorderStyle = ( props ) => {
	const { attributes, setAttributes } = props;

	const { borderStyle } = attributes;

	const borderStyles = getComponentConfig( 'borderStyles' );

	const handleOnChange = ( value ) => {
		setAttributes( {
			borderStyle: value,
		} );
	};

	return (
		<BaseControl>
			<SelectControl
				label={ __( '枠線スタイル', 'ystandard-blocks' ) }
				value={ borderStyle }
				options={ borderStyles }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
};

export default BorderStyle;
