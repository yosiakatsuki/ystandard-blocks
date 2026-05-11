import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Aktk Dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';

import { getComponentConfig } from '@aktk/helper/config';

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
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</BaseControl>
	);
};

export default BorderStyle;
